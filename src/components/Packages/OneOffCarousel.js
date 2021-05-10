import OneOffSliderImg from "assets/images/one-off-slider-img.png";
import React, { Component } from "react";
import Slider from "react-slick";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SmallCleaning from "assets/images/svg/latest/small-cleaning.svg";
import SmallHedgeTrim from "assets/images/svg/latest/small-hedgetrim.svg";
import SmallKnotweed from "assets/images/svg/latest/small-knotweed.svg";
import SmallLawnCare from "assets/images/svg/latest/small-lawncare.svg";
import SmallPlanting from "assets/images/svg/latest/small-planting.svg";
import SmallPruning from "assets/images/svg/latest/small-pruning.svg";
import SmallTreeSurgery from "assets/images/svg/latest/small-treesurgery.svg";

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
    <img src={ArrowLeft} className="slick-prev" alt="arrow" onClick={onClick} />
  );
}

export default class MultipleItems extends Component {
  constructor() {
    super();

    this.state = {
      cleanupTxt: false,
      trimTxt: false,
      treeSurgeryTxt: false,
      lawnCareTxt: false,
      plantingTxt: false,
      pruningTxt: false,
      knotweedTxt: false,
    };

    this.hideShowCleanUpTxt = this.hideShowCleanUpTxt.bind(this);
    this.hideHedgeTrimTxt = this.hideHedgeTrimTxt.bind(this);
    this.hideShowTreeSurgeryTxt = this.hideShowTreeSurgeryTxt.bind(this);
    this.hideShowLawnCareTxt = this.hideShowLawnCareTxt.bind(this);
    this.hideShowPlantingTxt = this.hideShowPlantingTxt.bind(this);
    this.hideShowPruningTxt = this.hideShowPruningTxt.bind(this);
    this.hideShowKnotweedTxt = this.hideShowKnotweedTxt.bind(this);
  }

  hideShowCleanUpTxt() {
    this.setState({
      cleanupTxt: !this.state.cleanupTxt,
      trimTxt: false,
      treeSurgeryTxt: false,
      lawnCareTxt: false,
      plantingTxt: false,
      pruningTxt: false,
      knotweedTxt: false,
    });
  }

  hideHedgeTrimTxt() {
    this.setState({
      trimTxt: !this.state.trimTxt,
      cleanupTxt: false,
      treeSurgeryTxt: false,
      lawnCareTxt: false,
      plantingTxt: false,
      pruningTxt: false,
      knotweedTxt: false,
    });
  }

  hideShowTreeSurgeryTxt() {
    this.setState({
      treeSurgeryTxt: !this.state.treeSurgeryTxt,
      cleanupTxt: false,
      trimTxt: false,
      lawnCareTxt: false,
      plantingTxt: false,
      pruningTxt: false,
      knotweedTxt: false,
    });
  }

  hideShowLawnCareTxt() {
    this.setState({
      lawnCareTxt: !this.state.lawnCareTxt,
      cleanupTxt: false,
      trimTxt: false,
      treeSurgeryTxt: false,
      plantingTxt: false,
      pruningTxt: false,
      knotweedTxt: false,
    });
  }

  hideShowPlantingTxt() {
    this.setState({
      plantingTxt: !this.state.plantingTxt,
      cleanupTxt: false,
      trimTxt: false,
      treeSurgeryTxt: false,
      lawnCareTxt: false,
      pruningTxt: false,
      knotweedTxt: false,
    });
  }

  hideShowPruningTxt() {
    this.setState({
      pruningTxt: !this.state.pruningTxt,
      cleanupTxt: false,
      trimTxt: false,
      treeSurgeryTxt: false,
      lawnCareTxt: false,
      plantingTxt: false,
      knotweedTxt: false,
    });
  }

