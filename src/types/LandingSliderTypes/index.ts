import { ReactElement } from "react";

interface SliderArrowProps {
  loop: boolean;
  handlePrev: () => void;
  handleNext: () => void;
  firstIndex: boolean;
  lastIndex: boolean;
}

interface SliderNavigationProps {
  setActiveIndex: (index: number) => void;
  activeIndex: number;
  length: number;
}

interface SliderTheme {
  defaultProps: {
    prevArrow: (props: SliderArrowProps) => ReactElement;
    nextArrow: (props: SliderArrowProps) => ReactElement;
    navigation: (props: SliderNavigationProps) => ReactElement;
    autoplay: boolean;
    autoplayDelay: number;
    transition: {
      type: string;
      duration: number;
    };
    loop: boolean;
    className: string;
  };
  styles: {
    base: {
      carousel: {
        position: string;
        width: string;
        height: string;
        overflowX: string;
        display: string;
      };
      slide: {
        width: string;
        height: string;
        display: string;
        flex: string;
      };
    };
  };
}

export interface CarouselStylesType {
  carousel: SliderTheme;
}

export default CarouselStylesType;
