"use client";
import Bg from "@/components/AnimatedBg";
import Followers from "@/components/Followers";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Videos from "@/components/Videos";
import Image from "next/image";
import { InlineWidget } from "react-calendly";

export default function Home() {
  if (typeof window === "undefined") {
    return null;
  }
  return (
    <div>
      <div className="z-50 relative">
        <Hero />
      </div>
      <div className="relative">
        <Followers />
        {/* <Bg /> */}
      </div>
      <Bg />
      <div className="relative">
        <div className="z-50 relative">
          <Testimonials />
        </div>

        <Bg />
      </div>
      <div className="relative">
        <div className="z-50 relative">
          <Videos />
        </div>
        <Bg />
      </div>
      <div className="relative">
        <div className="z-50 relative">
          <Services />
        </div>
        <Bg />
      </div>
      <div
        id="book"
        className="text-center mt-10 capitalize md:-mb-10 mb-3 font-semibold text-lg md:text-xl">
        Book a free-15m discovery call{" "}
      </div>
      <div className="bg-white">
        <InlineWidget url="https://calendly.com/adyboustani/discovery-call" />
      </div>
    </div>
  );
}
