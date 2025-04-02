"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Check, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample alliance data
const alliances = [
  {
    id: "star",
    name: "Star Alliance",
    logo: "https://play-lh.googleusercontent.com/I9LVlwtRDLATvtXg8uO_LzQxVb-b6W7CbOgqs9YjIxMpWSL3N3jRnerv7spVz9DoMqo=w600-h300-pc0xffffff-pd",
    founded: 1997,
    members: 26,
    destinations: 1300,
    countries: 195,
    headquarters: "Frankfurt, Germany",
    description:
      "Star Alliance is the world's first and largest global airline alliance. Founded in 1997, it now has 26 member airlines, each with its own distinctive culture and style of service. Through its member airlines, Star Alliance offers more than 19,000 daily flights to over 1,300 airports in 195 countries.",
    benefits: [
      "Seamless travel across the alliance network",
      "Reciprocal frequent flyer benefits",
      "Access to over 1,000 airport lounges worldwide",
      "Priority check-in, boarding, and baggage handling",
      "Round-the-world fare options",
    ],
    airlines: [
      {
        name: "Lufthansa",
        logo: "https://s.pilotsglobal.com/img/3/b/b/0/8/3bb08d41b60054cc4ed5b4bada0a7e1b.svg",
        country: "Germany",
      },
      {
        name: "United Airlines",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh834z5G6nsuQF07Ow_2na_pvALvItKBPBKg&s",
        country: "United States",
      },
      {
        name: "Singapore Airlines",
        logo: "https://i.pinimg.com/originals/8f/a3/ba/8fa3bab1786cee705e20b5d32cca5ab2.jpg?q=80&w=200&auto=format&fit=crop",
        country: "Singapore",
      },
      {
        name: "Air Canada",
        logo: "https://images.seeklogo.com/logo-png/0/1/air-canada-logo-png_seeklogo-5051.png",
        country: "Canada",
      },
      {
        name: "ANA",
        logo: "https://download.logo.wine/logo/All_Nippon_Airways/All_Nippon_Airways-Logo.wine.png",
        country: "Japan",
      },
    ],
  },
  {
    id: "skyteam",
    name: "SkyTeam",
    logo: "https://images.squarespace-cdn.com/content/v1/63e01c10437ad70adfeef14d/1729132492217-CCVCU443F2HJFB2HWCSK/airline_alliance_cover-2.png",
    founded: 2000,
    members: 19,
    destinations: 1150,
    countries: 175,
    headquarters: "Amsterdam, Netherlands",
    description:
      "SkyTeam is a global airline alliance founded in 2000. With 19 member airlines, SkyTeam provides passengers access to an extensive global network with over 14,500 daily flights to more than 1,150 destinations in 175 countries. The alliance focuses on providing a seamless travel experience across all member airlines.",
    benefits: [
      "SkyPriority services at over 1,000 airports",
      "Shared frequent flyer programs",
      "Access to over 750 airport lounges",
      "Guaranteed reservations on sold-out flights",
      "Flexible round-the-world passes",
    ],
    airlines: [
      {
        name: "Delta Air Lines",
        logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0011/6343/brand.gif?itok=iSd6wBZZ",
        country: "United States",
      },
      {
        name: "Air France",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-VcKXn2_IQFcoPsRctKazojHYuSD2AvZww&s",
        country: "France",
      },
      {
        name: "KLM",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrFftovudrgfqjvHyqXZrGLGJ2ukNDPjWuwA&s",
        country: "Netherlands",
      },
      {
        name: "Korean Air",
        logo: "https://brandlogos.net/wp-content/uploads/2025/03/korean_air-logo_brandlogos.net_zzfhs.png",
        country: "South Korea",
      },
      {
        name: "China Eastern",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEyaizwV89IGZjxDRrq7k-J0pMe8ugcHeiw&s",
        country: "China",
      },
    ],
  },
  {
    id: "oneworld",
    name: "Oneworld",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDucXaBYPOKv3tGTK5kvTqhlUvyMutFfttzA&s",
    founded: 1999,
    members: 14,
    destinations: 1000,
    countries: 170,
    headquarters: "New York, United States",
    description:
      "Oneworld is an airline alliance founded in 1999. With 14 member airlines, Oneworld serves over 1,000 destinations in 170 countries. The alliance is committed to providing the highest level of service and convenience to frequent international travelers. Oneworld airlines work together to deliver a superior and seamless travel experience.",
    benefits: [
      "Priority check-in and boarding",
      "Shared frequent flyer benefits",
      "Access to over 650 airport lounges",
      "Smoother transfers between connecting flights",
      "Global support services",
    ],
    airlines: [
      {
        name: "American Airlines",
        logo: "https://s202.q4cdn.com/986123435/files/doc_downloads/logos/american-airlines/THUMB-aa_aa__ahz_4cp_grd_pos-(1).png",
        country: "United States",
      },
      {
        name: "British Airways",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNp8EmoVrOGN5M6Bc_qGizBYlYW190xCHALQ&s",
        country: "United Kingdom",
      },
      {
        name: "Qantas",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbFv1UPyitpkDpMjsQiyRCzo1jZAbQvFTeA&s",
        country: "Australia",
      },
      {
        name: "Cathay Pacific",
        logo: "https://brandlogos.net/wp-content/uploads/2014/01/cathay-pacific-air-vector-logo.png",
        country: "Hong Kong",
      },
      {
        name: "Qatar Airways",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7HLjWJ68NPeAaD9kXjGad1LROdcWHJj_tw&s",
        country: "Qatar",
      },
    ],
  },
];

