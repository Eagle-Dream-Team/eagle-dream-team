import type { Student, Tutor } from "@/models/user";
import { getStudents } from "@/services/staff/users";
import { getTutors } from "@/services/staff/users";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Input, Modal, Spin } from "antd";
import { useState } from "react";
import { Search, Check } from "lucide-react";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { allocateStudents } from "@/services/staff/allocation";

interface BulkAllocateModalProps {
  open: boolean;
  onClose: () => void;
  preSelectedStudents?: Student[];
  preSelectedTutor?: Tutor;
  onSuccess?: () => void;
}

export function BulkAllocateModal({
  open,
  onClose,
  preSelectedStudents = [],
  preSelectedTutor,
  onSuccess,
}: BulkAllocateModalProps) {
  const queryClient = useQueryClient();
  const [studentSearch, setStudentSearch] = useState("");
  const [tutorSearch, setTutorSearch] = useState("");
  const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>(
    preSelectedStudents.map((s) => s.user_id),
  );
  const [selectedTutorId, setSelectedTutorId] = useState<string | null>(
    preSelectedTutor?.user_id ?? null,
  );

  const { data: studentsData, isLoading: studentsLoading } = useQuery({
    queryKey: ["students-unallocated", studentSearch],
    queryFn: () =>
      getStudents({ search: studentSearch, is_allocated: false, limit: 50 }),
    enabled: open,
  });

  const { data: tutorsData, isLoading: tutorsLoading } = useQuery({
    queryKey: ["tutors", { search: tutorSearch }],
    queryFn: () => getTutors({ search: tutorSearch, limit: 50 }),
    enabled: open,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () => allocateStudents(selectedTutorId!, selectedStudentIds),
    onSuccess: (result) => {
      const allocatedCount = result.allocated.length;
      const skippedCount = result.skipped.length;

      if (allocatedCount > 0) {
        toast.success(
          `${allocatedCount} student${allocatedCount > 1 ? "s" : ""} allocated successfully`,
        );
      }
      if (skippedCount > 0) {
        toast.warning(
          `${skippedCount} student${skippedCount > 1 ? "s" : ""} skipped — already allocated to: ${result.skipped.map((s) => s.current_tutor).join(", ")}`,
        );
      }

      queryClient.invalidateQueries({ queryKey: ["students"] });
      onSuccess?.();
      handleClose();
    },
    onError: (error: AxiosError) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  const handleClose = () => {
    setStudentSearch("");
    setTutorSearch("");
    setSelectedStudentIds([]);
    setSelectedTutorId(null);
    onClose();
  };

  const toggleStudent = (student_id: string) => {
    setSelectedStudentIds((prev) =>
      prev.includes(student_id)
        ? prev.filter((id) => id !== student_id)
        : [...prev, student_id],
    );
  };

  const toggleAllStudents = () => {
    const allIds = studentsData?.data.map((s) => s.user_id) ?? [];
    const allSelected = allIds.every((id) => selectedStudentIds.includes(id));
    setSelectedStudentIds(allSelected ? [] : allIds);
  };

  const students = studentsData?.data ?? [];
  const tutors = tutorsData?.data ?? [];
  const allSelected =
    students.length > 0 &&
    students.every((s) => selectedStudentIds.includes(s.user_id));

  return (
    <Modal
      open={open}
      onCancel={handleClose}
      footer={null}
      title="Bulk Allocate Students"
      width={720}
      destroyOnHidden
    >
      <div className="flex flex-col md:flex-row gap-4 mt-2">
        {/* Left — Students */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Students</span>
            <button
              onClick={toggleAllStudents}
              className="text-xs text-primary hover:underline"
            >
              {allSelected ? "Deselect all" : "Select all"}
            </button>
          </div>
          <Input
            placeholder="Search students..."
            prefix={<Search className="size-4 text-muted-foreground" />}
            value={studentSearch}
            onChange={(e) => setStudentSearch(e.target.value)}
          />
          <div className="flex flex-col gap-1 max-h-64 overflow-y-auto border rounded-lg p-1">
            {studentsLoading ? (
              <div className="flex justify-center py-6">
                <Spin />
              </div>
            ) : students.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-6">
                No unallocated students
              </p>
            ) : (
              students.map((student) => {
                const isSelected = selectedStudentIds.includes(student.user_id);
                return (
                  <div
                    key={student.user_id}
                    onClick={() => toggleStudent(student.user_id)}
                    className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors
                      ${isSelected ? "bg-primary/10 border border-primary" : "hover:bg-muted/50 border border-transparent"}`}
                  >
                    <div>
                      <p className="text-sm font-medium">
                        {student.first_name} {student.last_name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {student.email}
                      </p>
                    </div>
                    {isSelected && (
                      <Check className="size-4 text-primary shrink-0" />
                    )}
                  </div>
                );
              })
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            {selectedStudentIds.length} selected
          </p>
        </div>

        {/* Right — Tutors */}
        <div className="flex-1 flex flex-col gap-2">
          <span className="text-sm font-medium">Select Tutor</span>
          <Input
            placeholder="Search tutors..."
            prefix={<Search className="size-4 text-muted-foreground" />}
            value={tutorSearch}
            onChange={(e) => setTutorSearch(e.target.value)}
          />
          <div className="flex flex-col gap-1 max-h-64 overflow-y-auto border rounded-lg p-1">
            {tutorsLoading ? (
              <div className="flex justify-center py-6">
                <Spin />
              </div>
            ) : tutors.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-6">
                No tutors found
              </p>
            ) : (
              tutors.map((tutor) => {
                const isSelected = selectedTutorId === tutor.user_id;
                return (
                  <div
                    key={tutor.user_id}
                    onClick={() => setSelectedTutorId(tutor.user_id)}
                    className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors
                      ${isSelected ? "bg-primary/10 border border-primary" : "hover:bg-muted/50 border border-transparent"}`}
                  >
                    <div>
                      <p className="text-sm font-medium">
                        {tutor.first_name} {tutor.last_name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {tutor.email}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-muted-foreground">
                        {tutor.tutor_allocations?.length ?? 0} students
                      </span>
                      {isSelected && <Check className="size-4 text-primary" />}
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            {selectedTutorId ? "1 tutor selected" : "No tutor selected"}
          </p>
        </div>
      </div>

      <div className="flex justify-end gap-2 mt-6">
        <Button onClick={handleClose} disabled={isPending}>
          Cancel
        </Button>
        <Button
          type="primary"
          loading={isPending}
          disabled={selectedStudentIds.length === 0 || !selectedTutorId}
          onClick={() => mutate()}
        >
          Allocate{" "}
          {selectedStudentIds.length > 0 ? selectedStudentIds.length : ""}{" "}
          Student{selectedStudentIds.length !== 1 ? "s" : ""}
        </Button>
      </div>
    </Modal>
  );
}
