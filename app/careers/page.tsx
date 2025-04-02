import { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Icons } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Careers | SkyWings",
  description:
    "Explore career opportunities at SkyWings - Vietnam's leading flight booking platform",
};

export default function CareersPage() {
  return (
    <div>
      <PageHeader
        title="Career Opportunities"
        description="Join our team and help us build the future of travel"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Why Choose SkyWings?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <Icons.Rocket className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Dynamic Environment
              </h3>
              <p className="text-gray-600">
                Work in a fast-paced, innovative environment
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <Icons.TrendingUp className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Growth Opportunities
              </h3>
              <p className="text-gray-600">
                Continuous learning and career development
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <Icons.Gift className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Competitive Benefits
              </h3>
              <p className="text-gray-600">
                Attractive salary and comprehensive benefits
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                <Icons.Scale className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">
                Flexible working hours and remote options
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Current Openings
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Icons.MapPin className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-gray-600">Hanoi, Vietnam</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Senior Frontend Developer
              </h3>
              <p className="text-gray-600 mb-4">
                Join our frontend team to build the next generation of travel
                experiences
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  Next.js
                </span>
              </div>
              <div className="text-gray-600 mb-4">
                <p>• 5+ years of experience</p>
                <p>• Strong problem-solving skills</p>
                <p>• Team leadership experience</p>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Icons.MapPin className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-gray-600">Ho Chi Minh City, Vietnam</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Product Manager</h3>
              <p className="text-gray-600 mb-4">
                Lead product development and drive innovation in travel
                technology
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  Product Strategy
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  Agile
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  Data Analysis
                </span>
              </div>
              <div className="text-gray-600 mb-4">
                <p>• 4+ years of product management</p>
                <p>• Strong analytical skills</p>
                <p>• Excellent communication</p>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
