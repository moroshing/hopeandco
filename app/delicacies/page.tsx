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
import { Star, Users, MapPin } from "lucide-react";

export default function DelicaciesPage() {
  const features = [
    {
      icon: <Star className="h-8 w-8 text-emerald-500" />,
      title: "Authentic Recipes",
      description:
        "Traditional Filipino recipes passed down through generations.",
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-500" />,
      title: "Family Made",
      description:
        "Prepared with love by Filipino families using time-honored methods.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-emerald-500" />,
      title: "Regional Specialties",
      description: "Delicacies from different regions of the Philippines.",
    },
  ];

  const delicacies = [
    {
      name: "Bibingka 🔥 BESTSELLER",
      description:
        "Traditional rice cake topped with cheese, salted egg, and coconut. Made only on weekends!",
      price: "₱80 - ₱120",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Ube Halaya ⭐ PREMIUM",
      description:
        "Creamy purple yam dessert, a Filipino favorite. Limited to 20 containers weekly!",
      price: "₱150 - ₱250",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Leche Flan 👑 SIGNATURE",
      description:
        "Silky smooth caramel custard dessert. Our most requested item for special occasions!",
      price: "₱200 - ₱300",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Biko",
      description: "Sweet sticky rice cake with coconut caramel topping",
      price: "₱100 - ₱180",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Taho",
      description: "Soft tofu with brown sugar syrup and tapioca pearls",
      price: "₱25 - ₱50",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Puto",
      description: "Steamed rice cakes in various colors and flavors",
      price: "₱60 - ₱100",
      image: "/placeholder.svg?height=250&width=250",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Authentic Pinoy Delicacies - Just Like Lola Made
              </h1>
              <p className="text-xl mb-8">
                🇵🇭 AUTHENTIC GUARANTEE: Traditional recipes from different
                Philippine regions, made by Filipino families. Featured in
                Manila Food Magazine! Limited batches made weekly - pre-order to
                avoid disappointment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  🛒 Pre-Order Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-emerald-500 bg-transparent"
                >
                  📞 +63 926 084 0938
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Filipino Delicacies"
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
              Why Filipino Families Trust Our Delicacies
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

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              This Week's Available Delicacies
            </h2>
            <p className="text-lg text-gray-600">
              ⚠️ Limited quantities made fresh weekly - Order early to secure
              your favorites!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {delicacies.map((delicacy, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardHeader className="p-0">
                  <Image
                    src={delicacy.image || "/placeholder.svg"}
                    alt={delicacy.name}
                    width={250}
                    height={250}
                    className="w-full h-64 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">
                    {delicacy.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {delicacy.description}
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-emerald-600">
                      {delicacy.price}
                    </span>
                    <Button>Order Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Story Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🏠 Bring Home the Taste of the Philippines
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our delicacies are more than just food – they're a connection to
              Filipino culture, tradition, and family. Each recipe has been
              carefully preserved and passed down through generations, ensuring
              that every bite carries the authentic taste of the Philippines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="p-6">
                <CardTitle className="text-2xl mb-4 text-emerald-600">
                  Special Occasions
                </CardTitle>
                <CardDescription className="text-lg">
                  Perfect for celebrations, holidays, and special gatherings.
                  Bring the taste of home to your events.
                </CardDescription>
              </Card>
              <Card className="p-6">
                <CardTitle className="text-2xl mb-4 text-emerald-600">
                  Custom Orders
                </CardTitle>
                <CardDescription className="text-lg">
                  We accept custom orders for parties and events. Contact us to
                  discuss your specific needs.
                </CardDescription>
              </Card>
            </div>
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
              🎉 Order Party Package - FREE Tasting
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
