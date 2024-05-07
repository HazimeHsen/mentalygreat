import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
// bg-gradient-to-r from-blue-600 to-white bg-clip-text text-transparent
const Hero = () => {
  return (
    <div
      className="bg-cover bg-top bg-no-repeat pt-20 md:pt-14 md:mb-0 mb-[520px] md:text-start text-center md:px-14 lg:px-20 px-5 flex justify-center items-center min-h-screen text-white"
      style={{
        backgroundImage: "url(/hero.png)",
      }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="hero-content md:justify-between justify-center md:relative md:top-0 md:left-0 absolute top-56 left-0 flex md:flex-row flex-col items-center w-full">
        <div className="">
          <h1 className="fade-in mb-5 text-3xl md:text-5xl font-bold ">
            Creating Viral Videos
          </h1>
          <p className="max-w-lg fade-in mb-5 text-sm md:text-base">
            Hey, I’m Fouad! In February 2021, I set a big bold goal: inspire 1
            million followers in 12 months. I had 8,000 followers at the time.
            But I said to myself: {'"'}You can{"'"}t miss out on this huge
            opportunity{'"'}. So I obsessed, learned the viral strategy, and
            organically grew @mentallygreat from 8k to 1 million followers in
            just 2 months! Today, we{"'"}re at 2.3 million followers (+ IG), and
            helping you grow faster!
          </p>
          <div className="mb-3 fade-in">
            <a href="#book" className="rounded-full btn btn-primary text-white">
              Book free 15m discovery call
            </a>
          </div>
          <div className="flex fade-in md:justify-start justify-center items-center gap-2">
            <Link
              href="https://www.tiktok.com/@mentallygreat?_t=8m84R6SfZCR&_r=1"
              target="_blank"
              className="btn btn-circle">
              <FaTiktok size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/mentallygreat?igsh=aWk1OGY4bWg0ZnIx"
              target="_blank"
              className="btn btn-circle">
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://youtube.com/@mentallygreat?si=-Zf5LaYgvjiiBfaH"
              target="_blank"
              className="btn btn-circle">
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>
        <div className="md:mt-0 mt-20">
          <Link
            href={"https://www.tiktok.com/@mentallygreat?_t=8m84R6SfZCR&_r=1"}
            className="fade-in-phone mockup-phone !m-0 min-w-[250px]">
            <div className="camera"></div>
            <div className="display">
              <div className="h-[500px] relative">
                <Image alt="" src="/insta1.jpg" quality={100} fill />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
