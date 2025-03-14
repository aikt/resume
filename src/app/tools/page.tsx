import { ProfileCard } from "@/components/ProfileCard";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";

export default function ToolsPage() {
  return (
    <div className="space-y-20">
      {/* Tools Header */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
        <div className="md:col-span-4">
          <ProfileCard />
        </div>

        <div className="md:col-span-8 space-y-8">
          <div>
            <h1 className="section-title">PREMIUM</h1>
            <h1 className="section-subtitle">TOOLS</h1>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Link href="https://framer.com?via=mejed_k" className="bg-[#1E1E1E] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 30 30" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21V9l12 12H9z" fill="#05F" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">Framer</h3>
            <p className="text-gray-400">Website Builder</p>
          </Link>

          <Link href="https://www.figma.com/" className="bg-[#1E1E1E] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 30 30" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17z" fill="#1ABCFE" />
                <path d="M6.5 15a8.5 8.5 0 0 1 8.5-8.5v8.5H6.5z" fill="#0ACF83" />
                <path d="M15 6.5a8.5 8.5 0 0 1 8.5 8.5H15V6.5z" fill="#FF7262" />
                <path d="M23.5 15a8.5 8.5 0 0 1-8.5 8.5V15h8.5z" fill="#F24E1E" />
                <path d="M6.5 15a8.5 8.5 0 0 0 8.5 8.5V15H6.5z" fill="#A259FF" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">Figma</h3>
            <p className="text-gray-400">Design Tool</p>
          </Link>

          <Link href="https://www.lemonsqueezy.com/" className="bg-[#1E1E1E] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 30 30" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6C9.5 6 5 10.5 5 16s4.5 10 10 10 10-4.5 10-10S20.5 6 15 6zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="#FFDF3A" />
                <path d="M15 10c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="#FFDF3A" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">Lemon Squeezy</h3>
            <p className="text-gray-400">Payments Provider</p>
          </Link>

          <Link href="https://chat.openai.com/" className="bg-[#1E1E1E] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 30 30" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 7.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13z" fill="#000" />
                <path d="M5.5 11.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13z" fill="#fff" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">ChatGPT</h3>
            <p className="text-gray-400">AI Assistant</p>
          </Link>

          <Link href="https://www.notion.so/" className="bg-[#1E1E1E] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 30 30" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 7.5h12A1.5 1.5 0 0 1 22.5 9v12a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 21V9A1.5 1.5 0 0 1 9 7.5z" fill="#000" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">Notion</h3>
            <p className="text-gray-400">Productivity Tool</p>
          </Link>

          <Link href="https://nextjs.org/" className="bg-[#1E1E1E] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 30 30" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.5 5.5h-19a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1v-17a1 1 0 0 0-1-1z" fill="#000" />
                <path d="M20.12 15.9l-5.5 6.2h5.5v-6.2z" fill="#fff" />
                <path d="M14.62 15l5.5-6.2v6.2h-5.5z" fill="#fff" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">Nextjs</h3>
            <p className="text-gray-400">React framework</p>
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
