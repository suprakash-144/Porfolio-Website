import { Projectdetails } from "@/utils/Projectdet";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
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
  const [selecteditem, setSelecteditem] = useState(null);
  1;
  return (
    <div className="container my-5" id="Project">
      <h2>Projects</h2>

      <motion.div
        className="row gap-5 justify-content-center py-5 "
        variants={container}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
      >
        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className={
                " position-absolute  bg-black px-5 py-5 rounded-4 w-50 d-flex flex-column gap-2"
              }
            >
              <motion.div className="d-flex gap-2 justify-content-end fs-3">
                <IoIosCloseCircleOutline
                  onClick={() => (setSelectedId(null), setSelecteditem(null))}
                />
              </motion.div>

              <motion.div>
                <Image
                  src={selecteditem.image[0]}
                  alt="image-logo"
                  height={100}
                  width={100}
                  className="img-fluid"
                />
              </motion.div>
              <motion.h2>{selecteditem.title}</motion.h2>
              <motion.div>{selecteditem.description.Details}</motion.div>
              <motion.div className="opacity-75">
                {selecteditem.description.Time}
              </motion.div>
              {selecteditem?.link !== "" ? (
                <motion.div className="d-flex gap-2  fs-3">
                  <Link target="_blacnk" href={`${selecteditem.link}`}>
                    <FaExternalLinkAlt />
                  </Link>
                  <Link target="_blacnk" href={`${selecteditem.repo}`}>
                    <FaGithub />
                  </Link>
                </motion.div>
              ) : (
                <motion.div className="d-flex gap-2  fs-3">
                  <Link target="_blacnk" href={`${selecteditem.repo}`}>
                    <FaGithub />
                  </Link>
                </motion.div>
              )}
              <motion.div className="d-flex gap-1 flex-wrap">
                {selecteditem.description?.TechStack.map((val, k) => {
                  return (
                    <span className="badge border lh-sm " key={k}>
                      {val}
                    </span>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {Projectdetails.map((items, index) => (
          <motion.div
            key={index}
            className="porjectcontainer col-lg-3  col-md-6 col-sm-12 "
            variants={item}
          >
            <motion.div
              className="h-100 d-flex p-2 flex-column border rounded-4"
              layoutId={index}
              onClick={() => (setSelectedId(index), setSelecteditem(items))}
            >
              {items?.link !== "" ? (
                <div className="d-flex gap-2 justify-content-end fs-5">
                  <Link target="_blacnk" href={`${items.link}`}>
                    <FaExternalLinkAlt />
                  </Link>
                  <Link target="_blacnk" href={`${items.repo}`}>
                    <FaGithub />
                  </Link>
                </div>
              ) : (
                <div className="d-flex gap-2 justify-content-end fs-5">
                  <Link target="_blacnk" href={`${items.repo}`}>
                    <FaGithub />
                  </Link>
                </div>
              )}
              <div className="fs-4 d-flex justify-content-center text-center h-75 align-items-center">
                {items.title}
              </div>
              <div className="d-flex gap-1 flex-wrap">
                {items.description?.TechStack.map((val, k) => {
                  return (
                    <span className="badge border lh-sm " key={k}>
                      {val}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
