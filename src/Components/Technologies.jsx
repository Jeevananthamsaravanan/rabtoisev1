import React, { Fragment } from 'react'
import RightToLeft from './Animation/RightToLeft'

const Technologies = () => {
  return (
    <Fragment>
    <div className='py-20 md:py-20 px-5 md:px-10 '>
  <div className='flex flex-col items-center justify-center'>
  <h2 className="text-3xl satoshi-black text-center text-gray-900 mb-8">
          Technologies
  </h2>
  </div>
  <div className='pt-10 flex gap-10 flex-col overflow-hidden'>
    <RightToLeft/>
    {/* <LeftToRight/> */}
  </div>
</div>

    </Fragment>
  )
}

export default Technologies