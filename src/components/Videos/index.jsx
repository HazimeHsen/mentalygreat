import Image from "next/image";
import React from "react";
import { FaEye } from "react-icons/fa";

const Videos = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Protfolio</h2>
      <div className="flex justify-evenly flex-wrap gap-5">
        <div className="flex flex-col items-center justify-center gap-5 px-4">
          <div className="mockup-phone !m-0 w-[296px]">
            <div className="camera"></div>
            <div className="display">
              <div className="h-[500px] relative">
                <Image alt="" src="/insta1.jpg" quality={100} fill />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold bg-gray-100 text-gray-500 px-4 py-2 rounded-full">
            <FaEye />
            <span className="text-xs">10m Views</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 px-4">
          <div className="mockup-phone !m-0 w-[296px]">
            <div className="camera"></div>
            <div className="display">
              <div className="h-[500px] relative">
                <Image alt="" src="/insta1.jpg" quality={100} fill />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold bg-gray-100 text-gray-500 px-4 py-2 rounded-full">
            <FaEye />
            <span className="text-xs">10m Views</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 px-4">
          <div className="mockup-phone !m-0 w-[296px]">
            <div className="camera"></div>
            <div className="display">
              <div className="h-[500px] relative">
                <Image alt="" src="/insta1.jpg" quality={100} fill />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold bg-gray-100 text-gray-500 px-4 py-2 rounded-full">
            <FaEye />
            <span className="text-xs">10m Views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
