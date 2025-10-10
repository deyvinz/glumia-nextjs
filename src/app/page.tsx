import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CoreFeatures from "@/components/sections/CoreFeatures";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Home",
  description: "Glumia Solutions - Empowering businesses with innovative digital solutions. Custom software development, data analytics, Web3 solutions, and more.",
  keywords: [
    "Technology Consulting",
    "IT Consulting",
    "Software Development",
    "Data Analytics",
    "Web3 Development",
    "Blockchain Solutions",
    "Digital Marketing",
    "Custom Software",
    "Business Solutions",
    "Technology Innovation"
  ],
  openGraph: {
    title: "Glumia Solutions - Technology & IT Consulting Agency",
    description: "Empowering businesses with innovative digital solutions. Custom software development, data analytics, Web3 solutions, and more.",
    url: "https://glumia.com",
    type: "website",
  },
  alternates: {
    canonical: "https://glumia.com",
  },
};

export default function Home() {
  return (
    <>
      {/* Hidden heading for SEO */}
      <h1 className="sr-only">Glumia Solutions - Technology & IT Consulting Agency</h1>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section id="hero" aria-label="Hero Section">
          <HeroSection />
        </section>

        {/* Core Features */}
        <section id="features" aria-label="Core Features">
          <CoreFeatures />
        </section>

        {/* About Section */}
        <section id="about" aria-label="About Us">
          <AboutSection />
        </section>

        {/* Services Section */}
        <section id="services" aria-label="Our Services">
          <ServicesSection />
        </section>

        {/* Process Section */}
        <section id="processes" aria-label="Our Process">
          <ProcessSection />
        </section>

        {/* Contact Section */}
        <section id="contact" aria-label="Contact Us">
          <ContactSection />
        </section>
      </div>
    </>
  );
}