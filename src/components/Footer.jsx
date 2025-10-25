import React from 'react'
import { RiH5 } from 'react-icons/ri'

function Footer() {
  return (
    <div className='w-full bg-zinc-900 py-10  max-[600px]:h-[40vh] max-[600px]:py-1'>
        <div className='w-[70%]  max-[600px]:w-[90%] mx-auto text-white bg-zinc-900 flex gap-20'>
      <div className='basis-1/2'>
        <h1 className='text-[9.5rem] tracking-tight  leading-none mb-7  max-[600px]:text-[3.4rem]  max-[600px]:mb-4   max-[600px]:mt-2' >refokus.</h1>
        <div className='flex text-xm gap-10  max-[600px]:gap-3 text-zinc-600'>
            {["Privacy policy", "Cookie policy", "Impressum","Terms"].map((item,index)=><h5 key={index} className='traking-tighter whitespace-nowrap  leading-none '>{item}</h5>)}
        </div>
      </div>
      <div className='basis-1/2  pt-10 flex gap-5  max-[600px]:gap-1  max-[600px]:absolute   max-[600px]:mt-20'>
      <div className='basis-1/3 flex flex-col'>
      <h1 className='mb-4 text-zinc-600'>Socials</h1>
      {["Instagram","Twitter (x?)","Linkdin"].map((item,index)=><a key={index} className='text-zinc-500'>{item}</a>)}
      </div>
      <div className='basis-1/3 flex flex-col'>
      <h1 className='mb-4 text-zinc-400'>Sitemap</h1>
      {["Home","Work","Carrer","Contacts"].map((item,index)=><a key={index} className='text-zinc-300'>{item}</a>)}
      </div>
      <div className='basis-1/3  max-[600px]:mr-10'>
      <p className='text-right mb-5  '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <img className='w-42 h-10' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" />
      </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
