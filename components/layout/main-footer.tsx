import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CreditCard,
  Shield,
} from "lucide-react";
import Logo from "@/components/ui/logo";

export default function MainFooter() {
  return (
    <footer className="w-full border-t bg-sky-950 text-white">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col gap-4">
            <Logo variant="white" className=" text-sky-200" />
            <p className="text-sm text-sky-200">
              The complete flight booking platform with 100+ airline partners
              worldwide.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/Duelurker/"
                className="text-sky-200 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.x.com/Duelurker/"
                className="text-sky-200 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.instagram.com/Duelurker/"
                className="text-sky-200 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/Duelurker/"
                className="text-sky-200 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Flights</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/flights/search"
                  className="text-sky-200 hover:text-white"
                >
                  Search Flights
                </Link>
              </li>
              <li>
                <Link
                  href="/flights/deals"
                  className="text-sky-200 hover:text-white"
                >
                  Flight Deals
                </Link>
              </li>
              <li>
                <Link
                  href="/flights/flexible"
                  className="text-sky-200 hover:text-white"
                >
                  Flexible Dates
                </Link>
              </li>
              <li>
                <Link
                  href="/flights/routes"
                  className="text-sky-200 hover:text-white"
                >
                  Popular Routes
                </Link>
              </li>
              <li>
                <Link
                  href="/flights/low-fare"
                  className="text-sky-200 hover:text-white"
                >
                  Low Fare Calendar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Airlines</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/airlines"
                  className="text-sky-200 hover:text-white"
                >
                  All Airlines
                </Link>
              </li>
              <li>
                <Link
                  href="/airlines/alliances"
                  className="text-sky-200 hover:text-white"
                >
                  Airline Alliances
                </Link>
              </li>
              <li>
                <Link
                  href="/airlines/emirates"
                  className="text-sky-200 hover:text-white"
                >
                  Emirates
                </Link>
              </li>
              <li>
                <Link
                  href="/airlines/delta"
                  className="text-sky-200 hover:text-white"
                >
                  Delta
                </Link>
              </li>
              <li>
                <Link
                  href="/airlines/singapore-airlines"
                  className="text-sky-200 hover:text-white"
                >
                  Singapore Airlines
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">SkyRewards</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/rewards" className="text-sky-200 hover:text-white">
                  Program Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/rewards/tier"
                  className="text-sky-200 hover:text-white"
                >
                  Membership Tiers
                </Link>
              </li>
              <li>
                <Link
                  href="/rewards/calculator"
                  className="text-sky-200 hover:text-white"
                >
                  Miles Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/rewards/redeem"
                  className="text-sky-200 hover:text-white"
                >
                  Redeem Miles
                </Link>
              </li>
              <li>
                <Link
                  href="/rewards/card"
                  className="text-sky-200 hover:text-white"
                >
                  SkyRewards Card
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-sky-200 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/business"
                  className="text-sky-200 hover:text-white"
                >
                  Business Travel
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sky-200 hover:text-white">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sky-200 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sky-200 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-sky-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex flex-wrap gap-6 text-sm text-sky-200">
              <Link href="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="hover:text-white">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="hover:text-white">
                Accessibility
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-sm text-sky-200">
                <Shield className="h-4 w-4" />
                <span>Verified by IATA</span>
              </div>
              <div className="flex gap-2">
                <CreditCard className="h-6 w-6 text-sky-200" />
                <CreditCard className="h-6 w-6 text-sky-200" />
                <CreditCard className="h-6 w-6 text-sky-200" />
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-sky-300">
            © {new Date().getFullYear()} SkyBooker. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
