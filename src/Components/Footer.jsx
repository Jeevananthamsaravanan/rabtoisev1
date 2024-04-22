import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaMapMarker, FaYoutubeSquare } from 'react-icons/fa'
import { IoMdCall, IoMdMail } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Footer = () => {

  const HandleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className=' px-10 pt-20 relative  bg-black w-[100%]' id='contactus'>
         <div className='flex flex-col gap-12 md:flex-row items-start justify-start w-[100%]'>
              <Link to="/" className='w-[100%] md:w-1/3 flex items-start'>
                <img src="./footerlogo.png" alt="" className='w-[200px]' />
              </Link>
              <div className='w-[100%] satoshi-medium  md:w-1/3 flex flex-col gap-5 text-white text-[18px] lg:px-10  '>
                <div className='text-[20px]'>Contact Us</div>
                   
                  <div className='flex  items-start justify-start gap-5'>
                     <div className='pt-1'><FaMapMarker /></div>
                     <div>1/67, Periyapallipalayam , Unniyur ,Trichy -621207</div>
                  </div>
                  <div className='flex  items-start justify-start gap-5'>
                     <div className='pt-1'><BsTelephoneFill /></div>
                     <div>+91 6382424394</div>
                  </div>
                  <div className='flex  items-start justify-start gap-5'>
                     <div className='pt-1'><IoMdMail /></div>
                     <div>rabtoise.in@gmail.com</div>
                        
                  </div>
              </div>
              <div className='w-[100%] md:w-1/3 flex flex-col gap-5  text-white text-[20px]  '>
                <div className='satoshi-medium'>Social Medias</div>
                <div className='flex items-start gap-5 text-[25px]'>
                {/* <FaFacebookSquare className="text-[#1877F2] bg-white cursor-pointer rounded-[5px]"/>
            <FaInstagramSquare className="text-[#7a1a7a] bg-white cursor-pointer rounded-[5px]"/>
            <FaLinkedin className="text-[#0A66C2] bg-white cursor-pointer rounded-[5px]"/>
            <FaYoutubeSquare className="text-[#FF0000] bg-white rounded-[5px] cursor-pointer"/> */}
            <a target='_blank' href='https://www.linkedin.com/company/rabtoise'><img src="./linkedin.webp"  alt="" className="w-[20px] bg-white rounded-[3px]" /></a>
            <a target='_blank' href='https://www.facebook.com/profile.php?id=61558620061065'><img src="./facebook.webp" alt="" className="w-[20px]  rounded-[3px]" /></a>
            <a target='_blank' href='https://www.instagram.com/rabtoise/'><img src="./instagram.webp" alt="" className="w-[20px]   rounded-[3px]" /></a>
            <a target='_blank' href='https://twitter.com/rabtoise'><img src="./twitter.webp" alt="" className="w-[20px]  bg-white rounded-[3px]" /></a>
            <a target='_blank' href='https://www.youtube.com/@Rabtoise'><img src="./youtube.webp" alt="" className="w-[20px]   rounded-[3px]" /></a>
            <a target='_blank' href='https://heylink.me/rabtoise/'><img src="./link.webp"  alt="" className="w-[20px]  rounded-[3px]" /></a>
            
            </div>
                
              </div>
         </div>
         <div className="hidden md:flex py-10 md:pt-20 items-center justify-start md:justify-between w-[100%] text-[14px] satoshi-light gap-2 text-white">
             <span>&copy; 2024 RABTOISE </span>  <span> Built by Jeevanantham S</span>
         </div>
         <div className="flex md:hidden py-10 md:pt-20 items-center justify-start md:justify-end w-[100%] text-[14px] satoshi-light gap-2 text-white">
             &copy; 2024 RABTOISE  |  Built by Jeevanantham S<br />
         </div>
         <div
            onClick={() => HandleTop()}
            className="absolute cursor-pointer flex items-center justify-center  h-[50px] w-[50px]  bg-[white] rounded-full  bottom-20 right-10 md:right-20 lg:top-20 lg:right-20 xl:right-40 text-white"
          >
            <img src="./footerarrow.svg" alt="" />
          </div>
    </div>
  )
}

export default Footer