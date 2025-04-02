"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, Info, Plane } from "lucide-react"

// Sample airport data
const popularAirports = [
  { code: "JFK", name: "New York John F. Kennedy", country: "United States" },
  { code: "LAX", name: "Los Angeles International", country: "United States" },
  { code: "LHR", name: "London Heathrow", country: "United Kingdom" },
  { code: "CDG", name: "Paris Charles de Gaulle", country: "France" },
  { code: "DXB", name: "Dubai International", country: "United Arab Emirates" },
  { code: "HND", name: "Tokyo Haneda", country: "Japan" },
  { code: "SYD", name: "Sydney Kingsford Smith", country: "Australia" },
  { code: "SIN", name: "Singapore Changi", country: "Singapore" },
]

// Sample tier multipliers
const tierMultipliers = {
  blue: 1,
  silver: 1.5,
  gold: 2,
}

// Sample distance data (in miles)
const distances: Record<string, Record<string, number>> = {
  JFK: { LAX: 2475, LHR: 3451, CDG: 3636, DXB: 6836, HND: 6760, SYD: 9950, SIN: 9537 },
  LAX: { JFK: 2475, LHR: 5456, CDG: 5670, DXB: 8339, HND: 5478, SYD: 7488, SIN: 8770 },
  LHR: { JFK: 3451, LAX: 5456, CDG: 214, DXB: 3400, HND: 5974, SYD: 10573, SIN: 6764 },
  CDG: { JFK: 3636, LAX: 5670, LHR: 214, DXB: 3259, HND: 6040, SYD: 10531, SIN: 6678 },
  DXB: { JFK: 6836, LAX: 8339, LHR: 3400, CDG: 3259, HND: 4828, SYD: 7480, SIN: 3644 },
  HND: { JFK: 6760, LAX: 5478, LHR: 5974, CDG: 6040, DXB: 4828, SYD: 4863, SIN: 3316 },
  SYD: { JFK: 9950, LAX: 7488, LHR: 10573, CDG: 10531, DXB: 7480, HND: 4863, SIN: 3907 },
  SIN: { JFK: 9537, LAX: 8770, LHR: 6764, CDG: 6678, DXB: 3644, HND: 3316, SYD: 3907 },
}

