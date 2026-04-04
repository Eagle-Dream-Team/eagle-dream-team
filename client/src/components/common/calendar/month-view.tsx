import type { Meeting } from "@/models/meeting";
import { cn } from "@/lib/utils";

interface Props {
  meetings?: Meeting[];
  onMeetingClick?: (meeting: Meeting) => void;
  currentDate: Date;
}

function getMeetingsForDay(meetings: Meeting[], date: Date): Meeting[] {
  return meetings.filter((m) => {
    const d = new Date(m.start_time);
    return (
      d.getFullYear() === date.getFullYear() &&
      d.getMonth() === date.getMonth() &&
      d.getDate() === date.getDate()
    );
  });
}

function getCalendarDays(date: Date): Date[] {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const days: Date[] = [];

  // pad start
  for (let i = 0; i < firstDay.getDay(); i++) {
    days.push(new Date(year, month, 1 - (firstDay.getDay() - i)));
  }

  // current month days
  for (let i = 1; i <= lastDay.getDate(); i++) {
    days.push(new Date(year, month, i));
  }

  // pad end
  const remaining = 42 - days.length;
  for (let i = 1; i <= remaining; i++) {
    days.push(new Date(year, month + 1, i));
  }

  return days;
}

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function MonthView({
  meetings = [],
  onMeetingClick,
  currentDate,
}: Props) {
  const today = new Date();
  const days = getCalendarDays(currentDate);

  const isToday = (date: Date) =>
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  const isCurrentMonth = (date: Date) =>
    date.getMonth() === currentDate.getMonth();

  return (
    <div className="flex flex-col h-full">
      {/* Day labels */}
      <div className="grid grid-cols-7 border-b">
        {DAY_LABELS.map((d) => (
          <div
            key={d}
            className="py-2 text-center text-xs font-medium text-neutral-400 uppercase tracking-wide"
          >
            {/* Short on mobile */}
            <span className="hidden sm:inline">{d}</span>
            <span className="sm:hidden">{d[0]}</span>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7 flex-1 divide-x divide-y">
        {days.map((date, i) => {
          const dayMeetings = getMeetingsForDay(meetings, date);
          const inMonth = isCurrentMonth(date);
          const todayCell = isToday(date);

          return (
            <div
              key={i}
              className={cn(
                "min-h-16 sm:min-h-24 p-1 flex flex-col gap-1",
                !inMonth && "bg-neutral-50",
              )}
            >
              {/* Date number */}
              <div className="flex justify-end">
                <span
                  className={cn(
                    "text-xs font-medium w-6 h-6 flex items-center justify-center rounded-full",
                    todayCell
                      ? "bg-neutral-900 text-white"
                      : inMonth
                        ? "text-neutral-800"
                        : "text-neutral-300",
                  )}
                >
                  {date.getDate()}
                </span>
              </div>

              {/* Meeting chips */}
              <div className="flex flex-col gap-0.5 overflow-hidden">
                {dayMeetings.slice(0, 2).map((m) => (
                  <button
                    key={m.meeting_id}
                    onClick={() => onMeetingClick?.(m)}
                    className="w-full text-left text-[10px] sm:text-xs px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-50 truncate hover:bg-neutral-700 transition-colors"
                  >
                    {/* Show time on larger screens */}
                    <span className="hidden sm:inline">
                      {new Date(m.start_time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}
                    </span>
                    {m.allocation.student?.first_name ??
                      m.allocation.tutor?.first_name}
                  </button>
                ))}

                {/* Overflow indicator */}
                {dayMeetings.length > 2 && (
                  <span className="text-[10px] text-neutral-400 px-1">
                    +{dayMeetings.length - 2} more
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
