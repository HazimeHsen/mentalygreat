import React from "react";
import { FaEye } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Videos = () => {
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

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <div id="protfolio" className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
      <div className="flex justify-evenly flex-wrap gap-5">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-5 px-4">
          <div className="mockup-phone !m-0 w-[296px]">
            <div className="camera"></div>
            <div className="display">
              <div className="h-[500px] relative">
                {inView1 && (
                  <iframe
                    src="https://www.instagram.com/reel/CpLHsK6jpIh/embed/"
                    title="Instagram Video"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen></iframe>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold bg-gray-100 text-gray-500 px-4 py-2 rounded-full">
            <FaEye />
            <span className="text-xs">10m Views</span>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-5 px-4">
          <div className="mockup-phone !m-0 w-[296px]">
            <div className="camera"></div>
            <div className="display">
              <div className="h-[500px] relative">
                {inView2 && (
                  <iframe
                    src="https://www.instagram.com/reel/Ck_ZXaJqANM/embed/"
                    title="Instagram Video"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen></iframe>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold bg-gray-100 text-gray-500 px-4 py-2 rounded-full">
            <FaEye />
            <span className="text-xs">10m Views</span>
          </div>
        </motion.div>
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-5 px-4">
          <div className="mockup-phone !m-0 w-[296px]">
            <div className="camera"></div>
            <div className="display">
              <div className="h-[500px] relative">
                <video
                  src="/tik.mp4"
                  title="TikTok Video"
                  width="100%"
                  height="100%"
                  autoPlay={false}
                  className="w-full"
                  frameBorder="0"
                  scrolling="no"
                  controls></video>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold bg-gray-100 text-gray-500 px-4 py-2 rounded-full">
            <FaEye />
            <span className="text-xs">10m Views</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Videos;
