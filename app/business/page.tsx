import Image from "next/image"
import Link from "next/link"
import { Building, Users, CreditCard, BarChart, FileText, Clock, Shield, Check, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BusinessPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800">
                <Building className="mr-1 h-4 w-4" />
                Corporate Travel Management
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Streamline Your Business Travel
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Comprehensive travel management solutions designed for businesses of all sizes. Save time, reduce costs,
                and ensure duty of care for your traveling employees.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/business/register">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/business/demo">Request Demo</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1000&auto=format&fit=crop"
                fill
                alt="Business travelers in airport"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose SkyBooker Business?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our corporate travel platform offers everything you need to manage business travel efficiently
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CreditCard className="h-10 w-10 text-sky-600 mb-2" />
                <CardTitle>Cost Control & Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Implement travel policies, negotiate corporate rates, and track spending in real-time to reduce your
                  overall travel expenses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-10 w-10 text-sky-600 mb-2" />
                <CardTitle>Comprehensive Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access detailed reports on travel spending, policy compliance, carbon footprint, and more to make
                  data-driven decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-sky-600 mb-2" />
                <CardTitle>Expense Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Simplify expense reporting with automated receipt capture, approval workflows, and integration with
                  accounting software.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-sky-600 mb-2" />
                <CardTitle>Traveler Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  24/7 support for your travelers, including emergency assistance, itinerary changes, and personalized
                  service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-sky-600 mb-2" />
                <CardTitle>Duty of Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track and communicate with your travelers in real-time, ensuring their safety and providing assistance
                  during emergencies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-sky-600 mb-2" />
                <CardTitle>Time-Saving Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Streamline booking processes, approvals, and reporting to save valuable time for both travel managers
                  and employees.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800">
                <Users className="mr-1 h-4 w-4" />
                For Organizations of All Sizes
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tailored Solutions for Your Business</h2>
              <p className="text-muted-foreground md:text-xl">
                Whether you're a small business or a global enterprise, our platform scales to meet your specific travel
                management needs.
              </p>

              <Tabs defaultValue="small" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="small">Small Business</TabsTrigger>
                  <TabsTrigger value="medium">Mid-Market</TabsTrigger>
                  <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
                </TabsList>

                <TabsContent value="small" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Small Business Solutions</h3>
                    <p className="text-muted-foreground">
                      Cost-effective travel management for growing businesses with 5-100 travelers.
                    </p>
                  </div>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Simple, transparent pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Self-service booking tool with policy controls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Basic reporting and expense management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>24/7 traveler support</span>
                    </li>
                  </ul>

                  <Button variant="outline" className="mt-2" asChild>
                    <Link href="/business/small">Learn More</Link>
                  </Button>
                </TabsContent>

                <TabsContent value="medium" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Mid-Market Solutions</h3>
                    <p className="text-muted-foreground">
                      Comprehensive travel management for businesses with 100-1,000 travelers.
                    </p>
                  </div>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Advanced policy management and approval workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Negotiated rates with preferred suppliers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Detailed reporting and analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Dedicated account management</span>
                    </li>
                  </ul>

                  <Button variant="outline" className="mt-2" asChild>
                    <Link href="/business/mid-market">Learn More</Link>
                  </Button>
                </TabsContent>

                <TabsContent value="enterprise" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Enterprise Solutions</h3>
                    <p className="text-muted-foreground">
                      Global travel management for organizations with 1,000+ travelers.
                    </p>
                  </div>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Custom travel program development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Global supplier management and negotiations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Advanced data analytics and custom reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Strategic account management team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>API integrations with your existing systems</span>
                    </li>
                  </ul>

                  <Button variant="outline" className="mt-2" asChild>
                    <Link href="/business/enterprise">Learn More</Link>
                  </Button>
                </TabsContent>
              </Tabs>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                fill
                alt="Business meeting with travel planning"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Features</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our comprehensive business travel platform offers everything you need
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Policy Management",
                description:
                  "Create and enforce travel policies with customizable approval workflows and spending limits.",
                icon: <FileText className="h-12 w-12 text-sky-600" />,
              },
              {
                title: "Expense Tracking",
                description:
                  "Capture receipts, track expenses, and generate reports for easy reconciliation and reimbursement.",
                icon: <CreditCard className="h-12 w-12 text-sky-600" />,
              },
              {
                title: "Reporting & Analytics",
                description:
                  "Access comprehensive reports on travel spending, policy compliance, and supplier performance.",
                icon: <BarChart className="h-12 w-12 text-sky-600" />,
              },
              {
                title: "Traveler Safety",
                description: "Track travelers' locations, send alerts, and provide emergency assistance when needed.",
                icon: <Shield className="h-12 w-12 text-sky-600" />,
              },
              {
                title: "Supplier Management",
                description:
                  "Manage relationships with airlines, hotels, and car rental companies to negotiate better rates.",
                icon: <Building className="h-12 w-12 text-sky-600" />,
              },
              {
                title: "24/7 Support",
                description:
                  "Round-the-clock assistance for your travelers, including booking changes and emergency help.",
                icon: <Clock className="h-12 w-12 text-sky-600" />,
              },
            ].map((feature, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="mb-2">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-sky-950 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Transform Your Corporate Travel?
              </h2>
              <p className="text-sky-200 md:text-xl">
                Join thousands of businesses that trust SkyBooker for their corporate travel needs. Our team is ready to
                help you implement a travel program that saves time, reduces costs, and keeps your travelers happy.
              </p>

              <ul className="space-y-2 text-sky-200">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Free consultation with our travel experts</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Customized implementation plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>Dedicated onboarding support</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>No long-term contracts required</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-white text-sky-950 hover:bg-sky-100" asChild>
                  <Link href="/business/register">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-sky-900" asChild>
                  <Link href="/business/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  stat: "30%",
                  label: "Average savings on travel spend",
                },
                {
                  stat: "85%",
                  label: "Policy compliance rate",
                },
                {
                  stat: "4.8/5",
                  label: "Customer satisfaction rating",
                },
                {
                  stat: "24/7",
                  label: "Global support coverage",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-sky-900 border-sky-800 text-white">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-white">{item.stat}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sky-200">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

