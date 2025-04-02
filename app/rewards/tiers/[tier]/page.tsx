import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

// Define tier data
const tiers = {
  blue: {
    name: "Blue",
    color: "bg-blue-500",
    textColor: "text-blue-500",
    borderColor: "border-blue-500",
    icon: "/placeholder.svg?height=100&width=100",
    description: "Our entry-level tier with essential benefits for occasional travelers.",
    requirements: "No minimum miles required. Join for free and start earning miles with your first flight.",
    benefits: [
      "Earn 1 mile per mile flown",
      "Access to member-only promotions",
      "Online booking fee waiver",
      "Priority customer service",
      "Miles valid for 24 months",
    ],
    nextTier: {
      name: "Silver",
      requirements: "Fly 25,000 miles or 30 segments in a calendar year",
    },
  },
  silver: {
    name: "Silver",
    color: "bg-gray-400",
    textColor: "text-gray-500",
    borderColor: "border-gray-400",
    icon: "/placeholder.svg?height=100&width=100",
    description: "Enhanced benefits for frequent travelers who value comfort and convenience.",
    requirements: "Fly 25,000 miles or 30 segments in a calendar year.",
    benefits: [
      "All Blue tier benefits",
      "Earn 1.5 miles per mile flown",
      "1 free checked bag on all flights",
      "Priority check-in and boarding",
      "50% discount on seat selection fees",
      "Lounge access (4 passes per year)",
      "Miles valid for 36 months",
    ],
    nextTier: {
      name: "Gold",
      requirements: "Fly 50,000 miles or 60 segments in a calendar year",
    },
  },
  gold: {
    name: "Gold",
    color: "bg-yellow-500",
    textColor: "text-yellow-600",
    borderColor: "border-yellow-500",
    icon: "/placeholder.svg?height=100&width=100",
    description: "Premium benefits for our most loyal customers who travel extensively.",
    requirements: "Fly 50,000 miles or 60 segments in a calendar year.",
    benefits: [
      "All Silver tier benefits",
      "Earn 2 miles per mile flown",
      "2 free checked bags on all flights",
      "Priority check-in, security, and boarding",
      "Free seat selection on all flights",
      "Unlimited lounge access",
      "Complimentary upgrades when available",
      "Dedicated customer service line",
      "Miles never expire",
    ],
    nextTier: null,
  },
}

export default function TierPage({ params }: { params: { tier: string } }) {
  const tier = params.tier.toLowerCase()

  // Check if tier exists
  if (!tiers[tier as keyof typeof tiers]) {
    notFound()
  }

  const tierData = tiers[tier as keyof typeof tiers]

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className={`rounded-full p-6 ${tierData.color}`}>
            <Image
              src={tierData.icon || "/placeholder.svg"}
              alt={`${tierData.name} Tier Icon`}
              width={100}
              height={100}
              className="h-24 w-24"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className={`text-4xl font-bold mb-2 ${tierData.textColor}`}>SkyRewards {tierData.name} Tier</h1>
            <p className="text-xl text-gray-600 mb-4">{tierData.description}</p>
            <div className="inline-block bg-gray-100 px-4 py-2 rounded-lg">
              <h3 className="font-semibold text-gray-700">Requirements</h3>
              <p className="text-gray-600">{tierData.requirements}</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Exclusive Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tierData.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                <div className={`rounded-full p-1 ${tierData.color} flex-shrink-0`}>
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {tierData.nextTier && (
          <Card className="mb-12 border-2 border-dashed border-gray-300">
            <CardHeader>
              <CardTitle>Ready for an Upgrade?</CardTitle>
              <CardDescription>Unlock even more benefits with our {tierData.nextTier.name} tier.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                <strong>How to qualify:</strong> {tierData.nextTier.requirements}
              </p>
            </CardContent>
            <CardFooter>
              <Link href={`/rewards/tiers/${tierData.nextTier.name.toLowerCase()}`}>
                <Button className="bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700">
                  Explore {tierData.nextTier.name} Benefits
                </Button>
              </Link>
            </CardFooter>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Track Your Progress</CardTitle>
              <CardDescription>
                Monitor your miles and flight segments to maintain or upgrade your tier status.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Sign in to your account to view your current progress toward tier qualification.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/account/login">
                <Button variant="outline">Sign In to Track Progress</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Calculate Your Miles</CardTitle>
              <CardDescription>Estimate how many miles you'll earn on your next flight.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Use our miles calculator to plan your tier qualification strategy.</p>
            </CardContent>
            <CardFooter>
              <Link href="/rewards/calculator">
                <Button variant="outline">Miles Calculator</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}

