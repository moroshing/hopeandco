import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import { Heart, Gift, Sparkles } from "lucide-react"

export default function CraftsPage() {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: "Handmade with Love",
      description: "Each piece is carefully crafted by hand with attention to every detail.",
    },
    {
      icon: <Gift className="h-8 w-8 text-pink-500" />,
      title: "Perfect Gifts",
      description: "Unique and thoughtful gifts for special occasions and loved ones.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-pink-500" />,
      title: "Custom Designs",
      description: "We can create custom designs to match your specific preferences.",
    },
  ]

  const products = [
    {
      name: "Wire Flower Bouquet",
      description: "Beautiful everlasting flower bouquets made from colorful fuzzy wire",
      price: "₱299 - ₱599 (Save ₱100 vs competitors)",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Keychains",
      description: "Cute and durable wire craft keychains in various designs",
      price: "₱49 - ₱99 (Buy 3 Get 1 Free)",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Mini Sculptures",
      description: "Intricate wire sculptures perfect for desk decoration",
      price: "₱199 - ₱399 (Limited Edition)",
      image: "/placeholder.svg?height=250&width=250",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Handmade Wire Crafts That Last Forever</h1>
              <p className="text-xl mb-8">
                🌟 BESTSELLER ALERT! Our fuzzy wire bouquets never wilt and make perfect gifts that show you care. Over
                2,000 happy customers can't be wrong! Custom designs available with 48-hour turnaround.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  🛒 Order Now - Free Shipping Over ₱500
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-pink-500 bg-transparent"
                >
                  💬 Get Custom Quote in 2 Hours
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Wire Craft Collection"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why 2,000+ Customers Choose Our Wire Crafts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-lg text-gray-600">Browse our collection of handmade wire crafts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="w-full h-64 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{product.description}</CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-pink-600">{product.price}</span>
                    <Button>Order Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ⏰ Ready to Order? Limited Slots Available This Week!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Don't wait! We only accept 20 custom orders per week to ensure quality. Secure your spot today and get FREE
            consultation worth ₱500!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
              🚀 Reserve My Slot Now - FREE Consultation
            </Button>
            <Button size="lg" variant="outline">
              📱 WhatsApp: +63 917 123 4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
