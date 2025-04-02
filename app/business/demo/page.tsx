"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  BarChart3,
  Building2,
  Calendar,
  CreditCard,
  FileText,
  Globe,
  Headphones,
  LineChart,
  Plane,
  Settings,
  Users,
  Wallet,
} from "lucide-react"

export default function BusinessDemoPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">SkyBusiness Portal Demo</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience how our corporate travel management platform can streamline your business travel, reduce costs,
            and provide comprehensive reporting and analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Wallet className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Cost Savings</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Reduce travel expenses by up to 25% with negotiated corporate rates, policy compliance, and
                comprehensive spend analytics.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <FileText className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Simplified Reporting</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Access real-time reports on travel spend, policy compliance, carbon footprint, and traveler safety from
                a centralized dashboard.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Traveler Experience</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Enhance employee satisfaction with streamlined booking processes, 24/7 support, and personalized travel
                preferences.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 border-0 shadow-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white">
            <CardTitle className="text-2xl">Interactive Demo</CardTitle>
            <CardDescription className="text-sky-100">
              Explore the features of our corporate travel management platform.
            </CardDescription>
          </CardHeader>

          <div className="bg-gray-100 border-b">
            <div className="container mx-auto px-4">
              <div className="flex overflow-x-auto">
                <button
                  className={`px-4 py-3 font-medium text-sm flex items-center gap-2 border-b-2 ${activeTab === "dashboard" ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-600 hover:text-gray-900"}`}
                  onClick={() => setActiveTab("dashboard")}
                >
                  <BarChart3 className="h-4 w-4" />
                  Dashboard
                </button>
                <button
                  className={`px-4 py-3 font-medium text-sm flex items-center gap-2 border-b-2 ${activeTab === "bookings" ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-600 hover:text-gray-900"}`}
                  onClick={() => setActiveTab("bookings")}
                >
                  <Plane className="h-4 w-4" />
                  Bookings
                </button>
                <button
                  className={`px-4 py-3 font-medium text-sm flex items-center gap-2 border-b-2 ${activeTab === "reports" ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-600 hover:text-gray-900"}`}
                  onClick={() => setActiveTab("reports")}
                >
                  <LineChart className="h-4 w-4" />
                  Reports
                </button>
                <button
                  className={`px-4 py-3 font-medium text-sm flex items-center gap-2 border-b-2 ${activeTab === "travelers" ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-600 hover:text-gray-900"}`}
                  onClick={() => setActiveTab("travelers")}
                >
                  <Users className="h-4 w-4" />
                  Travelers
                </button>
                <button
                  className={`px-4 py-3 font-medium text-sm flex items-center gap-2 border-b-2 ${activeTab === "settings" ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-600 hover:text-gray-900"}`}
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </button>
              </div>
            </div>
          </div>

          <CardContent className="p-0">
            {activeTab === "dashboard" && (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500">Total Spend YTD</p>
                          <p className="text-2xl font-bold">$1,245,678</p>
                        </div>
                        <div className="bg-green-100 p-2 rounded-full">
                          <CreditCard className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-green-600 font-medium">12% under budget</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500">Active Travelers</p>
                          <p className="text-2xl font-bold">342</p>
                        </div>
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Users className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-blue-600 font-medium">24 currently traveling</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500">Policy Compliance</p>
                          <p className="text-2xl font-bold">94%</p>
                        </div>
                        <div className="bg-purple-100 p-2 rounded-full">
                          <FileText className="h-5 w-5 text-purple-600" />
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-purple-600 font-medium">3% increase from last month</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Spend by Category</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64 relative">
                          <Image
                            src="/placeholder.svg?height=256&width=600"
                            alt="Spend by Category Chart"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Upcoming Trips</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0">
                              <Calendar className="h-5 w-5 text-gray-600" />
                            </div>
                            <div>
                              <p className="font-medium">NYC to SFO</p>
                              <p className="text-sm text-gray-500">May 15-20, 2025</p>
                              <p className="text-xs text-gray-500">5 travelers</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0">
                              <Calendar className="h-5 w-5 text-gray-600" />
                            </div>
                            <div>
                              <p className="font-medium">LHR to JFK</p>
                              <p className="text-sm text-gray-500">May 22-30, 2025</p>
                              <p className="text-xs text-gray-500">3 travelers</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0">
                              <Calendar className="h-5 w-5 text-gray-600" />
                            </div>
                            <div>
                              <p className="font-medium">SIN to HKG</p>
                              <p className="text-sm text-gray-500">June 5-10, 2025</p>
                              <p className="text-xs text-gray-500">2 travelers</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "bookings" && (
              <div className="p-6">
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="origin">From</Label>
                      <Input id="origin" placeholder="Origin" />
                    </div>
                    <div>
                      <Label htmlFor="destination">To</Label>
                      <Input id="destination" placeholder="Destination" />
                    </div>
                    <div>
                      <Label htmlFor="departure">Departure</Label>
                      <Input id="departure" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="return">Return</Label>
                      <Input id="return" type="date" />
                    </div>
                  </div>
                  <Button className="mt-4 w-full md:w-auto bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700">
                    Search Flights
                  </Button>
                </div>

                <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="bg-gray-100 p-3 rounded-full">
                            <Plane className="h-6 w-6 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium">New York (JFK) to San Francisco (SFO)</p>
                            <p className="text-sm text-gray-500">May 15-20, 2025 • SkyAir #SA1234</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Status</p>
                            <p className="text-sm font-medium text-green-600">Confirmed</p>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="bg-gray-100 p-3 rounded-full">
                            <Plane className="h-6 w-6 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium">London (LHR) to New York (JFK)</p>
                            <p className="text-sm text-gray-500">May 22-30, 2025 • SkyAir #SA5678</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Status</p>
                            <p className="text-sm font-medium text-amber-600">Pending Approval</p>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="bg-gray-100 p-3 rounded-full">
                            <Plane className="h-6 w-6 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium">Singapore (SIN) to Hong Kong (HKG)</p>
                            <p className="text-sm text-gray-500">June 5-10, 2025 • SkyAir #SA9012</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Status</p>
                            <p className="text-sm font-medium text-blue-600">Processing</p>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "reports" && (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Spend by Department</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 relative">
                        <Image
                          src="/placeholder.svg?height=256&width=400"
                          alt="Spend by Department Chart"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Top Destinations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 relative">
                        <Image
                          src="/placeholder.svg?height=256&width=400"
                          alt="Top Destinations Chart"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Available Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button variant="outline" className="justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Travel Spend Report
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Policy Compliance
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Carbon Footprint
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Traveler Safety
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Vendor Performance
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Custom Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "travelers" && (
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Traveler Directory</h3>
                  <Button>
                    <Users className="h-4 w-4 mr-2" />
                    Add Traveler
                  </Button>
                </div>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="bg-gray-100 p-3 rounded-full">
                            <Users className="h-6 w-6 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium">Sarah Johnson</p>
                            <p className="text-sm text-gray-500">Marketing Department • Executive</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Profile
                          </Button>
                          <Button variant="outline" size="sm">
                            Travel History
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="bg-gray-100 p-3 rounded-full">
                            <Users className="h-6 w-6 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium">Michael Chen</p>
                            <p className="text-sm text-gray-500">Engineering • Manager</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Profile
                          </Button>
                          <Button variant="outline" size="sm">
                            Travel History
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="bg-gray-100 p-3 rounded-full">
                            <Users className="h-6 w-6 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium">Emily Rodriguez</p>
                            <p className="text-sm text-gray-500">Sales • Director</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Profile
                          </Button>
                          <Button variant="outline" size="sm">
                            Travel History
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Company Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="companyName">Company Name</Label>
                          <Input id="companyName" defaultValue="Acme Corporation" />
                        </div>
                        <div>
                          <Label htmlFor="industry">Industry</Label>
                          <Input id="industry" defaultValue="Technology" />
                        </div>
                        <div>
                          <Label htmlFor="employees">Number of Employees</Label>
                          <Input id="employees" defaultValue="1,500" />
                        </div>
                        <Button variant="outline" className="w-full">
                          Update Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Travel Policy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="flightClass">Default Flight Class</Label>
                          <Input id="flightClass" defaultValue="Economy" />
                        </div>
                        <div>
                          <Label htmlFor="hotelRating">Hotel Rating</Label>
                          <Input id="hotelRating" defaultValue="4 Star Maximum" />
                        </div>
                        <div>
                          <Label htmlFor="approvalWorkflow">Approval Workflow</Label>
                          <Input id="approvalWorkflow" defaultValue="Manager + Department Head" />
                        </div>
                        <Button variant="outline" className="w-full">
                          Edit Policy
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Payment Methods</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-5 w-5 text-gray-600" />
                            <div>
                              <p className="font-medium">Corporate Card</p>
                              <p className="text-sm text-gray-500">Ending in 4567</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Building2 className="h-5 w-5 text-gray-600" />
                            <div>
                              <p className="font-medium">Direct Billing</p>
                              <p className="text-sm text-gray-500">Account #ACM-12345</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        </div>

                        <Button variant="outline" className="w-full">
                          Add Payment Method
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {!formSubmitted ? (
          <Card>
            <CardHeader>
              <CardTitle>Request a Full Demo</CardTitle>
              <CardDescription>
                Fill out the form below to schedule a personalized demo with our business travel experts.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleDemoRequest} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your company" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Business Email</Label>
                    <Input id="email" type="email" placeholder="you@company.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Your phone number" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="employees">Number of Employees</Label>
                  <Input id="employees" placeholder="Approximate number of employees" required />
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your current travel management process and challenges"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700"
                >
                  Request Demo
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Thank You for Your Interest!</CardTitle>
              <CardDescription>We've received your demo request and will be in touch shortly.</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="text-center py-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  One of our business travel experts will contact you within 24 hours to schedule your personalized
                  demo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/business">
                    <Button variant="outline">Learn More About SkyBusiness</Button>
                  </Link>
                  <Link href="/">
                    <Button>Return to Homepage</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Why Choose SkyBusiness?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of companies that trust SkyBusiness for their corporate travel needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-3 rounded-full mb-4">
                <Globe className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-2">Global Coverage</h3>
              <p className="text-gray-600 text-sm">
                Access to flights, hotels, and car rentals worldwide with negotiated corporate rates.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-3 rounded-full mb-4">
                <Headphones className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock assistance for your travelers, no matter where they are.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-3 rounded-full mb-4">
                <LineChart className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-2">Detailed Analytics</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive reporting and insights to optimize your travel program.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-3 rounded-full mb-4">
                <Settings className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-2">Customizable</h3>
              <p className="text-gray-600 text-sm">
                Tailor the platform to match your company's travel policy and approval workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

