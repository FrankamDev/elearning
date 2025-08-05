import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./data.json"

import { usePage } from '@inertiajs/react';
export default function Page({ users, courses, categories, stats }) {

 const { user } = usePage().props;

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
    <AppSidebar user={user} categories={categories} users={users} courses={courses} stats={stats} variant="inset" />
      <SidebarInset>
     <SiteHeader />
        <div className="flex flex-1 flex-col">
      <h1 className="text-xl">Bienvenue <span className="text-xl text-gray-100 font-bold">{user.name}</span><b className="text-2xl">😉✌</b></h1>
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards stats={stats} />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
