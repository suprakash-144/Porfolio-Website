import { Projectdetails } from "@/utils/Projectdet";
import React from "react";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Project = () => {
  return (
    <div className="container my-5" id="Project">
      <h2>Projects</h2>
      <motion.ul
        className="row row-cols-3 row-cols-sm-1 row-cols-md-3 py-3"
        variants={container}
        initial="hidden"
        // animate="visible"
        viewport={{ once: true }}
        whileInView="visible"
      >
        {Projectdetails.map((items, index) => (
          <motion.div key={index} className="col" variants={item}>
            <div className="box">{items.title}</div>
          </motion.div>
        ))}
      </motion.ul>
    </div>
  );
};

export default Project;
