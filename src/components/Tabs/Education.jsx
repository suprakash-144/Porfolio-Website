import Image from "next/image";
import React from "react";

const Education = () => {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}`;
  };
  return (
    <div>
      <div className="row ">
        <div className="d-flex ">
          <div className="d-flex gap-3">
            <div className="d-flex align-items-center justify-content-center">
              <Image
                // loader={imageLoader}
                src={"/pngegg.png"}
                alt="logo"
                height={100}
                width={100}
              />
            </div>

            <div className="d-flex flex-column ">
              <p className=" fs-5">
                Bachelor of Technology in Computer Science Engineering
              </p>
              <div className="fs-5">
                Dr. B C Roy Enginerring College, Durgapur
              </div>
              <div className="opacity-75">Cgpa: 8.88</div>
              <div className=" opacity-50">2021-2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
