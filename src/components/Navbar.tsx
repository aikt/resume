"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Thoughts" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex justify-center items-center py-3 px-6 rounded-full bg-[#222222]/90 backdrop-blur-sm mx-auto max-w-fit my-6">
      <ul className="flex items-center gap-x-2 md:gap-x-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`px-3 py-2 rounded-md text-sm md:text-base font-medium ${
                pathname === link.href
                  ? "text-white bg-[#333333]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
