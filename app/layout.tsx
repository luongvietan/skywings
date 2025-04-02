import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import MainHeader from "@/components/layout/main-header"
import MainFooter from "@/components/layout/main-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SkyBooker - Flight Booking Platform",
  description: "Book flights with 100+ global airline partners and earn rewards with every journey.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <MainHeader />
            <main className="flex-1">{children}</main>
            <MainFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'