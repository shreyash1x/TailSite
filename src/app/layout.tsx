import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tail Hub — Connect your USB devices from anywhere",
  description: "Securely forward and access physical USB devices across computers over the internet as if they were physically plugged in.",
  keywords: ["usb over network", "usb forwarding", "remote usb access", "tailscale usb", "tail hub", "secure device connection"],
  authors: [{ name: "Kanha" }],
  openGraph: {
    title: "Tail Hub — Connect your USB devices from anywhere",
    description: "Securely forward and access physical USB devices across computers over the internet.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#090d16] text-[#f3f4f6]">
        {children}
      </body>
    </html>
  );
}
