import { cources } from "@/utils/Certificatesdetails";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Certificates = () => {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}`;
  };
  return (
    <div className="">
      <div className="row gap-3">
        {cources.map((item, key) => {
          return (
            <div key={key} className="d-flex gap-3 ">
              <div className="d-flex align-items-center justify-content-center">
                <Image
                  loader={imageLoader}
                  src={item.logo}
                  alt="logo"
                  height={100}
                  width={100}
                  className="img-fluid rounded-3"
                />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <p className="fs-5">{item.tilte}</p>
                <p className="opacity-75">
                  <Link target="_blacnk" href={`${item.link}`}>
                    {item.by} &nbsp;
                    <FaExternalLinkAlt />
                  </Link>
                </p>
                <div className="opacity-50">{item.date} </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
