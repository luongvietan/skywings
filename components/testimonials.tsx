import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Travelers Say</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Trusted by thousands of travelers worldwide
            </p>
          </div>

          <div className="flex items-center justify-center mt-4 mb-8">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-current text-yellow-500" />
              ))}
            </div>
            <span className="ml-2 text-lg font-medium">4.8/5 from 12,000+ travelers</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                name: "Sarah Johnson",
                location: "New York, USA",
                comment:
                  "SkyBooker made booking my international flight so easy. The rewards program is fantastic - I've already earned enough miles for a free domestic flight!",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
              },
              {
                name: "David Chen",
                location: "Singapore",
                comment:
                  "The exclusive airline deals saved me over $200 on my flight to Europe. The price match guarantee gave me confidence I was getting the best deal.",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
              },
              {
                name: "Emma Williams",
                location: "London, UK",
                comment:
                  "As a Gold tier member, the lounge access and priority boarding have made traveling so much more enjoyable. The customer service is exceptional.",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.location}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">"{testimonial.comment}"</p>
                </CardContent>
                <CardFooter>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

