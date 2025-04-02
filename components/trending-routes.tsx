import Link from "next/link"
import { TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TrendingRoutes() {
  const trendingRoutes = [
    {
      from: "New York",
      to: "Paris",
      price: "$499",
      airline: "Air France",
      searches: "12,500+ searches this month",
    },
    {
      from: "London",
      to: "Dubai",
      price: "$599",
      airline: "Emirates",
      searches: "10,200+ searches this month",
    },
    {
      from: "Los Angeles",
      to: "Tokyo",
      price: "$799",
      airline: "ANA",
      searches: "9,800+ searches this month",
    },
    {
      from: "Singapore",
      to: "Sydney",
      price: "$459",
      airline: "Qantas",
      searches: "8,300+ searches this month",
    },
    {
      from: "Chicago",
      to: "Rome",
      price: "$649",
      airline: "Lufthansa",
      searches: "7,600+ searches this month",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-sky-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="inline-flex items-center rounded-lg bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800">
            <TrendingUp className="mr-1 h-4 w-4" />
            Trending Now
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Top 5 Trending Routes</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">The most popular flight routes this month</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full">
            {trendingRoutes.map((route, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">
                      {route.from} → {route.to}
                    </CardTitle>
                    <Badge variant="outline" className="font-medium">
                      {route.price}
                    </Badge>
                  </div>
                  <CardDescription>{route.airline}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">{route.searches}</div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full" asChild>
                    <Link href={`/flights/search?from=${route.from}&to=${route.to}`}>Search Flights</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

