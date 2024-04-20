import React, { Fragment } from "react";


const Bottom = () => {
  return (
    <Fragment>
      <div className="py-20 md:py-28 px-5">
        <div className="flex gap-5 flex-col items-center justify-center w-[100%]">
          <img src="/bottomcontact.svg" alt="" />
          <div className="satoshi-medium text-[#000000] text-[30px] text-center">
            Still have questions?
          </div>
          <div className="satoshi-medium text-[#888888] text-[18px] max-w-[400px] text-center">
            Contact us to discover how our solutions align with your goals.
          </div>
          <a href="#contactus"
            className="button-two w-[130px] h-[50px] text-[14px] md:text-[15px]  satoshi-medium rounded-[12px]  hover:text-black"
          >
            Contact Us
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Bottom;
