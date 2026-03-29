import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Input, Button } from "antd";
import { useState } from "react";
import { Search } from "lucide-react";
import { AppTable } from "@/components/common/app-table";
import type { UserAllocation } from "@/models/user";
import {
  getTutorStudents,
  type TutorStudentFilters,
} from "@/services/tutor/student";

export const Route = createFileRoute("/_protected/tutor/students/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [params, setParams] = useState<TutorStudentFilters>({
    page: 1,
    limit: 10,
    search: undefined,
    is_current: true,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["tutor-students", params],
    queryFn: () => getTutorStudents(params),
  });

  const columns = [
    {
      title: "Name",
      key: "name",
      render: (_: unknown, record: UserAllocation) =>
        `${record.student?.first_name} ${record.student?.last_name}`,
    },
    {
      title: "Email",
      key: "email",
      render: (_: unknown, record: UserAllocation) => record.student?.email,
    },
    {
      title: "Status",
      key: "status",
      render: (_: unknown, record: UserAllocation) =>
        record.is_current ? (
          <span className="text-green-600 font-medium">Current</span>
        ) : (
          <span className="text-muted-foreground">Past</span>
        ),
    },
    {
      title: "Allocated On",
      key: "allocated_at",
      render: (_: unknown, record: UserAllocation) =>
        new Date(record.allocated_at).toLocaleDateString(),
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <Input
          placeholder="Search students..."
          prefix={<Search className="size-4 text-muted-foreground" />}
          value={params.search ?? ""}
          onChange={(e) =>
            setParams((prev) => ({ ...prev, search: e.target.value, page: 1 }))
          }
        />
        <div className="flex items-center gap-2 md:ml-auto">
          <Button
            type={params.is_current === true ? "primary" : "default"}
            onClick={() =>
              setParams((prev) => ({
                ...prev,
                is_current: prev.is_current === true ? undefined : true,
                page: 1,
              }))
            }
          >
            {params.is_current === true ? " Current Only" : "All Students"}
          </Button>
        </div>
      </div>

      <AppTable
        data={data?.data ?? []}
        columns={columns}
        mobileColumns={columns}
        loading={isLoading}
        rowKey="allocation_id"
        pagination={{
          current: params.page,
          pageSize: params.limit,
          total: data?.meta.total,
          onChange: (page, pageSize) =>
            setParams((prev) => ({ ...prev, page, limit: pageSize })),
        }}
      />
    </div>
  );
}
