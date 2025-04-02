"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const airlineLogos = [
  {
    name: "Emirates",
    logo: "https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Singapore Airlines",
    logo: "https://images.unsplash.com/photo-1583511380487-b5e348837783?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Delta",
    logo: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Lufthansa",
    logo: "https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Qatar Airways",
    logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "British Airways",
    logo: "https://images.unsplash.com/photo-1583511380487-b5e348837783?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Air France",
    logo: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "KLM",
    logo: "https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "United",
    logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "American Airlines",
    logo: "https://images.unsplash.com/photo-1583511380487-b5e348837783?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Qantas",
    logo: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Cathay Pacific",
    logo: "https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=200&auto=format&fit=crop",
  },
]

export default function AirlinePartners() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" })
    }
  }

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Airline Partners</h2>
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
                <div key={index} className="flex flex-col items-center space-y-2 flex-shrink-0 snap-start">
                  <div className="w-32 h-32 rounded-lg border flex items-center justify-center p-4 bg-white shadow-sm overflow-hidden">
                    <Image
                      src={airline.logo || "/placeholder.svg"}
                      width={80}
                      height={80}
                      alt={`${airline.name} logo`}
                      className="object-contain"
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
  )
}

