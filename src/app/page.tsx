import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Downloads from "@/components/Downloads";
import Screenshots from "@/components/Screenshots";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation header */}
      <Header />

      {/* Main page layout wrapper */}
      <main className="flex-1">
        {/* Large centered hero & illustration */}
        <Hero />

        {/* 6 feature cards */}
        <Features />

        {/* 3-step timeline walkthrough */}
        <HowItWorks />

        {/* Mockups section with interactive tabs */}
        <Screenshots />

        {/* Dual Server / Client download cards */}
        <Downloads />

        {/* FAQ list accordion */}
        <FAQ />
      </main>

      {/* Footer with Kanha copyright info */}
      <Footer />
    </>
  );
}
