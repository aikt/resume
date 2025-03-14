import { ProfileCard } from "@/components/ProfileCard";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <div className="space-y-20">
      {/* Experience Header */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
        <div className="md:col-span-4">
          <ProfileCard />
        </div>

        <div className="md:col-span-8 space-y-8">
          <div>
            <h1 className="section-title">12 YEARS OF</h1>
            <h1 className="section-subtitle">EXPERIENCE</h1>
          </div>
        </div>
      </section>

      {/* Experience List */}
      <section className="mt-10">
        <div className="space-y-10 max-w-3xl mx-auto">
          <Link href="https://www.framer.com/marketplace/creator/mejed-alkoutaini/?via=mejed_k" className="block bg-[#1E1E1E] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-2">PixelForge Studios</h3>
            <p className="text-gray-300 mb-3">
              Led the design team in creating user-centric mobile and web applications,
              improving the user experience and increasing user engagement.
            </p>
            <p className="text-gray-500 text-sm">Jan 2020 - Present</p>
          </Link>

          <Link href="https://www.framer.com/marketplace/creator/mejed-alkoutaini/?via=mejed_k" className="block bg-[#1E1E1E] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-2">BlueWave Innovators</h3>
            <p className="text-gray-300 mb-3">
              Developed and implemented design strategies for new product lines,
              collaborated closely with engineers and product managers.
            </p>
            <p className="text-gray-500 text-sm">Jun 2017 - Dec 2019</p>
          </Link>

          <Link href="https://www.framer.com/marketplace/creator/mejed-alkoutaini/?via=mejed_k" className="block bg-[#1E1E1E] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-2">TrendCraft Solutions</h3>
            <p className="text-gray-300 mb-3">
              Designed user interfaces for e-commerce platforms, focusing on enhancing
              usability and visual appeal.
            </p>
            <p className="text-gray-500 text-sm">Mar 2015 - May 2017</p>
          </Link>

          <Link href="https://www.framer.com/marketplace/creator/mejed-alkoutaini/?via=mejed_k" className="block bg-[#1E1E1E] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-2">Visionary Labs</h3>
            <p className="text-gray-300 mb-3">
              Assisted in the creation of wireframes and prototypes for various digital products,
              contributed to user research and testing.
            </p>
            <p className="text-gray-500 text-sm">Sep 2013 - Feb 2015</p>
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
