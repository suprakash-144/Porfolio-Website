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
          <div className="col-lg-6 col-sm-12">
            <h1 className="text-center">
              Discover <span className="text-danger"> My Story </span>
            </h1>
            <div>
              <p className="p-5">
                {" "}
                I am currently pursuing Bachelor&apos;s degree in Computer
                Science and Engineering. I am currently learning Bankend-Web
                Development.I am working hard to build web-based practical
                applications using the latest web technologies.
                {/* C, C++, Python and Front-end Web Development  */}
                My goal is to become a software engineer.
              </p>
            </div>
            <div className="d-flex ps-5 gap-3">
              {tabs.map((item, key) => (
                <div
                  key={key}
                  className={
                    item === selectedTab
                      ? "selected text-danger "
                      : "text-warning"
                  }
                  onClick={() => setSelectedTab(item)}
                >
                  <h5 className="">{`${item} `}</h5>
                  {item === selectedTab ? (
                    // link-underline-info
                    <motion.div className="underline " layoutId="underline" />
                  ) : null}
                </div>
              ))}
            </div>
            <div className="details ps-5 py-3 ">
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
          <div className="col-lg-4 col-sm-12 s border">
            <Image
              width={250}
              height={250}
              src={"/IMG-20240212-WA0073-modified.png"}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