export default function AirlineAlliancesPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Airline Alliances
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          Airline alliances are partnerships between airlines that allow them to
          extend their network and provide seamless travel experiences across
          multiple carriers. Learn about the three major global airline
          alliances and their benefits for travelers.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full mb-8">
        <TabsList className="w-full flex flex-wrap h-auto p-0 bg-transparent gap-2">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="star"
            className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800"
          >
            Star Alliance
          </TabsTrigger>
          <TabsTrigger
            value="skyteam"
            className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800"
          >
            SkyTeam
          </TabsTrigger>
          <TabsTrigger
            value="oneworld"
            className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800"
          >
            Oneworld
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-6 md:grid-cols-3">
            {alliances.map((alliance) => (
              <Card
                key={alliance.id}
                id={alliance.id}
                className="overflow-hidden"
              >
                <div className="p-6">
                  <div className="w-16 h-16 rounded-lg border flex items-center justify-center p-2 bg-white mb-4">
                    <Image
                      src={alliance.logo || "/placeholder.svg"}
                      width={50}
                      height={50}
                      alt={`${alliance.name} logo`}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {alliance.name}
                  </CardTitle>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                    <div>
                      <span className="text-muted-foreground">Founded:</span>
                      <span className="ml-1 font-medium">
                        {alliance.founded}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Members:</span>
                      <span className="ml-1 font-medium">
                        {alliance.members}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">
                        Destinations:
                      </span>
                      <span className="ml-1 font-medium">
                        {alliance.destinations}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Countries:</span>
                      <span className="ml-1 font-medium">
                        {alliance.countries}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {alliance.description}
                  </p>
                </div>
                <div className="bg-muted p-4 flex justify-between items-center">
                  <span className="text-sm font-medium">
                    View member airlines
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      document
                        .getElementById(alliance.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-sky-50 rounded-xl p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  Benefits of Airline Alliances
                </h2>
                <p className="text-muted-foreground">
                  Airline alliances offer numerous benefits for travelers, from
                  seamless connections to shared frequent flyer programs. Here
                  are some key advantages:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Seamless travel across multiple airlines with a single
                      ticket
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Earn and redeem miles across all member airlines
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Access to airport lounges worldwide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Priority check-in, boarding, and baggage handling
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Smoother connections between flights</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1000&auto=format&fit=crop"
                  fill
                  alt="Airplane flying over clouds"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </TabsContent>

        {alliances.map((alliance) => (
          <TabsContent key={alliance.id} value={alliance.id} className="mt-6">
            <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg border flex items-center justify-center p-3 bg-white">
                    <Image
                      src={alliance.logo || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt={`${alliance.name} logo`}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{alliance.name}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Headquarters: {alliance.headquarters}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    About {alliance.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {alliance.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <Card>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-sm">Founded</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-2xl font-bold">{alliance.founded}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-sm">
                          Member Airlines
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-2xl font-bold">{alliance.members}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-sm">Destinations</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-2xl font-bold">
                          {alliance.destinations}
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-sm">Countries</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-2xl font-bold">
                          {alliance.countries}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Member Airlines
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {alliance.airlines.map((airline, index) => (
                      <Card key={index}>
                        <CardContent className="p-4 flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg border flex items-center justify-center p-1 bg-white">
                            <Image
                              src={airline.logo || "/placeholder.svg"}
                              width={30}
                              height={30}
                              alt={`${airline.name} logo`}
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium">{airline.name}</h4>
                            <span className="text-xs text-muted-foreground">
                              {airline.country}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    <Card className="bg-sky-50 border-dashed border-sky-200">
                      <CardContent className="p-4 flex items-center justify-center h-full">
                        <Button
                          variant="ghost"
                          className="text-sky-700"
                          asChild
                        >
                          <Link href="/airlines">
                            View All Member Airlines
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Alliance Benefits
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {alliance.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequent Flyer Benefits</CardTitle>
                    <CardDescription>
                      Earn and redeem miles across all {alliance.name} member
                      airlines
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Elite Status Recognition</h4>
                      <p className="text-sm text-muted-foreground">
                        Your elite status with one member airline is recognized
                        across the entire alliance, giving you consistent
                        benefits wherever you fly.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">
                        Miles Earning & Redemption
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Earn miles when flying on any member airline and redeem
                        them for flights, upgrades, or other rewards across the
                        alliance.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Lounge Access</h4>
                      <p className="text-sm text-muted-foreground">
                        Elite members enjoy access to lounges operated by all
                        member airlines when traveling internationally.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/rewards">Learn About SkyRewards</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Round-the-World Tickets</CardTitle>
                    <CardDescription>
                      Explore the world with special fares
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {alliance.name} offers special Round-the-World tickets
                      that allow you to travel across multiple continents using
                      member airlines. These tickets offer flexibility and value
                      for global travelers.
                    </p>
                    <div className="relative h-[150px] rounded-lg overflow-hidden mb-4">
                      <Image
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop"
                        fill
                        alt="World travel"
                        className="object-cover"
                      />
                    </div>
                    <div className="text-sm">
                      <div className="flex justify-between mb-1">
                        <span>Starting from:</span>
                        <span className="font-bold">$3,999</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Max stops:</span>
                        <span className="font-bold">16</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Explore RTW Options</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Official Website</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Visit the official {alliance.name} website for more
                      information about member airlines, benefits, and services.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Visit {alliance.name} Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <section className="mt-12">
        <div className="bg-sky-50 rounded-xl p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Compare Alliance Benefits</h2>
              <p className="text-muted-foreground">
                Not sure which alliance is right for you? Compare the benefits
                and coverage of each alliance to find the best fit for your
                travel needs.
              </p>
              <Button asChild>
                <Link href="/airlines/alliance-comparison">
                  Compare Alliances
                </Link>
              </Button>
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop"
                fill
                alt="Airplane wing view"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
