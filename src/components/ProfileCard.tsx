"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Twitter, Instagram, Globe } from "lucide-react";

export function ProfileCard() {
  return (
    <div className="profile-card w-full max-w-xs">
      <div className="relative mb-3 w-full h-44 rounded-xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2834&auto=format&fit=crop"
          alt="Aabid Ahmed"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-2 left-2 bg-[#e55e2f] rounded-full p-1.5">
          <span className="sr-only">Featured</span>
          <div className="h-3 w-3 bg-white rounded-full" />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-1">Aabid Ahmed</h2>

      <p className="text-sm text-gray-600 mb-4">
        A Software Engineer who has developed countless innovative solutions.
      </p>

      <div className="flex items-center justify-between">
        <Link href="https://dribbble.com/" className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          <Globe className="w-5 h-5 text-gray-700" />
        </Link>

        <Link href="https://twitter.com/" className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          <Twitter className="w-5 h-5 text-gray-700" />
        </Link>

        <Link href="https://www.instagram.com/" className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          <Instagram className="w-5 h-5 text-gray-700" />
        </Link>

        <Link href="mailto:your@email.com" className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          <Mail className="w-5 h-5 text-gray-700" />
        </Link>
      </div>
    </div>
  );
}
