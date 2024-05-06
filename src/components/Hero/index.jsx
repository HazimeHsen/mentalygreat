import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
// bg-gradient-to-r from-blue-600 to-white bg-clip-text text-transparent
const Hero = () => {
  return (
    <div
      className="bg-cover bg-top bg-no-repeat pt-14 md:text-start text-center md:px-14 lg:px-20 px-5 flex justify-center items-center min-h-screen text-white"
      style={{
        backgroundImage: "url(/hero.png)",
      }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="hero-content md:justify-between justify-center flex md:flex-row flex-col items-center w-full">
        <div className="">
          <h1 className="fade-in mb-5 text-5xl font-bold ">
            Fouad El Boustani
          </h1>
          <p className="max-w-lg fade-in mb-5 text-sm md:text-base">
            Hey, I’m Fouad, and I’ve grown my self-development community from 0
            to 2.3 million followers organically in just 2 years (on TikTok and
            Instagram). Applying the same proven system, we’ve helped over 10+
            clients grow their authority by 50,000 to 100,000 followers in 4-12
            months, helping their unique expertise, impact millions! (and
            through that, they were able to make 100,000’s of $ in the process).
            I usually hate bragging, but I’m doing this, to prove a point, what
            we do works. We deliver viral results, using a proven system, that
            create viral short-form videos.
          </p>
          <div className="flex fade-in md:justify-start justify-center items-center gap-2">
            <Link href="" target="_blank" className="btn btn-circle">
              <FaTiktok size={20} />
            </Link>
            <Link href="" target="_blank" className="btn btn-circle">
              <FaInstagram size={20} />
            </Link>
            <Link href="" target="_blank" className="btn btn-circle">
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>
        <div className="mockup-phone !m-0 min-w-[250px]">
          <div className="camera"></div>
          <div className="display">
            <div className="h-[500px] relative">
              <Image alt="" src="/insta1.jpg" quality={100} fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
