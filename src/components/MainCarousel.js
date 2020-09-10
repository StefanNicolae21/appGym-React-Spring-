import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainCarousel.css";


import React from "react";
import Slider from "react-slick";

class MainCarousel extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <Slider {...settings}>
        <div className="slide">
          <img className="slide-img" src="../images/slide1.jpg" alt="slide1" />
        </div>
        <div className="slide">
          <img className="slide-img" src="../images/slide2.jpg" alt="slide2" />
        </div>
        <div className="slide">
          <img className="slide-img" src="../images/slide3.jpg" alt="slide3" />
        </div>
        <div className="slide">
          <img className="slide-img" src="../images/slide1.jpg" alt="slide1" />
        </div>
      </Slider>
    );
  }
}

export default MainCarousel;