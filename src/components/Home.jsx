import React from "react";
import { TypeAnimation } from "react-type-animation";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandLinktree } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
const Home = () => {
  return (
    <div className="my-2 ">
      <div className="p-5 home fs-5 text-dark d-flex align-items-center justify-content-center  ">
        <div className=" py-5 d-flex flex-wrap gap-5">
          <div className=" d-flex align-items-center justify-content-center">
            <Image
              src={"/IMG-20240212-WA0073-modified.png"}
              alt="profile"
              width={275}
              height={275}
              className="img-fluid"
            />
          </div>
          <div className="">
            <p className="txt">
              <TypeAnimation
                preRenderFirstString={false}
                sequence={[100, "Hello, I am"]}
                speed={10}
                style={{
                  display: "inline-block",
                  color: "black",
                }}
                repeat={false}
                cursor={false}
              />
            </p>
            <p className="txt">
              <TypeAnimation
                preRenderFirstString={false}
                sequence={[100, "Suprakash Gorai"]}
                speed={10}
                style={{
                  display: "inline-block",
                  color: "black",
                }}
                repeat={false}
                cursor={false}
              />
            </p>
            <p className="txt ">
              <TypeAnimation
                preRenderFirstString={false}
                sequence={[
                  100,
                  "I am a Full-Stack Developer", // initially rendered starting point
                  // 2000,
                  // " React-Native developer",
                  // 3000,
                  // " Data Anyalist",
                  // 2000,
                ]}
                speed={10}
                style={{
                  display: "inline-block",
                  color: "black",
                }}
                repeat={false}
                cursor={false}
              />
            </p>
            <div className="d-flex gap-3 fs-2 ">
              <Link
                href={"https://www.linkedin.com/in/suprakash-gorai/"}
                referrerPolicy=""
                target="_blank"
              >
                <FaLinkedin />{" "}
              </Link>
              <Link
                href={"https://github.com/suprakash-144"}
                referrerPolicy=""
                target="_blank"
              >
                <FaGithub />
              </Link>
              <Link
                href={"https://linktr.ee/suprakash_144"}
                referrerPolicy=""
                target="_blank"
              >
                <TbBrandLinktree />
              </Link>
            </div>

            <div className="d-flex ">
              <div className="py-3">
                <a href="Resume.pdf" download="Resume">
                  <button className="btn btn-outline-danger fw-bold fs-5">
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
