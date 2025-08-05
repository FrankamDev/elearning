import * as React from "react"
import {
 IconCamera,
 IconChartBar,
 IconDashboard,
 IconDatabase,
 IconFileAi,
 IconFileDescription,
 IconFileWord,
 IconFolder,
 IconHelp,
 IconInnerShadowTop,
 IconListDetails,
 IconReport,
 IconSearch,
 IconSettings,
 IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
 Sidebar,
 SidebarContent,
 SidebarFooter,
 SidebarHeader,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "@inertiajs/react"

type AppSidebarProps = {
 user: {
  name: string
  email: string
  image?: string
 }
} & React.ComponentProps<typeof Sidebar>

export function AppSidebar({ user, ...props }: AppSidebarProps) {
 const data = {
  user: {
   name: user?.name ?? "Invité",
   email: user?.email ?? "invité@example.com",
   avatar: user?.image ?? "./vraiLogo.svg",
  },
  navMain: [
   {
    title: "Tableau de bord",
    url: "/dashboard",
    icon: IconDashboard,
   },
   {
    title: "Mes cours",
    url: "/dashboard/courses",
    icon: IconFolder,
   },
   {
    title: "Progression",
    url: "/dashboard/progress",
    icon: IconChartBar,
   },
   {
    title: "Certificats",
    url: "/dashboard/certificates",
    icon: IconFileWord,
   },
   {
    title: "Formateurs",
    url: "/dashboard/teachers",
    icon: IconUsers,
   },
  ],
  navClouds: [
   {
    title: "Examens",
    icon: IconFileDescription,
    url: "#",
    items: [
     { title: "À venir", url: "#" },
     { title: "Passés", url: "#" },
    ],
   },
   {
    title: "Supports",
    icon: IconDatabase,
    url: "#",
    items: [
     { title: "PDF", url: "#" },
     { title: "Vidéos", url: "#" },
    ],
   },
   {
    title: "Aide & FAQ",
    icon: IconHelp,
    url: "#",
    items: [
     { title: "FAQ", url: "#" },
     { title: "Support", url: "#" },
    ],
   },
  ],
  navSecondary: [
   {
    title: "Paramètres",
    url: "/user",
    icon: IconSettings,
   },
   {
    title: "Rechercher",
    url: "/dashboard/search",
    icon: IconSearch,
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
 }

 return (
  <Sidebar collapsible="offcanvas" {...props}>
   <SidebarHeader>
    <SidebarMenu>
     <SidebarMenuItem>
      <SidebarMenuButton
       asChild
       className="data-[slot=sidebar-menu-button]:!p-1.5"
      >
       <Link href="/">
        <IconInnerShadowTop className="!size-5" />
        <span className="text-base font-semibold">Elearning</span>
       </Link>
      </SidebarMenuButton>
     </SidebarMenuItem>
    </SidebarMenu>
   </SidebarHeader>

   <SidebarContent>
    <NavMain items={data.navMain} />
    <NavDocuments items={data.documents} />
    <NavSecondary items={data.navSecondary} className="mt-auto" />
   </SidebarContent>

   <SidebarFooter>
    <NavUser user={data.user} />
   </SidebarFooter>
  </Sidebar>
 )
}
