"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Plane,
  Gift,
  Award,
  ArrowRight,
  Search,
  Calendar,
  Users,
} from "lucide-react";

// Sample redemption options
const flightRedemptions = [
  {
    id: 1,
    from: "New York (JFK)",
    to: "Los Angeles (LAX)",
    airline: "SkyAir",
    points: 25000,
    cash: 5.6,
    date: "May 15, 2025",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/330px-Los_Angeles_with_Mount_Baldy.jpg",
  },
  {
    id: 2,
    from: "New York (JFK)",
    to: "London (LHR)",
    airline: "SkyAir",
    points: 60000,
    cash: 57.8,
    date: "May 20, 2025",
    image:
      "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    from: "New York (JFK)",
    to: "Tokyo (HND)",
    airline: "SkyAir",
    points: 80000,
    cash: 78.4,
    date: "June 5, 2025",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop",
  },
];

const upgradeRedemptions = [
  {
    id: 1,
    from: "Economy",
    to: "Premium Economy",
    points: 15000,
    route: "Domestic",
    image:
      "https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    from: "Economy",
    to: "Business",
    points: 30000,
    route: "Domestic",
    image:
      "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    from: "Economy",
    to: "Business",
    points: 45000,
    route: "International",
    image:
      "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=1000&auto=format&fit=crop",
  },
];

