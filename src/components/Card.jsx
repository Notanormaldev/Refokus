import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'motion/react';

function Card({width,start,para,hover="false",title="get in touch",handing="Let`s get to it,together."}) {
  return (
    <motion.div whileHover={{backgroundColor:hover==="true" && "#7443ff",padding:"25px"}}   whileTap={{ backgroundColor: hover==="true" && "#7443ff", padding:"15px" }} className={` bg-zinc-600 rounded-md p-3 text-white h-[23rem] flex flex-col justify-between ${width}  `}>
     <div>
         <div className='flex items-center justify-between gap-5'>
        <h1 className='text-white  max-[600px]:text-sm   max-[600px]:whitespace-nowrap'>{title}</h1>
        <FaArrowRightLong className='text-white'/>
      </div>
      <h1 className='text-4xl max-[600px]:text-2xl  font-medium mt-5 '>{handing}</h1>
     </div>
     <div >
        {start && <><h1 className='text-6xl  leading-none tracking-tight font-semibold mt-35  max-[600px]:text-[7vw]  max-[600px]:whitespace-nowrap'>Start the project
        </h1>
            <button className='border border-[2px] px-5 py-1 mt-4  rounded-full text-xm  max-[600px]:text-sm'>Contact us</button></>}
       {para &&  <p className='text-zinc-400'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>}

     </div>
    </motion.div>
  )
}

export default Card
