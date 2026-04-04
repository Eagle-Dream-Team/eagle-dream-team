import type { Meeting } from "@/models/meeting";
import type { UserAllocation } from "@/models/user";
import { Modal } from "antd";
import { MeetingForm } from "./meeting-form";

interface Props {
  meeting?: Meeting;
  open: boolean;
  onClose: () => void;
  allocations: UserAllocation[];
  role: "tutor" | "student" | "staff";
}

export function MeetingModal({
  meeting,
  open,
  onClose,
  allocations,
  role,
}: Props) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      title={meeting ? "Meeting Details" : "New Meeting"}
      footer={null}
      destroyOnHidden
    >
      <MeetingForm
        meeting={meeting}
        allocations={allocations}
        onSuccess={onClose}
        onCancel={onClose}
        role={role}
      />
    </Modal>
  );
}
