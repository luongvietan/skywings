"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const airlineLogos = [
  {
    name: "Emirates",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/850px-Emirates_logo.svg.png?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Singapore Airlines",
    logo: "https://i.pinimg.com/originals/8f/a3/ba/8fa3bab1786cee705e20b5d32cca5ab2.jpg?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Delta",
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0011/6343/brand.gif?itok=iSd6wBZZ",
  },
  {
    name: "Lufthansa",
    logo: "https://s.pilotsglobal.com/img/3/b/b/0/8/3bb08d41b60054cc4ed5b4bada0a7e1b.svg",
  },
  {
    name: "Qatar Airways",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7HLjWJ68NPeAaD9kXjGad1LROdcWHJj_tw&s",
  },
  {
    name: "British Airways",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNp8EmoVrOGN5M6Bc_qGizBYlYW190xCHALQ&s",
  },
  {
    name: "Air France",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-VcKXn2_IQFcoPsRctKazojHYuSD2AvZww&s",
  },
  {
    name: "KLM",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrFftovudrgfqjvHyqXZrGLGJ2ukNDPjWuwA&s",
  },
  {
    name: "United",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh834z5G6nsuQF07Ow_2na_pvALvItKBPBKg&s",
  },
  {
    name: "American Airlines",
    logo: "https://s202.q4cdn.com/986123435/files/doc_downloads/logos/american-airlines/THUMB-aa_aa__ahz_4cp_grd_pos-(1).png",
  },
  {
    name: "Qantas",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbFv1UPyitpkDpMjsQiyRCzo1jZAbQvFTeA&s",
  },
  {
    name: "Cathay Pacific",
    logo: "https://brandlogos.net/wp-content/uploads/2014/01/cathay-pacific-air-vector-logo.png",
  },
];

export default function AirlinePartners() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Our Airline Partners
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Seamless bookings with 100+ airline partners worldwide
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto mt-8">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={scrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Scroll left</span>
            </Button>

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-8 pb-4 pt-2 px-4 scrollbar-hide snap-x"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {airlineLogos.map((airline, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 flex-shrink-0 snap-start"
                >
                  <div className="w-40 h-40 rounded-lg border flex items-center justify-center bg-white shadow-sm overflow-hidden">
                    <Image
                      src={airline.logo || "/placeholder.svg"}
                      width={160}
                      height={160}
                      alt={`${airline.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">{airline.name}</span>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={scrollRight}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>

          <div className="flex items-center justify-center mt-6">
            <Button variant="link" className="gap-1" asChild>
              <a href="/airlines">
                View all airline partners
                <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
