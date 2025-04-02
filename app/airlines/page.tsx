import Image from "next/image";
import Link from "next/link";
import { Search, Filter, Globe, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample airline data
const airlines = [
  {
    id: "emirates",
    name: "Emirates",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/850px-Emirates_logo.svg.png?q=80&w=200&auto=format&fit=crop",
    alliance: "None",
    rating: 4.7,
    routes: 157,
    featured: true,
  },
  {
    id: "singapore-airlines",
    name: "Singapore Airlines",
    logo: "https://s3-symbol-logo.tradingview.com/singapore-airlines--600.png",
    alliance: "Star Alliance",
    rating: 4.8,
    routes: 137,
    featured: true,
  },
  {
    id: "delta",
    name: "Delta Air Lines",
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0011/6343/brand.gif?itok=iSd6wBZZ",
    alliance: "SkyTeam",
    rating: 4.5,
    routes: 325,
    featured: true,
  },
  {
    id: "lufthansa",
    name: "Lufthansa",
    logo: "https://s.pilotsglobal.com/img/3/b/b/0/8/3bb08d41b60054cc4ed5b4bada0a7e1b.svg",
    alliance: "Star Alliance",
    rating: 4.6,
    routes: 220,
    featured: true,
  },
  {
    id: "qatar-airways",
    name: "Qatar Airways",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7HLjWJ68NPeAaD9kXjGad1LROdcWHJj_tw&s",
    alliance: "Oneworld",
    rating: 4.7,
    routes: 170,
    featured: true,
  },
  {
    id: "british-airways",
    name: "British Airways",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNp8EmoVrOGN5M6Bc_qGizBYlYW190xCHALQ&s",
    alliance: "Oneworld",
    rating: 4.4,
    routes: 180,
    featured: false,
  },
  {
    id: "air-france",
    name: "Air France",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-VcKXn2_IQFcoPsRctKazojHYuSD2AvZww&s",
    alliance: "SkyTeam",
    rating: 4.3,
    routes: 195,
    featured: false,
  },
  {
    id: "klm",
    name: "KLM",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrFftovudrgfqjvHyqXZrGLGJ2ukNDPjWuwA&s",
    alliance: "SkyTeam",
    rating: 4.4,
    routes: 165,
    featured: false,
  },
  {
    id: "united",
    name: "United Airlines",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh834z5G6nsuQF07Ow_2na_pvALvItKBPBKg&s",
    alliance: "Star Alliance",
    rating: 4.2,
    routes: 280,
    featured: false,
  },
  {
    id: "american-airlines",
    name: "American Airlines",
    logo: "https://s202.q4cdn.com/986123435/files/doc_downloads/logos/american-airlines/THUMB-aa_aa__ahz_4cp_grd_pos-(1).png",
    alliance: "Oneworld",
    rating: 4.1,
    routes: 290,
    featured: false,
  },
  {
    id: "qantas",
    name: "Qantas",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbFv1UPyitpkDpMjsQiyRCzo1jZAbQvFTeA&s",
    alliance: "Oneworld",
    rating: 4.5,
    routes: 85,
    featured: false,
  },
  {
    id: "cathay-pacific",
    name: "Cathay Pacific",
    logo: "https://brandlogos.net/wp-content/uploads/2014/01/cathay-pacific-air-vector-logo.png",
    alliance: "Oneworld",
    rating: 4.6,
    routes: 130,
    featured: false,
  },
];

export default function AirlinesPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Our Airline Partners
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          SkyBooker partners with over 100 airlines worldwide to bring you the
          best flight options and exclusive deals. Browse our airline partners
          below or search for specific airlines.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search airlines..." className="pl-10" />
        </div>
        <Button variant="outline" className="md:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="w-full flex flex-wrap h-auto p-0 bg-transparent gap-2">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800"
          >
            All Airlines
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
          <TabsTrigger
            value="independent"
            className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800"
          >
            Independent
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Featured Airlines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {airlines
                .filter((airline) => airline.featured)
                .map((airline) => (
                  <Card key={airline.id} className="overflow-hidden">
                    <div className="p-6 flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg border flex items-center justify-center p-2 bg-white">
                        <Image
                          src={airline.logo}
                          width={64}
                          height={64}
                          alt={`${airline.name} logo`}
                          className="object-contain w-full h-full"
                          priority
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl">
                          {airline.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= Math.floor(airline.rating)
                                    ? "fill-current text-yellow-500"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {airline.rating}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">
                            {airline.alliance === "None"
                              ? "Independent"
                              : airline.alliance}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {airline.routes} destinations
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted p-4 flex justify-between items-center">
                      <span className="text-sm font-medium">
                        View deals & routes
                      </span>
                      <Button size="sm" asChild>
                        <Link href={`/airlines/${airline.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">All Airline Partners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {airlines.map((airline) => (
              <Link
                key={airline.id}
                href={`/airlines/${airline.id}`}
                className="group"
              >
                <Card className="h-full transition-all group-hover:border-sky-200 group-hover:shadow-md">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg border flex items-center justify-center p-1 bg-white">
                      <Image
                        src={airline.logo}
                        width={48}
                        height={48}
                        alt={`${airline.name} logo`}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium group-hover:text-sky-700">
                        {airline.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current text-yellow-500" />
                        <span className="text-xs text-muted-foreground">
                          {airline.rating}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="star" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {airlines
              .filter((airline) => airline.alliance === "Star Alliance")
              .map((airline) => (
                <Link
                  key={airline.id}
                  href={`/airlines/${airline.id}`}
                  className="group"
                >
                  <Card className="h-full transition-all group-hover:border-sky-200 group-hover:shadow-md">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg border flex items-center justify-center p-1 bg-white">
                        <Image
                          src={airline.logo}
                          width={48}
                          height={48}
                          alt={`${airline.name} logo`}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-sky-700">
                          {airline.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current text-yellow-500" />
                          <span className="text-xs text-muted-foreground">
                            {airline.rating}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="skyteam" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {airlines
              .filter((airline) => airline.alliance === "SkyTeam")
              .map((airline) => (
                <Link
                  key={airline.id}
                  href={`/airlines/${airline.id}`}
                  className="group"
                >
                  <Card className="h-full transition-all group-hover:border-sky-200 group-hover:shadow-md">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg border flex items-center justify-center p-1 bg-white">
                        <Image
                          src={airline.logo}
                          width={48}
                          height={48}
                          alt={`${airline.name} logo`}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-sky-700">
                          {airline.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current text-yellow-500" />
                          <span className="text-xs text-muted-foreground">
                            {airline.rating}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="oneworld" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {airlines
              .filter((airline) => airline.alliance === "Oneworld")
              .map((airline) => (
                <Link
                  key={airline.id}
                  href={`/airlines/${airline.id}`}
                  className="group"
                >
                  <Card className="h-full transition-all group-hover:border-sky-200 group-hover:shadow-md">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg border flex items-center justify-center p-1 bg-white">
                        <Image
                          src={airline.logo}
                          width={48}
                          height={48}
                          alt={`${airline.name} logo`}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-sky-700">
                          {airline.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current text-yellow-500" />
                          <span className="text-xs text-muted-foreground">
                            {airline.rating}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="independent" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {airlines
              .filter((airline) => airline.alliance === "None")
              .map((airline) => (
                <Link
                  key={airline.id}
                  href={`/airlines/${airline.id}`}
                  className="group"
                >
                  <Card className="h-full transition-all group-hover:border-sky-200 group-hover:shadow-md">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg border flex items-center justify-center p-1 bg-white">
                        <Image
                          src={airline.logo}
                          width={48}
                          height={48}
                          alt={`${airline.name} logo`}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-sky-700">
                          {airline.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current text-yellow-500" />
                          <span className="text-xs text-muted-foreground">
                            {airline.rating}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4">Airline Alliances</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-sky-600" />
                <CardTitle>Star Alliance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The world's largest airline alliance with 26 member airlines,
                offering service to over 1,300 destinations in 195 countries.
              </p>
              <div className="flex flex-wrap gap-2">
                {airlines
                  .filter((airline) => airline.alliance === "Star Alliance")
                  .slice(0, 3)
                  .map((airline) => (
                    <Badge key={airline.id} variant="outline">
                      {airline.name}
                    </Badge>
                  ))}
                <Badge variant="outline">
                  +
                  {airlines.filter(
                    (airline) => airline.alliance === "Star Alliance"
                  ).length - 3}{" "}
                  more
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/airlines/alliances#star">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-sky-600" />
                <CardTitle>SkyTeam</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                A global airline alliance with 19 member airlines, providing
                service to over 1,150 destinations in 175 countries.
              </p>
              <div className="flex flex-wrap gap-2">
                {airlines
                  .filter((airline) => airline.alliance === "SkyTeam")
                  .slice(0, 3)
                  .map((airline) => (
                    <Badge key={airline.id} variant="outline">
                      {airline.name}
                    </Badge>
                  ))}
                <Badge variant="outline">
                  +
                  {airlines.filter((airline) => airline.alliance === "SkyTeam")
                    .length - 3}{" "}
                  more
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/airlines/alliances#skyteam">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-sky-600" />
                <CardTitle>Oneworld</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                An alliance of 14 leading airlines committed to providing the
                highest level of service to over 1,000 destinations in 170
                countries.
              </p>
              <div className="flex flex-wrap gap-2">
                {airlines
                  .filter((airline) => airline.alliance === "Oneworld")
                  .slice(0, 3)
                  .map((airline) => (
                    <Badge key={airline.id} variant="outline">
                      {airline.name}
                    </Badge>
                  ))}
                <Badge variant="outline">
                  +
                  {airlines.filter((airline) => airline.alliance === "Oneworld")
                    .length - 3}{" "}
                  more
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/airlines/alliances#oneworld">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <div className="bg-sky-50 rounded-xl p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                Become a SkyBooker Airline Partner
              </h2>
              <p className="text-muted-foreground">
                Are you an airline looking to expand your reach? Partner with
                SkyBooker to access millions of travelers worldwide and increase
                your bookings.
              </p>
              <Button asChild>
                <Link href="/airlines/partner-program">
                  Learn About Our Partner Program
                </Link>
              </Button>
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521727857535-28d2047619b5?q=80&w=1000&auto=format&fit=crop"
                fill
                alt="Airline partnership"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
