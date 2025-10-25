import React from 'react'
import Card from './Card'

function Cards() {
  return (
  <div className='w-full bg-zinc-900 pb-20'>
      <div className='max-w-[70%]  mx-auto  max-[600px]:max-w-[95%] flex gap-3 '> 
      <Card width={"basis-1/3"} start={false} para={true}  title={"up next culture"} handing={"Who we are"}/>
      <Card width={"basis-2/3"} start={true} para={false} hover={"true"}/>
    </div>
  </div>
  )
}

export default Cards
