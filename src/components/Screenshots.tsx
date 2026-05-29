"use client";

import { useState } from "react";
import { Server, Laptop, Settings, Play, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

export default function Screenshots() {
  const [activeTab, setActiveTab] = useState<"server" | "client" | "devices">("server");

  const tabs = [
    { id: "server" as const, name: "Server Dashboard", label: "Tail Hub Server" },
    { id: "client" as const, name: "Client Dashboard", label: "Tail Hub Client" },
    { id: "devices" as const, name: "Device Manager View", label: "Device List" },
  ];

  return (
    <section id="screenshots" className="py-24 border-t border-gray-900 scroll-mt-16 bg-gray-950/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simplicity at first glance
          </h2>
          <p className="mt-4 text-base text-gray-400">
            A beautiful, native desktop interface that lets you configure connections, inspect status, and manage sharing configurations easily.
          </p>
        </div>

        {/* Tab Switchers */}
        <div className="flex justify-center gap-2.5 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-gray-800 border border-gray-700 text-white shadow-sm"
                  : "border border-transparent text-gray-400 hover:text-white"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Interactive Mockup Frame */}
        <div className="max-w-4xl mx-auto bg-gray-950 border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
          
          {/* Windows / macOS controls bar */}
          <div className="bg-gray-900/80 px-4 py-3 border-b border-gray-800/80 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            
            <div className="text-[11px] text-gray-500 font-medium tracking-tight">
              Tail Hub — {tabs.find((t) => t.id === activeTab)?.label}
            </div>

            <div className="w-12 h-2" /> {/* spacer */}
          </div>

          {/* Screen Content */}
          <div className="p-6 md:p-8 bg-[#0b0f19] min-h-[380px] font-sans">
            
            {/* View 1: Server Dashboard */}
            {activeTab === "server" && (
              <div className="animate-[fadeIn_0.3s_ease-out]">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-800">
                  <div>
                    <h4 className="text-sm font-bold text-white">Server Node Status</h4>
                    <p className="text-[11px] text-gray-400 mt-1">Host node: usb-host-office</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[11px] font-semibold text-green-400 font-mono">ACTIVE & LISTENING</span>
                  </div>
                </div>

                {/* Device List table inside dashboard */}
                <div className="mt-6">
                  <span className="text-[10px] font-bold text-gray-500 tracking-wider block mb-3 uppercase">Shared USB Devices</span>
                  <div className="space-y-3">
                    {[
                      { name: "SafeNet eToken 5110", type: "Security Key", status: "Connected (Remote Client: 100.64.12.83)", active: true },
                      { name: "Logitech HD Pro Webcam C920", type: "Camera", status: "Idle (Ready to Share)", active: false },
                      { name: "FTDI Serial Converter", type: "COM Adapter", status: "Idle (Ready to Share)", active: false },
                    ].map((d, i) => (
                      <div key={i} className="flex items-center justify-between p-3.5 rounded-lg bg-gray-900/60 border border-gray-800/80">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-md flex items-center justify-center ${d.active ? "bg-blue-500/10 text-blue-400" : "bg-gray-800 text-gray-500"}`}>
                            <Server className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-gray-200 block">{d.name}</span>
                            <span className="text-[10px] text-gray-500">{d.type}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-[10px] ${d.active ? "text-blue-400 font-medium" : "text-gray-400"}`}>{d.status}</span>
                          <button className={`px-2.5 py-1 text-[10px] rounded-md font-semibold ${d.active ? "bg-red-500/15 border border-red-500/30 text-red-400" : "bg-blue-600 text-white"} cursor-pointer`}>
                            {d.active ? "Stop Share" : "Share"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* View 2: Client Dashboard */}
            {activeTab === "client" && (
              <div className="animate-[fadeIn_0.3s_ease-out]">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-800">
                  <div>
                    <h4 className="text-sm font-bold text-white">Target Client Node</h4>
                    <p className="text-[11px] text-gray-400 mt-1">Logged in as: kanha@tailhub</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[11px] font-semibold text-blue-400 font-mono">CONNECTED TO SERVER</span>
                  </div>
                </div>

                {/* Remote Device Attach lists */}
                <div className="mt-6">
                  <span className="text-[10px] font-bold text-gray-500 tracking-wider block mb-3 uppercase">Available Remote Devices</span>
                  <div className="space-y-3">
                    {[
                      { server: "usb-host-office", name: "SafeNet eToken 5110", speed: "USB 2.0 (High Speed)", connected: true },
                      { server: "usb-host-office", name: "FTDI Serial Converter", speed: "USB 1.1 (Full Speed)", connected: false },
                    ].map((d, i) => (
                      <div key={i} className="flex items-center justify-between p-3.5 rounded-lg bg-gray-900/60 border border-gray-800/80">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-md flex items-center justify-center ${d.connected ? "bg-green-500/10 text-green-400" : "bg-gray-800 text-gray-500"}`}>
                            <Laptop className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-gray-200 block">{d.name}</span>
                            <span className="text-[10px] text-gray-500">Source server: {d.server} • {d.speed}</span>
                          </div>
                        </div>
                        <div>
                          <button className={`px-3 py-1.5 text-[10px] rounded-md font-semibold cursor-pointer ${
                            d.connected
                              ? "bg-green-600/15 border border-green-500/30 text-green-400 hover:bg-green-600/25"
                              : "bg-gray-800 border border-gray-700 text-gray-300 hover:text-white"
                          }`}>
                            {d.connected ? "Connected" : "Connect"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* View 3: Device Manager View */}
            {activeTab === "devices" && (
              <div className="animate-[fadeIn_0.3s_ease-out]">
                {/* Header Info */}
                <div className="pb-6 border-b border-gray-800">
                  <h4 className="text-sm font-bold text-white">System Virtual Controller</h4>
                  <p className="text-[11px] text-gray-400 mt-1">Virtual USB Host Controller: Status Normal</p>
                </div>

                {/* Tree connection view */}
                <div className="mt-6 bg-gray-900/30 border border-gray-800/80 rounded-lg p-4 font-mono text-[11px]">
                  <div className="text-gray-300">└─ [Tail Hub Virtual Host Controller]</div>
                  <div className="text-blue-400 pl-4 mt-2">├── [Port 1]: Connected & Shared</div>
                  <div className="text-gray-400 pl-8">└── ID 0529:5110 (SafeNet eToken 5110)</div>
                  
                  <div className="text-gray-600 pl-4 mt-2">├── [Port 2]: Empty (Ready)</div>
                  <div className="text-gray-600 pl-4">└── [Port 3]: Empty (Ready)</div>
                  
                  <div className="text-green-400 pl-4 mt-2">└── [Port 4]: Connected & Mounted</div>
                  <div className="text-gray-400 pl-8">└── ID 0403:6001 (FTDI USB Serial Converter) [COM3]</div>
                </div>

                <div className="mt-5 flex items-center justify-between text-[10px] text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                    Driver status: Certified & Signed (usbip-win compatible)
                  </span>
                  <span className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
                    <RefreshCw className="w-3 h-3" /> Rescan Hardware
                  </span>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
