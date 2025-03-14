import { ProfileCard } from "@/components/ProfileCard";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
        <div className="md:col-span-4">
          <ProfileCard />
        </div>

        <div className="md:col-span-8 space-y-8">
          <div>
            <h1 className="section-title">SOFTWARE</h1>
            <h1 className="section-subtitle">ENGINEER</h1>
            <p className="mt-4 text-lg max-w-2xl">
              Passionate about creating intuitive and engaging user experiences.
              Specialize in transforming ideas into beautifully crafted products.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mt-8">
            <div className="bg-[#1E1E1E] rounded-xl p-4 w-28">
              <span className="text-white text-3xl font-bold">+12</span>
              <p className="text-gray-400 text-xs uppercase mt-1">YEARS OF EXPERIENCE</p>
            </div>

            <div className="bg-[#1E1E1E] rounded-xl p-4 w-28">
              <span className="text-white text-3xl font-bold">+46</span>
              <p className="text-gray-400 text-xs uppercase mt-1">PROJECTS COMPLETED</p>
            </div>

            <div className="bg-[#1E1E1E] rounded-xl p-4 w-28">
              <span className="text-white text-3xl font-bold">+20</span>
              <p className="text-gray-400 text-xs uppercase mt-1">WORLDWIDE CLIENTS</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <Link
              href="/experience"
              className="group bg-[#e55e2f] rounded-xl p-6 text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#e55e2f]/20"
            >
              <div className="h-24 flex flex-col justify-between">
                <h3 className="text-lg font-semibold uppercase">Dynamic Animation, Motion Design</h3>
                <div className="flex justify-end">
                  <div className="h-8 w-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-white transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/projects"
              className="group bg-[#b8e14c] rounded-xl p-6 text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#b8e14c]/20"
            >
              <div className="h-24 flex flex-col justify-between">
                <h3 className="text-lg font-semibold uppercase">Framer, Figma, WordPress, ReactJs</h3>
                <div className="flex justify-end">
                  <div className="h-8 w-8 bg-black/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-black transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="mt-20">
        <div className="flex flex-col items-center">
          <h2 className="section-title">RECENT</h2>
          <h2 className="section-subtitle mb-12">PROJECTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1E1E1E] rounded-xl p-6">
            <div className="flex gap-4 items-center mb-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=2070&auto=format&fit=crop"
                  alt="Revo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Revo</h3>
                <p className="text-gray-400">Free Framer Template</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1E1E1E] rounded-xl p-6">
            <div className="flex gap-4 items-center mb-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                  alt="NajmAI"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">NajmAI</h3>
                <p className="text-gray-400">SaaS Framer Template</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1E1E1E] rounded-xl p-6">
            <div className="flex gap-4 items-center mb-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                  alt="Nashra"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Nashra</h3>
                <p className="text-gray-400">SaaS Framer Template</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mt-20">
        <div className="flex flex-col items-center">
          <h2 className="section-title">12 YEARS OF</h2>
          <h2 className="section-subtitle mb-12">EXPERIENCE</h2>
        </div>

        <div className="space-y-10">
          <div className="bg-[#1E1E1E] rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">PixelForge Studios</h3>
            <p className="text-gray-300 mb-3">
              Led the design team in creating user-centric mobile and web applications,
              improving the user experience and increasing user engagement.
            </p>
            <p className="text-gray-500 text-sm">Jan 2020 - Present</p>
          </div>

          <div className="bg-[#1E1E1E] rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">BlueWave Innovators</h3>
            <p className="text-gray-300 mb-3">
              Developed and implemented design strategies for new product lines,
              collaborated closely with engineers and product managers.
            </p>
            <p className="text-gray-500 text-sm">Jun 2017 - Dec 2019</p>
          </div>

          <div className="bg-[#1E1E1E] rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">TrendCraft Solutions</h3>
            <p className="text-gray-300 mb-3">
              Designed user interfaces for e-commerce platforms, focusing on enhancing
              usability and visual appeal.
            </p>
            <p className="text-gray-500 text-sm">Mar 2015 - May 2017</p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="mt-20">
        <div className="flex flex-col items-center">
          <h2 className="section-title">PREMIUM</h2>
          <h2 className="section-subtitle mb-12">TOOLS</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-[#1E1E1E] rounded-xl p-6">
            <div className="mb-2 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 30 30" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21V9l12 12H9z" fill="#05F" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">Framer</h3>
            <p className="text-gray-400">Website Builder</p>
          </div>

          <div className="bg-[#1E1E1E] rounded-xl p-6">
            <div className="mb-2 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
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
          </div>

          <div className="bg-[#1E1E1E] rounded-xl p-6">
            <div className="mb-2 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 30 30" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 7.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13z" fill="#000" />
                <path d="M5.5 11.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13z" fill="#fff" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">ChatGPT</h3>
            <p className="text-gray-400">AI Assistant</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
