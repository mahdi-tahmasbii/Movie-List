"use client";
import { Carousel, ThemeProvider } from "@material-tailwind/react";
import { SliderTheme } from "./SliderTheme";
import SliderCard from "./SliderCard";

const LandingSlider = () => {
  return (
    <ThemeProvider value={SliderTheme}>
      <Carousel
        placeholder={""}
        className="ml-[16px] mr-[16px] mt-[40px] h-[468px] w-[358px] rounded-[12px] md:ml-[80px] md:mr-[80px] md:mt-[59px] md:h-[709px] md:w-[1280px]"
        autoplay
        draggable="true"
      >
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </Carousel>
    </ThemeProvider>
  );
};

export default LandingSlider;
