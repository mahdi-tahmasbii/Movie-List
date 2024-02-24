import React from "react";
import Image from "next/image";
import Link from "next/link";

import ArrowRightIcon from "@/assets/icons/LandingIcons/GenreSlider/ArrowRightIcon.svg";

const data = [
  {
    imageLink:
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    imageLink:
      "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    imageLink:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  },
  {
    imageLink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imageLink:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
  },
  {
    imageLink:
      "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
  },
  {
    imageLink:
      "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
  },
  {
    imageLink:
      "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
  },
  {
    imageLink:
      "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
  },
];

const GenresSliderCard = () => {
  return (
    <div className="h-[259px] w-[224px] rounded-[10px] border-2 border-black15 bg-black/10">
      <div className="ml-[24px] mr-[24px] mt-[24px] grid h-[187px] w-[176px] grid-cols-2 gap-4">
        {data.slice(0, 4).map(({ imageLink }, index) => (
          <div key={index}>
            <img
              className="h-[91px] w-[85.5px] rounded-lg object-cover object-center"
              src={imageLink}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-around gap-7 text-white">
        <h1 className="z-10 text-[14px] font-semibold md:text-[16px]">
          Action
        </h1>
        <Link href={""} className="z-10">
          <Image
            alt=""
            src={ArrowRightIcon}
            width={15}
            height={13.5}
            className="z-10 h-[11.25px] w-[12.5px] md:h-[13.5px] md:w-[15px]"
          />
        </Link>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
  );
};

export default GenresSliderCard;
