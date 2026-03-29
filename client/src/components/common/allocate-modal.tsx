// src/components/allocate-modal.tsx
import type { Tutor, Student } from "@/models/user";
import type { PaginationParams } from "@/models/common";
import { getTutors } from "@/services/staff/users";
import { useQuery } from "@tanstack/react-query";
import { Button, Input, Modal, Spin } from "antd";
import { useState } from "react";
import { Search } from "lucide-react";

interface AllocateModalProps {
  open: boolean;
  onClose: () => void;
  student: Student | null;
  onSubmit: (tutor_id: string) => void;
  isPending?: boolean;
}

export function AllocateModal({
  open,
  onClose,
  student,
  onSubmit,
  isPending = false,
}: AllocateModalProps) {
  const [search, setSearch] = useState("");
  const [selectedTutorId, setSelectedTutorId] = useState<string | null>(null);

  const currentTutorId = student?.student_allocations?.[0]?.tutor?.user_id;
  const isReallocate = !!currentTutorId;

  const { data, isLoading } = useQuery({
    queryKey: ["tutors", { search }],
    queryFn: () => getTutors({ search }),
    enabled: open,
  });

  const handleSubmit = () => {
    if (selectedTutorId) onSubmit(selectedTutorId);
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title={isReallocate ? "Reallocate Student" : "Allocate Student"}
      destroyOnHidden
      afterClose={() => {
        setSearch("");
        setSelectedTutorId(null);
      }}
    >
      {student && (
        <p className="text-sm text-muted-foreground mb-4">
          {isReallocate ? "Reassigning" : "Assigning"}{" "}
          <span className="font-medium text-foreground">
            {student.first_name} {student.last_name}
          </span>{" "}
          {isReallocate && (
            <>
              from{" "}
              <span className="font-medium text-foreground">
                {student.student_allocations[0].tutor.first_name}{" "}
                {student.student_allocations[0].tutor.last_name}
              </span>{" "}
            </>
          )}
          to a new tutor.
        </p>
      )}

      <Input
        placeholder="Search tutors..."
        prefix={<Search className="size-4 text-muted-foreground" />}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-3"
      />

      <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
        {isLoading ? (
          <div className="flex justify-center py-6">
            <Spin />
          </div>
        ) : (
          data?.data.map((tutor) => {
            const isSelected = selectedTutorId === tutor.user_id;
            const isCurrent = tutor.user_id === currentTutorId;
            return (
              <div
                key={tutor.user_id}
                onClick={() => !isCurrent && setSelectedTutorId(tutor.user_id)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-colors
                  ${isCurrent ? "opacity-50 cursor-not-allowed bg-muted/30" : "cursor-pointer hover:bg-muted/50"}
                  ${isSelected ? "border-primary bg-primary/10" : "border-border"}
                `}
              >
                <div>
                  <p className="text-sm font-medium">
                    {tutor.first_name} {tutor.last_name}
                  </p>
                  <p className="text-xs text-muted-foreground">{tutor.email}</p>
                </div>
                <div className="text-xs text-muted-foreground">
                  {tutor.tutor_allocations?.length ?? 0} students
                  {isCurrent && (
                    <span className="ml-2 text-primary font-medium">
                      Current
                    </span>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <Button onClick={onClose} disabled={isPending}>
          Cancel
        </Button>
        <Button
          type="primary"
          onClick={handleSubmit}
          loading={isPending}
          disabled={!selectedTutorId}
        >
          {isReallocate ? "Reallocate" : "Allocate"}
        </Button>
      </div>
    </Modal>
  );
}
