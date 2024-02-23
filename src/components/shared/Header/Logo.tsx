import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RedLogo from "@/assets/icons/logo/red-logo.svg";

const Logo = () => {
  return (
    <Typography
      placeholder={""}
      as="div"
      className="mr-4 cursor-pointer py-1.5 font-medium"
    >
      <Link href={"/"}>
        <Image
          alt="RedLogo"
          src={RedLogo}
          width={165.83}
          height={50}
          className="h-[35px] w-[116.08px] md:h-[50px] md:w-[165.83px]"
        />
      </Link>
    </Typography>
  );
};

export default Logo;
