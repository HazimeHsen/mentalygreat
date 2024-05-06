"use client";
import { useState, useEffect } from "react";
import Followers from "@/components/Followers";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Videos from "@/components/Videos";
import Image from "next/image";
import { InlineWidget } from "react-calendly";

export default function Home() {
  const [showFollowers, setShowFollowers] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFollowers(true);
    }, 3000); // Wait for 3 seconds before showing Followers
    return () => clearTimeout(timer); // Cleanup the timer to avoid memory leaks
  }, []);

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div>
      <Hero />
      <Services />
      {showFollowers && <Followers />}
      <Testimonials />
      <Videos />
      <div id="book">
        <InlineWidget url="https://calendly.com/hazimehussein43" />
      </div>
    </div>
  );
}
