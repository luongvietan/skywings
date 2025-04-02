import Link from "next/link"
import { Award, CreditCard, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoyaltyProgram() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-lg bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800">
              <Award className="mr-1 h-4 w-4" />
              SkyRewards Loyalty Program
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Earn Miles, Unlock Rewards</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Our tiered loyalty program rewards you with every flight. Earn miles, redeem for flights, upgrades, and
              exclusive perks.
            </p>

            <Tabs defaultValue="blue" className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="blue">Blue</TabsTrigger>
                <TabsTrigger value="silver">Silver</TabsTrigger>
                <TabsTrigger value="gold">Gold</TabsTrigger>
              </TabsList>
              <TabsContent value="blue" className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-blue-100 p-2">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Blue Tier</h4>
                    <p className="text-sm text-muted-foreground">0–10,000 miles</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    Basic discounts on flights
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    Miles never expire with activity
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    Member-only promotions
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="silver" className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-200 p-2">
                    <Award className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Silver Tier</h4>
                    <p className="text-sm text-muted-foreground">10,000–50,000 miles</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    All Blue tier benefits
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    Free seat selection
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    Priority customer support
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    25% bonus miles on flights
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="gold" className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-amber-100 p-2">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Gold Tier</h4>
                    <p className="text-sm text-muted-foreground">50,000+ miles</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    All Silver tier benefits
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    Lounge access worldwide
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    50% bonus miles on flights
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    Priority boarding and check-in
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    Complimentary upgrades when available
                  </li>
                </ul>
              </TabsContent>
            </Tabs>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild>
                <Link href="/rewards">Join SkyRewards</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/rewards/calculator">Calculate Miles</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Miles Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>NYC → LON</span>
                    <span className="font-medium">3,200 miles</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>LAX → TYO</span>
                    <span className="font-medium">5,500 miles</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>SFO → SYD</span>
                    <span className="font-medium">7,400 miles</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Points Redemption</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Economy Flight</span>
                    <span className="font-medium">25,000 miles</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Business Class</span>
                    <span className="font-medium">60,000 miles</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>First Class</span>
                    <span className="font-medium">90,000 miles</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">SkyRewards Credit Card</CardTitle>
                <CardDescription>Earn 2x miles on all purchases</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <CreditCard className="h-12 w-12 text-sky-600" />
                <div className="space-y-1">
                  <p className="text-sm">Sign up bonus: 50,000 miles</p>
                  <p className="text-sm">Annual fee: $95 (waived first year)</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/rewards/card">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

