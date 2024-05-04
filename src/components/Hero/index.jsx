import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="hero md:px-14 lg:px-20 px-5 !justify-start min-h-screen text-white"
      style={{
        backgroundImage: "url(/hero.jpg)",
      }}>
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className="hero-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold bg-gradient-to-r from-blue-600 to-white  bg-clip-text text-transparent">
            Fouad El Boustani
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex items-center gap-2">
            <Link href="" target="_blank" className="btn btn-circle">
              <FaInstagram size={20} />
            </Link>
            <Link href="" target="_blank" className="btn btn-circle">
              <FaTiktok size={20} />
            </Link>
            <Link href="" target="_blank" className="btn btn-circle">
              <FaFacebook size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
