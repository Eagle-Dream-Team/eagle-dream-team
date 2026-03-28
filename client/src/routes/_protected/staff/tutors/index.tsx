import { getTutors, createTutor, updateUser } from "@/services/staff/users";
import type { SignUpDto } from "@server/user/dto/signUp.dto";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Button, Input, Table } from "antd";
import type { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { Search, User, UserPlus } from "lucide-react";
import { UserModal } from "@/components/register-user";
import type { Tutor } from "@/models/user";
import { AppTable } from "@/components/common/app-table";

export const Route = createFileRoute("/_protected/staff/tutors/")({
  component: RouteComponent,
});

type FormValues = Omit<SignUpDto, "role">;

function RouteComponent() {
  const [open, setOpen] = useState(false);
  const [editingTutor, setEditingTutor] = useState<Tutor | null>(null);
  const [search, setSearch] = useState("");
  const queryClient = useQueryClient();

  const { data: tutors, isLoading } = useQuery({
    queryKey: ["tutors", search],
    queryFn: () => getTutors(search),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (values: FormValues) => createTutor(values),
    onSuccess: () => {
      toast.success("Tutor registered successfully");
      queryClient.invalidateQueries({ queryKey: ["tutors"] });
      setOpen(false);
    },
    onError: (error: AxiosError) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  const { mutate: editMutate, isPending: isEditing } = useMutation({
    mutationFn: (values: FormValues) =>
      updateUser(editingTutor!.user_id, values),
    onSuccess: () => {
      toast.success("Tutor updated successfully");
      queryClient.invalidateQueries({ queryKey: ["tutors"] });
      setEditingTutor(null);
    },
    onError: (error: AxiosError) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  const columns = [
    {
      title: "Name",
      key: "name",
      render: (_: unknown, record: Tutor) =>
        `${record.first_name} ${record.last_name}`,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Students",
      key: "students",
      render: (_: unknown, record: Tutor) => {
        const count = record.tutor_allocations?.length ?? 0;
        return count > 0 ? (
          <span className="font-medium">
            {count} student{count > 1 ? "s" : ""}
          </span>
        ) : (
          <span className="text-muted-foreground">No students</span>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Search tutors..."
          prefix={<Search className="size-4 text-muted-foreground" />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <Button
          type="primary"
          icon={<UserPlus className="size-4" />}
          onClick={() => setOpen(true)}
        >
          Add Tutor
        </Button>
      </div>

      <AppTable
        data={tutors}
        mobileColumns={columns}
        columns={columns}
        loading={isLoading}
        rowKey="user_id"
        pagination={{ pageSize: 10 }}
        onRow={(record) => ({
          onClick: () => setEditingTutor(record),
          className: "cursor-pointer",
        })}
      />

      <UserModal
        open={open || !!editingTutor}
        onClose={() => {
          setOpen(false);
          setEditingTutor(null);
        }}
        role="tutor"
        mode={editingTutor ? "edit" : "create"}
        isPending={editingTutor ? isEditing : isPending}
        userId={editingTutor?.user_id}
        initialValues={
          editingTutor
            ? {
                firstName: editingTutor.first_name,
                lastName: editingTutor.last_name,
                email: editingTutor.email,
              }
            : undefined
        }
        onSubmit={(values) =>
          editingTutor ? editMutate(values) : mutate(values)
        }
      />
    </div>
  );
}
