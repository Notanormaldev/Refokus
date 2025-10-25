import React from "react";
import { motion } from "framer-motion";
function Marquee({ imgurls,direction }) {
  return (
    <div className="text-white w-full flex bg-zinc-600  py-10 max-[600px]:py-7  overflow-hidden whitespace-nowrap">
      <motion.div
        initial={{x: direction === "left" ? "0":"-100%"  }}
        animate={{ x: direction === "left" ? "-100%":"0"  }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        className="flex flex-shrink-0  gap-20 pr-20 "
      >
        {imgurls.map((url, index) => (
          <img key={index} className="w-[7vw]  max-[600px]:w-[20vw]" src={url} />
        ))}
      </motion.div>
      <motion.div
        initial={{x: direction === "left" ? "0":"-100%"  }}
        animate={{ x: direction === "left" ? "-100%":"0"  }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        className="flex flex-shrink-0 ] gap-20 pr-20 "
      >
        {imgurls.map((url, index) => (
          <img key={index} className="w-[7vw] max-[600px]:w-[20vw]" src={url} />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
