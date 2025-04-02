import Link from "next/link"
import { Mail, Phone, MessageSquare, FileText, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SupportPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">How Can We Help?</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get support for your bookings, SkyRewards program, or any other questions you might have.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <Mail className="h-8 w-8 text-sky-600 mb-2" />
            <CardTitle>Email Support</CardTitle>
            <CardDescription>Get a response within 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Send us an email and our support team will get back to you as soon as possible.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="mailto:support@skybooker.com">support@skybooker.com</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Phone className="h-8 w-8 text-sky-600 mb-2" />
            <CardTitle>Phone Support</CardTitle>
            <CardDescription>Available 24/7</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Call our customer service team for immediate assistance with your bookings.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="tel:+18001234567">+1 (800) 123-4567</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <MessageSquare className="h-8 w-8 text-sky-600 mb-2" />
            <CardTitle>Live Chat</CardTitle>
            <CardDescription>Chat with a representative</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Connect with our support team instantly through our live chat service.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Start Chat</Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="contact" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="help">Help Center</TabsTrigger>
        </TabsList>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="rewards">SkyRewards Program</option>
                    <option value="refund">Refund Request</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" rows={5} />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <Link href="/terms" className="text-sky-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-sky-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="faq" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to the most common questions about our services.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I cancel or change my flight booking?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      You can cancel or change your flight booking by logging into your account and navigating to "My
                      Bookings." Select the booking you wish to modify and follow the prompts to cancel or change your
                      flight. Please note that cancellation and change fees may apply depending on the airline's policy
                      and your fare type.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How does the SkyRewards program work?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      SkyRewards is our loyalty program that allows you to earn miles when you fly with our partner
                      airlines. You can redeem these miles for flights, upgrades, and other rewards. The program has
                      three tiers: Blue, Silver, and Gold, each offering increasing benefits. You can track your miles
                      and tier status in your SkyRewards account.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What is your refund policy?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Our refund policy varies depending on the airline and fare type. Generally, refundable tickets can
                      be fully refunded, while non-refundable tickets may be eligible for a partial refund or credit. In
                      case of flight cancellations by the airline, you are entitled to a full refund. Please check the
                      specific terms and conditions of your booking for detailed information.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I check in for my flight?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      You can check in for your flight online through our website or mobile app, usually starting 24-48
                      hours before departure (depending on the airline). Navigate to "My Bookings," select your flight,
                      and follow the check-in process. You can then download or print your boarding pass. Alternatively,
                      you can check in at the airport at the airline's check-in counter or kiosk.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I redeem my SkyRewards miles?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      To redeem your SkyRewards miles, log into your account and go to the "Redeem Miles" section. You
                      can use your miles for flight bookings, seat upgrades, hotel stays, and more. Simply select your
                      preferred redemption option and follow the instructions. The number of miles required will depend
                      on the specific redemption and its value.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Do you offer price match guarantees?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Yes, we offer a Price Match Guarantee. If you find a lower price for the same flight, hotel, or
                      package on another website within 24 hours of booking with us, we'll refund the difference. To
                      claim the price match, contact our customer service with details of your booking and the lower
                      price you found.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/faq">View All FAQs</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="help" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Help Center</CardTitle>
              <CardDescription>Browse our help articles and guides to find the information you need.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-sky-600" />
                      Booking Guides
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Link
                      href="/help/booking/how-to-book"
                      className="flex items-center justify-between text-sm hover:underline"
                    >
                      How to book a flight
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/help/booking/flexible-dates"
                      className="flex items-center justify-between text-sm hover:underline"
                    >
                      Using flexible dates search
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/help/booking/group-bookings"
                      className="flex items-center justify-between text-sm hover:underline"
                    >
                      Group bookings
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-sky-600" />
                      SkyRewards Guides
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Link
                      href="/help/rewards/earning-miles"
                      className="flex items-center justify-between text-sm hover:underline"
                    >
                      How to earn miles
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/help/rewards/redeeming-miles"
                      className="flex items-center justify-between text-sm hover:underline"
                    >
                      Redeeming your miles
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/help/rewards/tier-benefits"
                      className="flex items-center justify-between text-sm hover:underline"
                    >
                      Tier benefits explained
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-sky-600" />
                      Travel Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Link
                      href="/help/travel/baggage-allowance"
                      className="flex items-center justify-between text-sm hover:underline"
                    >
                      Baggage allowance
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/help/travel/travel-documents"
                      className="flex items-center justify-between text-sm hover:underline"
                    >
                      Required travel documents
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/help/travel/travel-insurance"
                      className="flex items-center justify-between text-sm hover:underline"
                    >
                      Travel insurance
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-sky-600" />
                      Payment & Refunds
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Link
                      href="/help/payment/payment-methods"
                      className="flex items-center justify-between text-sm hover:underline"
                    >
                      Payment methods
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/help/payment/refund-process"
                      className="flex items-center justify-between text-sm hover:underline"
                    >
                      Refund process
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/help/payment/crypto-payments"
                      className="flex items-center justify-between text-sm hover:underline"
                    >
                      Crypto payments
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/help">Browse All Help Articles</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

