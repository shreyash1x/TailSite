"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Tail Hub?",
      a: "Tail Hub is a premium desktop solution that allows you to securely forward and connect physical USB devices across computers over the network. By leveraging virtual USB driver translation, a device physically plugged into a 'Server' computer acts exactly as if it were plugged into a remote 'Client' computer anywhere in the world.",
    },
    {
      q: "Does it work through the internet?",
      a: "Yes, absolutely. Tail Hub is designed to establish direct, secure peer-to-peer connections over the internet. You can access USB devices located in your office, lab, or home from anywhere with an active internet connection.",
    },
    {
      q: "Do I need port forwarding?",
      a: "No port forwarding or public IP setups are required. Tail Hub uses secure P2P mesh technology (powered by Tailscale infrastructure) to safely traverse firewalls, NATs, and private networks automatically.",
    },
    {
      q: "Is Tail Hub secure?",
      a: "Yes. All data and USB control sequences are encrypted end-to-end using state-of-the-art WireGuard® peer-to-peer protocols. No data is cached or routed through middle servers, ensuring absolute privacy for sensitive devices such as hardware HSMs and security licensing dongles.",
    },
    {
      q: "How do licenses work?",
      a: "Tail Hub operates under a clean, commercial licensing structure. License keys are validated automatically over secure connections. You can manage your activated machines, seats, and server instances via Kanha portal dashboards.",
    },
  ];

  return (
    <section id="faq" className="py-24 border-t border-gray-900 bg-gray-950/20 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Have questions about Tail Hub? Find answers to commonly asked questions below.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-gray-800 bg-gray-900/20 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-white hover:bg-gray-900/40 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-gray-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="p-5 pt-0 border-t border-gray-800/50 bg-[#090d16]/30">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
