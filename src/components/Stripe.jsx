import React from 'react'

function Stripe({val}) {
  return (
    <div className=' w-[16.66%]  h-12 border-b-[2px] border-t-[2px] border-r-[2px] border-zinc-700 bg-zinc-500 flex items-center justify-between px-3  max-[600px]:px-1 max-[600px]:h-7 max-[600px]:border-b-[1px]  max-[600px]:border-t-[1px]   max-[600px]:border-r-[0.5px]  max-[600px]:gap-1' >
      <span className='relative w-30  py-2   max-[600px]:py-0  max-[600px]:w-[10vw] '><img className="relative " src={val.url} alt="" /></span>
      <span className=' max-[600px]:text-[3vw]'>{val.num}</span>
    </div>
  )
}

export default Stripe
