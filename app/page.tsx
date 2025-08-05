import Link from "next/link";
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
import { MapPin, Mail, Phone } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog-posts";
import { MarqueeTestimonials } from "@/components/marquee-testimonials";

export default function HomePage() {
  const products = [
    {
      title: "Dreamy Hope Mini Donuts",
      description:
        "Delicious, customizable mini donuts in a variety of flavors and toppings. Perfect for special events and celebrations.",
      image: "/assets/images/dreamy.png",
      href: "/donuts",
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Hopeful Delights",
      description:
        "Homemade Filipino favorites made with love and tradition. From kakanin to savory and affordable snacks, just like home.",
      image: "/assets/images/hopeful.png",
      href: "/delicacies",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "FleurKraft",
      description:
        "Beautiful handmade wire bouquets, keychains, and DIY craft kits. All crafted with love and attention to detail.",
      image: "/assets/images/fleur.png",
      href: "/crafts",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "WebKraft by Moro",
      description:
        "Custom, responsive, and SEO-optimized websites for personal brands and small businesses.",
      image: "/assets/images/webkraft.png",
      href: "/webdev",
      color: "from-blue-500 to-indigo-500",
    },
  ];

  const serviceLocations = [
    { name: "Minglanilla Cebu", href: "#" },
    { name: "Naga City", href: "#" },
    { name: "Talisay City", href: "#" },
    { name: "Cebu City", href: "#" },
  ];

  // Dynamically get the four most recent blog posts
  const recentBlogPosts = getAllBlogPosts().slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Hope & Co.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transform your ideas into reality with our handmade crafts, mini
            donuts, Filipino delicacies, and custom websites. Trusted by a
            growing community of happy customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              🔥 Explore our products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-orange-500 bg-transparent text-lg px-8 py-3"
            >
              📞 Call: +63 926 084 0938
            </Button>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-red-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold">
            🚨 LIMITED TIME: Free delivery on orders over ₱1,000 this month!
            Order now!
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">
              Join thousands of happy customers who love Hope & Co.!
            </p>
          </div>
          <MarqueeTestimonials />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Product & Order Today
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From crafts to websites to delicious local treats — discover
              something special with Hope & Co.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${product.color}`}></div>
                <CardHeader>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={product.href}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      View Products
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {/* Company Info / NAP */}
            <div className="">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-2 flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                6QQW+Q56, Minglanilla, Cebu Philippines 6046
              </p>
              <p className="text-gray-400 mb-2 flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-500" />
                hopeandco@gmail.com
              </p>
              <p className="text-gray-400 mb-2 flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                +63 926 084 0938
              </p>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-xl font-bold mb-4">Our Products</h3>
              <ul className="pl-4 space-y-2">
                <li>
                  <Link
                    href="/crafts"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Dreamy Hope Mini Donuts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/donuts"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Hopeful Delights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/delicacies"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FleurKraft
                  </Link>
                </li>
                <li>
                  <Link
                    href="/webdev"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    WebKraft
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Locations */}
            <div>
              <h3 className="text-xl font-bold mb-4">Service Locations</h3>
              <ul className="pl-4 space-y-2">
                {serviceLocations.map((location, index) => (
                  <li key={index}>
                    <Link
                      href={location.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {location.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Recent Blog Posts */}
            <div>
              <h3 className="text-xl font-bold mb-4">Recent Blogs</h3>{" "}
              {/* Changed title */}
              <ul className="pl-4 space-y-2">
                {recentBlogPosts.map((post, index) => (
                  <li key={index}>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Hope & Co. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
