import { Projectdetails } from "@/utils/Projectdet";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="container my-5" id="Project">
      <h2>Projects</h2>
      <motion.div
        className="row row-cols-1 row-cols-sm-1 row-cols-md-3 py-3"
        variants={container}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
      >
        {Projectdetails.map((items, index) => (
          <motion.div key={index} className="col" variants={item}>
            <motion.div layoutId={index} onClick={() => setSelectedId(index)}>
              <motion.h2>{items.title}</motion.h2>
            </motion.div>
          </motion.div>
        ))}
        {/* <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId}>
              <motion.h2>{item.title}</motion.h2>
              <motion.button onClick={() => setSelectedId(null)} />
            </motion.div>
          )}
        </AnimatePresence> */}
      </motion.div>
    </div>
  );
};

export default Project;
