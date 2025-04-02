import { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Icons } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "About Us | SkyWings",
  description:
    "Learn more about SkyWings - Vietnam's leading flight booking platform",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About SkyWings"
        description="Discover our story and core values"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              SkyWings is committed to providing an easy, fast, and
              cost-effective flight booking experience for all users. We strive
              to become Vietnam's leading flight booking platform.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
                <div className="text-gray-600">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Partners</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become a comprehensive travel platform, not only providing
              flight booking services but also delivering complete travel
              experiences for users.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <Icons.Users className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">
                Always listening and meeting customer needs
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <Icons.Lightbulb className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving to deliver the best experience
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <Icons.Sparkles className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-gray-600">Building trust with customers</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <Icons.Target className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                Ensuring the best service for customers
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <Icons.Leaf className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Working towards a sustainable future
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
