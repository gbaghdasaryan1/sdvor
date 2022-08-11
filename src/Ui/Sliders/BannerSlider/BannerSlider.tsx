import React from "react";
import classses from "./BannerSlider.module.css";
import Slider from "react-slick";
import Img from "../../../assets/Banner.jpg";
import Img2 from "../../../assets/Banner3.jpg";

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={classses.BannerSlider}>
      <Slider {...settings}>
        <div>
          <img src={Img} alt='' style={{ margin: "0 auto" }} />
        </div>
        <div>
          <img src={Img2} alt='' style={{ margin: "0 auto" }} />
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
