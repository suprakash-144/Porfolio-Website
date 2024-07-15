import Image from "next/image";
import React from "react";

const Expericence = () => {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}`;
  };
  return (
    <div className="">
      <div className="row ">
        <div className="d-flex gap-3">
          <div className="d-flex align-items-center justify-content-center">
            <Image
              loader={imageLoader}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9ki38FE018uXFV_rIVJ_4KAGRiO0rzDHIQ&s"
              }
              alt="logo"
              height={100}
              width={100}
              unoptimized
              className="img-fluid rounded-3"
            />
          </div>
          <div className="d-flex flex-column">
            <p className="fs-5 fw-bold">Celebal Technologies</p>
            <div className="fs-5 opacity-75">Summer Internship (Node js)</div>
            <div className="opacity-50">May 2024 - July 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expericence;
