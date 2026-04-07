import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  getTutorUnreadMessages,
  getTutorUpcomingMeetings,
  getTutorStudents,
} from "@/services/tutor/student";
import { Calendar, FileText, MessageSquare, Users } from "lucide-react";
// import { Table } from "antd";
import type { AppFile } from "@/models/file";
import { StatCard } from "@/components/common/stat-card";
import { getFiles } from "@/services/common/file";
import { AppTable } from "@/components/common/app-table";

export const Route = createFileRoute("/_protected/tutor/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: studentsData, isLoading: studentsLoading } = useQuery({
    queryKey: ["tutor-students", { page: 1, limit: 1, is_current: true }],
    queryFn: () => getTutorStudents({ page: 1, limit: 1, is_current: true }),
  });

  const { data: unreadData, isLoading: unreadLoading } = useQuery({
    queryKey: ["tutor-unread-messages"],
    queryFn: getTutorUnreadMessages,
  });

  const { data: meetingsData, isLoading: meetingsLoading } = useQuery({
    queryKey: ["tutor-upcoming-meetings"],
    queryFn: getTutorUpcomingMeetings,
  });

  const { data: filesData, isLoading: filesLoading } = useQuery({
    queryKey: ["tutor-files", { page: 1, limit: 10, filter: "shared_with_me" }],
    queryFn: () => getFiles({ page: 1, limit: 10, filter: "shared_with_me" }),
  });

  const columns = [
    {
      title: "File Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Uploaded By",
      key: "uploaded_by",
      render: (_: any, record: AppFile) =>
        `${record.uploader?.first_name ?? ""} ${record.uploader?.last_name ?? ""}`.trim() ||
        "—",
    },
    {
      title: "Date",
      dataIndex: "created_at",
      key: "created_at",
      render: (val: string) => new Date(val).toLocaleDateString(),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: AppFile) => (
        <a href={record.url} rel="noopener noreferrer" download>
          Download
        </a>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          href="students"
          label="Allocated Students"
          value={studentsData?.meta.total}
          icon={<Users size={18} />}
          loading={studentsLoading}
        />
        <StatCard
          href="messages"
          label="Unread Messages"
          value={unreadData?.data.count}
          icon={<MessageSquare size={18} />}
          loading={unreadLoading}
        />
        <StatCard
          href="meetings"
          label="Upcoming Meetings"
          value={meetingsData?.data.count}
          icon={<Calendar size={18} />}
          loading={meetingsLoading}
        />
        <StatCard
          href="files"
          label="Files Received"
          value={filesData?.meta.total}
          icon={<FileText size={18} />}
          loading={filesLoading}
        />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-neutral-600 mb-3">
          Recent Files from Students
        </h2>
        <AppTable<AppFile>
          columns={[...columns]}
          mobileColumns={[...columns]}
          data={filesData?.data ?? []}
          loading={filesLoading}
          rowKey={(r) =>
            r.file_id != null ? String(r.file_id) : `skeleton-${Math.random()}`
          }
          pagination={false}
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
}
