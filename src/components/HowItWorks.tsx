"use client";

import { DownloadCloud, Monitor, Laptop, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Install Tail Hub Server",
      description: "Deploy the Tail Hub Server utility on the host computer that physically has the USB devices plugged in.",
      icon: DownloadCloud,
    },
    {
      step: "02",
      title: "Install Tail Hub Client",
      description: "Set up the lightweight Client software on any workstation from which you want to access those USB devices.",
      icon: Monitor,
    },
    {
      step: "03",
      title: "Connect and Use",
      description: "Log in with your secure Tailscale nodes and attach your remote USB devices instantly in a single click.",
      icon: Laptop,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 border-t border-gray-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get up and running in minutes
          </h2>
          <p className="mt-4 text-base text-gray-400">
            A simple setup flow enables secure, hardware-level USB connectivity between any two Windows environments.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-gradient-to-r from-blue-500/30 via-green-500/30 to-blue-500/30 z-0" />

          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center relative z-10">
                {/* Step badge */}
                <span className="text-[11px] font-bold font-mono tracking-widest text-blue-400 bg-blue-500/5 px-2.5 py-1 rounded-full border border-blue-500/10 mb-6">
                  STEP {item.step}
                </span>

                {/* Step Icon wrapper */}
                <div className="w-20 h-20 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center shadow-lg hover:border-gray-700 transition-colors relative">
                  <Icon className="w-8 h-8 text-white" />
                  
                  {/* Subtle step count overlay */}
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-blue-600 border-2 border-gray-950 flex items-center justify-center text-[10px] font-bold text-white font-mono">
                    {idx + 1}
                  </span>
                </div>

                {/* Title and details */}
                <h3 className="mt-6 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
