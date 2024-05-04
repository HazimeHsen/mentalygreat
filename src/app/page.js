"use client";
import Followers from "@/components/Followers";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Videos from "@/components/Videos";
import Image from "next/image";
import { InlineWidget } from "react-calendly";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white">
      <Hero />
      <Services />
      <Followers />
      <Testimonials />
      <Videos />
      <div id="book">
        <InlineWidget url="https://calendly.com/hazimehussein43" />
      </div>
    </div>
  );
}
