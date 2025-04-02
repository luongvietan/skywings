import Image from "next/image"
import Link from "next/link"
import { Award, Plane, Calendar, ChevronRight, User, Settings, LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function AccountPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="md:w-1/4">
          <Card>
            <CardHeader>
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    alt="User profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>John Smith</CardTitle>
                <CardDescription>john.smith@example.com</CardDescription>
                <div className="mt-2 flex items-center gap-2">
                  <div className="rounded-full bg-gray-200 p-1">
                    <Award className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="text-sm font-medium">Silver Member</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/account">
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/account/bookings">
                    <Plane className="mr-2 h-4 w-4" />
                    My Bookings
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/account/rewards">
                    <Award className="mr-2 h-4 w-4" />
                    SkyRewards
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/account/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Account Settings
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, John</h1>
            <p className="text-muted-foreground">Here's an overview of your account</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Miles Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32,450</div>
                <p className="text-xs text-muted-foreground mt-1">+2,500 miles this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Tier Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-gray-200 p-1">
                    <Award className="h-5 w-5 text-gray-600" />
                  </div>
                  <span className="text-xl font-bold">Silver</span>
                </div>
                <div className="mt-2 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>32,450 / 50,000 miles to Gold</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Next Trip</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">NYC → LON</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Calendar className="h-3 w-3" />
                  <span>June 15, 2025</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="bookings" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="bookings">Upcoming Trips</TabsTrigger>
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
              <TabsTrigger value="offers">Special Offers</TabsTrigger>
            </TabsList>

            <TabsContent value="bookings" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div>
                      <CardTitle>New York to London</CardTitle>
                      <CardDescription>British Airways • Booking #BA123456</CardDescription>
                    </div>
                    <Badge>Upcoming</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Departure</div>
                      <div className="font-medium">Jun 15, 2025 • 08:30</div>
                      <div className="text-sm">JFK Terminal 4</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Arrival</div>
                      <div className="font-medium">Jun 15, 2025 • 20:45</div>
                      <div className="text-sm">LHR Terminal 5</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Class</div>
                      <div className="font-medium">Business</div>
                      <div className="text-sm">Seat 12A</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Miles Earned</div>
                      <div className="font-medium">3,458 miles</div>
                      <div className="text-sm">+ 25% Silver bonus</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Manage Booking
                  </Button>
                  <Button size="sm">Check In</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div>
                      <CardTitle>London to Paris</CardTitle>
                      <CardDescription>Air France • Booking #AF789012</CardDescription>
                    </div>
                    <Badge>Upcoming</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Departure</div>
                      <div className="font-medium">Jun 20, 2025 • 14:15</div>
                      <div className="text-sm">LHR Terminal 2</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Arrival</div>
                      <div className="font-medium">Jun 20, 2025 • 16:30</div>
                      <div className="text-sm">CDG Terminal 1</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Class</div>
                      <div className="font-medium">Economy</div>
                      <div className="text-sm">Seat 24C</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Miles Earned</div>
                      <div className="font-medium">950 miles</div>
                      <div className="text-sm">+ 25% Silver bonus</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Manage Booking
                  </Button>
                  <Button size="sm" disabled>
                    Check In (Opens Jun 19)
                  </Button>
                </CardFooter>
              </Card>

              <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="/account/bookings">View All Bookings</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        type: "Flight",
                        description: "Completed flight: LAX → SFO",
                        date: "May 10, 2025",
                        miles: "+1,250 miles",
                      },
                      {
                        type: "Purchase",
                        description: "SkyRewards Card purchase: Amazon.com",
                        date: "May 5, 2025",
                        miles: "+240 miles",
                      },
                      {
                        type: "Booking",
                        description: "New booking: NYC → LON",
                        date: "May 2, 2025",
                        miles: "Pending",
                      },
                      {
                        type: "Redemption",
                        description: "Miles redeemed for seat upgrade",
                        date: "April 28, 2025",
                        miles: "-10,000 miles",
                      },
                      {
                        type: "Flight",
                        description: "Completed flight: SFO → LAX",
                        date: "April 25, 2025",
                        miles: "+1,250 miles",
                      },
                    ].map((activity, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                        <div>
                          <div className="font-medium">{activity.type}</div>
                          <div className="text-sm text-muted-foreground">{activity.description}</div>
                        </div>
                        <div className="text-right">
                          <div
                            className={`font-medium ${activity.miles.startsWith("+") ? "text-green-600" : activity.miles.startsWith("-") ? "text-red-600" : ""}`}
                          >
                            {activity.miles}
                          </div>
                          <div className="text-xs text-muted-foreground">{activity.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/account/activity">View All Activity</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="offers" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Special Offers For You</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Double Miles Promotion",
                        description: "Earn 2x miles on all flights to Europe this summer",
                        expiry: "Valid until August 31, 2025",
                        image:
                          "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?q=80&w=200&auto=format&fit=crop",
                      },
                      {
                        title: "Upgrade Discount",
                        description: "50% off miles required for Business Class upgrades",
                        expiry: "Valid until July 15, 2025",
                        image:
                          "https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=200&auto=format&fit=crop",
                      },
                      {
                        title: "Hotel Partner Bonus",
                        description: "Earn 3x miles on stays at Marriott hotels",
                        expiry: "Valid until September 30, 2025",
                        image:
                          "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=200&auto=format&fit=crop",
                      },
                    ].map((offer, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden">
                          <Image
                            src={offer.image || "/placeholder.svg"}
                            alt={offer.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{offer.title}</h3>
                          <p className="text-sm text-muted-foreground">{offer.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">{offer.expiry}</p>
                        </div>
                        <div className="flex items-center">
                          <Button variant="ghost" size="sm" className="gap-1">
                            Details
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/account/offers">View All Offers</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

