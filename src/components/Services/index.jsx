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
  const [ref5, inView5] = useInView({
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
          <h2 className="text-2xl leading-normal capitalize mb-2 font-bold">
            What we guarantee{" "}
          </h2>
          <p className="text-gray-400 leading-relaxed font-light text-xl mx-auto pb-2">
            Your viral videos, will be fully taken care of, from ideation to
            release. All you’ll need to do is film.{" "}
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1 text-center">
          <motion.div
            ref={ref1}
            className="h-full block max-w-full w-full"
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}>
            <div className="py-8 px-12 h-full bg-gray-50 border-2 border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-xl shadow-lg">
              <div className="inline-block text-gray-900 mb-4">
                <div className="p-2 rounded-full">
                  <Image alt="" src={"/icon-1.png"} width={50} height={50} />
                </div>{" "}
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Viral Strategy{" "}
              </h3>
              <p className="text-gray-500">
                Creating optimal results, by matching your unique potential,
                with a tailored content strategy.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={ref2}
            className="h-full block max-w-full w-full"
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}>
            <div className="py-8 px-12 h-full bg-gray-50 border-2 border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-xl shadow-lg ">
              <div className="inline-block text-gray-900 mb-4">
                <div className="p-2 rounded-full">
                  <Image alt="" src={"/icon-2.png"} width={50} height={50} />
                </div>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Viral scripting{" "}
              </h3>
              <p className="text-gray-500">
                Optimizing the best content ideas, into powerful scripts, that
                drive high-retention (i.e creates organic virality){" "}
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={ref3}
            className="h-full block max-w-full w-full"
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}>
            <div className="py-8 px-12 h-full bg-gray-50 border-2 border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-xl shadow-lg ">
              <div className="inline-block text-gray-900 mb-4">
                <div className="p-2 rounded-full">
                  <Image alt="" src={"/icon-3.png"} width={50} height={50} />
                </div>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Viral Editing{" "}
              </h3>
              <p className="text-gray-500">
                Using viral editing techniques to best amplify your message.{" "}
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={ref5}
            className="h-full max-w-full w-full lg:block hidden"
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}></motion.div>
          <motion.div
            ref={ref5}
            className="h-full block max-w-full w-full"
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}>
            <div className="py-8 px-12 h-full bg-gray-50 border-2 border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-xl shadow-lg ">
              <div className="inline-block text-gray-900 mb-4">
                <div className="p-2 rounded-full">
                  <Image alt="" src={"/icon-4.png"} width={50} height={50} />
                </div>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Social media management{" "}
              </h3>
              <p className="text-gray-500">
                Save yourself the headache, our team will manage all posting,
                titles, hashtags, etc …{" "}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
