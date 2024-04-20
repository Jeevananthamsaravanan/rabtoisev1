import React, { Fragment, useRef } from 'react'
import { ImCart } from "react-icons/im";
import { FaLaptopCode } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import {motion, useInView} from "framer-motion";
import { AiFillMobile } from 'react-icons/ai';

const Service = () => {
    const serviceRef = useRef();
    const isServiceRedinView = useInView(serviceRef,{once:true});
  return (
    <Fragment>
         <div id='services' className='py-20  bg-gray-100 flex flex-col items-center justify-center w-[100%]'>
         <h2 className="text-3xl satoshi-black text-center text-gray-900 mb-8">
          Our Services
           </h2>
              <motion.div ref={serviceRef} transition={{duration:0.5}} initial={{y:300,opacity:0}} animate={isServiceRedinView ? {y:0,opacity:1} : {}} className='flex items-center gap-10  py-10 justify-center flex-wrap w-[100%]'>
                 <div className='bg-[#fff] gap-5 px-5 py-14 w-[300px] h-[350px] md:h-[400px] md:w-[400px] rounded-[20px] flex items-center justify-start flex-col'>
                      <div className='border-2 p-5 border-[gray] rounded-[50%] w-[80px] h-[80px] flex items-center justify-center'>
                         <FaLaptopCode className='w-[100%] h-[100%]'/>
                      </div>
                      <div className='text-[25px] md:text-[28px] satoshi-medium text-center'>Website development</div>
                      <div className='text-center text-[14px] md:text-[18px] satoshi-regular'>Crafting tailored web solutions for you. Elevate your brand online.</div>
                 </div>
                 <div className='bg-[white] gap-5 px-8 py-14 w-[300px] h-[350px] md:h-[400px] md:w-[400px] rounded-[20px] flex items-center justify-start flex-col'>
                      <div className='border-2 p-5 border-[gray] rounded-[50%] w-[80px] h-[80px] flex items-center justify-center'>
                         <ImCart className='w-[100%] h-[100%]'/>
                      </div>
                      <div className='text-[25px] md:text-[28px] satoshi-medium text-center'>Ecommerce development</div>
                      <div className='text-center text-[14px] md:text-[18px] satoshi-regular'>Empower your online store with our expert eCommerce solutions.</div>
                 </div>
                 <div className='bg-[white] gap-5 px-8 py-14 w-[300px] h-[350px] md:h-[400px] md:w-[400px] rounded-[20px] flex items-center justify-start flex-col'>
                      <div className='border-2 p-5 border-[gray] rounded-[50%] w-[80px] h-[80px] flex items-center justify-center'>
                         <TbApps className='w-[100%] h-[100%]'/>
                      </div>
                      <div className='text-[25px] md:text-[28px] satoshi-medium text-center'>Web Applications Development</div>
                      <div className='text-center text-[14px] md:text-[18px] satoshi-regular'>Transforming ideas into intuitive web applications. Let's innovate together.</div>
                 </div>
                 <div className='bg-[white] gap-5 px-8 py-14 w-[300px] h-[350px] md:h-[400px] md:w-[400px] rounded-[20px] flex items-center justify-start flex-col'>
                      <div className='border-2 p-5 border-[gray] rounded-[50%] w-[80px] h-[80px] flex items-center justify-center'>
                         <AiFillMobile className='w-[100%] h-[100%]'/>
                      </div>
                      <div className='text-[25px] md:text-[28px] satoshi-medium text-center'>Mobile Applications Development</div>
                      <div className='text-center text-[14px] md:text-[18px] satoshi-regular'>Elevate your mobile experience with our expert touch.</div>
                 </div>
                 
                 
              </motion.div>
              
              
         </div>
    </Fragment>
  )
}

export default Service