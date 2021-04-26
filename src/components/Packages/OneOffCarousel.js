import OneOffSliderImg from "assets/images/one-off-slider-img.png";
import React, { Component } from "react";
import Slider from "react-slick";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowRight from "assets/images/svg/strzalka-right.svg";
import ArrowLeft from "assets/images/svg/strzalka-left.svg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <img
      src={ArrowRight}
      className="slick-next"
      alt="arrow"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <img
      src={ArrowLeft}
      className="slick-prev"
      alt="arrow"
      onClick={onClick}
    />
  );
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
      },
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div
            className="my-carousel-item text-center"
            style={{ height: 250, width: 230 }}
          >
            <p>clean up</p>
            <img
              style={{ width: "150px", height: "150px"}}
              className="img-fluid mx-auto"
              src={OneOffSliderImg}
              alt="carousel"
            />
          </div>
          <div
            className="my-carousel-item text-center"
            style={{ height: 250, width: 230 }}
          >
            <p>hedge trim</p>
            <img
              style={{ width: "150px", height: "150px" }}
              className="img-fluid mx-auto"
              src={OneOffSliderImg}
              alt="carousel"
            />
          </div>
          <div
            className="my-carousel-item text-center"
            style={{ height: 250, width: 230 }}
          >
            <p>tree surgery</p>
            <img
              style={{ width: "150px", height: "150px" }}
              className="img-fluid mx-auto"
              src={OneOffSliderImg}
              alt="carousel"
            />
          </div>
          <div
            className="my-carousel-item text-center"
            style={{ height: 250, width: 230 }}
          >
            <p>lawn care</p>
            <img
              style={{ width: "150px", height: "150px" }}
              className="img-fluid mx-auto"
              src={OneOffSliderImg}
              alt="carousel"
            />
          </div>
          <div
            className="my-carousel-item text-center"
            style={{ height: 250, width: 230 }}
          >
            <p>planting</p>
            <img
              style={{ width: "150px", height: "150px" }}
              className="img-fluid mx-auto"
              src={OneOffSliderImg}
              alt="carousel"
            />
          </div>
          <div
            className="my-carousel-item text-center"
            style={{ height: 250, width: 230 }}
          >
            <p>pruning</p>
            <img
              style={{ width: "150px", height: "150px" }}
              className="img-fluid mx-auto"
              src={OneOffSliderImg}
              alt="carousel"
            />
          </div>
          <div
            className="my-carousel-item text-center japanese-div"
            style={{ height: 250, width: 230, }}
          >
            <p>japaneese knotweed removal</p>
            <img
              style={{ width: "90px", height: "120px" }}
              className="img-fluid mx-auto japanese-slider-img"
              src={OneOffSliderImg}
              alt="carousel"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
