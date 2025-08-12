import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function SectionCards({ stats, user, userCount }) {

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
      <CardDescription>Total Cours</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
       {stats.totalCourses}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
        ✔
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
       Nombre de cours disponibles
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
      <CardDescription>Categories Totales</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
       {stats.totalcategories}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
        ✔
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down 20% this period <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
       Nombre de cours disponibles
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
      <CardDescription>Achat</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
       {0}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
        ✔
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention <IconTrendingUp className="size-4" />
          </div>
      <div className="text-muted-foreground">Vous n'avez acheté aucun cours</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
      <CardDescription>Utilisateurs</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
       {stats.totalUsers}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
        ✔
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Steady performance increase <IconTrendingUp className="size-4" />
          </div>
      <div className="text-muted-foreground">Nombre d'utilisateurs existant</div>
        </CardFooter>
      </Card>
    </div>
  )
}
