import Image from "next/image"
import Link from "next/link"
import { Globe, MapPin, Star, Shield, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// This is a mock function to simulate getting airline data
// In a real app, this would fetch from an API or database
function getAirlineData(slug: string) {
  const airlines = {
    emirates: {
      name: "Emirates",
      logo: "https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=200&auto=format&fit=crop",
      alliance: "None",
      hubs: ["Dubai (DXB)"],
      destinations: 157,
      fleet: 269,
      founded: 1985,
      description:
        "Emirates is the largest airline in the Middle East, operating over 3,600 flights per week from its hub at Dubai International Airport. Known for its luxury service and modern fleet, Emirates flies to more than 150 destinations across 80 countries.",
      image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1000&auto=format&fit=crop",
      rating: 4.7,
      reviews: 12500,
      deals: [
        {
          title: "Dubai Special",
          discount: "15% Off",
          description: "Economy and Business class to Dubai",
          expiry: "Valid until June 30, 2025",
          image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=500&auto=format&fit=crop",
        },
        {
          title: "Asia Explorer",
          discount: "10% Off",
          description: "Routes to Southeast Asia",
          expiry: "Valid until May 15, 2025",
          image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=500&auto=format&fit=crop",
        },
      ],
      popularRoutes: [
        { from: "London", to: "Dubai", price: "$599" },
        { from: "New York", to: "Dubai", price: "$799" },
        { from: "Sydney", to: "Dubai", price: "$899" },
      ],
    },
    delta: {
      name: "Delta Air Lines",
      logo: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=200&auto=format&fit=crop",
      alliance: "SkyTeam",
      hubs: ["Atlanta (ATL)", "Detroit (DTW)", "Los Angeles (LAX)", "New York (JFK)"],
      destinations: 325,
      fleet: 850,
      founded: 1924,
      description:
        "Delta Air Lines is one of the major airlines of the United States and a legacy carrier. Delta operates over 5,400 flights daily and serves 325 destinations in 52 countries. The airline is known for its reliability and customer service.",
      image: "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?q=80&w=1000&auto=format&fit=crop",
      rating: 4.5,
      reviews: 18700,
      deals: [
        {
          title: "Transatlantic Sale",
          discount: "12% Off",
          description: "US to Europe routes",
          expiry: "Valid until July 31, 2025",
          image: "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?q=80&w=500&auto=format&fit=crop",
        },
      ],
      popularRoutes: [
        { from: "New York", to: "London", price: "$499" },
        { from: "Atlanta", to: "Paris", price: "$599" },
        { from: "Los Angeles", to: "Tokyo", price: "$799" },
      ],
    },
    "singapore-airlines": {
      name: "Singapore Airlines",
      logo: "https://images.unsplash.com/photo-1583511380487-b5e348837783?q=80&w=200&auto=format&fit=crop",
      alliance: "Star Alliance",
      hubs: ["Singapore (SIN)"],
      destinations: 137,
      fleet: 133,
      founded: 1947,
      description:
        "Singapore Airlines is the flag carrier of Singapore with its hub at Singapore Changi Airport. The airline is known for its high-quality service and has consistently ranked as one of the best airlines in the world.",
      image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=1000&auto=format&fit=crop",
      rating: 4.8,
      reviews: 15300,
      deals: [
        {
          title: "Asia Explorer",
          discount: "10% Off",
          description: "All routes to Southeast Asia",
          expiry: "Valid until May 15, 2025",
          image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=500&auto=format&fit=crop",
        },
      ],
      popularRoutes: [
        { from: "London", to: "Singapore", price: "$699" },
        { from: "Sydney", to: "Singapore", price: "$499" },
        { from: "Tokyo", to: "Singapore", price: "$399" },
      ],
    },
  }

  return airlines[slug as keyof typeof airlines] || null
}

export default function AirlinePage({ params }: { params: { slug: string } }) {
  const airline = getAirlineData(params.slug)

  if (!airline) {
    return (
      <div className="container px-4 py-12 md:px-6 md:py-24 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Airline Not Found</h1>
        <p className="text-muted-foreground mb-8">The airline you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/airlines">View All Airlines</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
        <div className="w-24 h-24 rounded-lg border flex items-center justify-center p-4 bg-white">
          <Image
            src={airline.logo || "/placeholder.svg"}
            width={80}
            height={80}
            alt={`${airline.name} logo`}
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{airline.name}</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            {airline.alliance !== "None" && <Badge variant="outline">{airline.alliance}</Badge>}
            <div className="flex items-center text-sm text-muted-foreground">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <span>
                {airline.rating}/5 ({airline.reviews.toLocaleString()} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image src={airline.image || "/placeholder.svg"} alt={airline.name} fill className="object-cover" />
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="routes">Routes</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 pt-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">About {airline.name}</h2>
                <p className="text-muted-foreground">{airline.description}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm">Founded</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-2xl font-bold">{airline.founded}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm">Fleet Size</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-2xl font-bold">{airline.fleet}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm">Destinations</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-2xl font-bold">{airline.destinations}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm">Alliance</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-2xl font-bold">{airline.alliance}</p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Hubs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {airline.hubs.map((hub, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{hub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="routes" className="space-y-6 pt-4">
              <h2 className="text-xl font-semibold mb-4">Popular Routes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {airline.popularRoutes.map((route, index) => (
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
                    </CardHeader>
                    <CardFooter>
                      <Button size="sm" className="w-full" asChild>
                        <Link href={`/flights/search?from=${route.from}&to=${route.to}&airline=${airline.name}`}>
                          Search Flights
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-4">
                <Button variant="outline" asChild>
                  <Link href={`/flights/search?airline=${airline.name}`}>View All Routes</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6 pt-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl font-bold">{airline.rating}</div>
                <div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${star <= Math.floor(airline.rating) ? "fill-current text-yellow-500" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Based on {airline.reviews.toLocaleString()} reviews</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Michael Thompson",
                    date: "March 15, 2025",
                    rating: 5,
                    comment: `I recently flew with ${airline.name} and was impressed by their service. The cabin crew was attentive and professional, the food was excellent, and the entertainment options were extensive.`,
                  },
                  {
                    name: "Jessica Lee",
                    date: "February 28, 2025",
                    rating: 4,
                    comment: `My flight with ${airline.name} was comfortable and on-time. The only minor issue was the limited legroom in economy, but that's standard these days. Would fly with them again.`,
                  },
                  {
                    name: "Robert Garcia",
                    date: "January 10, 2025",
                    rating: 5,
                    comment: `${airline.name} provided an exceptional experience from check-in to landing. Their attention to detail and customer service is unmatched in the industry.`,
                  },
                ].map((review, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-base">{review.name}</CardTitle>
                          <CardDescription>{review.date}</CardDescription>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= review.rating ? "fill-current text-yellow-500" : "text-muted"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-4">
                <Button>Write a Review</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Deals</CardTitle>
              <CardDescription>Special offers from {airline.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {airline.deals.map((deal, index) => (
                <div key={index} className="flex gap-4">
                  <div className="relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden">
                    <Image src={deal.image || "/placeholder.svg"} alt={deal.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{deal.title}</h3>
                      <Badge className="bg-red-500 hover:bg-red-600">{deal.discount}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{deal.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{deal.expiry}</p>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/flights/deals">View All Deals</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SkyRewards Benefits</CardTitle>
              <CardDescription>Earn miles with {airline.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Award className="h-8 w-8 text-sky-600" />
                <div>
                  <h3 className="font-medium">Earn Miles</h3>
                  <p className="text-sm text-muted-foreground">Earn 1 mile per mile flown</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Shield className="h-8 w-8 text-sky-600" />
                <div>
                  <h3 className="font-medium">Status Match</h3>
                  <p className="text-sm text-muted-foreground">Match your existing status</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Globe className="h-8 w-8 text-sky-600" />
                <div>
                  <h3 className="font-medium">Alliance Benefits</h3>
                  <p className="text-sm text-muted-foreground">Enjoy benefits across all partner airlines</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/rewards">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Contact {airline.name} support</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full">
                Visit Airline Website
              </Button>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

