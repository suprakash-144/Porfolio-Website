"use client";
import { Projectdetails } from "@/utils/Projectdet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Banner = () => {
  const pathname = usePathname();
  const [project, setproject] = useState(Projectdetails[pathname.split[2]]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Image src={`${project.image[0]}`} alt="Banner Image" />
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
