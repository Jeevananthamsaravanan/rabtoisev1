import { useInView ,motion } from 'framer-motion';

import React, { useRef } from 'react';
let data =[
    {
        img:"",
        title:'',
    },
    {
        img:"",
        title:'',
    },
    {
        img:"",
        title:'',
    }
]

const Herosection = () => {

    let variations = {
        verticalinitialization:{opacity:0 ,  x:'-100%'},
        verticalAnimations:{opacity:1 , x:0,},
        horizontalalinitialization:{opacity:0 ,  y:-600},
        horizontalAnimations:{opacity:1 , y:0},
    }

    let transistion = { duration:0.5};


    
  return (
    <motion.div variants={variations} transition={transistion} initial={false ?  "verticalinitialization" :"horizontalalinitialization"} animate={false ?"verticalAnimations" : 'horizontalAnimations'}  className='h-[60vh]   relative  lg:h-[80vh] bg-gradient-to-r  md:from-transparent md:to-transparent md:bg-transparent px-5 sm:px-20 md:px-10 py-10 md:py-20 lg:py-10 flex  md:flex-row overflow-hidden flex-col-reverse items-center gap-5 justify-center md:justify-between w-[100%] overflow-hidden'>
         <motion.div transition={transistion} initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} className='flex overflow-hidden  w-[100%] md:w-1/2 xl:pr-10 flex-col text-[black] items-center md:items-start gap-5 justify-center md:justify-start'>
             <div  className='text-[25px] sm:text-[30px] md:text-start text-center lg:text-[40px] xl:text-[50px] leading-snug satoshi-bold'>Your vision, our expertise. Together, we build brilliance.</div>
             <p className='md:text-start text-center satoshi-medium text-[16px] lg:text-[20px]'>We believe in close collaboration. Share your vision and we'll use our expertise to craft a website that exceeds your expectations.</p>
             <a href='#contactus' className='rounded-[10px] border  border-[#a8a8a8] button-one px-4 satoshi-light text-[16px] hover:text-white font-semibold'>Contact Us</a>
         </motion.div>
         <div    className='w-[100%] hidden md:flex md:w-1/2'>
            <img src="./heroimage1.jpg" className='w-[100%] h-[100%] object-cover' alt="Hero image"/>
         </div>
    </motion.div>
  )
}

export default Herosection