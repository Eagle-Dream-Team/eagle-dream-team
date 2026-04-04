import { MonthView } from "@/components/common/calendar/month-view";
import { MeetingModal } from "@/components/common/meeting-modal";
import { Button } from "@/components/ui/button";
import type { Meeting } from "@/models/meeting";
import { getUser } from "@/services/auth";
import { getMeetings } from "@/services/tutor/meeting";
import {
  getTutorStudents,
  type TutorStudentFilters,
} from "@/services/tutor/student";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_protected/tutor/meetings/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const user = getUser(); // Ensure user is loaded before rendering

  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

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

  const { data: studentsData, isLoading: isStudentsLoading } = useQuery({
    queryKey: ["tutor-students", params],
    queryFn: () => getTutorStudents(params),
  });

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button
          icon={<Plus size={14} />}
          onClick={() => {
            setSelectedMeeting(null);
            setIsCreating(true);
            setModalOpen(true);
          }}
        >
          Schedule Meeting
        </Button>
      </div>
      <MonthView
        currentDate={currentDate}
        meetings={data?.data ?? []}
        // onMeetingClick={(meeting) => console.log(meeting)}
        onMeetingClick={(meeting) => {
          setSelectedMeeting(meeting);
          setModalOpen(true);
        }}
      />

      {/* <MeetingModal
        open={modalOpen}
        meeting={selectedMeeting ?? undefined}
        onClose={() => {
          setModalOpen(false);
          setSelectedMeeting(null);
        }}
        allocations={[]}
        role={user?.role!}
      /> */}

      <MeetingModal
        open={modalOpen}
        meeting={isCreating ? undefined : (selectedMeeting ?? undefined)}
        onClose={() => {
          setModalOpen(false);
          setSelectedMeeting(null);
          setIsCreating(false);
        }}
        allocations={studentsData?.data ?? []}
        role={user?.role!}
      />
    </>
  );
}
