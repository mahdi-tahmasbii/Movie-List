import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import PlayIcon from "@/assets/icons/LandingIcons/LandingSlider/PlayIcon.svg";
import LikeIcon from "@/assets/icons/LandingIcons/LandingSlider/LikeIcon.svg";
import SoundIcon from "@/assets/icons/LandingIcons/LandingSlider/SoundIcon.svg";
import AddFavIcon from "@/assets/icons/LandingIcons/LandingSlider/AddFavIcon.svg";

const LandingSliderCard = () => {
  return (
    <div className="relative h-full w-full">
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 -mt-[30px] grid h-full w-full place-items-center items-end md:-mt-[106px]">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            placeholder={""}
            variant="h1"
            color="white"
            className="mb-4 text-[24px] font-bold text-white md:text-[30px]"
          >
            Avengers : Endgame
          </Typography>
          <Typography
            placeholder={""}
            variant="lead"
            color="white"
            className="mb-12 mt-[2px] hidden font-medium text-grey60 opacity-80 md:flex md:text-[16px]"
          >
            With the help of remaining allies, the Avengers must assemble once
            more in order to undo Thanos`s actions and undo the chaos to the
            universe, no matter what consequences may be in store, and no matter
            who they face... Avenge the fallen.
          </Typography>
          <div className="flex flex-col items-center justify-center gap-2 md:-mt-[24px] md:flex-row">
            <Button
              placeholder={""}
              size="sm"
              color="white"
              className="z-10 flex h-[52px] w-[310px] items-center justify-center rounded-[8px] bg-red45 text-center font-semibold text-white md:h-[52px] md:w-[129px] md:gap-[4px] md:text-[14px]"
            >
              <Image src={PlayIcon} alt={"PlayIcon"} width={24} height={24} />
              Play Now
            </Button>
            <div className="z-10 flex">
              <Button
                size="sm"
                placeholder={""}
                color="black"
                variant="text"
                className="-mr-7"
              >
                <Image
                  src={AddFavIcon}
                  alt={"AddFavIcon"}
                  width={48}
                  height={48}
                />
              </Button>
              <Button
                size="sm"
                placeholder={""}
                color="black"
                variant="text"
                className="-mr-7"
              >
                <Image src={LikeIcon} alt={"LikeIcon"} width={48} height={48} />
              </Button>
              <Button
                size="sm"
                placeholder={""}
                color="black"
                variant="text"
                className=""
              >
                <Image
                  src={SoundIcon}
                  alt={"SoundIcon"}
                  width={48}
                  height={48}
                />
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* Black fog overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
  );
};

export default LandingSliderCard;
