import Image from "next/image"
import Link from "next/link"
import { Award, CreditCard, Plane, Gift, ChevronRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function RewardsPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800">
                <Award className="mr-1 h-4 w-4" />
                SkyRewards Loyalty Program
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Earn Miles, Unlock Rewards
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our tiered loyalty program rewards you with every flight. Earn miles, redeem for flights, upgrades, and
                exclusive perks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild>
                  <Link href="/rewards/register">Join SkyRewards</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/rewards/calculator">Calculate Miles</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=1000&auto=format&fit=crop"
                fill
                alt="Airplane wing view with loyalty card"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Membership Tiers</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Unlock more benefits as you fly more with us
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50 rounded-t-lg">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-blue-100 p-2">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle>Blue Tier</CardTitle>
                    <CardDescription>0–10,000 miles</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Basic discounts on flights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Miles never expire with activity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Member-only promotions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Online account management</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/rewards/register">Join Now</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-gray-200 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardHeader className="bg-gray-50 rounded-t-lg">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-200 p-2">
                    <Award className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <CardTitle>Silver Tier</CardTitle>
                    <CardDescription>10,000–50,000 miles</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>All Blue tier benefits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Free seat selection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Priority customer support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>25% bonus miles on flights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Priority check-in</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/rewards/register">Join Now</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-amber-200">
              <CardHeader className="bg-amber-50 rounded-t-lg">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-amber-100 p-2">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <CardTitle>Gold Tier</CardTitle>
                    <CardDescription>50,000+ miles</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>All Silver tier benefits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Lounge access worldwide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>50% bonus miles on flights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Priority boarding and check-in</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Complimentary upgrades when available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Dedicated concierge service</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/rewards/register">Join Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800">
                <CreditCard className="mr-1 h-4 w-4" />
                SkyRewards Credit Card
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Earn Miles Faster</h2>
              <p className="text-muted-foreground md:text-xl">
                The SkyRewards Credit Card helps you earn miles on everyday purchases, not just when you fly.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-sky-600" />
                  <span>2x miles on all purchases</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-sky-600" />
                  <span>50,000 miles sign-up bonus</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-sky-600" />
                  <span>No foreign transaction fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-sky-600" />
                  <span>Annual fee waived first year</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-sky-600" />
                  <span>Free checked bag on flights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-sky-600" />
                  <span>Priority boarding</span>
                </div>
              </div>

              <Button asChild>
                <Link href="/rewards/card">Apply Now</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1000&auto=format&fit=crop"
                fill
                alt="Credit card with travel benefits"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How to Earn & Redeem Miles</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Maximize your rewards with these simple steps
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Plane className="h-10 w-10 text-sky-600 mb-2" />
                <CardTitle>Fly with Partner Airlines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Earn miles when you fly with any of our 100+ airline partners worldwide.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CreditCard className="h-10 w-10 text-sky-600 mb-2" />
                <CardTitle>Use SkyRewards Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Earn 2x miles on all purchases with the SkyRewards credit card.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Gift className="h-10 w-10 text-sky-600 mb-2" />
                <CardTitle>Shop with Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Earn miles when shopping with our retail, hotel, and car rental partners.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-sky-600 mb-2" />
                <CardTitle>Redeem for Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Use your miles for flights, upgrades, hotels, and exclusive experiences.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/rewards/calculator" className="flex items-center gap-1">
                Try Our Miles Calculator
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Start Earning?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join SkyRewards today and start earning miles with every booking.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/rewards/register">Join SkyRewards</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/support">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

