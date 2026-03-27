import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Users,
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  UserCog,
  FolderOpen,
  CalendarDays,
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
import { getUser } from "@/services/auth";

const staffNav = [
  { title: "Dashboard", url: "/staff/home", icon: LayoutDashboard },
  { title: "Tutors", url: "/staff/tutors", icon: Users },
  { title: "Students", url: "/staff/students", icon: GraduationCap },
  { title: "Allocations", url: "/staff/allocations", icon: UserCog },
];

const tutorNav = [
  { title: "Dashboard", url: "/tutor/home", icon: LayoutDashboard },
  { title: "My Students", url: "/tutor/students", icon: GraduationCap },
  { title: "Meetings", url: "/tutor/meetings", icon: CalendarDays },
  { title: "Files", url: "/tutor/files", icon: FolderOpen },
];

const studentNav = [
  { title: "Dashboard", url: "/student/home", icon: LayoutDashboard },
  { title: "My Tutor", url: "/student/tutor", icon: Users },
  { title: "Meetings", url: "/student/meetings", icon: CalendarDays },
  { title: "Files", url: "/student/files", icon: FolderOpen },
];
export const Route = createFileRoute("/_protected")({
  component: ProtectedLayout,
});

function ProtectedLayout() {
  const user = getUser();

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      <AppSidebar
        navItems={
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
      <SidebarInset>
        <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Inbox</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
