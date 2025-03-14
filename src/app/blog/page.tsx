import { ProfileCard } from "@/components/ProfileCard";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";

const blogPosts = [
  {
    title: "Starting and Growing a Career in Web Design",
    excerpt:
      "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
    date: "Apr 8, 2022",
    readTime: "6min read",
    slug: "starting-a-career-in-web-design",
  },
  {
    title: "Create a Landing Page That Performs Great",
    excerpt:
      "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.",
    date: "Mar 15, 2022",
    readTime: "6min read",
    slug: "create-a-landing-page-that-performs-great",
  },
  {
    title: "How Can Designers Prepare for the Future?",
    excerpt:
      "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.",
    date: "Feb 28, 2022",
    readTime: "6min read",
    slug: "how-can-designers-prepare-for-the-future",
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-20">
      {/* Blog Header */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
        <div className="md:col-span-4">
          <ProfileCard />
        </div>

        <div className="md:col-span-8 space-y-8">
          <div>
            <h1 className="section-title">DESIGN</h1>
            <h1 className="section-subtitle">THOUGHTS</h1>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="mt-10">
        <div className="space-y-12 max-w-3xl mx-auto">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-[#1E1E1E] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
