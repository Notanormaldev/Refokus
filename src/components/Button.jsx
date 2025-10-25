import React from 'react'
import { MdSubdirectoryArrowRight } from "react-icons/md";
function Button({title="Get Started"}) {
  return (
    <div className='bg-white rounded-full items-center justify-between text-md py-2 px-3 w-40  max-[600px]:whitespace-nowrap max-[600px]:px-2 max-[600px]:py-3   max-[600px]:text-[3vw] max-[600px]:w-20 max-[600px]:h-5   h-7 mr-3 flex'>
        <h1 className='text-black'>{title}</h1>
       <MdSubdirectoryArrowRight className='text-black'/>
    </div>
  )
}

export default Button
