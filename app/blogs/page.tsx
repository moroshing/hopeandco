import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/navigation";

export default function BlogsPage() {
  const blogPosts = [
    {
      title: "The Art of Fuzzy Wire Crafts: A Beginner's Guide",
      date: "August 1, 2025",
      description:
        "Discover the joy of creating beautiful and everlasting wire bouquets and keychains.",
      image: "/placeholder.svg?height=200&width=300",
      slug: "the-art-of-fuzzy-wire-crafts", // Added slug
    },
    {
      title: "Behind the Scenes: How We Make Manila's Best Donuts",
      date: "July 25, 2025",
      description:
        "A peek into our daily routine, from early morning baking to your favorite fresh donuts.",
      image: "/placeholder.svg?height=200&width=300",
      slug: "how-we-make-manilas-best-donuts", // Added slug
    },
    {
      title: "Taste of Home: Exploring Authentic Pinoy Delicacies",
      date: "July 18, 2025",
      description:
        "Journey through the rich flavors and cultural stories behind our traditional Filipino treats.",
      image: "/placeholder.svg?height=200&width=300",
      slug: "exploring-authentic-pinoy-delicacies", // Added slug
    },
    {
      title: "Printing Perfection: Tips for Your Next Business Card Design",
      date: "July 10, 2025",
      description:
        "Expert advice on creating impactful business cards that leave a lasting impression.",
      image: "/placeholder.svg?height=200&width=300",
      slug: "tips-for-your-next-business-card-design", // Added slug
    },
    {
      title: "Custom Orders: Bringing Your Unique Ideas to Life",
      date: "July 5, 2025",
      description:
        "Learn about our custom order process for crafts, delicacies, and printing projects.",
      image: "/placeholder.svg?height=200&width=300",
      slug: "bringing-your-unique-ideas-to-life", // Added slug
    },
    {
      title: "Celebrating Milestones with CraftHub: Event Planning Tips",
      date: "June 28, 2025",
      description:
        "Ideas and inspiration for incorporating our products into your special events and celebrations.",
      image: "/placeholder.svg?height=200&width=300",
      slug: "celebrating-milestones-with-crafthub", // Added slug
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Blog & Stories
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Dive into the world of CraftHub! Read our latest articles, tips, and
            behind-the-scenes stories about our crafts, delicious treats, and
            printing services.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600">
              Fresh insights and stories from CraftHub
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="p-0">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-base text-gray-700 mb-4">
                    {post.description}
                  </CardDescription>
                  <Link href={`/blogs/${post.slug}`}>
                    {" "}
                    {/* Updated link to dynamic route */}
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-600 hover:text-blue-800"
                    >
                      Read More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Have a Story Idea or Question?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We love hearing from our community! Reach out to us with your
            suggestions or inquiries.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}
