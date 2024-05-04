import React from "react";
import Chart from "../Chart";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Followers = () => {
  const [chartRef, chartInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [phoneRef, phoneInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <div className="flex items-center lg:flex-row flex-col md:px-14 lg:px-20 px-5 gap-10 py-10 bg-white">
      <motion.div
        className="w-full"
        initial="hidden"
        animate={chartInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        ref={chartRef}>
        <Chart />
      </motion.div>
      <motion.div
        className="mockup-phone w-[296px] md:w-[350px]"
        initial="hidden"
        animate={phoneInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.2 }}
        ref={phoneRef}>
        <div className="camera"></div>
        <div className="display">
          <div className="h-[600px] lg:h-[500px] relative">
            <Image src="/insta1.jpg" alt="" quality={100} fill />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Followers;
