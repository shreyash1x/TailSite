"use client";

import Link from "next/link";
import { DOCUMENTATION_URL, SUPPORT_EMAIL, PRIVACY_POLICY_URL } from "../config/downloads";
import { Cable } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-900 bg-gray-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-900">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
              <Cable className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-base tracking-tight text-white">
              Tail Hub
            </span>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <Link href="#downloads" className="text-xs font-semibold text-gray-400 hover:text-white transition-colors">
              Downloads
            </Link>
            <a
              href={DOCUMENTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-gray-400 hover:text-white transition-colors"
            >
              Documentation
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-xs font-semibold text-gray-400 hover:text-white transition-colors"
            >
              Support
            </a>
            <a
              href={PRIVACY_POLICY_URL}
              className="text-xs font-semibold text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </nav>

        </div>

        {/* Copyright notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <p className="text-[11px] text-gray-500">
            &copy; {currentYear} Kanha. All rights reserved.
          </p>
          <p className="text-[10px] text-gray-600 font-mono">
            Secure USB-over-Network Utility
          </p>
        </div>

      </div>
    </footer>
  );
}
