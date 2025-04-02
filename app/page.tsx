import Link from "next/link"
import Image from "next/image"
import { Search, Shield, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import AirlinePartners from "@/components/airline-partners"
import LoyaltyProgram from "@/components/loyalty-program"
import ExclusiveDeals from "@/components/exclusive-deals"
import TrendingRoutes from "@/components/trending-routes"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="inline-flex bg-sky-100 text-sky-800 hover:bg-sky-100 border-none">
                  100+ Airline Partners
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Seamless Flight Bookings Worldwide
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Book flights with 100+ global airline partners and earn rewards with every journey. Exclusive deals,
                  flexible options, and a loyalty program that truly rewards.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <div className="rounded-xl border bg-card text-card-foreground shadow p-4">
                  <Tabs defaultValue="flights" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-4">
                      <TabsTrigger value="flights">Flights</TabsTrigger>
                      <TabsTrigger value="hotels">Hotels</TabsTrigger>
                      <TabsTrigger value="packages">Packages</TabsTrigger>
                    </TabsList>
                    <TabsContent value="flights" className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            From
                          </label>
                          <Input type="text" placeholder="City or Airport" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            To
                          </label>
                          <Input type="text" placeholder="City or Airport" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Departure
                          </label>
                          <Input type="date" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Return
                          </label>
                          <Input type="date" />
                        </div>
                      </div>
                      <Button className="w-full" asChild>
                        <Link href="/flights/search">
                          <Search className="mr-2 h-4 w-4" /> Search Flights
                        </Link>
                      </Button>
                    </TabsContent>
                    <TabsContent value="hotels" className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Destination
                        </label>
                        <Input type="text" placeholder="City or Hotel" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Check-in
                          </label>
                          <Input type="date" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Check-out
                          </label>
                          <Input type="date" />
                        </div>
                      </div>
                      <Button className="w-full">
                        <Search className="mr-2 h-4 w-4" /> Search Hotels
                      </Button>
                    </TabsContent>
                    <TabsContent value="packages" className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            From
                          </label>
                          <Input type="text" placeholder="City or Airport" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            To
                          </label>
                          <Input type="text" placeholder="City or Airport" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Departure
                          </label>
                          <Input type="date" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Return
                          </label>
                          <Input type="date" />
                        </div>
                      </div>
                      <Button className="w-full">
                        <Search className="mr-2 h-4 w-4" /> Search Packages
                      </Button>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  <span>Verified by IATA</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="h-4 w-4" />
                  <span>Price Match Guarantee</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop"
                width={500}
                height={400}
                alt="Airplane wing view over clouds"
                className="rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <AirlinePartners />
      <LoyaltyProgram />
      <ExclusiveDeals />
      <TrendingRoutes />
      <Testimonials />

      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Take Off?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join SkyRewards today and start earning miles with every booking.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/account/register">Sign Up Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/rewards">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

