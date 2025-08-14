import { IconCirclePlusFilled, IconMail, IconBook, IconUser, IconSettings, type Icon } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
 SidebarGroup,
 SidebarGroupContent,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePage } from "@inertiajs/react";

export function NavMain({
 onSelect,
}: {
  onSelect: (id: string) => void;
}) {
 const { auth } = usePage().props;
 const user = auth.user;

 const items: {
  title: string;
  id: string;
  icon?: Icon;
  role?: "user" | "admin" | "superadmin";
 }[] = [
   { title: "Mon profil", id: "profile", icon: IconUser, role: "user" },
   { title: "Mes cours", id: "myCourses", icon: IconBook, role: "user" },
   { title: "Gestion des cours", id: "manageCourses", icon: IconBook, role: "admin" },
   { title: "Paramètres", id: "settings", icon: IconSettings, role: "admin" },
   { title: "Gestion avancée", id: "manageUsers", icon: IconUser, role: "superadmin" },
  ];


 function canAccess(requiredRole?: string) {
  if (!requiredRole) return true;
  if (requiredRole === "user") return true;
  if (requiredRole === "admin") return ["admin", "superadmin"].includes(user.role);
  if (requiredRole === "superadmin") return user.role === "superadmin";
  return false;
 }

 return (
  <SidebarGroup>
   <SidebarGroupContent className="flex flex-col gap-2">

    <h1 className="text-sm text-muted-foreground">
     {user.role === "user" ? "Bienvenue sur l'application" : "Bienvenue sur l'admin"}
     {/* Rôle : <span className="font-bold">{user.role}</span> */}
    </h1>


    <SidebarMenu>
     <SidebarMenuItem className="flex items-center gap-2">
      <SidebarMenuButton
       tooltip="Quick Create"
       className="bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/90 min-w-8 duration-200 ease-linear"
       onClick={() => onSelect("dashboard")}
      >
       <IconCirclePlusFilled />
       <span>EsCaLearn</span>
      </SidebarMenuButton>

      <Button
       size="icon"
       className="size-8 group-data-[collapsible=icon]:opacity-0"
       variant="outline"
      >
       <IconMail />
       <span className="sr-only">Inbox</span>
      </Button>
     </SidebarMenuItem>
    </SidebarMenu>


    <SidebarMenu>
     {items
      .filter(item => canAccess(item.role))
      .map(item => (
       <SidebarMenuItem key={item.id}>
        <SidebarMenuButton
         tooltip={item.title}
         onClick={() => onSelect(item.id)}
        >
         {item.icon && <item.icon />}
         <span>{item.title}</span>
        </SidebarMenuButton>
       </SidebarMenuItem>
      ))}
    </SidebarMenu>
   </SidebarGroupContent>
  </SidebarGroup>
 );
}
