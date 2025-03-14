import { ProfileCard } from "@/components/ProfileCard";
import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="space-y-20">
      {/* Projects Header */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
        <div className="md:col-span-4">
          <ProfileCard />
        </div>

        <div className="md:col-span-8 space-y-8">
          <div>
            <h1 className="section-title">RECENT</h1>
            <h1 className="section-subtitle">PROJECTS</h1>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="https://www.framer.com/marketplace/templates/revo?via=mejed_k" className="bg-[#1E1E1E] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
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
          </Link>

          <Link href="https://www.framer.com/marketplace/templates/najmai?via=mejed_k" className="bg-[#1E1E1E] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
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
          </Link>

          <Link href="https://www.framer.com/marketplace/templates/nashra?via=mejed_k" className="bg-[#1E1E1E] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
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
          </Link>

          <Link href="https://www.framer.com/marketplace/templates/ruya/?via=mejed_k" className="bg-[#1E1E1E] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex gap-4 items-center mb-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=2062&auto=format&fit=crop"
                  alt="Ruya"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Ruya</h3>
                <p className="text-gray-400">SaaS Framer Template</p>
              </div>
            </div>
          </Link>

          <Link href="https://seera.framer.website/" className="bg-[#1E1E1E] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex gap-4 items-center mb-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden relative bg-gray-700">
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">S</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Seera</h3>
                <p className="text-gray-400">Portfolio Framer Template</p>
              </div>
            </div>
          </Link>

          <Link href="https://www.framer.com/marketplace/templates/stabraq/?via=mejed_k" className="bg-[#1E1E1E] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex gap-4 items-center mb-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden relative bg-gray-700">
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">S</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Stabraq</h3>
                <p className="text-gray-400">Portfolio Framer Template</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