export default function MilesCalculatorPage() {
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [tier, setTier] = useState("blue")
  const [cabinClass, setCabinClass] = useState("economy")
  const [calculationResult, setCalculationResult] = useState<null | {
    distance: number
    baseMiles: number
    tierBonus: number
    cabinBonus: number
    totalMiles: number
  }>(null)

  // Cabin class multipliers
  const cabinMultipliers = {
    economy: 1,
    premium: 1.25,
    business: 1.5,
    first: 2,
  }

  const calculateMiles = () => {
    if (!origin || !destination || origin === destination) {
      return
    }

    // Get distance between airports
    const distance = distances[origin]?.[destination] || 0

    // Calculate base miles (equal to distance)
    const baseMiles = distance

    // Calculate tier bonus
    const tierMultiplier = tierMultipliers[tier as keyof typeof tierMultipliers]
    const tierBonus = baseMiles * (tierMultiplier - 1)

    // Calculate cabin class bonus
    const cabinMultiplier = cabinMultipliers[cabinClass as keyof typeof cabinMultipliers]
    const cabinBonus = baseMiles * (cabinMultiplier - 1)

    // Calculate total miles
    const totalMiles = Math.round(baseMiles + tierBonus + cabinBonus)

    setCalculationResult({
      distance,
      baseMiles,
      tierBonus,
      cabinBonus,
      totalMiles,
    })
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">SkyRewards Miles Calculator</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estimate how many miles you'll earn on your next flight. Enter your origin, destination, membership tier,
            and cabin class to calculate your potential miles.
          </p>
        </div>

        <Tabs defaultValue="calculator" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">
              <Calculator className="h-4 w-4 mr-2" />
              Calculator
            </TabsTrigger>
            <TabsTrigger value="how-it-works">
              <Info className="h-4 w-4 mr-2" />
              How It Works
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calculator">
            <Card>
              <CardHeader>
                <CardTitle>Calculate Your Miles</CardTitle>
                <CardDescription>Enter your flight details to estimate your miles.</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="origin">Origin Airport</Label>
                      <Select value={origin} onValueChange={setOrigin}>
                        <SelectTrigger id="origin">
                          <SelectValue placeholder="Select origin airport" />
                        </SelectTrigger>
                        <SelectContent>
                          {popularAirports.map((airport) => (
                            <SelectItem key={airport.code} value={airport.code}>
                              {airport.code} - {airport.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="destination">Destination Airport</Label>
                      <Select value={destination} onValueChange={setDestination}>
                        <SelectTrigger id="destination">
                          <SelectValue placeholder="Select destination airport" />
                        </SelectTrigger>
                        <SelectContent>
                          {popularAirports.map((airport) => (
                            <SelectItem key={airport.code} value={airport.code}>
                              {airport.code} - {airport.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="tier">SkyRewards Tier</Label>
                      <Select value={tier} onValueChange={setTier}>
                        <SelectTrigger id="tier">
                          <SelectValue placeholder="Select your tier" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="blue">Blue</SelectItem>
                          <SelectItem value="silver">Silver</SelectItem>
                          <SelectItem value="gold">Gold</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="cabin">Cabin Class</Label>
                      <Select value={cabinClass} onValueChange={setCabinClass}>
                        <SelectTrigger id="cabin">
                          <SelectValue placeholder="Select cabin class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Economy</SelectItem>
                          <SelectItem value="premium">Premium Economy</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="first">First</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full mt-6 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700"
                  onClick={calculateMiles}
                  disabled={!origin || !destination || origin === destination}
                >
                  <Plane className="h-4 w-4 mr-2" />
                  Calculate Miles
                </Button>

                {calculationResult && (
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold mb-4 text-center">Your Estimated Miles</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">Flight Distance</p>
                        <p className="text-2xl font-bold">{calculationResult.distance.toLocaleString()} miles</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">Total Miles Earned</p>
                        <p className="text-2xl font-bold text-indigo-600">
                          {calculationResult.totalMiles.toLocaleString()} miles
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Base Miles:</span>
                        <span className="font-medium">{calculationResult.baseMiles.toLocaleString()} miles</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">
                          Tier Bonus ({tier.charAt(0).toUpperCase() + tier.slice(1)}):
                        </span>
                        <span className="font-medium">{calculationResult.tierBonus.toLocaleString()} miles</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">
                          Cabin Bonus ({cabinClass.charAt(0).toUpperCase() + cabinClass.slice(1)}):
                        </span>
                        <span className="font-medium">{calculationResult.cabinBonus.toLocaleString()} miles</span>
                      </div>

                      <div className="h-px bg-gray-200 my-2"></div>

                      <div className="flex justify-between items-center font-bold">
                        <span>Total Miles:</span>
                        <span className="text-indigo-600">{calculationResult.totalMiles.toLocaleString()} miles</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex flex-col space-y-2">
                <p className="text-sm text-gray-500 text-center">
                  Want to see how many miles you need for a free flight?
                </p>
                <Link href="/rewards/redeem" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Redemption Options
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="how-it-works">
            <Card>
              <CardHeader>
                <CardTitle>How Miles Are Calculated</CardTitle>
                <CardDescription>Understanding the SkyRewards miles earning structure.</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Base Miles</h3>
                    <p className="text-gray-600">
                      Base miles are equal to the actual distance flown between your origin and destination airports.
                      For example, a flight from New York (JFK) to Los Angeles (LAX) earns approximately 2,475 base
                      miles.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Tier Bonuses</h3>
                    <p className="text-gray-600 mb-3">Your SkyRewards tier provides a multiplier on your base miles:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-20 font-medium">Blue:</div>
                        <div>1x base miles (no bonus)</div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-20 font-medium">Silver:</div>
                        <div>1.5x base miles (50% bonus)</div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-20 font-medium">Gold:</div>
                        <div>2x base miles (100% bonus)</div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cabin Class Bonuses</h3>
                    <p className="text-gray-600 mb-3">The cabin class you fly in provides additional multipliers:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-36 font-medium">Economy:</div>
                        <div>1x base miles (no bonus)</div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-36 font-medium">Premium Economy:</div>
                        <div>1.25x base miles (25% bonus)</div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-36 font-medium">Business:</div>
                        <div>1.5x base miles (50% bonus)</div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-36 font-medium">First:</div>
                        <div>2x base miles (100% bonus)</div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Example Calculation</h3>
                    <p className="text-gray-600 mb-3">
                      For a Gold tier member flying Business class from New York to Los Angeles:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li>Base Miles: 2,475 miles</li>
                      <li>Tier Bonus: 2,475 × (2.0 - 1.0) = 2,475 miles</li>
                      <li>Cabin Bonus: 2,475 × (1.5 - 1.0) = 1,238 miles</li>
                      <li>Total Miles: 2,475 + 2,475 + 1,238 = 6,188 miles</li>
                    </ul>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Link href="/rewards" className="w-full">
                  <Button variant="outline" className="w-full">
                    Learn More About SkyRewards
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Explore Tiers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">Learn about our tier benefits and how to qualify.</p>
            </CardContent>
            <CardFooter>
              <Link href="/rewards/tiers/blue" className="w-full">
                <Button variant="outline" size="sm" className="w-full">
                  View Tiers
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Redeem Miles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">Use your miles for flights, upgrades, and more.</p>
            </CardContent>
            <CardFooter>
              <Link href="/rewards/redeem" className="w-full">
                <Button variant="outline" size="sm" className="w-full">
                  Redeem Now
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Credit Cards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">Earn more miles with our co-branded credit cards.</p>
            </CardContent>
            <CardFooter>
              <Link href="/rewards/cards" className="w-full">
                <Button variant="outline" size="sm" className="w-full">
                  View Cards
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}

