import React from "react";
import Chart from "../Chart";
import Image from "next/image";

const Followers = () => {
  return (
    <div className="flex items-center lg:flex-row flex-col md:px-14 lg:px-20 px-5 gap-10 py-10 bg-white">
      <div className="w-full">
        <Chart />
      </div>
      <div className="mockup-phone w-[296px] md:w-[350px]">
        <div className="camera"></div>
        <div className="display">
          <div className="h-[600px] lg:h-[500px] relative">
            <Image src="/insta1.jpg" alt="" quality={100} fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Followers;
