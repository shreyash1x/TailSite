"use client";

import { CLIENT_DOWNLOAD_URL, DOCUMENTATION_URL } from "../config/downloads";
import { Download, BookOpen, Cable, Server, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs text-blue-400 font-medium mb-6">
          <Shield className="w-3.5 h-3.5" />
          Secure, P2P USB Over Network
        </div>

        {/* Product details */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Tail Hub
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-medium text-gray-200 tracking-tight">
          Connect your devices from anywhere.
        </p>
        <p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Tail Hub allows you to remotely access and forward physical USB devices across computers using secure, high-performance networking. Connect USB devices over the internet as if they were physically plugged into your machine.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CLIENT_DOWNLOAD_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/10 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download for Windows
          </a>
          <a
            href={DOCUMENTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border border-gray-700 bg-gray-900/60 hover:bg-gray-800 text-gray-300 hover:text-white font-semibold text-sm transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            Documentation
          </a>
        </div>

        {/* SVG Illustration - Computer -> Secure Connection -> USB Device */}
        <div className="mt-20 max-w-3xl mx-auto bg-gray-950/40 border border-gray-800 rounded-xl p-8 sm:p-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-4">
            {/* Host PC / Client */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-gray-900 border border-gray-700 flex items-center justify-center shadow-md">
                <Server className="w-8 h-8 text-blue-400" />
              </div>
              <span className="mt-3 text-xs font-semibold text-gray-300">Local Client PC</span>
              <span className="text-[10px] text-gray-500">Virtual Port</span>
            </div>

            {/* Connection Channel */}
            <div className="flex flex-col items-center justify-center relative py-4 md:py-0">
              <div className="w-full hidden md:block h-0.5 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 relative">
                {/* Glowing flow indicator */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 bg-white rounded-full animate-[ping_1.5s_infinite] shadow-md shadow-white" />
              </div>
              {/* Vertical connection channel for mobile */}
              <div className="md:hidden w-0.5 h-12 bg-gradient-to-b from-blue-500 via-green-500 to-blue-500 relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-2 h-2 bg-white rounded-full animate-[ping_1.5s_infinite]" />
              </div>
              
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-green-500/20 bg-green-500/10 text-[10px] text-green-400 font-mono font-medium absolute -top-4 md:-top-7">
                Encrypted Connection
              </div>
            </div>

            {/* Remote Server PC with USB Device */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-gray-900 border border-gray-700 flex items-center justify-center shadow-md">
                  <Cable className="w-8 h-8 text-green-400" />
                </div>
                {/* Micro USB indicator overlay */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center border border-gray-900">
                  <span className="text-[8px] font-bold text-white">USB</span>
                </div>
              </div>
              <span className="mt-3 text-xs font-semibold text-gray-300">Remote Server PC</span>
              <span className="text-[10px] text-gray-500">Physical Hardware</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
