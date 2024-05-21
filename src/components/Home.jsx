import React from "react";
import { TypeAnimation } from "react-type-animation";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandLinktree } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
const Home = () => {
  return (
    <div className="my-2">
      <div className="p-5 home fs-5 text-dark d-flex align-items-center justify-content-center ">
        <div className=" py-5 d-flex w-50 flex-wrap">
          <div className="pic d-flex align-items-center justify-content-center px-3">
            <Image
              src={"/IMG-20240212-WA0073-modified.png"}
              alt="profile"
              width={200}
              height={200}
            />
          </div>
          <div className="">
            <p className="txt">Hello, I am</p>
            <p className="txt">Suprakash Gorai</p>
            <p className="txt ">
              I am a&nbsp;
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  1000,
                  " Full-Stack Developer", // initially rendered starting point
                  2000,
                  " React-Native developer",
                  3000,
                  " Data Anyalist",
                  2000,
                ]}
                speed={25}
                style={{
                  fontSize: "1em",
                  display: "inline-block",
                  color: "black",
                }}
                repeat={Infinity}
              />
            </p>
            <div className="d-flex gap-3 fs-3 ">
              <Link
                href={"https://www.linkedin.com/in/suprakash-gorai/"}
                referrerPolicy=""
                target="_blank"
              >
                <FaLinkedin />{" "}
              </Link>
              <Link
                href={"https://www.linkedin.com/in/suprakash-gorai/"}
                referrerPolicy=""
                target="_blank"
              >
                <FaGithub />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/suprakash-gorai/"}
                referrerPolicy=""
                target="_blank"
              >
                <TbBrandLinktree />
              </Link>
            </div>

            <div className="d-flex ">
              <div className="py-3">
                <a href="Resume.pdf" download="Resume">
                  <button className="btn btn-outline-danger fw-bold">
                    Download Resume
                  </button>
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
