import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import { Printer, Clock, Award, Users } from "lucide-react"

export default function PrintingPage() {
  const features = [
    {
      icon: <Printer className="h-8 w-8 text-blue-500" />,
      title: "Latest 2024 Equipment",
      description: "State-of-the-art printing technology for superior quality results. Better than 95% of competitors.",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: "Same Day Available",
      description: "Rush orders completed in 4 hours. Regular orders in 24-48 hours. Fastest in Metro Manila!",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      title: "99.9% Quality Guarantee",
      description: "High-resolution printing with vibrant colors and sharp details. Money-back guarantee.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "FREE Design Consultation",
      description: "Expert designers help optimize your files at no extra cost. Save time and money.",
    },
  ]

  const services = [
    {
      name: "Business Cards 💼 PREMIUM",
      description: "Professional business cards with premium finishes. FREE design review included!",
      price: "Starting at ₱500 (FREE delivery Metro Manila)",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Flyers & Brochures 📢 BESTSELLER",
      description: "Eye-catching marketing materials that convert. FREE design tips included!",
      price: "Starting at ₱200 (Bulk discounts available)",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Banners & Posters 🎯 LARGE FORMAT",
      description: "Weather-resistant materials, vibrant colors. Perfect for events and advertising!",
      price: "Starting at ₱800 (FREE installation guide)",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Wedding Invitations",
      description: "Elegant invitations for your special day",
      price: "Starting at ₱1,200",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Photo Printing",
      description: "High-quality photo prints in various sizes",
      price: "Starting at ₱50",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Stickers & Labels",
      description: "Custom stickers and labels for any purpose",
      price: "Starting at ₱300",
      image: "/placeholder.svg?height=250&width=250",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Printing - Same Day Service Available
              </h1>
              <p className="text-xl mb-8">
                ⚡ RUSH ORDERS WELCOME! State-of-the-art equipment, 99.9% quality guarantee, and Metro Manila's fastest
                turnaround. Over 10,000 successful projects completed. FREE design consultation included!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  📄 Get Instant Quote - FREE Design Help
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  🚨 Rush Order Hotline: +63 917 999 8888
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Printing Services"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Printing Services?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Printing Services</h2>
            <p className="text-lg text-gray-600">Complete printing solutions for all your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    width={250}
                    height={250}
                    className="w-full h-64 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                    <Button>Get Quote</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Project Done in 4 Simple Steps
            </h2>
            <p className="text-lg text-gray-600">From concept to completion - we make printing easy and stress-free!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit Design</h3>
              <p className="text-gray-600">Send us your design files or let us create one for you</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Review & Quote</h3>
              <p className="text-gray-600">We review your project and provide a detailed quote</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Production</h3>
              <p className="text-gray-600">Your project goes into production with quality checks</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">Pick up your finished products or arrange delivery</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">⏰ Need It Fast? We Deliver Results!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Don't let deadlines stress you out! Our rush service has saved thousands of last-minute projects. FREE quote
            in 30 minutes, guaranteed delivery on time or your money back!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              🚀 Get Rush Quote - 30 Min Response
            </Button>
            <Button size="lg" variant="outline">
              📞 Emergency Line: +63 917 999 8888
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
