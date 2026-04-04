import type {
  Meeting,
  CreateMeetingPayload,
  UpdateMeetingPayload,
  MeetingType,
} from "@/models/meeting";
import type { UserAllocation } from "@/models/user";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Input,
  Select,
  DatePicker,
  TimePicker,
  Typography,
} from "antd";
import { createMeeting, updateMeeting } from "@/services/tutor/meeting";
import dayjs from "dayjs";

const { TextArea } = Input;
const { Text } = Typography;

interface Props {
  meeting?: Meeting;
  allocations: UserAllocation[];
  onSuccess: () => void;
  onCancel: () => void;
  role: "tutor" | "student" | "staff";
}

export function MeetingForm({
  meeting,
  allocations,
  onSuccess,
  onCancel,
  role,
}: Props) {
  const queryClient = useQueryClient();
  const isEdit = !!meeting;
  const [readonly, setReadonly] = useState(isEdit);

  const [form, setForm] = useState({
    allocation_id: meeting?.allocation_id?.toString() ?? "",
    meeting_type: (meeting?.meeting_type ?? "virtual") as MeetingType,
    scheduled_at: meeting?.scheduled_at?.slice(0, 10) ?? "",
    start_time: meeting?.start_time?.slice(11, 16) ?? "",
    end_time: meeting?.end_time?.slice(11, 16) ?? "",
    location: meeting?.location ?? "",
    link: meeting?.link ?? "",
    notes: meeting?.notes ?? "",
  });

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const buildDatetime = (date: string, time: string) =>
    new Date(`${date}T${time}:00`).toISOString();

  const { mutate, isPending } = useMutation({
    mutationFn: () => {
      if (isEdit) {
        const payload: UpdateMeetingPayload = {
          meeting_type: form.meeting_type,
          scheduled_at: new Date(form.scheduled_at).toISOString(),
          start_time: buildDatetime(form.scheduled_at, form.start_time),
          end_time: buildDatetime(form.scheduled_at, form.end_time),
          location: form.location || undefined,
          link: form.link || undefined,
          notes: form.notes || undefined,
        };
        return updateMeeting(meeting!.meeting_id, payload);
      }

      const payload: CreateMeetingPayload = {
        allocation_id: Number(form.allocation_id),
        meeting_type: form.meeting_type,
        scheduled_at: new Date(form.scheduled_at).toISOString(),
        start_time: buildDatetime(form.scheduled_at, form.start_time),
        end_time: buildDatetime(form.scheduled_at, form.end_time),
        location: form.location || undefined,
        link: form.link || undefined,
        notes: form.notes || undefined,
      };
      return createMeeting(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["meetings"] });
      onSuccess();
    },
  });

  return (
    <div className="flex flex-col gap-4">
      {/* Student picker — create only */}
      {!isEdit && (
        <div className="flex flex-col gap-1.5">
          <Text className="text-xs text-neutral-500">Student</Text>
          <Select
            disabled={readonly}
            value={form.allocation_id || undefined}
            onChange={(v) => set("allocation_id", v)}
            placeholder="Select a student"
            className="w-full"
            options={allocations.map((a) => ({
              value: a.allocation_id.toString(),
              label: `${a.student?.first_name} ${a.student?.last_name}`,
            }))}
          />
        </div>
      )}

      {/* Meeting type */}
      <div className="flex flex-col gap-1.5">
        <Text className="text-xs text-neutral-500">Meeting Type</Text>
        <Select
          disabled={readonly}
          value={form.meeting_type}
          onChange={(v) => set("meeting_type", v)}
          className="w-full"
          options={[
            { value: "virtual", label: "Virtual" },
            { value: "in_person", label: "In Person" },
          ]}
        />
      </div>

      {/* Date */}
      <div className="flex flex-col gap-1.5">
        <Text className="text-xs text-neutral-500">Date</Text>
        <DatePicker
          disabled={readonly}
          value={form.scheduled_at ? dayjs(form.scheduled_at) : null}
          onChange={(_, dateStr) => set("scheduled_at", dateStr as string)}
          className="w-full"
        />
      </div>

      {/* Start / End time */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <Text className="text-xs text-neutral-500">Start Time</Text>
          <TimePicker
            disabled={readonly}
            value={form.start_time ? dayjs(form.start_time, "HH:mm") : null}
            onChange={(_: any, timeStr: string) =>
              set("start_time", timeStr as string)
            }
            format="HH:mm"
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Text className="text-xs text-neutral-500">End Time</Text>
          <TimePicker
            disabled={readonly}
            value={form.end_time ? dayjs(form.end_time, "HH:mm") : null}
            onChange={(_: any, timeStr: string) =>
              set("end_time", timeStr as string)
            }
            format="HH:mm"
            className="w-full"
          />
        </div>
      </div>

      {/* Location or Link */}
      {form.meeting_type === "virtual" ? (
        <div className="flex flex-col gap-1.5">
          <Text className="text-xs text-neutral-500">Meeting Link</Text>
          <Input
            disabled={readonly}
            value={form.link}
            onChange={(e) => set("link", e.target.value)}
            placeholder="https://meet.google.com/..."
          />
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          <Text className="text-xs text-neutral-500">Location</Text>
          <Input
            disabled={readonly}
            value={form.location}
            onChange={(e) => set("location", e.target.value)}
            placeholder="Room 101, Main Building"
          />
        </div>
      )}

      {/* Notes */}
      <div className="flex flex-col gap-1.5">
        <Text className="text-xs text-neutral-500">Notes</Text>
        <TextArea
          disabled={readonly}
          value={form.notes}
          onChange={(e) => set("notes", e.target.value)}
          placeholder="Optional notes..."
          rows={3}
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 pt-2">
        {readonly ? (
          <>
            {role === "tutor" && (
              <Button onClick={() => setReadonly(false)}>Edit</Button>
            )}
            <Button onClick={onCancel}>Close</Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => (isEdit ? setReadonly(true) : onCancel())}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button type="primary" onClick={() => mutate()} loading={isPending}>
              {isEdit ? "Save Changes" : "Create Meeting"}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
