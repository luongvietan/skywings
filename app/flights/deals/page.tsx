import Image from "next/image"
import Link from "next/link"
import { Search, Filter, Calendar, ArrowRight, Tag, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample deals data
const deals = [
  {
    id: "dubai-special",
    title: "Dubai Special",
    airline: "Emirates",
    alliance: "none",
    discount: "15% Off",
    description: "Economy and Business class to Dubai",
    longDescription:
      "Enjoy 15% off on all Economy and Business class flights to Dubai. Experience the luxury of Emirates while traveling to one of the world's most exciting destinations.",
    expiry: "Valid until June 30, 2025",
    image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=500&auto=format&fit=crop",
    featured: true,
    routes: [
      { from: "London", to: "Dubai", price: "$599" },
      { from: "New York", to: "Dubai", price: "$799" },
      { from: "Los Angeles", to: "Dubai", price: "$599" },
      { from: "New York", to: "Dubai", price: "$799" },
      { from: "Sydney", to: "Dubai", price: "$899" },
    ],
    terms: "Blackout dates may apply. Offer subject to availability. Taxes and fees not included.",
  },
  {
    id: "asia-explorer",
    title: "Asia Explorer",
    airline: "Singapore Airlines",
    alliance: "star",
    discount: "10% Off",
    description: "All routes to Southeast Asia",
    longDescription:
      "Discover the beauty of Southeast Asia with 10% off all Singapore Airlines flights. Enjoy award-winning service while exploring exotic destinations across the region.",
    expiry: "Valid until May 15, 2025",
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=500&auto=format&fit=crop",
    featured: true,
    routes: [
      { from: "London", to: "Singapore", price: "$699" },
      { from: "New York", to: "Singapore", price: "$899" },
      { from: "Los Angeles", to: "Bangkok", price: "$799" },
    ],
    terms: "Minimum stay of 7 days required. Changes permitted for a fee. Offer valid for direct bookings only.",
  },
  {
    id: "transatlantic-sale",
    title: "Transatlantic Sale",
    airline: "Delta",
    alliance: "skyteam",
    discount: "12% Off",
    description: "US to Europe routes",
    longDescription:
      "Save 12% on all Delta flights between the US and Europe. Whether you're traveling for business or pleasure, enjoy comfortable transatlantic service at a great price.",
    expiry: "Valid until July 31, 2025",
    image: "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?q=80&w=500&auto=format&fit=crop",
    featured: true,
    routes: [
      { from: "New York", to: "London", price: "$499" },
      { from: "Atlanta", to: "Paris", price: "$599" },
      { from: "Boston", to: "Rome", price: "$649" },
    ],
    terms: "Advance purchase of 21 days required. Saturday night stay required for lowest fares.",
  },
  {
    id: "european-getaway",
    title: "European Getaway",
    airline: "Lufthansa",
    alliance: "star",
    discount: "8% Off",
    description: "All European destinations",
    longDescription:
      "Plan your European adventure with 8% off all Lufthansa flights to European destinations. Explore historic cities, beautiful landscapes, and rich cultures across the continent.",
    expiry: "Valid until August 15, 2025",
    image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=500&auto=format&fit=crop",
    featured: false,
    routes: [
      { from: "New York", to: "Frankfurt", price: "$549" },
      { from: "Chicago", to: "Munich", price: "$599" },
      { from: "Washington", to: "Vienna", price: "$649" },
    ],
    terms: "Discount applies to base fare only. Taxes and surcharges apply. No changes or cancellations permitted.",
  },
  {
    id: "london-calling",
    title: "London Calling",
    airline: "British Airways",
    alliance: "oneworld",
    discount: "10% Off",
    description: "All routes to London Heathrow",
    longDescription:
      "Experience the charm of London with 10% off all British Airways flights to London Heathrow. Enjoy British hospitality on your journey to one of the world's most vibrant cities.",
    expiry: "Valid until September 30, 2025",
    image: "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?q=80&w=500&auto=format&fit=crop",
    featured: false,
    routes: [
      { from: "New York", to: "London", price: "$499" },
      { from: "Los Angeles", to: "London", price: "$699" },
      { from: "Singapore", to: "London", price: "$799" },
    ],
    terms: "Valid for travel Monday through Thursday. Weekend surcharges apply. Minimum stay of 3 nights required.",
  },
  {
    id: "pacific-routes",
    title: "Pacific Routes",
    airline: "Qantas",
    alliance: "oneworld",
    discount: "10% Off",
    description: "All flights to Australia and New Zealand",
    longDescription:
      "Discover the wonders of Australia and New Zealand with 10% off all Qantas flights. Experience the natural beauty, unique wildlife, and vibrant cities of the South Pacific.",
    expiry: "Valid until October 31, 2025",
    image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=500&auto=format&fit=crop",
    featured: false,
    routes: [
      { from: "Los Angeles", to: "Sydney", price: "$899" },
      { from: "San Francisco", to: "Melbourne", price: "$949" },
      { from: "Dallas", to: "Auckland", price: "$999" },
    ],
    terms: "Seasonal surcharges may apply. Discount valid for direct flights only. Stopovers not permitted.",
  },
  {
    id: "paris-special",
    title: "Paris Special",
    airline: "Air France",
    alliance: "skyteam",
    discount: "15% Off",
    description: "All routes to Paris",
    longDescription:
      "Fall in love with the City of Light with 15% off all Air France flights to Paris. Enjoy French elegance and hospitality on your journey to one of the world's most romantic destinations.",
    expiry: "Valid until November 15, 2025",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=500&auto=format&fit=crop",
    featured: false,
    routes: [
      { from: "New York", to: "Paris", price: "$499" },
      { from: "Los Angeles", to: "Paris", price: "$699" },
      { from: "Miami", to: "Paris", price: "$599" },
    ],
    terms:
      "Discount applies to round-trip bookings only. Minimum stay of 5 nights required. Changes permitted for a fee.",
  },
  {
    id: "domestic-us-sale",
    title: "Domestic US Sale",
    airline: "United",
    alliance: "star",
    discount: "20% Off",
    description: "All domestic US routes",
    longDescription:
      "Explore the United States with 20% off all United domestic flights. Whether you're visiting family, taking a business trip, or planning a vacation, enjoy great savings on your next journey.",
    expiry: "Valid until December 31, 2025",
    image: "https://images.unsplash.com/photo-1575408264798-b50b252663e6?q=80&w=500&auto=format&fit=crop",
    featured: false,
    routes: [
      { from: "Chicago", to: "Los Angeles", price: "$199" },
      { from: "New York", to: "San Francisco", price: "$249" },
      { from: "Denver", to: "Miami", price: "$229" },
    ],
    terms: "14-day advance purchase required. Discount not valid on basic economy fares. Subject to availability.",
  },
]

export default function FlightDealsPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Exclusive Flight Deals</h1>
        <p className="text-muted-foreground max-w-3xl">
          Take advantage of special offers and discounts from our airline partners. Browse our exclusive deals below or
          search for specific destinations.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search destinations..." className="pl-10" />
        </div>
        <Button variant="outline" className="md:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="w-full flex flex-wrap h-auto p-0 bg-transparent gap-2">
          <TabsTrigger value="all" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800">
            All Deals
          </TabsTrigger>
          <TabsTrigger value="star" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800">
            Star Alliance
          </TabsTrigger>
          <TabsTrigger value="skyteam" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800">
            SkyTeam
          </TabsTrigger>
          <TabsTrigger value="oneworld" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800">
            Oneworld
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Featured Deals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deals
                .filter((deal) => deal.featured)
                .map((deal) => (
                  <Card key={deal.id} className="overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="relative h-40">
                        <Image src={deal.image || "/placeholder.svg"} alt={deal.title} fill className="object-cover" />
                        <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">{deal.discount}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="text-sm text-muted-foreground mb-1">{deal.airline}</div>
                      <CardTitle className="text-lg">{deal.title}</CardTitle>
                      <CardDescription>{deal.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center p-4 pt-0">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {deal.expiry}
                      </div>
                      <Button size="sm" variant="ghost" className="gap-1" asChild>
                        <Link href={`/flights/deals/${deal.id}`}>
                          View Deal
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">All Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.map((deal) => (
              <Card key={deal.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-40">
                    <Image src={deal.image || "/placeholder.svg"} alt={deal.title} fill className="object-cover" />
                    <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">{deal.discount}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground mb-1">{deal.airline}</div>
                  <CardTitle className="text-lg">{deal.title}</CardTitle>
                  <CardDescription>{deal.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4 pt-0">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {deal.expiry}
                  </div>
                  <Button size="sm" variant="ghost" className="gap-1" asChild>
                    <Link href={`/flights/deals/${deal.id}`}>
                      View Deal
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="star" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals
              .filter((deal) => deal.alliance === "star")
              .map((deal) => (
                <Card key={deal.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-40">
                      <Image src={deal.image || "/placeholder.svg"} alt={deal.title} fill className="object-cover" />
                      <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">{deal.discount}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-1">{deal.airline}</div>
                    <CardTitle className="text-lg">{deal.title}</CardTitle>
                    <CardDescription>{deal.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center p-4 pt-0">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {deal.expiry}
                    </div>
                    <Button size="sm" variant="ghost" className="gap-1" asChild>
                      <Link href={`/flights/deals/${deal.id}`}>
                        View Deal
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="skyteam" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals
              .filter((deal) => deal.alliance === "skyteam")
              .map((deal) => (
                <Card key={deal.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-40">
                      <Image src={deal.image || "/placeholder.svg"} alt={deal.title} fill className="object-cover" />
                      <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">{deal.discount}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-1">{deal.airline}</div>
                    <CardTitle className="text-lg">{deal.title}</CardTitle>
                    <CardDescription>{deal.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center p-4 pt-0">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {deal.expiry}
                    </div>
                    <Button size="sm" variant="ghost" className="gap-1" asChild>
                      <Link href={`/flights/deals/${deal.id}`}>
                        View Deal
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="oneworld" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals
              .filter((deal) => deal.alliance === "oneworld")
              .map((deal) => (
                <Card key={deal.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-40">
                      <Image src={deal.image || "/placeholder.svg"} alt={deal.title} fill className="object-cover" />
                      <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">{deal.discount}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-1">{deal.airline}</div>
                    <CardTitle className="text-lg">{deal.title}</CardTitle>
                    <CardDescription>{deal.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center p-4 pt-0">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {deal.expiry}
                    </div>
                    <Button size="sm" variant="ghost" className="gap-1" asChild>
                      <Link href={`/flights/deals/${deal.id}`}>
                        View Deal
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-12">
        <div className="bg-sky-50 rounded-xl p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Get Deal Alerts</h2>
              <p className="text-muted-foreground">
                Subscribe to our newsletter to receive personalized deal alerts for your favorite destinations and
                airlines.
              </p>
              <div className="flex gap-2">
                <div className="relative flex-grow">
                  <Input placeholder="Enter your email" className="pr-24" />
                  <Button className="absolute right-0 top-0 rounded-l-none">Subscribe</Button>
                </div>
              </div>
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1000&auto=format&fit=crop"
                fill
                alt="Travel deals"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Deal Tips</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Tag className="h-8 w-8 text-sky-600 mb-2" />
              <CardTitle>Best Time to Book</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                For the best deals, book your flights 2-3 months in advance for international travel and 1-2 months for
                domestic flights. Tuesday and Wednesday are often the cheapest days to book.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Calendar className="h-8 w-8 text-sky-600 mb-2" />
              <CardTitle>Flexible Dates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Being flexible with your travel dates can save you money. Use our flexible dates search to find the
                cheapest days to fly to your destination.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 text-sky-600 mb-2" />
              <CardTitle>Limited-Time Offers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Many of our deals are limited-time offers. When you find a great deal, book it quickly as prices can
                change and promotions can end without notice.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

