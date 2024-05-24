import Image from "next/image";
import React from "react";

const Expericence = () => {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}`;
  };
  return (
    <div className="">
      <div className="row overflow-auto">
        <div className="d-flex ">
          <Image
            loader={imageLoader}
            src={
              "https://celebaltech.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcelebal-logo.4c6b3a75.png&w=3840&q=75"
            }
            alt="logo"
            height={100}
            width={200}
          />
          <div className="d-flex flex-column">
            <p className="">Celebal Technologies</p>
            <div className="">Summer Internship (Node js)</div>
            <div className="opacity-50">May 2024 - July 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expericence;
