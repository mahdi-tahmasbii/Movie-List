import Image from "next/image";
import CarouselStylesType from "@/types/CarouselStylesType";
import ChevronLeftIcon from "@/assets/icons/Movies&ShowsIcons/MoviesSlider/ChevronLeftIcon.svg";
import ChevronRightIcon from "@/assets/icons/Movies&ShowsIcons/MoviesSlider/ChevronRightIcon.svg";

export const MoviesSliderTheme: CarouselStylesType = {
  carousel: {
    defaultProps: {
      prevArrow: ({ loop, handlePrev, firstIndex }) => {
        return (
          <button
            onClick={handlePrev}
            disabled={!loop && firstIndex}
            className="absolute bottom-0 left-4 hidden h-12 max-h-[48px] w-12 max-w-[48px] -translate-y-2/4 select-none place-items-center rounded-full text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:mb-[16px] md:ml-[40px] md:grid"
          >
            <Image
              src={ChevronLeftIcon}
              width={48}
              height={48}
              alt={ChevronLeftIcon}
              className="md:h-[48px] md:w-[48px]"
            />
          </button>
        );
      },
      nextArrow: ({ loop, handleNext, lastIndex }) => (
        <button
          onClick={handleNext}
          disabled={!loop && lastIndex}
          className="absolute bottom-0 right-4 hidden h-12 max-h-[48px] w-12 max-w-[48px] -translate-y-2/4 select-none place-items-center rounded-full text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:mb-[16px] md:mr-[40px] md:grid"
        >
          <Image
            src={ChevronRightIcon}
            width={48}
            height={48}
            alt={ChevronRightIcon}
          />
        </button>
      ),
      navigation: ({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 hidden -translate-x-2/4 gap-2 md:flex">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] md:h-[4px] md:w-[16px] ${
                activeIndex === i ? "bg-red45 md:w-[23px]" : "bg-black20"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      ),
      autoplay: false,
      autoplayDelay: 5000,
      transition: {
        type: "tween",
        duration: 0.5,
      },
      loop: false,
      className: "",
    },
    styles: {
      base: {
        carousel: {
          position: "relative",
          width: "w-full",
          height: "h-full",
          overflowX: "overflow-x-hidden",
          display: "flex",
        },

        slide: {
          width: "w-full",
          height: "h-full",
          display: "inline-block",
          flex: "flex-none",
        },
      },
    },
  },
};
