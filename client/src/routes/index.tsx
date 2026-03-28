import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { getUser, isAuthenticated, isTokenExpired } from "@/services/auth";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated() && !isTokenExpired()) {
      const user = getUser();
      navigate({ to: `/${user?.role}` });
    } else {
      navigate({ to: "/auth/sign-in" });
    }
  }, []);

  return null;
}
