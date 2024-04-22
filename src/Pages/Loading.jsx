import React, { Fragment } from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
   <Fragment>
       <div className='h-[100vh] w-[100%] flex items-center justify-center '>
           <div className='flex item-center flex-col  justify-center w-[100%]'>
               <img src="./headerlogo.png" alt="logo" className='w-[150px] mx-auto'  />
               <div className='w-[80px]  mx-auto'>
               <ReactLoading type={"bubbles"} color={"black"} height={'100px'} width={'100px'} />
               </div>
           </div>
       </div>
   </Fragment>
  )
}

export default Loading