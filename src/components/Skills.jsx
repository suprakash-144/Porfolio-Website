import React from "react";

import { Backend, frontend, languages } from "../utils/Skillsdet";

import { motion } from "framer-motion";
import { Minorproject } from "@/utils/Projectdet";
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
        <div className="col-4">
          <h5 className="mb-3">Languages </h5>
          <motion.div
            className=" "
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {languages.map((items, index) => (
              <motion.div
                key={index}
                className="badge border m-1 lh-base my-1"
                variants={item}
              >
                {items}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="col-4">
          <h5 className="">FrontEnd </h5>
          <motion.div
            className=" "
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {frontend.map((items, index) => (
              <motion.div
                key={index}
                className="badge border m-1 lh-base my-1"
                variants={item}
              >
                {items}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="col-4">
          <h5>BackEnd</h5>

          <motion.div
            className=" "
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {Backend.map((items, index) => (
              <motion.div
                key={index}
                className="badge border m-1 lh-base my-1"
                variants={item}
              >
                {items}
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* <div className="col-3">
          <div className="">
            <h5>Minor Projects</h5>
            <div className="d-flex flex-clumn overflow-auto">
              {Minorproject.map((item, key) => (
                <div className="d-flex" key={key}>
                  <div className="w-75">{item.title}</div>
                  <div className="">{item.repo}</div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
