import React, { useState } from "react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

let data = [
  {
    img: "/people1.svg",
    name: "Vignesh Boopathi",
    desigination: "IOT Developer at Infosys",
    descripiton:
      `"Working with Rabtoise on developing my portfolio was an absolute pleasure. Their team demonstrated exceptional professionalism, creativity, and attention to detail throughout the entire process. Not only did they bring my vision to life, but they also provided valuable insights and suggestions to enhance the overall design and functionality. The end result exceeded my expectations, and I couldn't be happier with the outcome. I highly recommend Rabtoise for anyone looking to elevate their online presence with a stunning portfolio."`,
  },
  {
    img: "/people2.svg",
    name: "Kesavan s",
    desigination: "Senior Process executive voice at Cognizant",
    descripiton:
      ` " Choosing Rabtoise for my portfolio development was one of the best decisions I've made for my career. Their team's expertise in web development coupled with their keen eye for design helped me create a portfolio that truly showcases my work in the best light possible. Not only did they deliver a visually stunning website, but they also ensured that it was user-friendly and optimized for performance. The communication throughout the project was excellent, and they were always responsive to my feedback and requests. Thanks to Rabtoise, I now have a professional online portfolio that sets me apart from the competition and attracts potential clients and employers alike. "`,
  }
];

const Testimonials = () => {
  const [swiper, setSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwiper = (swiperInstance) => {
    setSwiper(swiperInstance);
  };

  const handleSlideChange = () => {
    if (swiper) {
      const activeIndex = swiper.activeIndex;
      setCurrentIndex(activeIndex);
    }
  };

  const SwiperIndexUpdate = (index) => {
    swiper.slideTo(index);
    setCurrentIndex(activeIndex);
  };
  // console.log("current index",currentIndex);

  return (
    <div className="flex flex-col items-center py-20 md:py-28 justify-center ">
        <h2 className="text-3xl satoshi-black text-center text-gray-900 mb-8">
         Testimonials
        </h2>
      <div className="relative w-[100%] mt-10 lg:max-w-[900px]">
        <Swiper
          className="  relative  "
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          onSwiper={handleSwiper}
          onSlideChange={handleSlideChange}
        >
          {data.map((testimonials, idx) => (
            <SwiperSlide style={{ width: "100%" }} key={idx}>
             

              <div className="bg-gray-100 px-5 py-10 rounded-[20px] mx-5 relative flex flex-col items-center justify-center ">
                
                <div className="flex flex-col gap-10 items-center justify-center w-[100%] mt-5">
                  <div className="text-center text-[14px] lg:text-[20px] lg:px-14 satoshi-medium">
                    {testimonials.descripiton}
                  </div>
                  <div className="flex flex-col items-center justify-center w-[100%]">
                    <div className="text-[#470903] satoshi-medium text-[24px]">
                      {testimonials.name}
                    </div>
                    <div className="text-[#808080] satoshi-regular text-[14px] text-center ">
                      {testimonials.desigination}
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-center w-[100%]">
                    {data.map((item, index) => (
                      <div
                        onClick={() => SwiperIndexUpdate(index)}
                        className={`w-[5px] h-[5px] rounded-full ${
                          currentIndex === index
                            ? "bg-gray-900"
                            : "bg-gray-500"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
