import { motion } from "framer-motion"
import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import logo from "../assets/headerlogo.png";

const Header = () => {

  let variations = {
    verticalinitialization:{opacity:0 ,  x:'-100%'},
    verticalAnimations:{opacity:1 , x:0,repeat :Infinity},
    horizontalalinitialization:{opacity:0 ,  scale:1.5},
    horizontalAnimations:{opacity:1 , scale:1,},
}

let transistion = { duration:1};
 
  return (
    
    <div className=' sticky bg-white left-0 right-0 z-50 top-0 flex items-center overflow-hidden justify-between w-[100%] px-5 md:px-10 py-5 '>
        <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} className=''> <img className="w-[120px] sm:w-[200px]" src='./headerlogo.png'/> </motion.div>
        <motion.div variants={variations} initial='horizontalalinitialization' animate='horizontalAnimations' transition={transistion} className='flex mt-2 md:flex items-center  justify-center gap-3 md:gap-10' >
            {/* <FaFacebookSquare className="text-[#1877F2] cursor-pointer"/> */}
            {/* <FaInstagramSquare className="text-[#7a1a7a] cursor-pointer"/> */}
            <a target='_blank' href='https://www.linkedin.com/company/rabtoise'><img src="./linkedin.webp"  alt="" className="w-[20px]  rounded-[3px]" /></a>
            <a target='_blank' href='https://www.facebook.com/profile.php?id=61558620061065'><img src="./facebook.webp" alt="" className="sm:w-[20px] w-[18px]  rounded-[3px]" /></a>
            <a target='_blank' href='https://www.instagram.com/rabtoise/'><img src="./instagram.webp" alt="" className="sm:w-[20px] w-[18px]   rounded-[3px]" /></a>
            <a target='_blank' href='https://twitter.com/rabtoise'><img src="./twitter.webp" alt="" className="sm:w-[20px] w-[18px]  bg-white rounded-[3px]" /></a>
            <a target='_blank' href='https://www.youtube.com/@Rabtoise'><img src="./youtube.webp" alt="" className="sm:w-[20px] w-[18px]   rounded-[3px]" /></a>
               
            {/* <FaLinkedin className="text-[#0A66C2] cursor-pointer"/>
            <FaYoutubeSquare className="text-[#FF0000] cursor-pointer"/> */}
            {/* <div  className='px-4 py-2 border-b-2 font-medium text-[black] border-[#cd2100]'>Home</div>
            <div  className='px-4 py-2  font-medium text-[gray] '>About</div>
            <div  className='px-4 py-2  font-medium text-[gray] '>Services</div>
            <div  className='px-4 py-2  font-medium text-[gray] '>Contact Us</div> */}
        </motion.div>
        
    </div>
    
  )
}

export default Header