import React from 'react'
import Stripe from './Stripe'
function Stripes() {
    var data=[
        {url:"https://cdn.brandfetch.io/idAuTwQIFL/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",num:"48"},
        {url:"https://imgs.search.brave.com/ao70rpqB9WhlZMYxrPDAJPNk4lQOdJsV97tKWFhrpgY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMud2Vic2l0ZS1m/aWxlcy5jb20vNjFh/Njg2YzIxMzgzNzAz/ZWM5ZDlkN2JiLzYx/YWJhNzY1Y2YwNzI1/NjIyMjU3MTc5OV9O/Q0MyMDIxX0xvZ29M/b2NrdXAuc3Zn",num:"2"},
        {url:"https://cdn.brandfetch.io/idGqGyr6qk/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",num:"11"},
        {url:"https://cdn.brandfetch.io/idAuTwQIFL/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",num:"48"},
        {url:"https://imgs.search.brave.com/ao70rpqB9WhlZMYxrPDAJPNk4lQOdJsV97tKWFhrpgY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMud2Vic2l0ZS1m/aWxlcy5jb20vNjFh/Njg2YzIxMzgzNzAz/ZWM5ZDlkN2JiLzYx/YWJhNzY1Y2YwNzI1/NjIyMjU3MTc5OV9O/Q0MyMDIxX0xvZ29M/b2NrdXAuc3Zn",num:"2"},
        {url:"https://cdn.brandfetch.io/idGqGyr6qk/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",num:"11"}
       

    ]
  return (
    <div className='flex mt-15   pb-9 bg-[#18181B]'>
      {data.map((elem , index)=>(
        <Stripe val={elem} key={index}/>
      ))}
    </div>
  )
}

export default Stripes
