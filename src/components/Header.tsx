"use client";

import Link from "next/link";
import { CLIENT_DOWNLOAD_URL } from "../config/downloads";
import { ArrowRight, Cable } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#090d16]/95 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center transition-colors group-hover:bg-blue-500">
            <Cable className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white group-hover:text-gray-200 transition-colors">
            Tail Hub
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            How it works
          </Link>
          <Link href="#downloads" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Downloads
          </Link>
          <Link href="#screenshots" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Mockups
          </Link>
          <Link href="#faq" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <a
            href={CLIENT_DOWNLOAD_URL}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md border border-gray-700 bg-gray-900 text-gray-200 hover:bg-gray-800 hover:text-white transition-all cursor-pointer"
          >
            Download Client
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
