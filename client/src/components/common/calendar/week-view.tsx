import type { Meeting } from "@/models/meeting";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface Props {
  meetings?: Meeting[];
  onMeetingClick?: (meeting: Meeting) => void;
  currentDate: Date;
}

const HOURS = Array.from({ length: 24 }, (_, i) => i);
const HOUR_HEIGHT = 64;

function getWeekDays(date: Date): Date[] {
  const start = new Date(date);
  start.setDate(date.getDate() - date.getDay());
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d;
  });
}

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

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function WeekView({
  meetings = [],
  onMeetingClick,
  currentDate,
}: Props) {
  const today = new Date();
  const days = getWeekDays(currentDate);

  const isToday = (date: Date) =>
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  const gutterRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Top row: fixed gutter + scrollable day headers */}

      <div className="flex shrink-0 border-b">
        {/* Fixed gutter corner */}
        <div className="w-12 shrink-0 border-r" />

        {/* Day headers scroll horizontally — no scrollbar shown */}
        <div
          className="flex-1 overflow-x-auto scrollbar-none"
          id="week-header-scroll"
        >
          <div className="flex min-w-[560px]">
            {days.map((day, i) => (
              <div
                key={i}
                className="flex-1 py-2 text-center border-l first:border-l-0"
              >
                <p className="text-xs text-neutral-400 uppercase tracking-wide">
                  {DAY_LABELS[i]}
                </p>
                <p
                  className={cn(
                    "text-sm font-medium mx-auto w-7 h-7 flex items-center justify-center rounded-full mt-0.5",
                    isToday(day)
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-700",
                  )}
                >
                  {day.getDate()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body: fixed gutter + scrollable grid (both axes) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Fixed time gutter — scrolls vertically with grid */}
        <div className="w-12 shrink-0 overflow-hidden border-r">
          <div
            className="relative"
            style={{ height: 24 * HOUR_HEIGHT }}
            id="week-gutter"
          >
            {HOURS.map((h) => (
              <div
                key={h}
                className="absolute w-full pr-2 flex justify-end"
                style={{ top: h * HOUR_HEIGHT - 8 }}
              >
                <span className="text-[10px] text-neutral-400">
                  {h === 0 ? "" : `${String(h).padStart(2, "0")}:00`}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid — scrolls both vertically and horizontally */}
        <div
          className="flex-1 overflow-auto"
          onScroll={(e) => {
            // Sync horizontal scroll to header
            const header = document.getElementById("week-header-scroll");
            const gutter = document.getElementById("week-gutter-wrapper");
            if (header) header.scrollLeft = e.currentTarget.scrollLeft;
          }}
        >
          <div
            className="relative min-w-[560px]"
            style={{ height: 24 * HOUR_HEIGHT }}
          >
            {/* Hour lines */}
            <div className="absolute inset-0 pointer-events-none">
              {HOURS.map((h) => (
                <div
                  key={h}
                  className="absolute w-full border-t border-neutral-100"
                  style={{ top: h * HOUR_HEIGHT }}
                />
              ))}
            </div>

            {/* Day columns */}
            <div className="flex h-full">
              {days.map((day, i) => {
                const dayMeetings = getMeetingsForDay(meetings, day);
                return (
                  <div
                    key={i}
                    className="flex-1 relative border-l first:border-l-0"
                  >
                    {dayMeetings.map((m) => (
                      <button
                        key={m.meeting_id}
                        onClick={() => onMeetingClick?.(m)}
                        className="absolute left-0.5 right-0.5 rounded bg-neutral-800 text-neutral-50 text-left px-1.5 py-1 hover:bg-neutral-700 transition-colors overflow-hidden"
                        style={{
                          top: getTopOffset(m.start_time),
                          height: getHeight(m.start_time, m.end_time),
                        }}
                      >
                        <p className="text-[10px] font-medium leading-tight truncate">
                          {m.allocation.student?.first_name ??
                            m.allocation.tutor?.first_name}
                        </p>
                        <p className="text-[10px] text-neutral-400 leading-tight">
                          {new Date(m.start_time).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                            timeZone: "UTC",
                          })}
                        </p>
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
