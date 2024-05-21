"use client";
import { Projectdetails } from "@/utils/Projectdet";
import Image from "next/image";

import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Details = () => {
  const pathname = usePathname();
  const [project, setproject] = useState(Projectdetails[pathname.split[2]]);
  return <div>Details</div>;
};

export default Details;
