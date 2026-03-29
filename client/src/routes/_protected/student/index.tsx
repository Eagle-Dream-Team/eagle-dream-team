import { createFileRoute } from "@tanstack/react-router";
import { getMyTutor } from "@/services/student";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { Mail, User } from "lucide-react";

export const Route = createFileRoute("/_protected/student/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: allocation, isLoading } = useQuery({
    queryKey: ["my-tutor"],
    queryFn: getMyTutor,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Spin />
      </div>
    );
  }

  if (!allocation) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-2">
        <User className="size-10 text-muted-foreground" />
        <p className="text-muted-foreground">You have no tutor assigned yet.</p>
      </div>
    );
  }

  const tutor = allocation.tutor;

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <h2 className="text-lg font-semibold">My Tutor</h2>
      <div className="border rounded-xl p-6 shadow-sm bg-white flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="size-6 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-base">
              {tutor?.first_name} {tutor?.last_name}
            </p>
            <p className="text-sm text-muted-foreground capitalize">
              {tutor?.role}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="size-4" />
          <span>{tutor?.email}</span>
        </div>
        <div className="text-xs text-muted-foreground">
          Allocated on{" "}
          {allocation.allocated_at
            ? new Date(allocation.allocated_at).toLocaleDateString()
            : "—"}
        </div>
      </div>
    </div>
  );
}
