import React from 'react'
import Button from './Button'

function Navbar(){
  return(
     <div className='bg-zinc-900 max-w-screen-xl py-5 mx-auto flex items-center justify-between border-b-[0.5px] border-white'>
           <div className='flex items-center gap-25'>
            <div className='flex items-center gap-2 ml-3'>
            <img src="https://cdn.brandfetch.io/idZgdi6uSQ/w/200/h/200/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"className='w-5 h-5' alt=""/>
            <h3 className='text-xl font-bold text-white'>Refokus</h3>
        </div>
        <div className='flex gap-10 font-normal max-[600px]:hidden'>
            {["Home","Work","Culture","","News"].map((elem,index)=><a key={index} className='text-white font-normal flex items-center gap-2' href='#'>
            {elem.length === 0 && (<span className='bg-zinc-400 h-7 w-[1px]'></span>)}
            {index === 1 && (<span style={{boxShadow:" 0 0 0.45em #00FF19"}}  className='w-1 h-1 rounded-full bg-green-500 inline-block'></span> )}  
                {elem}</a>)}
            </div>
           </div>
   <div>
      <Button/>
   </div>

    </div>
   
   
 
  )
}

export default Navbar