const partnerRedemptions = [
  {
    id: 1,
    partner: "Luxury Hotels Group",
    description: "One night stay at any participating hotel",
    points: 20000,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    partner: "Premium Car Rental",
    description: "One day mid-size car rental",
    points: 15000,
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    partner: "Shopping Rewards",
    description: "$100 gift card for partner retailers",
    points: 10000,
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function RedeemPage() {
  const [activeTab, setActiveTab] = useState("flights");
  const [userPoints, setUserPoints] = useState(75000); // Simulated user points
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [selectedRedemption, setSelectedRedemption] = useState<null | number>(
    null
  );
  const [checkoutStep, setCheckoutStep] = useState(0);

  const handleSearch = () => {
    // In a real app, this would search for available redemptions
    console.log("Searching for redemptions...");
  };

  const handleSelectRedemption = (id: number) => {
    setSelectedRedemption(id);
    setCheckoutStep(1);
  };

  const handleConfirmRedemption = () => {
    // In a real app, this would process the redemption
    setCheckoutStep(2);
    // Simulate points deduction
    if (activeTab === "flights" && selectedRedemption) {
      const redemption = flightRedemptions.find(
        (r) => r.id === selectedRedemption
      );
      if (redemption) {
        setUserPoints((prev) => prev - redemption.points);
      }
    }
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Redeem Your SkyRewards</h1>
            <p className="text-gray-600">
              Use your miles for flights, upgrades, and exclusive partner
              rewards.
            </p>
          </div>

          <div className="mt-4 md:mt-0 bg-gradient-to-r from-sky-100 to-indigo-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Your SkyRewards Balance</p>
            <p className="text-2xl font-bold text-indigo-600">
              {userPoints.toLocaleString()} miles
            </p>
          </div>
        </div>

        {checkoutStep === 0 ? (
          <>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="mb-8"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="flights">
                  <Plane className="h-4 w-4 mr-2" />
                  Flights
                </TabsTrigger>
                <TabsTrigger value="upgrades">
                  <Award className="h-4 w-4 mr-2" />
                  Upgrades
                </TabsTrigger>
                <TabsTrigger value="partners">
                  <Gift className="h-4 w-4 mr-2" />
                  Partner Rewards
                </TabsTrigger>
              </TabsList>

              <TabsContent value="flights">
                <Card>
                  <CardHeader>
                    <CardTitle>Redeem for Flights</CardTitle>
                    <CardDescription>
                      Search for available flight redemptions using your
                      SkyRewards miles.
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div>
                        <Label htmlFor="origin">From</Label>
                        <div className="relative">
                          <Plane className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="origin"
                            placeholder="Origin airport"
                            className="pl-10"
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="destination">To</Label>
                        <div className="relative">
                          <Plane className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="destination"
                            placeholder="Destination airport"
                            className="pl-10"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="departure">Departure Date</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="departure"
                            type="date"
                            className="pl-10"
                            value={departureDate}
                            onChange={(e) => setDepartureDate(e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="passengers">Passengers</Label>
                        <div className="relative">
                          <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Select
                            value={passengers}
                            onValueChange={setPassengers}
                          >
                            <SelectTrigger id="passengers" className="pl-10">
                              <SelectValue placeholder="Passengers" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Passenger</SelectItem>
                              <SelectItem value="2">2 Passengers</SelectItem>
                              <SelectItem value="3">3 Passengers</SelectItem>
                              <SelectItem value="4">4 Passengers</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700"
                      onClick={handleSearch}
                    >
                      <Search className="h-4 w-4 mr-2" />
                      Search Flights
                    </Button>

                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-4">
                        Available Flight Redemptions
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {flightRedemptions.map((flight) => (
                          <Card
                            key={flight.id}
                            className={`overflow-hidden ${
                              userPoints < flight.points ? "opacity-60" : ""
                            }`}
                          >
                            <div className="relative h-32">
                              <Image
                                src={flight.image || "/placeholder.svg"}
                                alt={`${flight.from} to ${flight.to}`}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute top-2 right-2">
                                <Badge className="bg-indigo-600">
                                  {flight.airline}
                                </Badge>
                              </div>
                            </div>
                            <CardContent className="pt-4">
                              <div className="flex justify-between items-center mb-2">
                                <div className="text-sm text-gray-500">
                                  {flight.date}
                                </div>
                                <div className="text-sm font-medium text-indigo-600">
                                  {flight.points.toLocaleString()} miles
                                </div>
                              </div>
                              <div className="flex items-center justify-between mb-4">
                                <div className="text-base font-medium">
                                  {flight.from}
                                </div>
                                <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                                <div className="text-base font-medium">
                                  {flight.to}
                                </div>
                              </div>
                              <div className="text-sm text-gray-500 mb-4">
                                + ${flight.cash.toFixed(2)} in taxes and fees
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button
                                className="w-full"
                                variant={
                                  userPoints < flight.points
                                    ? "outline"
                                    : "default"
                                }
                                disabled={userPoints < flight.points}
                                onClick={() =>
                                  handleSelectRedemption(flight.id)
                                }
                              >
                                {userPoints < flight.points
                                  ? "Not Enough Miles"
                                  : "Select This Flight"}
                              </Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="upgrades">
                <Card>
                  <CardHeader>
                    <CardTitle>Cabin Upgrades</CardTitle>
                    <CardDescription>
                      Use your miles to upgrade your existing bookings to a
                      higher cabin class.
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {upgradeRedemptions.map((upgrade) => (
                        <Card
                          key={upgrade.id}
                          className={`overflow-hidden ${
                            userPoints < upgrade.points ? "opacity-60" : ""
                          }`}
                        >
                          <div className="relative h-32">
                            <Image
                              src={upgrade.image || "/placeholder.svg"}
                              alt={`${upgrade.from} to ${upgrade.to}`}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-2 right-2">
                              <Badge className="bg-indigo-600">
                                {upgrade.route}
                              </Badge>
                            </div>
                          </div>
                          <CardContent className="pt-4">
                            <div className="flex items-center justify-between mb-4">
                              <div className="text-base font-medium">
                                {upgrade.from}
                              </div>
                              <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                              <div className="text-base font-medium">
                                {upgrade.to}
                              </div>
                            </div>
                            <div className="text-sm font-medium text-indigo-600 mb-4">
                              {upgrade.points.toLocaleString()} miles
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button
                              className="w-full"
                              variant={
                                userPoints < upgrade.points
                                  ? "outline"
                                  : "default"
                              }
                              disabled={userPoints < upgrade.points}
                              onClick={() => handleSelectRedemption(upgrade.id)}
                            >
                              {userPoints < upgrade.points
                                ? "Not Enough Miles"
                                : "Select This Upgrade"}
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h3 className="text-lg font-semibold mb-2">
                        How to Use Upgrade Certificates
                      </h3>
                      <p className="text-gray-600 mb-4">
                        After selecting an upgrade option, you'll receive an
                        upgrade certificate in your account. You can apply this
                        certificate to an eligible booking through your account
                        dashboard.
                      </p>
                      <div className="text-sm text-gray-500">
                        Note: Upgrades are subject to availability and fare
                        conditions.
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="partners">
                <Card>
                  <CardHeader>
                    <CardTitle>Partner Rewards</CardTitle>
                    <CardDescription>
                      Redeem your miles for hotel stays, car rentals, shopping,
                      and more.
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {partnerRedemptions.map((partner) => (
                        <Card
                          key={partner.id}
                          className={`overflow-hidden ${
                            userPoints < partner.points ? "opacity-60" : ""
                          }`}
                        >
                          <div className="relative h-32">
                            <Image
                              src={partner.image || "/placeholder.svg"}
                              alt={partner.partner}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="pt-4">
                            <h3 className="text-lg font-semibold mb-2">
                              {partner.partner}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                              {partner.description}
                            </p>
                            <div className="text-sm font-medium text-indigo-600 mb-2">
                              {partner.points.toLocaleString()} miles
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button
                              className="w-full"
                              variant={
                                userPoints < partner.points
                                  ? "outline"
                                  : "default"
                              }
                              disabled={userPoints < partner.points}
                              onClick={() => handleSelectRedemption(partner.id)}
                            >
                              {userPoints < partner.points
                                ? "Not Enough Miles"
                                : "Select This Reward"}
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h3 className="text-lg font-semibold mb-2">
                        Partner Reward Details
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Partner rewards are delivered as digital vouchers to
                        your registered email address within 24 hours of
                        redemption. Vouchers are subject to the terms and
                        conditions of each partner.
                      </p>
                      <Link
                        href="/rewards/partners"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                      >
                        View all partner rewards →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Miles Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">
                    Estimate how many miles you'll earn on your next flight.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/rewards/calculator" className="w-full">
                    <Button variant="outline" size="sm" className="w-full">
                      Calculate Miles
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Tier Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">
                    Learn about our tier benefits and how to qualify.
                  </p>
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
                  <CardTitle className="text-lg">Earn More Miles</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">
                    Explore our co-branded credit cards to earn more miles.
                  </p>
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
          </>
        ) : checkoutStep === 1 ? (
          <Card>
            <CardHeader>
              <CardTitle>Confirm Your Redemption</CardTitle>
              <CardDescription>
                Please review the details of your redemption before confirming.
              </CardDescription>
            </CardHeader>

            <CardContent>
              {activeTab === "flights" && selectedRedemption && (
                <div className="space-y-6">
                  {(() => {
                    const flight = flightRedemptions.find(
                      (f) => f.id === selectedRedemption
                    );
                    if (!flight) return null;

                    return (
                      <>
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="relative h-48 md:w-1/3">
                            <Image
                              src={flight.image || "/placeholder.svg"}
                              alt={`${flight.from} to ${flight.to}`}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>

                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">
                              Flight Redemption
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-gray-500">From</p>
                                <p className="font-medium">{flight.from}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">To</p>
                                <p className="font-medium">{flight.to}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Date</p>
                                <p className="font-medium">{flight.date}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Airline</p>
                                <p className="font-medium">{flight.airline}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                          <h3 className="text-lg font-semibold mb-4">
                            Redemption Summary
                          </h3>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-600">
                                Miles Required:
                              </span>
                              <span className="font-medium">
                                {flight.points.toLocaleString()} miles
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">
                                Taxes and Fees:
                              </span>
                              <span className="font-medium">
                                ${flight.cash.toFixed(2)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">
                                Your Current Balance:
                              </span>
                              <span className="font-medium">
                                {userPoints.toLocaleString()} miles
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">
                                Remaining Balance After Redemption:
                              </span>
                              <span className="font-medium">
                                {(userPoints - flight.points).toLocaleString()}{" "}
                                miles
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                          <h3 className="text-lg font-semibold mb-4">
                            Payment Method for Taxes and Fees
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="cardNumber">Card Number</Label>
                              <Input
                                id="cardNumber"
                                placeholder="**** **** **** 1234"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="expiry">Expiry Date</Label>
                                <Input id="expiry" placeholder="MM/YY" />
                              </div>
                              <div>
                                <Label htmlFor="cvv">CVV</Label>
                                <Input id="cvv" placeholder="***" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                          <div className="text-sm text-gray-500 mb-4">
                            By confirming this redemption, you agree to the{" "}
                            <Link
                              href="/terms"
                              className="text-indigo-600 hover:text-indigo-800"
                            >
                              Terms and Conditions
                            </Link>{" "}
                            of the SkyRewards program.
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button
                className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700"
                onClick={handleConfirmRedemption}
              >
                Confirm Redemption
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setCheckoutStep(0)}
              >
                Back to Redemption Options
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Redemption Confirmed!</CardTitle>
              <CardDescription>
                Your redemption has been successfully processed.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Thank You for Your Redemption
                </h3>
                <p className="text-gray-600 mb-6">
                  Your redemption details have been sent to your registered
                  email address.
                </p>
                <div className="inline-block bg-gray-100 px-4 py-2 rounded-lg mb-6">
                  <p className="text-gray-700">Your new SkyRewards balance:</p>
                  <p className="text-2xl font-bold text-indigo-600">
                    {userPoints.toLocaleString()} miles
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold mb-4">What's Next?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-indigo-100 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Check your email for your redemption confirmation and
                      e-ticket.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-indigo-100 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      View your booking details in your account dashboard.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-indigo-100 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Check in online 24 hours before your flight departure.
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Link href="/account" className="w-full">
                <Button className="w-full">Go to My Account</Button>
              </Link>
              <Link href="/" className="w-full">
                <Button variant="outline" className="w-full">
                  Return to Homepage
                </Button>
              </Link>
            </CardFooter>
          </Card>
        )}
      </div>
    </main>
  );
}
