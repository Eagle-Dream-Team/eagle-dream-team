import { CalendarView } from "@/components/common/calendar/calendar-view";
import { MeetingModal } from "@/components/common/meeting-modal";
import type { Meeting } from "@/models/meeting";
import { getUser } from "@/services/auth";
import { getMeetings } from "@/services/tutor/meeting";
import { type TutorStudentFilters } from "@/services/tutor/student";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
export const Route = createFileRoute("/_protected/student/meetings/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const user = getUser(); // Ensure user is loaded before rendering

  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  );
  const lastDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  );

  //todo: use  calendar loading
  const { data, isLoading } = useQuery({
    queryKey: ["meetings", firstDay.toISOString(), lastDay.toISOString()],
    queryFn: () =>
      getMeetings({
        from: firstDay.toISOString(),
        to: lastDay.toISOString(),
        limit: 100,
      }),
  });

  const [params, setParams] = useState<TutorStudentFilters>({
    page: 1,
    limit: 10,
    search: undefined,
    is_current: true,
  });

  return (
    <>
      <div className="flex justify-end mb-4"></div>

      <CalendarView
        meetings={data?.data ?? []}
        onMeetingClick={(meeting) => {
          setSelectedMeeting(meeting);
          setModalOpen(true);
        }}
      />

      <MeetingModal
        open={modalOpen}
        meeting={selectedMeeting ?? undefined}
        onClose={() => {
          setModalOpen(false);
          setSelectedMeeting(null);
        }}
        allocations={[]}
        role={user?.role!}
      />
    </>
  );
}
