import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/navigation";
import { Clock, Award, Coffee } from "lucide-react";

export default function DonutsPage() {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-amber-500" />,
      title: "Fresh Daily",
      description:
        "Made fresh every morning with the finest ingredients for the best taste.",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-500" />,
      title: "Premium Quality",
      description:
        "We use only the highest quality ingredients and traditional recipes.",
    },
    {
      icon: <Coffee className="h-8 w-8 text-amber-500" />,
      title: "Perfect Pairing",
      description:
        "Ideal companion for your morning coffee or afternoon tea break.",
    },
  ];

  const donuts = [
    {
      name: "Classic Glazed",
      description: "Our signature glazed donut with a perfect sweet coating",
      price: "₱35",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Chocolate Frosted",
      description: "Rich chocolate frosting on a fluffy donut base",
      price: "₱45",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Strawberry Filled",
      description: "Fresh strawberry filling inside a soft, pillowy donut",
      price: "₱50",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Boston Cream",
      description: "Custard-filled donut topped with chocolate glaze",
      price: "₱55",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Sprinkle Delight",
      description: "Colorful sprinkles on vanilla frosting for extra fun",
      price: "₱40",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Cinnamon Sugar",
      description: "Warm donut rolled in cinnamon sugar blend",
      price: "₱38",
      image: "/placeholder.svg?height=250&width=250",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fresh Donuts Made Daily - Sold Out by 3PM!
              </h1>
              <p className="text-xl mb-8">
                🔥 Manila's #1 Rated Donuts! Made fresh every morning at 5AM
                with premium ingredients. Over 500 dozen sold weekly! Pre-order
                now to guarantee your favorites before we sell out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  🍩 Pre-Order Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-amber-500 bg-transparent"
                >
                  📞 +63 926 084 0938
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Fresh Donuts Display"
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
              Why Our Donuts Are Special
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
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Today's Fresh Menu - Order Before 2PM!
            </h2>
            <p className="text-lg text-gray-600">
              ⚡ Limited quantities available daily - First come, first served!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donuts.map((donut, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardHeader className="p-0">
                  <Image
                    src={donut.image || "/placeholder.svg"}
                    alt={donut.name}
                    width={250}
                    height={250}
                    className="w-full h-64 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{donut.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {donut.description}
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-amber-600">
                      {donut.price}
                    </span>
                    <Button>Add to Order</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            🎉 Today's Special Deals - Limited Time!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <CardTitle className="text-2xl mb-4 text-amber-600">
                🔥 BESTSELLER: Dozen Deal
              </CardTitle>
              <CardDescription className="text-lg mb-4">
                Buy 12 donuts and get 2 FREE! Mix and match any flavors. Save
                ₱90! (Limited to 50 dozens daily)
              </CardDescription>
              <Button className="w-full">🛒 Order Dozen Deal Now</Button>
            </Card>
            <Card className="p-6">
              <CardTitle className="text-2xl mb-4 text-amber-600">
                ⏰ Early Bird Special
              </CardTitle>
              <CardDescription className="text-lg mb-4">
                Get 20% OFF on all orders before 10 AM. Perfect for your morning
                routine! Available until stocks last.
              </CardDescription>
              <Button className="w-full">☀️ Order Morning Special</Button>
            </Card>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to place your order or visit our store for the freshest
            donuts in town!
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}
