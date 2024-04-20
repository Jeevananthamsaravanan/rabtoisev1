import React, { Fragment, useState } from "react";

let data = [
  {
    Question:
      "What services do you offer?",
    Ans: "We offer comprehensive web development services, including website design, development, e-commerce solutions, mobile app development, and custom software development, tailored to meet the diverse needs of our clients",
  },
  {
    Question: "How does your development process work?",
    Ans: " Our development process is structured and collaborative, beginning with a comprehensive consultation to understand your goals and requirements. From there, our team of experienced designers and developers crafts tailored solutions through iterative design, rigorous testing, and continuous client feedback, ensuring the delivery of high-quality products that exceed expectations",
  },
  {
    Question: "What technologies do you specialize in?",
    Ans: "We specialize in a comprehensive suite of modern technologies to deliver robust and scalable solutions. Our expertise spans across front-end technologies such as React.js, Tailwind CSS, Bootstrap, HTML, CSS, and JavaScript, while our proficiency extends to backend technologies including Node.js, Express.js, and MongoDB. Additionally, we leverage frameworks like Next.js to ensure seamless and efficient development processes.",
  },
  {
    Question:
      "What sets your company apart from competitors?",
    Ans: "Our company stands out from competitors due to our relentless pursuit of innovation, unwavering commitment to quality, and personalized approach to every project. With a team of seasoned experts dedicated to exceeding client expectations, we deliver tailor-made solutions that drive success and foster long-term partnerships.",
  },
];

const FAQS = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const HandleOpen = (currentindex) => {
    setIsOpen(true);
    if (currentIndex === currentindex) {
      setCurrentIndex(null);
    } else {
      setCurrentIndex(currentindex);
    }
  };

  return (
    <Fragment>
      <div className="flex items-center justify-center w-[100%]">
        <div className="py-20 md:py-28 w-[100%] px-10 sm:px-20 lg:px-48 xl:px-80">
        <h2 className="text-3xl satoshi-black text-center text-gray-900 mb-8">
          Frequently Asked Questions
          </h2>
          <div className="flex  flex-col mt-10 gap-5 items-center justify-center w-[100%]">
            {data.map((item, index) => (
              <div className="flex  flex-col  gap-5 items-center justify-center w-[100%]">
                <div className="flex items-center gap-5 justify-between w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex satoshi-medium text-[18px] items-center justify-start w-[100%] text-[#101828]">
                      {item.Question}
                    </div>
                  </div>
                  <div
                    onClick={() => HandleOpen(index)}
                    className=" cursor-pointer relative h-[20px] w-[20px] border-[2px] flex items-center justify-center rounded-full bg-white border-[#CD2100]"
                  >
                    <div className="w-[10px] h-[2px] bg-[#CD2100] absolute flex items-center justify-center"></div>
                    <div
                      className={` ${
                        isOpen && currentIndex === index
                          ? "rotate-0"
                          : "rotate-90"
                      } transition-all duration-300 w-[10px] h-[2px] bg-[#CD2100] absolute  flex items-start justify-center`}
                    ></div>
                  </div>
                </div>

                <div
                  className={` ${
                    isOpen && currentIndex === index ? "h-[100%]" : "h-[0]"
                  } transition-all duration-300 flex items-center justify-between w-[100%] `}
                >
                  <div className="flex flex-col items-center justify-start w-[100%] ">
                    <div
                      className={` ${
                        isOpen && currentIndex === index
                          ? "  py-5 h-[100%] "
                          : " h-[0]"
                      } pr-5 md:pr-10 flex satoshi-regular text-[16px] sm:text-[18px]  transition-all duration-300 text-[#888888]  items-center justify-start w-[100%]   `}
                    >
                      {isOpen && currentIndex === index ? item.Ans : null}
                    </div>
                  </div>
                  <div></div>
                </div>

                {index === data.length - 1 ? null : (
                  <div className="w-[100%] divide-x-2 border border-gray-100"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FAQS;
