"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import Logo from "@/components/ui/logo"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <div className="grid w-full gap-8 md:grid-cols-2 lg:gap-12 items-center max-w-5xl">
        <div className="space-y-6">
          <div className="space-y-2">
            <Logo size="lg" />
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Welcome back</h1>
            <p className="text-muted-foreground">
              Sign in to your SkyBooker account to access your bookings, rewards, and exclusive deals.
            </p>
          </div>

          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?q=80&w=1000&auto=format&fit=crop"
              fill
              alt="Airplane wing view with sunset"
              className="object-cover"
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">SkyRewards Benefits</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>Earn miles with every booking</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>Access exclusive member-only deals</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>Manage all your bookings in one place</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone</TabsTrigger>
            </TabsList>

            <TabsContent value="email">
              <Card>
                <CardHeader>
                  <CardTitle>Sign in with email</CardTitle>
                  <CardDescription>Enter your email and password to access your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="email" type="email" placeholder="name@example.com" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <Link href="/forgot-password" className="text-sm text-sky-600 hover:text-sky-700">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <label
                      htmlFor="remember"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button className="w-full" asChild>
                    <Link href="/account">Sign In</Link>
                  </Button>

                  <div className="relative flex items-center">
                    <div className="flex-grow border-t border-muted"></div>
                    <span className="mx-3 flex-shrink text-xs text-muted-foreground">OR</span>
                    <div className="flex-grow border-t border-muted"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full">
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" className="w-full">
                      <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                      Facebook
                    </Button>
                  </div>

                  <div className="text-center text-sm">
                    Don't have an account?{" "}
                    <Link href="/register" className="font-medium text-sky-600 hover:text-sky-700">
                      Sign up
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="phone">
              <Card>
                <CardHeader>
                  <CardTitle>Sign in with phone</CardTitle>
                  <CardDescription>Enter your phone number to receive a verification code</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button className="w-full">Send Code</Button>

                  <div className="text-center text-sm">
                    Don't have an account?{" "}
                    <Link href="/register" className="font-medium text-sky-600 hover:text-sky-700">
                      Sign up
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

