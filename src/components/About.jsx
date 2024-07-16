import Image from "next/image";
import React, { useState } from "react";
import Education from "./Tabs/Education";
import Expericence from "./Tabs/Expericence";

import { motion, AnimatePresence } from "framer-motion";
import Certificates from "./Tabs/Certificates";
const About = () => {
  const tabs = ["Experience", "Education", "Certificates"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const displayTabContent = () => {
    switch (selectedTab) {
      case "Education":
        return <Education />;

      case "Experience":
        return <Expericence />;

      case "Certificates":
        return <Certificates />;

      default:
        return "404! 😥";
    }
  };
  return (
    <div id="About">
      <div className="container my-5">
        <div className="row py-5 ">
          <div className="col-12">
            <h1 className="text-center ">
              Discover{" "}
              <span className="text-danger text-decoration-underline">
                {" "}
                My Story{" "}
              </span>
            </h1>
            <div className="p-5 ">
              <p className=" fs-5">
                {" "}
                I am currently pursuing Bachelor&apos;s degree in Computer
                Science and Engineering. I am currently learning Bankend-Web
                Development.I am working hard to build web-based practical
                applications using the latest web technologies. My goal is to
                become a software engineer.
              </p>
            </div>
            <div className="d-flex justify-content-center px-3 gap-3 flex-wrap">
              {tabs.map((item, key) => (
                <div
                  key={key}
                  className={`tabs
                    ${
                      item === selectedTab
                        ? " selected text-danger "
                        : "  text-warning"
                    }
                  `}
                  onClick={() => setSelectedTab(item)}
                >
                  <h2 className="">{`${item} `}</h2>
                  {item === selectedTab ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null}
                </div>
              ))}
            </div>
            <div className="details  py-3 ">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTab ? selectedTab : "empty"}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {displayTabContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
