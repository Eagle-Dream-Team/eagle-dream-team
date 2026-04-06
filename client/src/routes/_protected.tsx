import {
  createFileRoute,
  Outlet,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Users,
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  UserCog,
  FolderOpen,
  CalendarDays,
  MessageCircle,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  getUser,
  isAuthenticated,
  isTokenExpired,
  signOut,
} from "@/services/auth";
import { useLocation, useMatches } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SessionExpiredDialog } from "@/components/common/session-expired-dialog";

export const Route = createFileRoute("/_protected")({
  component: ProtectedLayout,
  beforeLoad: () => {
    if (!isAuthenticated() || isTokenExpired()) {
      throw redirect({ to: "/auth/sign-in" });
    }
  },
});

function ProtectedLayout() {
  const matches = useMatches();
  console.log("1. raw matches:", matches);
  const navigate = useNavigate();

  const user = getUser();
  const { pathname } = useLocation();
  const [sessionExpired, setSessionExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTokenExpired()) {
        setSessionExpired(true);
      }
    }, 2000); // check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const staffNav = [
    { title: "Dashboard", url: "/staff/", icon: <LayoutDashboard /> },
    { title: "Tutors", url: "/staff/tutors", icon: <Users /> },
    { title: "Students", url: "/staff/students", icon: <GraduationCap /> },
    // { title: "Allocations", url: "/staff/allocations", icon: <UserCog /> },
  ].map((item) => ({ ...item, isActive: pathname === item.url }));

  const tutorNav = [
    { title: "Dashboard", url: "/tutor/", icon: <LayoutDashboard /> },
    { title: "My Students", url: "/tutor/students", icon: <GraduationCap /> },
    { title: "Messages", url: "/tutor/messages", icon: <MessageCircle /> },
    { title: "Meetings", url: "/tutor/meetings", icon: <CalendarDays /> },
    { title: "Files", url: "/tutor/files", icon: <FolderOpen /> },
  ].map((item) => ({ ...item, isActive: pathname === item.url }));

  const studentNav = [
    { title: "Dashboard", url: "/student/", icon: <LayoutDashboard /> },
    { title: "My Tutor", url: "/student/", icon: <Users /> },
    { title: "Messages", url: "/student/messages", icon: <MessageCircle /> },
    { title: "Meetings", url: "/student/meetings", icon: <CalendarDays /> },
    { title: "Files", url: "/student/files", icon: <FolderOpen /> },
  ].map((item) => ({ ...item, isActive: pathname === item.url }));

  return (
    <>
      {sessionExpired && <SessionExpiredDialog />}

      <SidebarProvider>
        <AppSidebar
          items={
            user?.role === "staff"
              ? staffNav
              : user?.role === "tutor"
                ? tutorNav
                : studentNav
          }
          user={{
            name: `${user?.first_name} ${user?.last_name}`,
            email: user?.email ?? "",
            avatar: "",
          }}
        />
        <SidebarInset className="overflow-x-hidden mt-2">
          <div className="p-6 min-w-0 overflow-y-auto">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
