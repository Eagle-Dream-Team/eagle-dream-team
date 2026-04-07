import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";
import { getUser } from "@/services/auth";

export const Route = createFileRoute("/_protected/staff")({
  beforeLoad: () => {
    const user = getUser();
    if (user?.role !== "staff") {
      throw redirect({ to: `/${user?.role}/` });
    }
  },
  component: () => <Outlet />,
});
