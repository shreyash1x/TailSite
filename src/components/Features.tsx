"use client";

import { Network, ShieldCheck, MousePointerClick, RefreshCw, Lock, Cpu } from "lucide-react";

export default function Features() {
  const items = [
    {
      title: "USB Over Network",
      description: "Access USB devices remotely as if they were physically connected to your machine.",
      icon: Network,
      color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    },
    {
      title: "Powered by Tailscale",
      description: "Establish robust and high-speed peer-to-peer connections without complex firewall configurations or port forwarding.",
      icon: ShieldCheck,
      color: "text-green-400 border-green-500/20 bg-green-500/5",
    },
    {
      title: "One Click Connect",
      description: "Instantly attach or detach remote devices with a lightweight, minimalist system tray app and UI launcher.",
      icon: MousePointerClick,
      color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
    },
    {
      title: "Automatic Reconnect",
      description: "Intelligently handles network transitions, sleep mode, or intermittent dropouts, restoring connections instantly.",
      icon: RefreshCw,
      color: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    },
    {
      title: "Secure & Encrypted",
      description: "End-to-end WireGuard® encryption protects data in transit, reinforced with license validation safeguards.",
      icon: Lock,
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    },
    {
      title: "Lightweight Profile",
      description: "Engineered to run seamlessly in the background, consuming minimal CPU cycles and system memory.",
      icon: Cpu,
      color: "text-rose-400 border-rose-500/20 bg-rose-500/5",
    },
  ];

  return (
    <section id="features" className="py-24 border-t border-gray-900 bg-gray-950/20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Engineered for Developers & Professionals
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Tail Hub turns the entire internet into a virtual USB cable, allowing you to interface with hardware devices anywhere with rock-solid security.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="group p-6 rounded-xl border border-gray-800 bg-gray-900/30 hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${feature.color} mb-5`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
