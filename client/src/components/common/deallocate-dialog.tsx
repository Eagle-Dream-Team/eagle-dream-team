// src/components/deallocate-dialog.tsx
import type { Student } from "@/models/user";
import { Button, Modal } from "antd";

interface DeallocateDialogProps {
  open: boolean;
  onClose: () => void;
  student: Student | null;
  onConfirm: () => void;
  isPending?: boolean;
}

export function DeallocateDialog({
  open,
  onClose,
  student,
  onConfirm,
  isPending = false,
}: DeallocateDialogProps) {
  const tutor = student?.student_allocations?.[0]?.tutor;

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title="Remove Tutor"
      destroyOnHidden
    >
      <p className="text-sm text-muted-foreground mb-6">
        Are you sure you want to remove{" "}
        <span className="font-medium text-foreground">
          {tutor?.first_name} {tutor?.last_name}
        </span>{" "}
        from{" "}
        <span className="font-medium text-foreground">
          {student?.first_name} {student?.last_name}
        </span>
        ? This action can be undone by reallocating the student.
      </p>

      <div className="flex justify-end gap-2">
        <Button onClick={onClose} disabled={isPending}>
          Cancel
        </Button>
        <Button danger type="primary" onClick={onConfirm} loading={isPending}>
          Remove Tutor
        </Button>
      </div>
    </Modal>
  );
}
