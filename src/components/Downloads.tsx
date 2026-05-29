"use client";

import { SERVER_DOWNLOAD_URL, CLIENT_DOWNLOAD_URL } from "../config/downloads";
import { Download, Server, Laptop, CheckCircle2 } from "lucide-react";

export default function Downloads() {
  return (
    <section id="downloads" className="py-24 border-t border-gray-900 bg-gray-950/10 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get Started with Tail Hub
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Select the appropriate installation package for your environment. Connect host and target machines in minutes.
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: Tail Hub Server */}
          <div className="flex flex-col justify-between p-8 rounded-2xl border border-gray-800 bg-gray-900/40 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs text-blue-400 font-semibold mb-6">
                <Server className="w-3.5 h-3.5" />
                Physical Host
              </div>
              <h3 className="text-2xl font-bold text-white">Tail Hub Server</h3>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                Install this utility on the machine physically connected to the USB hardware devices (e.g. licensing keys, webcams, serial adaptors, diagnostic tools).
              </p>
              
              <ul className="mt-6 space-y-2.5">
                {["Share multiple USB devices", "Runs as a system service", "Auto-startup enabled"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <a
                href={SERVER_DOWNLOAD_URL}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" />
                Download Server
              </a>
              <div className="mt-3 text-center">
                <span className="text-[10px] text-gray-500 font-mono">Windows 10, 11 (x64)</span>
              </div>
            </div>
          </div>

          {/* Card 2: Tail Hub Client */}
          <div className="flex flex-col justify-between p-8 rounded-2xl border border-gray-800 bg-gray-900/40 relative overflow-hidden group hover:border-green-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-xs text-green-400 font-semibold mb-6">
                <Laptop className="w-3.5 h-3.5" />
                Remote Client
              </div>
              <h3 className="text-2xl font-bold text-white">Tail Hub Client</h3>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                Install this app on the remote workstation or laptop from which you want to access and interact with the physical USB hardware.
              </p>
              
              <ul className="mt-6 space-y-2.5">
                {["One-click device attachment", "Virtual controller integration", "Custom reconnections"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <a
                href={CLIENT_DOWNLOAD_URL}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition-all cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" />
                Download Client
              </a>
              <div className="mt-3 text-center">
                <span className="text-[10px] text-gray-500 font-mono">Windows 10, 11 (x64)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
