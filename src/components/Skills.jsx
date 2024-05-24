import React from "react";

import { Backend, database, frontend, languages } from "../utils/Skillsdet";

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
const Skills = () => {
  return (
    <div className="container my-5 py-5" id="Skills">
      <h2>Skills</h2>
      <div className="row pt-4">
        <div className="col-3">
          <h5 className="mb-3">Languages </h5>
          <motion.div
            className=" "
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            {languages.map((items, index) => (
              <motion.div
                key={index}
                className="badge border mx-1 lh-base my-1"
                variants={item}
              >
                {items}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="col-3">
          <p className="">FrontEnd </p>
          <motion.div
            className=" "
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            {frontend.map((items, index) => (
              <motion.div
                key={index}
                className="badge border mx-1"
                variants={item}
              >
                {items}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="col-3">
          <p>BackEnd</p>

          <motion.div
            className=" "
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            {Backend.map((items, index) => (
              <motion.div
                key={index}
                className="badge border mx-1"
                variants={item}
              >
                {items}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="col-3">
          <p>Database</p>
          <motion.div
            className=""
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            {database.map((items, index) => (
              <motion.div
                key={index}
                className="badge border mx-1"
                variants={item}
              >
                {items}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
