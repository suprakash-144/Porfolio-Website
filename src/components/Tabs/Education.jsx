import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <div>
      <div className="row overflow-auto">
        <div className="d-flex justify-content-between">
          <div className="">
            <Image src={""} alt="" />
          </div>
          <div className="d-flex flex-column">
            <div className="">Bachalore in Computer Science</div>
            <div className="">Dr. B C Roy Enginerring College</div>
            <div className="">Cgpa: 8.88</div>
          </div>
          <div className="">2021-2025</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