  hideShowKnotweedTxt() {
    this.setState({
      knotweedTxt: !this.state.knotweedTxt,
      cleanupTxt: false,
      trimTxt: false,
      treeSurgeryTxt: false,
      lawnCareTxt: false,
      plantingTxt: false,
      pruningTxt: false,
    });
  }

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
            onClick={this.hideShowCleanUpTxt}
            className="my-carousel-item text-center"
            style={{ height: 250, width: 230 }}
          >
            <p>clean up</p>
            <p
              className={
                this.state.cleanupTxt ? "d-block slider-text" : "d-none"
              }
            >
              This service is for gardens which a helping hand with the removal
              of overgrown weeds, bushes and other plants. Eyesores such as
              litter, debris and garden waste can also be dealt with as part of
              this service.
            </p>
            <img
              style={{ width: "160px", height: "160px" }}
              className={this.state.cleanupTxt ? "d-none" : "img-fluid mx-auto"}
              src={SmallCleaning}
              alt="carousel"
            />
          </div>
          <div
            onClick={this.hideHedgeTrimTxt}
            className="my-carousel-item text-center"
            style={{ height: 250, width: 230 }}
          >
            <p>hedge trim</p>
            <p
              className={this.state.trimTxt ? "d-block slider-text" : "d-none"}
            >
              Whether is be a yew, box or beech we can get your hedges looking
              sharp again! Size is no matter, for we can take care of any sized
              hedge you may have.
            </p>
            <img
              style={{ width: "160px", height: "160px" }}
              className={this.state.trimTxt ? "d-none" : "img-fluid mx-auto"}
              src={SmallHedgeTrim}
              alt="carousel"
            />
          </div>
          <div
            onClick={this.hideShowTreeSurgeryTxt}
            className="my-carousel-item text-center"
            style={{ height: 250, width: 230 }}
          >
            <p>tree surgery</p>
            <p
              className={
                this.state.treeSurgeryTxt ? "d-block slider-text" : "d-none"
              }
            >
              Our qualified tree surgeons are highly skilled in taking care of
              all your tree’s needs. Whether your trees need pruning, felling or
              treating for disease, we can fulfil all your requirements.
            </p>
            <img
              style={{ width: "160px", height: "160px" }}
              className={
                this.state.treeSurgeryTxt ? "d-none" : "img-fluid mx-auto"
              }
              src={SmallTreeSurgery}
              alt="carousel"
            />
          </div>
          <div
            onClick={this.hideShowLawnCareTxt}
            className="my-carousel-item text-center"
            style={{ height: 250, width: 230 }}
          >
            <p>lawn care</p>
            <p
              className={
                this.state.lawnCareTxt ? "d-block slider-text" : "d-none"
              }
            >
              If your lawn needs a simple trim, or a more complex treatment from
              one of our lovely gardeners we can help. Our gardeners are highly
              skilled in aeration, scarification, sanding and cutting lawns in
              patterns.
            </p>
            <img
              style={{ width: "160px", height: "160px" }}
              className={
                this.state.lawnCareTxt ? "d-none" : "img-fluid mx-auto"
              }
              src={SmallLawnCare}
              alt="carousel"
            />
          </div>
          <div
            onClick={this.hideShowPlantingTxt}
            className="my-carousel-item text-center"
            style={{ height: 250, width: 230 }}
          >
            <p>planting</p>
            <p
              className={
                this.state.plantingTxt ? "d-block slider-text" : "d-none"
              }
            >
              We cater for all your planting needs! From dainty annuals for
              planters, to establishing new hedges we can be of service.
            </p>
            <img
              style={{ width: "160px", height: "160px" }}
              className={
                this.state.plantingTxt ? "d-none" : "img-fluid mx-auto"
              }
              src={SmallPlanting}
              alt="carousel"
            />
          </div>
          <div
            onClick={this.hideShowPruningTxt}
            className="my-carousel-item text-center"
            style={{ height: 250, width: 230 }}
          >
            <p>pruning</p>
            <p
              className={
                this.state.pruningTxt ? "d-block slider-text" : "d-none"
              }
            >
              Our shrubs, trees and bushes all need some TLC to keep them
              looking their best. Our gardeners are all skilled in encouraging
              optimum plant health.
            </p>
            <img
              style={{ width: "160px", height: "160px" }}
              className={this.state.pruningTxt ? "d-none" : "img-fluid mx-auto"}
              src={SmallPruning}
              alt="carousel"
            />
          </div>
          <div
            onClick={this.hideShowKnotweedTxt}
            className="my-carousel-item text-center japanese-div"
            style={{ height: 250, width: 230 }}
          >
            <p className="japanese-title">
              japaneese <br /> knotweed removal
            </p>
            <p
              className={
                this.state.knotweedTxt
                  ? "d-block slider-text japanese-div"
                  : "d-none"
              }
            >
              This troublesome species can be a brut if allowed to establish
              itself. Our knotweed specialist is qualified in treating knotweed
              and making sure it is eliminated before damage is done.
            </p>
            <img
              style={{ width: "160px", height: "160px" }}
              className={
                this.state.knotweedTxt
                  ? "d-none"
                  : "img-fluid mx-auto japanese-slider-img"
              }
              src={SmallKnotweed}
              alt="carousel"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
