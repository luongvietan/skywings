"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const deals = [
  {
    airline: "Emirates",
    alliance: "none",
    title: "Dubai Special",
    discount: "15% Off",
    description: "Economy and Business class to Dubai",
    expiry: "Valid until June 30, 2025",
    image:
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=500&auto=format&fit=crop",
  },
  {
    airline: "Singapore Airlines",
    alliance: "star",
    title: "Asia Explorer",
    discount: "10% Off",
    description: "All routes to Southeast Asia",
    expiry: "Valid until May 15, 2025",
    image:
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=500&auto=format&fit=crop",
  },
  {
    airline: "Delta",
    alliance: "skyteam",
    title: "Transatlantic Sale",
    discount: "12% Off",
    description: "US to Europe routes",
    expiry: "Valid until July 31, 2025",
    image:
      "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?q=80&w=500&auto=format&fit=crop",
  },
  {
    airline: "Lufthansa",
    alliance: "star",
    title: "European Getaway",
    discount: "8% Off",
    description: "All European destinations",
    expiry: "Valid until August 15, 2025",
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=500&auto=format&fit=crop",
  },
  {
    airline: "British Airways",
    alliance: "oneworld",
    title: "London Calling",
    discount: "10% Off",
    description: "All routes to London Heathrow",
    expiry: "Valid until September 30, 2025",
    image:
      "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?q=80&w=500&auto=format&fit=crop",
  },
  {
    airline: "Qantas",
    alliance: "oneworld",
    title: "Pacific Routes",
    discount: "10% Off",
    description: "All flights to Australia and New Zealand",
    expiry: "Valid until October 31, 2025",
    image:
      "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=500&auto=format&fit=crop",
  },
  {
    airline: "Air France",
    alliance: "skyteam",
    title: "Paris Special",
    discount: "15% Off",
    description: "All routes to Paris",
    expiry: "Valid until November 15, 2025",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=500&auto=format&fit=crop",
  },
  {
    airline: "United",
    alliance: "star",
    title: "Domestic US Sale",
    discount: "20% Off",
    description: "All domestic US routes",
    expiry: "Valid until December 31, 2025",
    image:
      "https://images.unsplash.com/photo-1575408264798-b50b252663e6?q=80&w=500&auto=format&fit=crop",
  },
];

export default function ExclusiveDeals() {
  const [activeAlliance, setActiveAlliance] = useState<string>("all");

  const filteredDeals =
    activeAlliance === "all"
      ? deals
      : deals.filter((deal) => deal.alliance === activeAlliance);

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Partner Airlines Specials
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Exclusive deals from our airline partners
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Button
              variant={activeAlliance === "all" ? "default" : "outline"}
              onClick={() => setActiveAlliance("all")}
            >
              All Deals
            </Button>
            <Button
              variant={activeAlliance === "star" ? "default" : "outline"}
              onClick={() => setActiveAlliance("star")}
            >
              Star Alliance
            </Button>
            <Button
              variant={activeAlliance === "skyteam" ? "default" : "outline"}
              onClick={() => setActiveAlliance("skyteam")}
            >
              SkyTeam
            </Button>
            <Button
              variant={activeAlliance === "oneworld" ? "default" : "outline"}
              onClick={() => setActiveAlliance("oneworld")}
            >
              Oneworld
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full">
            {filteredDeals.map((deal, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-40">
                    <Image
                      src={deal.image || "/placeholder.svg"}
                      alt={deal.title}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">
                      {deal.discount}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground mb-1">
                    {deal.airline}
                  </div>
                  <CardTitle className="text-lg">{deal.title}</CardTitle>
                  <CardDescription>{deal.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4 pt-0">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {deal.expiry}
                  </div>
                  <Button size="sm" variant="ghost" className="gap-1" asChild>
                    <Link
                      href={`/flights/deals/${deal.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      View Deal
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Button variant="outline" className="mt-8" asChild>
            <Link href="/flights/deals">View All Deals</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
