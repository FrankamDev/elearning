import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import data from "./data.json";
import { Link, usePage } from "@inertiajs/react";
import User from "./Admin/User";
import IndexLesson from "./Admin/IndexLesson";
// import CreateCourse from "./Admin/cours/CourseCreate";
// import Dashboard from './Admin/Dashboard';
// import CategoryCreate from './Admin/category/Create';
// import CourseIndex from "./courses/CourseIndex";
// import Index from "./Admin/category/CategoryIndex";
import CategoryIndex from "./Admin/category/CategoryIndex";
import CreateLesson from './Admin/IndexLesson';
import UsersChart from "@/components/graphiques/UserChart";
import CoursesIndex from "./cours/Index";
import Index from "./Admin/cours/CourseCreate";
import LessonCrud from "./Admin/Lessons/LessonCrud";

export default function dashboard({ users, courses, userCount, categories, stats }) {
 const { auth } = usePage().props;
 const user = auth.user;

 const [activeTab, setActiveTab] = useState<"dashboard" | "manageCourses" | "manageCategories" | "manageLessons" | "manageUsers">("dashboard");
 const [editingCourse, setEditingCourse] = useState<number | null>(null);

 const handleEditCourse = (id: number) => {
  setEditingCourse(id);
  setActiveTab("manageCourses");
 };

 return (
  <>
  <SidebarProvider
   style={{
    "--sidebar-width": "calc(var(--spacing) * 72)",
    "--header-height": "calc(var(--spacing) * 12)",
   } as React.CSSProperties}
  >
   <AppSidebar
    user={user}
    onSelect={setActiveTab}
    userCount={userCount}
    categories={categories}
    users={users}
    courses={courses}
    stats={stats}
    variant="inset"
   />

   <SidebarInset>
    <SiteHeader />
    <div className="flex flex-1 flex-col">
     <h1 className="text-xl ml-6 mt-2">
      Bienvenue{" "}
      <span className="text-xl text-gray-100 font-bold">{user.name}</span>
      <b className="text-2xl">😉</b>
      <UsersChart />
     </h1>

     <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">

       {activeTab === "dashboard" && (
        <>
         <SectionCards stats={stats} userCount={userCount} user={user} />
         <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
         </div>
         <DataTable data={data} />
        </>
       )}


       {activeTab === "manageCourses" && (
        <div className="p-6">
         <h2 className="text-2xl font-bold mb-4">Gestion des cours</h2>
         <Index />

        </div>
       )}

       {activeTab === "manageCategories" && (
        <div className="p-6">
         <h2 className="text-2xl font-bold mb-4">Gestion des categories</h2>
         <CategoryIndex categories={categories} />
        </div>
       )}


       {activeTab === "manageLessons" && (
        <div className="p-6">
         <h2 className="text-2xl font-bold mb-4">Gestion des leçons.</h2>
         <h2>Lesson</h2>
        </div>
       )}



       <Link
        href="/toggle-role"
        method="post"
        as="button"
        className="bg-cyan-700 w-[20%] cursor-alias  text-white px-4 py-2 text-sm rounded transition"
       >
        {user.role === "superadmin"
         ? "Revenir en mode Utilisateur"
         : "Passer en mode Superadmin"}
       </Link>



       {activeTab === "manageUsers" && (
        <div className="p-6">
         <h2 className="text-2xl font-bold mb-4">Gestion des utilisateurs</h2>
         <User />
        </div>
       )}
       {activeTab === "manageLessons" && (
        <div className="p-6">
         <h2 className="text-2xl font-bold mb-4">Gestion des cours</h2>
          <LessonCrud />


        </div>
       )}
      </div>

     </div>
      <Link href="/categories" className="bg-blue-600 w-[20%] text-white px-4 py-2 rounded hover:bg-blue-700">
       Tous les cours
      </Link>
    </div>
   </SidebarInset>
   </SidebarProvider>
  </>
 );
}
