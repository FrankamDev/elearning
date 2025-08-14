import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react";
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
 items,
 onSelect,
}: {
  items: {
   title: string;
  id: string;
  icon?: Icon;
  role?: "user" | "admin" | "superadmin";
  }[];
  onSelect: (id: string) => void;
}) {
 const { auth } = usePage().props;
 const user = auth.user;

 function canAccess(requiredRole: string | undefined) {
  if (!requiredRole) return true;
  if (requiredRole === "user") return true;
  if (requiredRole === "admin") return ["admin", "superadmin"].includes(user.role);
  if (requiredRole === "superadmin") return user.role === "superadmin";
  return false;
 }

 return (
  <SidebarGroup>
   <SidebarGroupContent className="flex flex-col gap-2">

    <SidebarMenu>
     <SidebarMenuItem className="flex items-center gap-2">
      <SidebarMenuButton
       tooltip="Quick Create"
       className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
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

    {/* Menu dynamique */}
    <SidebarMenu>
     {items.map(
      (item) =>
       canAccess(item.role) && (
        <SidebarMenuItem key={item.id}>
         <SidebarMenuButton
          tooltip={item.title}
          onClick={() => onSelect(item.id)} // 🔥 active juste un onglet
         >
          {item.icon && <item.icon />}
          <span>{item.title}</span>
         </SidebarMenuButton>
        </SidebarMenuItem>
       )
     )}

     {user.role === "superadmin" && (
      <SidebarMenuItem>
       <SidebarMenuButton
        tooltip="Gestion des utilisateurs"
        onClick={() => onSelect("manageUsers")} // 🔥 onglet spécial
       >
        <span>Super Admin</span>
       </SidebarMenuButton>
      </SidebarMenuItem>
     )}
    </SidebarMenu>
   </SidebarGroupContent>
  </SidebarGroup>
 );
}
