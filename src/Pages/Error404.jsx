import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../Components/seo/Seo';


const Error404 = () => {
    let title = "Error 404 - Page Not Found";
    let description = "Oops! This page is not available.";
  return (
    <Fragment>
    <SEO
     titleTemplate={title}
     description={description}
    />    
    <div className='h-[70vh] -mt-[70px] w-[100%] flex items-center justify-center'>
    <div className='flex flex-col gap-5 items-center justify-center px-5'>
      <h1 className='text-[20px] md:text-[30px] satoshi-bold text-center'>Error 404: Page Not Found</h1>
      <p className='text-[12px] md:text-[18px] satoshi-medium text-center'>Sorry, the page you are looking for does not exist.</p>
      <p className='text-[12px] md:text-[14px] satoshi-regular text-center'>Please check the URL or navigate back to the <Link to="/" className=' text-blue-500 underline'> homepage. </Link></p>
    </div>
    </div>
    </Fragment>
  )
}

export default Error404