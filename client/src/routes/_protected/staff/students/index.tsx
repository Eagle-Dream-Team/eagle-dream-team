import {
  getStudents,
  createStudent,
  updateUser,
  type StudentFilters,
} from "@/services/staff/users";
import type { SignUpDto } from "@server/user/dto/signUp.dto";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Button, Input, Table } from "antd";
import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { Search, UserPlus } from "lucide-react";
import { UserModal } from "@/components/register-user";
import type { Student } from "@/models/user";
import { AppTable } from "@/components/common/app-table";

export const Route = createFileRoute("/_protected/staff/students/")({
  component: RouteComponent,
});

type FormValues = Omit<SignUpDto, "role">;

function RouteComponent() {
  const [open, setOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [search, setSearch] = useState("");
  const queryClient = useQueryClient();

  const [params, setParams] = useState<StudentFilters>({
    page: 1,
    limit: 10,
    search: undefined,
    is_allocated: undefined,
  });

  const { data: students, isLoading } = useQuery({
    queryKey: ["students", params],
    queryFn: () => getStudents(params),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (values: FormValues) => createStudent(values),
    onSuccess: () => {
      toast.success("Student registered successfully");
      queryClient.invalidateQueries({ queryKey: ["students"] });
      setOpen(false);
    },
    onError: (error: AxiosError) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  const { mutate: editMutate, isPending: isEditing } = useMutation({
    mutationFn: (values: FormValues) =>
      updateUser(editingStudent!.user_id, values),
    onSuccess: () => {
      toast.success("Student updated successfully");
      queryClient.invalidateQueries({ queryKey: ["students"] });
      setEditingStudent(null);
    },
    onError: (error: AxiosError) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  const columns = [
    {
      title: "Name",
      key: "name",
      render: (_: unknown, record: Student) =>
        `${record.first_name} ${record.last_name}`,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      key: "status",
      render: (_: unknown, record: Student) => {
        const isAllocated = record.student_allocations?.length > 0;
        return isAllocated ? (
          <span className="text-green-600 font-medium">Allocated</span>
        ) : (
          <span className="text-muted-foreground">Unallocated</span>
        );
      },
    },
    {
      title: "Tutor",
      key: "tutor",
      render: (_: unknown, record: Student) => {
        const allocation = record.student_allocations?.[0];
        if (!allocation)
          return <span className="text-muted-foreground">—</span>;
        return `${allocation.tutor.first_name} ${allocation.tutor.last_name}`;
      },
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
        <div className="flex items-center justify-between gap-2">
          <Button
            onClick={() =>
              setParams((prev) => ({
                ...prev,
                is_allocated: prev.is_allocated === false ? undefined : false,
                page: 1,
              }))
            }
            type={params.is_allocated === false ? "primary" : "default"}
          >
            {params.is_allocated === false ? "Unallocated" : "Allocated"}
          </Button>
          <Button
            type="primary"
            icon={<UserPlus className="size-4" />}
            onClick={() => {
              setEditingStudent(null);
              setOpen(true);
            }}
          >
            Add Student
          </Button>
        </div>
      </div>

      <AppTable
        data={students?.data ?? []}
        columns={columns}
        mobileColumns={columns}
        loading={isLoading}
        rowKey="user_id"
        pagination={{
          current: params.page,
          pageSize: params.limit,
          total: students?.meta.total,
          onChange: (page, pageSize) =>
            setParams((prev) => ({ ...prev, page, limit: pageSize })),
        }}
        onRow={(record) => ({
          onClick: () => setEditingStudent(record),
          className: "cursor-pointer",
        })}
      />

      <UserModal
        key={editingStudent?.user_id ?? "create"}
        open={open || !!editingStudent}
        onClose={() => {
          setOpen(false);
          setEditingStudent(null);
        }}
        role="student"
        mode={editingStudent ? "edit" : "create"}
        isPending={editingStudent ? isEditing : isPending}
        userId={editingStudent?.user_id}
        initialValues={
          editingStudent
            ? {
                firstName: editingStudent.first_name,
                lastName: editingStudent.last_name,
                email: editingStudent.email,
              }
            : undefined
        }
        onSubmit={(values) =>
          editingStudent ? editMutate(values) : mutate(values)
        }
      />
    </div>
  );
}
