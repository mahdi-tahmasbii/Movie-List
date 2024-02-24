"use client";
import { Carousel, ThemeProvider } from "@material-tailwind/react";
import { MoviesSliderTheme } from "./MoviesSliderTheme";
import MoviesSliderCard from "./MoviesSliderCard";

const MoviesSlider = () => {
  return (
    <ThemeProvider value={MoviesSliderTheme}>
      <Carousel
        placeholder={""}
        className="ml-[16px] mr-[16px] mt-[40px] h-[468px] w-[358px] rounded-[12px] md:ml-[80px] md:mr-[80px] md:mt-[59px] md:h-[709px] md:w-[1280px] xl:h-[709px] xl:w-[2000px] 2xl:h-[800px]"
        autoplay
        draggable="true"
      >
        <MoviesSliderCard />
        <MoviesSliderCard />
        <MoviesSliderCard />
      </Carousel>
    </ThemeProvider>
  );
};

export default MoviesSlider;
