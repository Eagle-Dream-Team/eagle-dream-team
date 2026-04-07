import { createFileRoute } from "@tanstack/react-router";
import {
  getMyTutor,
  getStudentUnreadMessages,
  getStudentUpcomingMeetings,
} from "@/services/student";
import { getFiles } from "@/services/common/file";
import { useQuery } from "@tanstack/react-query";
import { Mail, User, MessageSquare, Calendar, FileText } from "lucide-react";
import { AppTable } from "@/components/common/app-table";
import type { AppFile } from "@/models/file";
// import type { Meeting } from "@/models/meeting";
import { getMeetings } from "@/services/tutor/meeting";
import { StatCard } from "@/components/common/stat-card";

export const Route = createFileRoute("/_protected/student/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: allocation, isLoading: tutorLoading } = useQuery({
    queryKey: ["my-tutor"],
    queryFn: getMyTutor,
  });

  const { data: unreadData, isLoading: unreadLoading } = useQuery({
    queryKey: ["student-unread-messages"],
    queryFn: getStudentUnreadMessages,
  });

  const { data: meetingsCountData, isLoading: meetingsCountLoading } = useQuery(
    {
      queryKey: ["student-upcoming-meetings-count"],
      queryFn: getStudentUpcomingMeetings,
    },
  );

  const { data: filesData, isLoading: filesLoading } = useQuery({
    queryKey: [
      "student-files",
      { page: 1, limit: 10, filter: "shared_with_me" },
    ],
    queryFn: () => getFiles({ page: 1, limit: 10, filter: "shared_with_me" }),
  });

  const { data: meetingsData, isLoading: meetingsLoading } = useQuery({
    queryKey: ["student-upcoming-meetings"],
    queryFn: () => {
      const from = new Date();
      from.setHours(0, 0, 0, 0);
      return getMeetings({ limit: 10, from: from.toISOString() });
    },
  });

  const tutor = allocation?.tutor;

  const fileColumns = [
    { title: "File Name", dataIndex: "title", key: "title" },
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

  // const meetingColumns = [
  //   {
  //     title: "Title",
  //     dataIndex: "title",
  //     key: "title",
  //   },
  //   {
  //     title: "Date",
  //     dataIndex: "scheduled_at",
  //     key: "scheduled_at",
  //     render: (val: string) => new Date(val).toLocaleString(),
  //   },
  //   {
  //     title: "Status",
  //     dataIndex: "status",
  //     key: "status",
  //   },
  // ];

  return (
    <div className="flex flex-col gap-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

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
          value={meetingsCountData?.data.count}
          icon={<Calendar size={18} />}
          loading={meetingsCountLoading}
        />
        <StatCard
          href="files"
          label="Files Received"
          value={filesData?.meta.total}
          icon={<FileText size={18} />}
          loading={filesLoading}
        />
      </div>

      {/* Tutor Card */}
      {!tutorLoading && tutor && (
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold text-neutral-600">My Tutor</h2>
          <div className="border rounded-xl p-6 shadow-sm bg-white flex flex-col gap-3 max-w-md">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="size-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-base">
                  {tutor.first_name} {tutor.last_name}
                </p>
                <p className="text-sm text-muted-foreground capitalize">
                  {tutor.role}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="size-4" />
              <span>{tutor.email}</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Allocated on{" "}
              {allocation.allocated_at
                ? new Date(allocation.allocated_at).toLocaleDateString()
                : "—"}
            </div>
          </div>
        </div>
      )}

      {/* Upcoming Meetings */}
      {/* Upcoming Meetings */}
      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold text-neutral-600">
          Upcoming Meetings
        </h2>
        {meetingsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="border rounded-xl p-4 bg-white animate-pulse h-20"
              />
            ))}
          </div>
        ) : meetingsData?.data.length === 0 ? (
          <p className="text-sm text-muted-foreground">No upcoming meetings.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {meetingsData?.data.map((meeting) => (
              <div
                key={meeting.meeting_id}
                className="border rounded-xl p-4 bg-white flex flex-col gap-1 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium capitalize">
                    {meeting.meeting_type.replace(/_/g, " ")}
                  </span>
                  <span className="text-xs text-muted-foreground bg-neutral-100 px-2 py-0.5 rounded-full capitalize">
                    {meeting.meeting_type}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  <span>{new Date(meeting.scheduled_at).toLocaleString()}</span>
                </div>
                {meeting.location && (
                  <p className="text-xs text-muted-foreground">
                    📍 {meeting.location}
                  </p>
                )}
                {meeting.link && (
                  <a
                    href={meeting.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 underline"
                  >
                    Join Link
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Files Receipt */}
      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold text-neutral-600">
          Files Receipt
        </h2>
        <AppTable<AppFile>
          columns={fileColumns}
          mobileColumns={fileColumns}
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
