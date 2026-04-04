import { useState } from "react";
import type { Meeting } from "@/models/meeting";
import { MonthView } from "./month-view";
import { CalendarToolbar, type CalendarViewType } from "./calendar-toolbar";
import { WeekView } from "./week-view";
import { DayView } from "./day-view";

interface Props {
  meetings?: Meeting[];
  onMeetingClick?: (meeting: Meeting) => void;
}

export function CalendarView({ meetings = [], onMeetingClick }: Props) {
  const [view, setView] = useState<CalendarViewType>("month");
  const [currentDate, setCurrentDate] = useState(new Date());

  const navigate = (direction: "prev" | "next") => {
    const d = new Date(currentDate);

    if (view === "month") {
      d.setMonth(d.getMonth() + (direction === "next" ? 1 : -1));
    } else if (view === "week") {
      d.setDate(d.getDate() + (direction === "next" ? 7 : -7));
    } else {
      d.setDate(d.getDate() + (direction === "next" ? 1 : -1));
    }

    setCurrentDate(d);
  };

  return (
    <div className="flex flex-col h-full">
      <CalendarToolbar
        currentDate={currentDate}
        view={view}
        onViewChange={setView}
        onPrev={() => navigate("prev")}
        onNext={() => navigate("next")}
        onToday={() => setCurrentDate(new Date())}
      />

      <div className="flex-1 overflow-hidden">
        {view === "month" && (
          <MonthView
            currentDate={currentDate}
            meetings={meetings}
            onMeetingClick={onMeetingClick}
          />
        )}
        {view === "week" && (
          <WeekView
            currentDate={currentDate}
            meetings={meetings}
            onMeetingClick={onMeetingClick}
          />
        )}
        {view === "day" && (
          <DayView
            currentDate={currentDate}
            meetings={meetings}
            onMeetingClick={onMeetingClick}
          />
        )}
      </div>
    </div>
  );
}
