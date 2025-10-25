import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";


function Work() {
  const [img, setimg] = useState([
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8caf827831eb8ff92f7_Layout%20Land%20-%2016%209%20(B)-p-1600.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d880c1fd919b3709feb1_Cula-%2016%209%20(B)-p-1600.webp",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb13c9d1cdce681e0e73_10-p-1600.webp",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d3d0fdcbfda7de0c21ed_Umlaut%20-%2016%209%20(B)-p-1600.webp",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6867e5af4ce59d080b9ebf42_branding-big-p-1600.webp",
     top: "43%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86ccd1552e692874437_Arqitel%20-%2016%209%20(B)-p-1600.webp",
       top: "65%",
      left: "55%",
      isActive: false,
    },
    
  ]);

  






  const { scrollYProgress } = useScroll();
  function showimg(arr){
     setimg(prev =>
      prev.map((item , index )=>
       arr.indexOf(index) === -1 
       ? {...item,isActive:false}
       : {...item,isActive:true} 
      )
     )
  }


  scrollYProgress.on("change", (data) => {
    switch (Math.floor(data * 100)) {
        case 0:
        showimg([])
        break;
      case 1:
        showimg([0])
        break;
      case 2:
        showimg([0,1])
        break;
      case 3:
        showimg([0,1,2])
        break;
      case 4:
        showimg([0,1,2,3])
        break;
      case 6:
        showimg([0,1,2,3,4])
        break;
      case 8:
        showimg([0,1,2,3,4,5])
        break;
    }
  });

  return (
    <div className="w-full mt-15">
      <div className="relative max-w-screen-xl  mx-auto">
        <h1 className="text-white  max-[600px]:text-[17w]     text-[30vw]      leading-none text-center tracking-tigh font-mediumbold">
          Work
        </h1>
        <div className=" absolute top-0 rounded-lg  absolute h-full  w-full">
          {img.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-55 h-52  max-[600px]:w-34  max-[600px]:h-34 object-cover rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
