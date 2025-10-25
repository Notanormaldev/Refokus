import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var Products = [
    {
      title: "ariqite",
      dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dolorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, debitis? tempore nesciunt!",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dolorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, debitis? tempore nesciunt!",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dolorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, debitis? tempore nesciunt!",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dolorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, debitis? tempore nesciunt!",
      live: true,
      case: true,
    },
    {
      title: "TR 2020",
      dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dolorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, debitis? tempore nesciunt!",
      live: true,
      case: false,
    },
    {
      title: "rainfall",
      dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dolorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, debitis? tempore nesciunt!",
      live: true,
      case: true,
    },
  ];
  const [pos, setpos] = useState(0);

  const mover = (value) => setpos(value * 23);
  return (
    <div className="w-full relative  overflow-x-hidden ">
      {Products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="motubox   w-full max-[600px]:w-[120vw]  h-full absolute top-0 right-0 max-[600px]:right-10 pointer-events-none">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window   w-[34rem] max-[600px]:w-[26rem] h-[23rem] bg-blue-100 left-[26%] absolute overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-red-100 "
          >
            <video
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-169.webm"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />{" "}
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-red-200"
          >
            <video
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-169.webm"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-red-300"
          >
            <video
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/umault-169.webm"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-red-400"
          >
            {" "}
            <video
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-169.webm"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-red-500"
          >
            {" "}
            <video
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/chargeflow-169.webm"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-red-600"
          >
            {" "}
            <video
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/chargeflow-169.webm"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
