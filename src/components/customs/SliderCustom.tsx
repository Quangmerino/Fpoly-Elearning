import React, { useRef } from "react";
import Slider from "react-slick";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type Props = {
  className?: string,
  children?: any;
  customArrow?: string,
  styleButton?: string,
  slideToShow?: number,
  slideToScroll?: number,
  sliderSetting?: {},
};

function SliderCustom({className, children, customArrow, styleButton, slideToShow, slideToScroll, sliderSetting}: Props) {
  const sliderRef = useRef(null);
  const settings = {
    ...sliderSetting,
    arrows: false,
    infinite: false,
    slidesToShow: slideToShow ?? 2,
    slidesToScroll: slideToScroll ?? 2,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: slideToShow ?? 2,
            slidesToScroll: slideToScroll ?? 2,
            infinite: true,
          }
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  };

  return (
    <div className={`${className}`}>
      <div className={`${customArrow}`}>
        <button 
          className={`bg-[#49BBBD] text-white p-2 rounded-md ${styleButton}`} 
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <NavigateBeforeIcon/>
        </button>
        <button 
          className={`bg-[#49BBBD] text-white p-2 rounded-md ${styleButton}`}
          onClick={() => sliderRef?.current?.slickNext()}
        >
          <NavigateNextIcon/>
        </button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
}

export default SliderCustom;
