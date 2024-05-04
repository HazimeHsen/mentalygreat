import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Services = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0">
      <div className="md:container xl:max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref4}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold">
            What We Offer
          </h2>
          <p className="text-gray-300 leading-relaxed font-light text-xl mx-auto pb-2">
            Save time managing advertising &amp; Content for your business.
          </p>
        </motion.div>
        <div className="flex flex-wrap flex-row text-center">
          <motion.div
            ref={ref1}
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6"
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}>
            <div className="py-8 px-12 mb-12 bg-gray-50/60 border-2 border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-xl shadow-lg ">
              <div className="inline-block text-gray-900 mb-4">
                <div className="p-2 rounded-full border bg-gray-100">
                  <Image alt="" src={"/icon-1.gif"} width={50} height={50} />
                </div>{" "}
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Grow Your Social Media
              </h3>
              <p className="text-gray-500">
                Increase your social media following and engagement to earn more
                money.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={ref2}
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6"
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}>
            <div className="py-8 px-12 mb-12 bg-gray-50/60 border-2 border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-xl shadow-lg ">
              <div className="inline-block text-gray-900 mb-4">
                <div className="p-2 rounded-full border bg-gray-100">
                  <Image alt="" src={"/icon-2.gif"} width={50} height={50} />
                </div>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Social Content
              </h3>
              <p className="text-gray-500">
                Create engaging content to attract more followers and views.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={ref3}
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6"
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}>
            <div className="py-8 px-12 mb-12 bg-gray-50/60 border-2 border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-xl shadow-lg ">
              <div className="inline-block text-gray-900 mb-4">
                <div className="p-2 rounded-full border bg-gray-100">
                  <Image alt="" src={"/icon-3.gif"} width={50} height={50} />
                </div>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Monetization Strategies
              </h3>
              <p className="text-gray-500">
                Learn effective strategies to monetize your social media
                presence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
