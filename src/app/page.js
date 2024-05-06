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
      <Bg />
      <div className="relative">
        <div className="z-50 relative">
          <Services />
        </div>
        <Bg />
      </div>
      <div className="relative">
        <Followers />
        {/* <Bg /> */}
      </div>
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
      <div className="pt-10 relative max-h-screen overflow-hidden" id="book">
        <div className="mb-5 text-center font-semibold text-lg md:text-xl">
          Book Free Discovery Call
        </div>
        <InlineWidget url="https://calendly.com/hazimehussein43" />
      </div>
    </div>
  );
}
