import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
let data = [
    {
    img:"./tech1.jpg", 
    title: 'Node Js'
    },
    {
    img:"./tech2.jpg", 
    title: 'React Js'
    },
    {
    img:"./tech3.jpg", 
    title: 'HTML '
    },
    {
    img:"./tech4.jpg", 
    title: 'MongoDB'
    },
    {
    img:"./tech5.jpg", 
    title: 'CSS'
    },
    {
    img:"./tech6.jpg", 
    title: 'Tailwind Css'
    },
    {
    img:"./tech7.jpg", 
    title: 'Firebase'
    },
]

let WidthTech = 1400

const RightToLeft = () => {
  const [logoWidth, setLogoWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const calculateLogoWidth = () => {
      const windowWidth = WidthTech ;
      const calculatedWidth = windowWidth / data.length;
      setLogoWidth(calculatedWidth);
    };

    calculateLogoWidth();
  }, []);

  useEffect(() => {
    const animateSlider = async () => {
      await controls.start({
        x: -WidthTech * 2 + logoWidth * data.length,
        transition: { duration: 15, ease: "linear", repeat: Infinity }
      });
      // await controls.start({ x: 0 , transition: { duration: 0 } });

    };

    animateSlider();

    return () => {
      controls.stop();
    };
  }, [controls, logoWidth]);

  return (
    <div className="relative flex  overflow-hidden mx-auto">
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={controls}
        style={{ width: `${WidthTech}px` }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="w-24   rounded-md "
            style={{ width: `${logoWidth}px` }}
          >
            <div className="w-full h-full flex items-center justify-center gap-5">
              <img src={item.img} alt="" className="w-[50px]  object-cover" />
              <div className="text-[20px] font-semibold">{item.title}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={controls}
        style={{ width: `${WidthTech}px` }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="w-24   rounded-md "
            style={{ width: `${logoWidth}px` }}
          >
            <div className="w-full h-full flex items-center justify-center gap-5">
              <img src={item.img} alt="" className="w-[50px]  object-cover" />
              <div className="text-[20px] font-semibold">{item.title}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    
    </div>
  );
};

export default RightToLeft;
