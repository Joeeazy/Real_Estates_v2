import AboutUs from "@/components/AboutUs";
import Faq from "@/components/Faq";
import FeaturedHouses from "@/components/FeaturedHouses";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedHouses />
      <Services />
      <AboutUs />
      <Testimonials />
      <Faq />
    </>
  );
}
