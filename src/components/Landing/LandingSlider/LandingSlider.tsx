"use client";
import { Carousel, ThemeProvider } from "@material-tailwind/react";
import { LandingSliderTheme } from "./LandingSliderTheme";
import LandingSliderCard from "./LandingSliderCard";

const LandingSlider = () => {
  return (
    <ThemeProvider value={LandingSliderTheme}>
      <Carousel
        placeholder={""}
        className="ml-[16px] mr-[16px] mt-[40px] h-[468px] w-[358px] rounded-[12px] md:ml-[80px] md:mr-[80px] md:mt-[59px] md:h-[709px] md:w-[1280px] xl:w-[1920px]"
        autoplay
        draggable="true"
      >
        <LandingSliderCard />
        <LandingSliderCard />
        <LandingSliderCard />
      </Carousel>
    </ThemeProvider>
  );
};

export default LandingSlider;
