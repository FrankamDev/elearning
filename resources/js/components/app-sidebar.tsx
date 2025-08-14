import * as React from "react";
import {
 IconDashboard,
 IconFolder,
 IconChartBar,
 IconFileWord,
 IconUsers,
 IconHelp,
 IconSettings,
 IconSearch,
 IconInnerShadowTop,
 IconFileAi,
 IconReport,
} from "@tabler/icons-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
 Sidebar,
 SidebarContent,
 SidebarFooter,
 SidebarHeader,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "@/components/ui/sidebar";

type AppSidebarProps = {
 user: {
  name: string;
  email: string;
  image?: string;
 };
 onSelect: (tab: string) => void; // fonction pour changer de page dans le dashboard
} & React.ComponentProps<typeof Sidebar>;

export function AppSidebar({ user, onSelect, ...props }: AppSidebarProps) {
 const data = {
  user: {
   name: user?.name ?? "Invité",
   email: user?.email ?? "invité@example.com",
   avatar: user?.image ?? "./vraiLogo.svg",
  },
  navMain: [
   {
    id: "dashboard",
    title: "Tableau de bord",
    icon: IconDashboard,
   },
   {
    id: "myCourses",
    title: "Mes cours",
    icon: IconFolder,
   },
   {
    id: "manageCourses",
    title: "Gérer les cours",
    icon: IconChartBar,
   },
   {
    id: "manageCategories",
    title: "Gérer les catégories",
    icon: IconFileWord,
   },
   {
    id: "manageLessons",
    title: "Gérer les leçons",
    icon: IconFolder,
   },
   {
    id: "manageLessons",
    title: "Gérer les catégories",
    icon: IconFolder,
   },
   {
    id: "viewCourses",
    title: "Voir les cours",
    icon: IconUsers,
   },
   {
    id: "manageUsers",
    title: "Utilisateurs",
    icon: IconUsers,
   },
  ],
  documents: [
   {
    name: "Documentation",
    url: "/docs",
    icon: IconFileAi,
   },
   {
    name: "Rapports",
    url: "/dashboard/reports",
    icon: IconReport,
   },
  ],
  navSecondary: [
   {
    title: "Paramètres",
    id: "settings",
    icon: IconSettings,
   },
   {
    title: "Rechercher",
    id: "search",
    icon: IconSearch,
   },
  ],
 };

 return (
  <Sidebar collapsible="offcanvas" {...props}>
   <SidebarHeader>
    <SidebarMenu>
     <SidebarMenuItem>
      <SidebarMenuButton
       asChild
       className="data-[slot=sidebar-menu-button]:!p-1.5"
       onClick={() => onSelect("dashboard")}
      >
       <div className="flex items-center gap-2 cursor-pointer">
        <IconInnerShadowTop className="!size-5" />
        <span className="text-base font-semibold">Elearning</span>
       </div>
      </SidebarMenuButton>
     </SidebarMenuItem>
    </SidebarMenu>
   </SidebarHeader>

   <SidebarContent>

    <NavMain
     items={data.navMain}
     onSelect={(id: string) => onSelect(id)}
    />


    <NavDocuments items={data.documents} />


    <NavSecondary
     items={data.navSecondary}
     onSelect={(id: string) => onSelect(id)}
     className="mt-auto"
    />
   </SidebarContent>

   <SidebarFooter>
    <NavUser user={data.user} />
   </SidebarFooter>
  </Sidebar>
 );
}
