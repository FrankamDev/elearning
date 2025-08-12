import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
 SidebarGroup,
 SidebarGroupContent,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, usePage } from "@inertiajs/react";

export function NavMain({
 items,
}: {
  items: {
   title: string;
   url: string;
   icon?: Icon;
   role?: "user" | "admin" | "superadmin"; // rôle minimum requis
  }[];
}) {
 const { auth } = usePage().props;
 const user = auth.user;

 function canAccess(requiredRole: string | undefined) {
  if (!requiredRole) return true; // si pas de restriction, tout le monde peut voir
  if (requiredRole === "user") return true;
  if (requiredRole === "admin") return ["admin", "superadmin"].includes(user.role);
  if (requiredRole === "superadmin") return user.role === "superadmin";
  return false;
 }

 return (
  <SidebarGroup>
   <SidebarGroupContent className="flex flex-col gap-2">
    {/* En-tête */}
    <SidebarMenu>
     <SidebarMenuItem className="flex items-center gap-2">
      <SidebarMenuButton
       tooltip="Quick Create"
       className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
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
     {items.map((item) => (
      canAccess(item.role) && (
       <SidebarMenuItem key={item.title}>
        <SidebarMenuButton tooltip={item.title}>
         {item.icon && <item.icon />}
         <Link href={item.url}>{item.title}</Link>
        </SidebarMenuButton>
       </SidebarMenuItem>
      )
     ))}

     {/* Exemple d’un lien réservé au superadmin */}
     {user.role === "superadmin" && (
      <SidebarMenuItem>
       <SidebarMenuButton tooltip="Gestion des utilisateurs">
        <Link href="/admin/users">Super Admin</Link>
       </SidebarMenuButton>
      </SidebarMenuItem>
     )}
    </SidebarMenu>
   </SidebarGroupContent>
  </SidebarGroup>
 );
}
