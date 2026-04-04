import type { Meeting } from "@/models/meeting";
import { cn } from "@/lib/utils";

interface Props {
  meetings?: Meeting[];
  onMeetingClick?: (meeting: Meeting) => void;
  currentDate: Date;
}

const HOURS = Array.from({ length: 24 }, (_, i) => i);
const HOUR_HEIGHT = 64;

function getMeetingsForDay(meetings: Meeting[], date: Date): Meeting[] {
  return meetings.filter((m) => {
    const d = new Date(m.start_time);
    return (
      d.getUTCFullYear() === date.getFullYear() &&
      d.getUTCMonth() === date.getMonth() &&
      d.getUTCDate() === date.getDate()
    );
  });
}

function getTopOffset(time: string): number {
  const d = new Date(time);
  return (d.getUTCHours() + d.getUTCMinutes() / 60) * HOUR_HEIGHT;
}

function getHeight(start: string, end: string): number {
  const diff = new Date(end).getTime() - new Date(start).getTime();
  return Math.max((diff / (1000 * 60 * 60)) * HOUR_HEIGHT, 24);
}

export function DayView({ meetings = [], onMeetingClick, currentDate }: Props) {
  const today = new Date();
  const dayMeetings = getMeetingsForDay(meetings, currentDate);

  const isToday =
    currentDate.getFullYear() === today.getFullYear() &&
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getDate() === today.getDate();

  return (
    <div className="h-full overflow-auto">
      {/* Sticky header */}
      <div className="sticky top-0 z-20 bg-white border-b flex">
        <div className="w-12 shrink-0" />
        <div className="flex-1 py-3 text-center border-l">
          <p className="text-xs text-neutral-400 uppercase tracking-wide">
            {currentDate.toLocaleDateString([], { weekday: "long" })}
          </p>
          <p
            className={cn(
              "text-sm font-medium mx-auto w-7 h-7 flex items-center justify-center rounded-full mt-0.5",
              isToday ? "bg-neutral-900 text-white" : "text-neutral-700",
            )}
          >
            {currentDate.getDate()}
          </p>
        </div>
      </div>

      {/* Time grid */}
      <div className="flex relative" style={{ height: 24 * HOUR_HEIGHT }}>
        {/* Sticky time gutter */}
        <div className="w-12 shrink-0 sticky left-0 z-10 bg-white border-r">
          {HOURS.map((h) => (
            <div
              key={h}
              className="absolute w-12 pr-2 flex justify-end"
              style={{ top: h * HOUR_HEIGHT - 8 }}
            >
              <span className="text-[10px] text-neutral-400">
                {h === 0 ? "" : `${String(h).padStart(2, "0")}:00`}
              </span>
            </div>
          ))}
        </div>

        {/* Hour lines */}
        <div className="absolute inset-0 left-12 pointer-events-none">
          {HOURS.map((h) => (
            <div
              key={h}
              className="absolute w-full border-t border-neutral-100"
              style={{ top: h * HOUR_HEIGHT }}
            />
          ))}
        </div>

        {/* Events column */}
        <div className="flex-1 relative border-l">
          {dayMeetings.length === 0 && (
            <p className="text-xs text-neutral-400 text-center mt-8">
              No meetings today
            </p>
          )}
          {dayMeetings.map((m) => (
            <button
              key={m.meeting_id}
              onClick={() => onMeetingClick?.(m)}
              className="absolute left-1 right-1 rounded bg-neutral-800 text-neutral-50 text-left px-2 py-1.5 hover:bg-neutral-700 transition-colors overflow-hidden"
              style={{
                top: getTopOffset(m.start_time),
                height: getHeight(m.start_time, m.end_time),
              }}
            >
              <p className="text-xs font-medium leading-tight truncate">
                {m.allocation.student?.first_name ??
                  m.allocation.tutor?.first_name}{" "}
                {m.allocation.student?.last_name ??
                  m.allocation.tutor?.last_name}
              </p>
              <p className="text-[10px] text-neutral-400 leading-tight mt-0.5">
                {new Date(m.start_time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                  timeZone: "UTC",
                })}{" "}
                —{" "}
                {new Date(m.end_time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                  timeZone: "UTC",
                })}
              </p>
              {m.notes && (
                <p className="text-[10px] text-neutral-300 leading-tight mt-0.5 truncate">
                  {m.notes}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
