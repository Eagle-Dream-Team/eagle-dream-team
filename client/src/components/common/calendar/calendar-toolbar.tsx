import { Button, Segmented } from "antd";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CalendarViewType = "month" | "week" | "day";

interface Props {
  currentDate: Date;
  view: CalendarViewType;
  onViewChange: (view: CalendarViewType) => void;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
}

function formatHeader(date: Date, view: CalendarViewType): string {
  if (view === "month") {
    return date.toLocaleDateString([], { month: "long", year: "numeric" });
  }
  if (view === "week") {
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay());
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return `${start.toLocaleDateString([], { month: "short", day: "numeric" })} – ${end.toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" })}`;
  }
  return date.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function CalendarToolbar({
  currentDate,
  view,
  onViewChange,
  onPrev,
  onNext,
  onToday,
}: Props) {
  return (
    <div className="flex items-center justify-between gap-2 py-3 flex-wrap">
      {/* Left: nav */}
      <div className="flex items-center gap-2">
        <Button size="small" onClick={onToday}>
          Today
        </Button>
        <Button
          size="small"
          icon={<ChevronLeft size={14} />}
          onClick={onPrev}
        />
        <Button
          size="small"
          icon={<ChevronRight size={14} />}
          onClick={onNext}
        />
        <span className="text-sm font-medium text-neutral-700 ml-1">
          {formatHeader(currentDate, view)}
        </span>
      </div>

      {/* Right: view switcher */}
      <Segmented
        size="small"
        value={view}
        onChange={(v) => onViewChange(v as CalendarViewType)}
        options={[
          { label: "Month", value: "month" },
          { label: "Week", value: "week" },
          { label: "Day", value: "day" },
        ]}
      />
    </div>
  );
}
