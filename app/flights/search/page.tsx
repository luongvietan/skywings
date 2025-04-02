import { Search, Filter, Clock, Shield, CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

export default function FlightSearchPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Search Flights</h1>
        <p className="text-muted-foreground">
          Find the best flights from over 100 airlines
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        {/* Filters sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Airlines</h3>
                <div className="space-y-2">
                  {[
                    "Emirates",
                    "Singapore Airlines",
                    "Delta",
                    "Lufthansa",
                    "Qatar Airways",
                  ].map((airline) => (
                    <div key={airline} className="flex items-center space-x-2">
                      <Checkbox id={`airline-${airline}`} />
                      <label
                        htmlFor={`airline-${airline}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {airline}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Alliances</h3>
                <div className="space-y-2">
                  {["Star Alliance", "SkyTeam", "Oneworld"].map((alliance) => (
                    <div key={alliance} className="flex items-center space-x-2">
                      <Checkbox id={`alliance-${alliance}`} />
                      <label
                        htmlFor={`alliance-${alliance}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {alliance}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Ticket Type</h3>
                <div className="space-y-2">
                  {["Economy", "Premium Economy", "Business", "First"].map(
                    (ticketType) => (
                      <div
                        key={ticketType}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox id={`ticket-${ticketType}`} />
                        <label
                          htmlFor={`ticket-${ticketType}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {ticketType}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Flexible Tickets</h3>
                  <Checkbox id="flexible-tickets" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Show only flights with flexible change and cancellation
                  policies
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Price Range</h3>
                <Slider defaultValue={[500]} max={2000} step={50} />
                <div className="flex items-center justify-between">
                  <span className="text-sm">$0</span>
                  <span className="text-sm">$2,000+</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Departure Time</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">
                    Morning
                  </Button>
                  <Button variant="outline" size="sm">
                    Afternoon
                  </Button>
                  <Button variant="outline" size="sm">
                    Evening
                  </Button>
                  <Button variant="outline" size="sm">
                    Night
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search results */}
        <div className="space-y-6">
          <Card className="p-4">
            <div className="grid gap-4 md:grid-cols-[2fr_2fr_1fr_auto]">
              <div className="space-y-2">
                <label className="text-sm font-medium">From</label>
                <Input
                  placeholder="City or Airport"
                  defaultValue="New York (JFK)"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">To</label>
                <Input
                  placeholder="City or Airport"
                  defaultValue="London (LHR)"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Date</label>
                <Input type="date" defaultValue="2025-06-15" />
              </div>
              <div className="flex items-end">
                <Button className="gap-2">
                  <Search className="h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </Card>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Showing 15 results</p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Sort by:</span>
              <select className="rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Duration: Shortest</option>
                <option>Duration: Longest</option>
              </select>
            </div>
          </div>

          {/* Flight results */}
          {[
            {
              airline: "British Airways",
              logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNp8EmoVrOGN5M6Bc_qGizBYlYW190xCHALQ&s",
              departure: "08:30",
              arrival: "20:45",
              duration: "7h 15m",
              stops: "Nonstop",
              price: "$499",
              alliance: "oneworld",
            },
            {
              airline: "Delta",
              logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0011/6343/brand.gif?itok=iSd6wBZZ",
              departure: "10:15",
              arrival: "22:30",
              duration: "7h 15m",
              stops: "1 stop (CDG)",
              price: "$459",
              alliance: "skyteam",
            },
            {
              airline: "Emirates",
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/850px-Emirates_logo.svg.png?q=80&w=200&auto=format&fit=crop",
              departure: "14:20",
              arrival: "02:35",
              duration: "7h 15m",
              stops: "Nonstop",
              price: "$549",
              alliance: "none",
            },
          ].map((flight, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid md:grid-cols-[auto_1fr_auto] gap-4 p-6">
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="w-16 h-16 rounded-lg border flex items-center justify-center p-2 bg-white">
                    <Image
                      src={flight.logo || "/placeholder.svg"}
                      width={50}
                      height={50}
                      alt={`${flight.airline} logo`}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium">{flight.airline}</span>
                  <span className="text-xs text-muted-foreground">
                    {flight.alliance !== "none" ? flight.alliance : ""}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{flight.departure}</div>
                    <div className="text-sm text-muted-foreground">JFK</div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="text-sm text-muted-foreground">
                      {flight.duration}
                    </div>
                    <div className="relative w-24 md:w-40">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-muted"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <div className="bg-background px-2 text-xs text-muted-foreground">
                          {flight.stops}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold">{flight.arrival}</div>
                    <div className="text-sm text-muted-foreground">LHR</div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="text-2xl font-bold">{flight.price}</div>
                  <Button asChild>
                    <Link href={`/flights/booking/${index}`}>Select</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-muted/50 p-4 flex flex-wrap gap-4 justify-between items-center">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>On-time Performance: 92%</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span>Flexible Ticket Available</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <span>Earn 2,495 SkyRewards Miles</span>
                </div>
                <Button variant="link" size="sm" className="text-sm">
                  Flight Details
                </Button>
              </div>
            </Card>
          ))}

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mx-2">
              Previous
            </Button>
            <Button variant="outline" className="mx-2">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
