import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  getReportStats,
  getUnallocatedStudents,
  getInactiveStudents,
} from "@/services/staff/reports";
import type { UnallocatedStudent, InactiveStudent } from "@/models/user";
import { AppTable } from "@/components/common/app-table";
import type { ColumnType } from "antd/es/table";
import { Tag } from "antd";
import { MessageSquare, Users, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/common/stat-card";

export const Route = createFileRoute("/_protected/staff/")({
  component: RouteComponent,
});

const unallocatedColumns: ColumnType<UnallocatedStudent>[] = [
  {
    title: "Name",
    key: "name",
    render: (_: any, r: UnallocatedStudent) => `${r.first_name} ${r.last_name}`,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Registered",
    dataIndex: "created_at",
    key: "created_at",
    render: (date: string) =>
      new Date(date).toLocaleDateString([], {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
  },
];

const inactiveColumns: ColumnType<InactiveStudent>[] = [
  {
    title: "Name",
    key: "name",
    render: (_: any, r: InactiveStudent) => `${r.first_name} ${r.last_name}`,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Tutor",
    key: "tutor",
    render: (_: any, r: InactiveStudent) =>
      r.tutor ? (
        `${r.tutor.first_name} ${r.tutor.last_name}`
      ) : (
        <Tag color="red">Unallocated</Tag>
      ),
  },
  {
    title: "Last 7 Days",
    dataIndex: "interactions_last_7_days",
    key: "7d",
    render: (count: number) => (
      <Tag color={count === 0 ? "red" : "orange"}>{count} interactions</Tag>
    ),
  },
  {
    title: "Last 28 Days",
    dataIndex: "interactions_last_28_days",
    key: "28d",
    render: (count: number) => (
      <Tag color={count === 0 ? "red" : "orange"}>{count} interactions</Tag>
    ),
  },
];

function RouteComponent() {
  const { data: stats, isLoading: isLoadingStats } = useQuery({
    queryKey: ["report-stats"],
    queryFn: getReportStats,
  });

  const { data: unallocated, isLoading: isLoadingUnallocated } = useQuery({
    queryKey: ["report-unallocated"],
    queryFn: getUnallocatedStudents,
  });

  const { data: inactive, isLoading: isLoadingInactive } = useQuery({
    queryKey: ["report-inactive"],
    queryFn: getInactiveStudents,
  });

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-base font-semibold text-neutral-800">Reports</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          label="Messages (Last 7 Days)"
          value={stats?.messages_last_7_days}
          icon={<MessageSquare size={18} className="text-neutral-500" />}
          loading={isLoadingStats}
        />
        <StatCard
          label="Avg Messages per Tutor"
          value={stats?.average_messages_per_tutor}
          icon={<TrendingUp size={18} className="text-neutral-500" />}
          loading={isLoadingStats}
        />
        <StatCard
          label="Total Tutors"
          value={stats?.total_tutors}
          icon={<Users size={18} className="text-neutral-500" />}
          loading={isLoadingStats}
        />
      </div>

      {/* Unallocated Students */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-neutral-700">
            Students Without a Tutor
          </h2>
          {unallocated && (
            <Tag color={unallocated.total === 0 ? "green" : "red"}>
              {unallocated.total} students
            </Tag>
          )}
        </div>
        <AppTable<UnallocatedStudent>
          columns={unallocatedColumns}
          data={unallocated?.data ?? []}
          loading={isLoadingUnallocated}
          rowKey={(r) => r.user_id}
          pagination={false}
        />
      </div>

      {/* Inactive Students */}
      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold text-neutral-700">
          Students with No Interaction
        </h2>
        <AppTable<InactiveStudent>
          columns={inactiveColumns}
          data={inactive?.data ?? []}
          loading={isLoadingInactive}
          rowKey={(r) => r.user_id}
          pagination={false}
        />
      </div>
    </div>
  );
}
