import React from 'react'
import Button from './Button'

function Product({val,mover,count}) {
  return (
    <div className='w-full py-12 h-[23rem]   bg-zinc-900 text-white'>
     <div   onMouseEnter={()=>{mover(count)}} className='  max-w-screen-xl  mx-auto flex items-center  justify-between'>
          <h1 className=' text-6xl capitalize font-medium mt-9 max-[600px]:text-3xl  max-[600px]:ml-4 '> 
          {val.title}
         </h1>
         <div className='w-1/3'>
            <div className='mb-5 mt-9   max-[600px]:mt-1 max-[600px]:mb-3 max-[600px]:leading-5'>{val.dec}</div>
          <div className='flex gap-5  max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:mt-3   mt-9'>
              {val.live && <Button/>}
              {val.case && <Button title='Case study'/>}
          </div>
         </div>
     </div>
    </div>
  )
}

export default Product
