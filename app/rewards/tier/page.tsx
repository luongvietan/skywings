import Image from "next/image"
import Link from "next/link"
import { Award, Check, Shield, Plane, CreditCard, Gift, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function RewardsTierPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">SkyRewards Membership Tiers</h1>
        <p className="text-muted-foreground max-w-3xl">
          Our tiered loyalty program rewards you with every flight. Earn miles, redeem for flights, upgrades, and
          exclusive perks. The more you fly, the more benefits you unlock.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full mb-12">
        <TabsList className="w-full flex flex-wrap h-auto p-0 bg-transparent gap-2">
          <TabsTrigger value="overview" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800">
            Overview
          </TabsTrigger>
          <TabsTrigger value="blue" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800">
            Blue
          </TabsTrigger>
          <TabsTrigger value="silver" className="data-[state=active]:bg-gray-200 data-[state=active]:text-gray-800">
            Silver
          </TabsTrigger>
          <TabsTrigger value="gold" className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800">
            Gold
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-8 md:grid-cols-3">
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
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Basic discounts on flights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Miles never expire with activity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Member-only promotions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Online account management</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/rewards/tier/blue">Learn More</Link>
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
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>All Blue tier benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Free seat selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Priority customer support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>25% bonus miles on flights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Priority check-in</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/rewards/tier/silver">Learn More</Link>
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
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>All Silver tier benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Lounge access worldwide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>50% bonus miles on flights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Priority boarding and check-in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Complimentary upgrades when available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Dedicated concierge service</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/rewards/tier/gold">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 bg-sky-50 rounded-xl p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">How to Earn Status</h2>
                <p className="text-muted-foreground">
                  Earning status with SkyRewards is simple. Fly with our partner airlines and earn miles based on the
                  distance flown and your fare class. The more you fly, the higher your tier status.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Earn 1 mile per mile flown in Economy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Earn 1.5 miles per mile flown in Premium Economy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Earn 2 miles per mile flown in Business Class</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Earn 3 miles per mile flown in First Class</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/rewards/calculator">Calculate Your Miles</Link>
                </Button>
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=1000&auto=format&fit=crop"
                  fill
                  alt="Airplane wing view with loyalty card"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Tier Benefits Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4">Benefit</th>
                    <th className="text-center py-4 px-4">
                      <div className="flex flex-col items-center">
                        <div className="rounded-full bg-blue-100 p-1 mb-1">
                          <Award className="h-4 w-4 text-blue-600" />
                        </div>
                        <span>Blue</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="flex flex-col items-center">
                        <div className="rounded-full bg-gray-200 p-1 mb-1">
                          <Award className="h-4 w-4 text-gray-600" />
                        </div>
                        <span>Silver</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="flex flex-col items-center">
                        <div className="rounded-full bg-amber-100 p-1 mb-1">
                          <Award className="h-4 w-4 text-amber-600" />
                        </div>
                        <span>Gold</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Miles Earning</td>
                    <td className="text-center py-3 px-4">Base rate</td>
                    <td className="text-center py-3 px-4">+25%</td>
                    <td className="text-center py-3 px-4">+50%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Free Seat Selection</td>
                    <td className="text-center py-3 px-4">-</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Priority Check-in</td>
                    <td className="text-center py-3 px-4">-</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Priority Boarding</td>
                    <td className="text-center py-3 px-4">-</td>
                    <td className="text-center py-3 px-4">-</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Lounge Access</td>
                    <td className="text-center py-3 px-4">-</td>
                    <td className="text-center py-3 px-4">-</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Complimentary Upgrades</td>
                    <td className="text-center py-3 px-4">-</td>
                    <td className="text-center py-3 px-4">-</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Extra Baggage Allowance</td>
                    <td className="text-center py-3 px-4">-</td>
                    <td className="text-center py-3 px-4">+1 bag</td>
                    <td className="text-center py-3 px-4">+2 bags</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Customer Support</td>
                    <td className="text-center py-3 px-4">Standard</td>
                    <td className="text-center py-3 px-4">Priority</td>
                    <td className="text-center py-3 px-4">Dedicated</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Partner Benefits</td>
                    <td className="text-center py-3 px-4">Basic</td>
                    <td className="text-center py-3 px-4">Enhanced</td>
                    <td className="text-center py-3 px-4">Premium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="blue" className="mt-6">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Blue Tier</h2>
                  <p className="text-muted-foreground">Entry level membership - 0 to 10,000 miles</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">About Blue Tier</h3>
                <p className="text-muted-foreground mb-4">
                  Blue tier is our entry-level membership, available to all SkyRewards members. It's the perfect
                  starting point for occasional travelers who want to begin earning rewards for their flights. As a Blue
                  member, you'll earn miles on every flight with our partner airlines, which you can redeem for future
                  travel and other rewards.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm">Miles Required</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-2xl font-bold">0</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm">Miles Earning</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-2xl font-bold">1x</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm">Miles Validity</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-2xl font-bold">24 months</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm">Next Tier</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-2xl font-bold">10,000 miles</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Blue Tier Benefits</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <Plane className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Miles Earning</h4>
                      <p className="text-sm text-muted-foreground">
                        Earn 1 mile for every mile flown with our partner airlines
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Miles Validity</h4>
                      <p className="text-sm text-muted-foreground">
                        Miles remain valid for 24 months with any account activity
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gift className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Member-Only Promotions</h4>
                      <p className="text-sm text-muted-foreground">
                        Access to exclusive deals and promotions for SkyRewards members
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Online Account Management</h4>
                      <p className="text-sm text-muted-foreground">
                        Manage your bookings, track your miles, and update preferences online
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">How to Reach Silver Tier</h3>
                <p className="text-muted-foreground mb-4">
                  To upgrade from Blue to Silver tier, you need to earn 10,000 qualifying miles within a calendar year.
                  Here are some ways to earn miles faster:
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Fly with our partner airlines - earn 1 mile per mile flown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Book premium cabins - earn up to 3x miles in First Class</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Use the SkyRewards credit card - earn 2x miles on all purchases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Shop with our retail partners - earn bonus miles</span>
                  </li>
                </ul>

                <div className="mt-6">
                  <Button asChild>
                    <Link href="/rewards/calculator">Calculate Your Miles to Silver</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle>Join SkyRewards</CardTitle>
                  <CardDescription>Start earning miles today with Blue tier membership</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative h-[150px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=1000&auto=format&fit=crop"
                      fill
                      alt="Airplane view"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sign up for free and start earning miles on your very first flight. No minimum spend required to
                    join.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/rewards/register">Join Now - It's Free</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SkyRewards Credit Card</CardTitle>
                  <CardDescription>Earn miles faster with our co-branded credit card</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CreditCard className="h-12 w-12 text-sky-600" />
                    <div>
                      <h4 className="font-medium">Blue Card Benefits</h4>
                      <p className="text-sm text-muted-foreground">Earn 2x miles on all purchases</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>25,000 bonus miles after spending $1,000 in first 3 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>No foreign transaction fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Annual fee: $95 (waived first year)</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/rewards/cards">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Redemption Options</CardTitle>
                  <CardDescription>Ways to use your Blue tier miles</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center">
                      <span>Economy flight (short-haul)</span>
                      <Badge variant="outline">15,000 miles</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Economy flight (long-haul)</span>
                      <Badge variant="outline">30,000 miles</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Seat upgrades</span>
                      <Badge variant="outline">From 5,000 miles</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Hotel stays</span>
                      <Badge variant="outline">From 10,000 miles</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Car rentals</span>
                      <Badge variant="outline">From 8,000 miles</Badge>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/rewards/redeem">View All Redemption Options</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="silver" className="mt-6">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gray-200 p-3">
                  <Award className="h-8 w-8 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Silver Tier</h2>
                  <p className="text-muted-foreground">Mid-level membership - 10,000 to 50,000 miles</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">About Silver Tier</h3>
                <p className="text-muted-foreground mb-4">
                  Silver tier is our mid-level membership, designed for regular travelers who fly several times a year.
                  As a Silver member, you'll enjoy enhanced benefits that make your travel experience more comfortable
                  and rewarding, including priority services, bonus miles, and more flexibility.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm">Miles Required</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-2xl font-bold">10,000</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm">Miles Earning</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-2xl font-bold">1.25x</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm">Miles Validity</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-2xl font-bold">36 months</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm">Next Tier</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-2xl font-bold">50,000 miles</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Silver Tier Benefits</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <Plane className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">25% Bonus Miles</h4>
                      <p className="text-sm text-muted-foreground">
                        Earn 1.25 miles for every mile flown with our partner airlines
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Free Seat Selection</h4>
                      <p className="text-sm text-muted-foreground">Choose your preferred seat at no additional cost</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Priority Check-in</h4>
                      <p className="text-sm text-muted-foreground">Dedicated check-in counters for faster service</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gift className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Extra Baggage Allowance</h4>
                      <p className="text-sm text-muted-foreground">One additional checked bag on all flights</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CreditCard className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Priority Customer Support</h4>
                      <p className="text-sm text-muted-foreground">Dedicated phone line with shorter wait times</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Partner Benefits</h4>
                      <p className="text-sm text-muted-foreground">
                        Enhanced benefits with hotel and car rental partners
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">How to Reach Gold Tier</h3>
                <p className="text-muted-foreground mb-4">
                  To upgrade from Silver to Gold tier, you need to earn 50,000 qualifying miles within a calendar year.
                  Here are some ways to earn miles faster:
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Fly with our partner airlines - earn 1.25 miles per mile flown as a Silver member</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Book premium cabins - earn up to 3.75x miles in First Class</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Use the SkyRewards Silver credit card - earn 3x miles on travel purchases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Take advantage of Silver tier bonus promotions</span>
                  </li>
                </ul>

                <div className="mt-6">
                  <Button asChild>
                    <Link href="/rewards/calculator">Calculate Your Miles to Gold</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gray-50 border-gray-200">
                <CardHeader>
                  <CardTitle>Silver Tier Status Match</CardTitle>
                  <CardDescription>Already have status with another airline?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative h-[150px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=1000&auto=format&fit=crop"
                      fill
                      alt="Airplane wing view"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We offer status matching for members with equivalent status in other airline loyalty programs.
                    Submit your proof of status and enjoy Silver benefits immediately.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/rewards/status-match">Request Status Match</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SkyRewards Silver Card</CardTitle>
                  <CardDescription>Exclusive credit card for Silver members</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CreditCard className="h-12 w-12 text-gray-600" />
                    <div>
                      <h4 className="font-medium">Silver Card Benefits</h4>
                      <p className="text-sm text-muted-foreground">Enhanced earning and premium benefits</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>3x miles on travel purchases, 2x on dining</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>50,000 bonus miles after spending $2,000 in first 3 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Annual companion certificate (taxes & fees apply)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Annual fee: $150</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/rewards/cards">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Silver Redemption Options</CardTitle>
                  <CardDescription>Enhanced ways to use your Silver tier miles</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center">
                      <span>Economy flight (short-haul)</span>
                      <Badge variant="outline">12,000 miles</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Economy flight (long-haul)</span>
                      <Badge variant="outline">25,000 miles</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Business class upgrade</span>
                      <Badge variant="outline">From 15,000 miles</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Premium hotel stays</span>
                      <Badge variant="outline">From 20,000 miles</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Airport lounge passes</span>
                      <Badge variant="outline">3,000 miles/visit</Badge>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/rewards/redeem">View All Redemption Options</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="gold" className="mt-6">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-amber-100 p-3">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Gold Tier</h2>
                  <p className="text-muted-foreground">Premium membership - 50,000+ miles</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">About Gold Tier</h3>
                <p className="text-muted-foreground mb-4">
                  Gold tier is our premium membership level, designed for frequent travelers who demand the highest
                  level of service and benefits. As a Gold member, you'll enjoy our most exclusive privileges, including
                  lounge access, priority services, generous bonus miles, and complimentary upgrades.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm">Miles Required</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-2xl font-bold">50,000</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm">Miles Earning</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-2xl font-bold">1.5x</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm">Miles Validity</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-2xl font-bold">No expiry</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm">Status Validity</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-2xl font-bold">24 months</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Gold Tier Benefits</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <Plane className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">50% Bonus Miles</h4>
                      <p className="text-sm text-muted-foreground">
                        Earn 1.5 miles for every mile flown with our partner airlines
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Lounge Access</h4>
                      <p className="text-sm text-muted-foreground">
                        Complimentary access to 1,000+ airport lounges worldwide
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Priority Boarding</h4>
                      <p className="text-sm text-muted-foreground">Be among the first to board on all flights</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gift className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Complimentary Upgrades</h4>
                      <p className="text-sm text-muted-foreground">
                        Automatic consideration for upgrades when available
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CreditCard className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Dedicated Concierge</h4>
                      <p className="text-sm text-muted-foreground">Personal assistance for all your travel needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Extra Baggage Allowance</h4>
                      <p className="text-sm text-muted-foreground">Two additional checked bags on all flights</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Plane className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Guaranteed Reservations</h4>
                      <p className="text-sm text-muted-foreground">
                        Guaranteed seat availability, even on full flights (72-hour notice required)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Premium Partner Benefits</h4>
                      <p className="text-sm text-muted-foreground">Elite status with hotel and car rental partners</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Maintaining Gold Status</h3>
                <p className="text-muted-foreground mb-4">
                  Once you achieve Gold tier, your status is valid for 24 months. To maintain Gold status, you need to
                  earn at least 50,000 qualifying miles within each 24-month period. Gold members enjoy these exclusive
                  benefits:
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Miles never expire as long as you maintain Gold status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Soft landing to Silver tier if qualification is not met</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Ability to gift Silver status to a companion after 75,000 miles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Exclusive Gold member events and experiences</span>
                  </li>
                </ul>

                <div className="mt-6">
                  <Button asChild>
                    <Link href="/rewards/calculator">Track Your Gold Status</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle>Gold Tier Exclusive Access</CardTitle>
                  <CardDescription>Premium benefits for our most valued members</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative h-[150px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop"
                      fill
                      alt="Airport lounge"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Gold members enjoy access to over 1,000 premium airport lounges worldwide, including our exclusive
                    SkyLounge locations with premium dining and spa services.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/rewards/lounges">View Lounge Network</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SkyRewards Gold Card</CardTitle>
                  <CardDescription>Our most prestigious credit card</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CreditCard className="h-12 w-12 text-amber-600" />
                    <div>
                      <h4 className="font-medium">Gold Card Benefits</h4>
                      <p className="text-sm text-muted-foreground">Premium travel benefits and accelerated earning</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>4x miles on travel, 3x on dining and groceries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>100,000 bonus miles after spending $4,000 in first 3 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Annual companion certificate valid for any cabin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>$200 annual travel credit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Annual fee: $450</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/rewards/cards">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Gold Redemption Options</CardTitle>
                  <CardDescription>Premium ways to use your Gold tier miles</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center">
                      <span>Business class (long-haul)</span>
                      <Badge variant="outline">50,000 miles</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>First class (long-haul)</span>
                      <Badge variant="outline">80,000 miles</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Round-the-world ticket</span>
                      <Badge variant="outline">200,000 miles</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Luxury hotel suites</span>
                      <Badge variant="outline">From 30,000 miles</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Exclusive experiences</span>
                      <Badge variant="outline">From 25,000 miles</Badge>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/rewards/redeem">View All Redemption Options</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

