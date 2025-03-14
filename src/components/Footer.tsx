"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-400">
      <div className="flex items-center justify-center gap-2">
        <span>Made by</span>
        <Link href="https://templyo.io/templates" className="text-sawad-orange hover:underline">
          Templyo
        </Link>
        <span className="mx-1">|</span>
        <span>Powered by</span>
        <Link href="https://framer.link/BwZ7hBi" className="text-sawad-orange hover:underline">
          Framer
        </Link>
      </div>
    </footer>
  );
}
