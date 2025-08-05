"use client";
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
import { Heart, Users, Award, Target, Star, Clock } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: "Passion for Quality",
      description:
        "Every product we create is made with love, attention to detail, and a commitment to excellence.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Customer First",
      description:
        "Our customers are at the heart of everything we do. Your satisfaction is our top priority.",
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Authentic Craftsmanship",
      description:
        "We preserve traditional methods while embracing modern techniques to deliver the best results.",
    },
    {
      icon: <Target className="h-8 w-8 text-green-500" />,
      title: "Innovation & Creativity",
      description:
        "We constantly explore new ideas and techniques to bring you unique and creative solutions.",
    },
  ];

  const team = [
    {
      name: "Faith Racho",
      role: "Founder & Head Baker",
      description:
        "With 15 years of experience in crafts and design, Faith started Hope & Co. to share her passion for handmade creations.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Keziah Hope Racho",
      role: "Operations Manager",
      description:
        "Keziah brings authentic Filipino flavors to life with traditional recipes passed down through generations.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Kyle David Caumeran",
      role: "Marketing Director",
      description:
        "Kyle ensures every marketing campaign meets our high standards with his expertise in digital marketing strategies.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  const stats = [
    { number: "200+", label: "Happy Customers" },
    { number: "500+", label: "Orders Delivered" },
    { number: "2", label: "Years in Business" },
    { number: "99%", label: "Customer Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Hope & Co.
              </h1>
              <p className="text-xl mb-8">
                We're more than just a business – we're a family of passionate
                creators dedicated to bringing joy, flavor, and beauty into your
                life through our handcrafted products and professional services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() =>
                    document
                      .getElementById("our-story-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Our Story
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
                  onClick={() =>
                    document
                      .getElementById("meet-our-team-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Meet Our Team
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="CraftHub Team"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 shadow-lg bg-white">
                <CardContent className="pt-6">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20" id="our-story-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our Story"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  It all began in 2023, when Faith started Dreamy Hope Mini
                  Donuts, a small business she hoped would help support her
                  college expenses. She began selling delicious mini donuts
                  around her neighborhood in Minglanilla, quickly earning the
                  community’s love for her sweet creations.
                </p>
                <p>
                  However, Faith soon realized mini donuts have seasons of
                  sales—some months are good, and there are months when she has
                  no orders. But her passion didn't stop her. Since she was a
                  college student, she made snacks and sold them on her campus,
                  and that's when Hopeful Delights began. Every monthly event,
                  she envisioned as an opportunity to make sales, and so she
                  started FleurKraft to offer handcrafted gifts like fuzzy wire
                  keychains, and bouquets.
                </p>
                <p>
                  And in 2025, with her partner Kyle, a web developer, they
                  collaborated to create Hope & Co.—a shared brand that brings
                  together all their ideas, passion, and creativity under one
                  name.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Start Your Order Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve
              our customers every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gray-50" id="meet-our-team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate people behind Hope & Co. who make everything
              possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardHeader className="p-0">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-80 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                  <p className="text-purple-600 font-semibold mb-4">
                    {member.role}
                  </p>
                  <CardDescription className="text-gray-600">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Hope & Co.?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <CardTitle className="text-xl mb-4">Premium Quality</CardTitle>
              <CardDescription>
                We use only the finest materials and ingredients, ensuring every
                product meets our high standards.
              </CardDescription>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <CardTitle className="text-xl mb-4">Fast & Reliable</CardTitle>
              <CardDescription>
                Quick turnaround times without compromising quality. We respect
                your deadlines and deliver on time.
              </CardDescription>
            </Card>
            <Card className="p-6 text-center">
              <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <CardTitle className="text-xl mb-4">Personal Touch</CardTitle>
              <CardDescription>
                Every order receives personal attention. We're not just a
                business – we're your creative partners.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Make Every Moment More Meaningful 🎁
          </h2>
          <p className="text-xl mb-8">
            From custom mini donuts to handcrafted keepsakes and printed
            creations — we turn ordinary moments into heartfelt memories.
            Discover the perfect gift for your loved ones or elevate your next
            celebration with Hope & Co.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Buy Our Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-purple-600 bg-transparent text-lg px-8"
              >
                Customize Your Order
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
