import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import { ArrowLeft } from "lucide-react";
import { getBlogPostBySlug } from "@/lib/blog-posts"; // Import from the new file

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug); // Use the imported function

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-8">
        <Navigation />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Blog Post Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The article you are looking for does not exist.
        </p>
        <Link href="/blogs">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/blogs"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Blogs
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>
        <p className="text-gray-500 text-sm mb-8">Published on {post.date}</p>

        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={800}
          height={450}
          className="w-full h-auto rounded-lg shadow-lg mb-10 object-cover"
        />

        <div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience CraftHub?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our products and services, or contact us for custom orders
            and inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Get a Free Quote
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline">
                Explore All Products
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
