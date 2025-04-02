import Image from "next/image"
import Link from "next/link"
import { Search, ArrowRight, ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FlexibleFlightsPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Flexible Date Search</h1>
        <p className="text-muted-foreground max-w-3xl">
          Find the best flight deals by being flexible with your travel dates. Compare prices across multiple days to
          get the lowest fares.
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Search Flexible Dates</CardTitle>
          <CardDescription>
            Enter your origin, destination, and preferred month to see a calendar of prices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">From</label>
                <Input placeholder="City or Airport" defaultValue="New York (JFK)" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">To</label>
                <Input placeholder="City or Airport" defaultValue="London (LHR)" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Month</label>
                <Select defaultValue="june">
                  <SelectTrigger>
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="may">May 2025</SelectItem>
                    <SelectItem value="june">June 2025</SelectItem>
                    <SelectItem value="july">July 2025</SelectItem>
                    <SelectItem value="august">August 2025</SelectItem>
                    <SelectItem value="september">September 2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Trip Type</label>
                <Select defaultValue="roundtrip">
                  <SelectTrigger>
                    <SelectValue placeholder="Select trip type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="roundtrip">Round Trip</SelectItem>
                    <SelectItem value="oneway">One Way</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Passengers</label>
                <Select defaultValue="1">
                  <SelectTrigger>
                    <SelectValue placeholder="Select passengers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Adult</SelectItem>
                    <SelectItem value="2">2 Adults</SelectItem>
                    <SelectItem value="3">3 Adults</SelectItem>
                    <SelectItem value="4">4 Adults</SelectItem>
                    <SelectItem value="family">2 Adults, 2 Children</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="flexible-tickets" />
              <label
                htmlFor="flexible-tickets"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Show only flexible tickets (changeable/refundable)
              </label>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full md:w-auto">
            <Search className="mr-2 h-4 w-4" />
            Search Flexible Dates
          </Button>
        </CardFooter>
      </Card>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Price Calendar: New York to London</h2>
        <p className="text-muted-foreground mb-6">
          Prices shown are the lowest available fares for each day in June 2025. Click on a date to see available
          flights.
        </p>

        <div className="flex justify-between items-center mb-4">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            May 2025
          </Button>
          <h3 className="text-xl font-semibold">June 2025</h3>
          <Button variant="outline" size="sm">
            July 2025
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {/* Day headers */}
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
            <div key={i} className="text-center font-medium text-sm p-2">
              {day}
            </div>
          ))}

          {/* Empty cells for days before the 1st */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`empty-${i}`} className="p-2"></div>
          ))}

          {/* Calendar days */}
          {Array.from({ length: 30 }).map((_, i) => {
            const day = i + 1
            const price = Math.floor(Math.random() * (700 - 450) + 450)
            const isLowestPrice = price < 500
            const isWeekend = (day + 6) % 7 === 0 || (day + 6) % 7 === 1

            return (
              <Link
                key={day}
                href={`/flights/search?from=JFK&to=LHR&date=2025-06-${day.toString().padStart(2, "0")}`}
                className="group"
              >
                <div
                  className={`border rounded-lg p-2 text-center transition-all ${
                    isLowestPrice
                      ? "bg-green-50 border-green-200 hover:border-green-300"
                      : isWeekend
                        ? "bg-gray-50 border-gray-200 hover:border-gray-300"
                        : "hover:border-sky-200 hover:bg-sky-50"
                  }`}
                >
                  <div className="font-medium">{day}</div>
                  <div className={`text-sm ${isLowestPrice ? "text-green-600 font-medium" : "text-muted-foreground"}`}>
                    ${price}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="flex gap-4 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-100 border border-green-200 rounded"></div>
            <span>Lowest Prices</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-100 border border-gray-200 rounded"></div>
            <span>Weekend Dates</span>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Recommended Flexible Date Flights</h2>
        <div className="grid gap-4">
          {[
            {
              outbound: "June 10, 2025",
              return: "June 17, 2025",
              airline: "British Airways",
              price: "$499",
              savings: "Save $150 compared to peak dates",
              flexible: true,
            },
            {
              outbound: "June 3, 2025",
              return: "June 12, 2025",
              airline: "Delta",
              price: "$479",
              savings: "Save $170 compared to peak dates",
              flexible: true,
            },
            {
              outbound: "June 24, 2025",
              return: "July 1, 2025",
              airline: "American Airlines",
              price: "$519",
              savings: "Save $130 compared to peak dates",
              flexible: false,
            },
          ].map((flight, index) => (
            <Card key={index}>
              <div className="grid md:grid-cols-[1fr_auto] gap-4">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <div>
                      <div className="text-sm text-muted-foreground">Outbound</div>
                      <div className="font-medium">{flight.outbound}</div>
                    </div>
                    <ArrowRight className="hidden md:block h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Return</div>
                      <div className="font-medium">{flight.return}</div>
                    </div>
                    <div className="md:ml-8">
                      <div className="text-sm text-muted-foreground">Airline</div>
                      <div className="font-medium">{flight.airline}</div>
                    </div>
                    {flight.flexible && (
                      <Badge className="w-fit bg-green-100 text-green-800 hover:bg-green-100 border-none">
                        Flexible Ticket
                      </Badge>
                    )}
                  </div>
                  <div className="mt-4 text-sm text-green-600">{flight.savings}</div>
                </CardContent>
                <div className="flex items-center p-6 border-t md:border-t-0 md:border-l">
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-bold">{flight.price}</div>
                    <Button size="sm" asChild>
                      <Link
                        href={`/flights/search?from=JFK&to=LHR&outbound=${flight.outbound}&return=${flight.return}`}
                      >
                        Select
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <section className="mb-12">
        <div className="bg-sky-50 rounded-xl p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Benefits of Flexible Tickets</h2>
              <p className="text-muted-foreground">
                Flexible tickets offer peace of mind for your travel plans, allowing you to make changes or
                cancellations without hefty fees.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Change your flight dates without change fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Cancel your booking for a full or partial refund</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Ideal for uncertain travel plans or business trips</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Protection against unexpected schedule changes</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/flights/flexible-policy">Learn More About Flexible Tickets</Link>
              </Button>
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop"
                fill
                alt="Airplane wing view"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Flexible Date Travel Tips</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Mid-Week Travel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Flying on Tuesday, Wednesday, or Thursday typically offers the lowest fares. Weekend flights are usually
                more expensive due to higher demand.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shoulder Seasons</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Travel during "shoulder seasons" (just before or after peak season) for better prices and fewer crowds
                while still enjoying good weather.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fare Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Set up fare alerts for your preferred routes to be notified when prices drop. Being ready to book
                quickly can help you secure the best deals.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

