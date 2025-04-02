"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Logo from "@/components/ui/logo"

export default function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden md:flex gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="flex items-center gap-1 h-auto p-0">
                Flights <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href="/flights/search">Search Flights</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/flights/deals">Flight Deals</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/flights/flexible">Flexible Dates</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="flex items-center gap-1 h-auto p-0">
                Airlines <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href="/airlines">All Airlines</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/airlines/alliances">Airline Alliances</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Popular Airlines</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link href="/airlines/emirates">Emirates</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/airlines/delta">Delta</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/airlines/singapore-airlines">Singapore Airlines</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="flex items-center gap-1 h-auto p-0">
                SkyRewards <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href="/rewards">Program Overview</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/rewards/tiers">Membership Tiers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/rewards/calculator">Miles Calculator</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/rewards/redeem">Redeem Miles</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/business" className="text-sm font-medium hover:text-sky-700">
            Business Travel
          </Link>
          <Link href="/support" className="text-sm font-medium hover:text-sky-700">
            Support
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link href="/account/login" className="text-sm font-medium hover:text-sky-700">
              Sign In
            </Link>
            <Button asChild>
              <Link href="/account/register">Register</Link>
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <Logo />
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container grid gap-6 p-6">
            <div className="grid gap-3">
              <h3 className="text-lg font-semibold">Flights</h3>
              <div className="grid gap-2">
                <Link
                  href="/flights/search"
                  className="text-sm hover:underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Search Flights
                </Link>
                <Link
                  href="/flights/deals"
                  className="text-sm hover:underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Flight Deals
                </Link>
                <Link
                  href="/flights/flexible"
                  className="text-sm hover:underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Flexible Dates
                </Link>
              </div>
            </div>

            <div className="grid gap-3">
              <h3 className="text-lg font-semibold">Airlines</h3>
              <div className="grid gap-2">
                <Link href="/airlines" className="text-sm hover:underline" onClick={() => setMobileMenuOpen(false)}>
                  All Airlines
                </Link>
                <Link
                  href="/airlines/alliances"
                  className="text-sm hover:underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Airline Alliances
                </Link>
                <Link
                  href="/airlines/emirates"
                  className="text-sm hover:underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Emirates
                </Link>
                <Link
                  href="/airlines/delta"
                  className="text-sm hover:underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Delta
                </Link>
              </div>
            </div>

            <div className="grid gap-3">
              <h3 className="text-lg font-semibold">SkyRewards</h3>
              <div className="grid gap-2">
                <Link href="/rewards" className="text-sm hover:underline" onClick={() => setMobileMenuOpen(false)}>
                  Program Overview
                </Link>
                <Link
                  href="/rewards/tiers"
                  className="text-sm hover:underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Membership Tiers
                </Link>
                <Link
                  href="/rewards/calculator"
                  className="text-sm hover:underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Miles Calculator
                </Link>
              </div>
            </div>

            <div className="grid gap-3">
              <Link
                href="/business"
                className="text-lg font-semibold hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Business Travel
              </Link>
              <Link
                href="/support"
                className="text-lg font-semibold hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Support
              </Link>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <Button asChild variant="outline" className="w-full">
                <Link href="/account/login" onClick={() => setMobileMenuOpen(false)}>
                  Sign In
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/account/register" onClick={() => setMobileMenuOpen(false)}>
                  Register
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

