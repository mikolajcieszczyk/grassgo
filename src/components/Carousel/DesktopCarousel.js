import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import OneOffSliderImg from "assets/images/one-off-slider-img.png";
import ArrowLeft from "assets/images/arrow-left.png";
import ArrowRight from "assets/images/arrow-right.png";

export default function DesktopCarousel() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <div className="mt-5" style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={0}
        alwaysShowChevrons={true}
        infiniteLoop={true}
        leftChevron={
          <img style={{ width: "50px" }} class="slider-arrow-left mr-5" src={ArrowLeft} />
        }
        rightChevron={
          <img style={{ width: "50px" }} class="slider-arrow-right ml-5" src={ArrowRight} />
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div
          className="img-thumbnail my-carousel-item text-center"
          style={{ height: 250, width: 230 }}
        >
          <p>clean up</p>
          <img
            style={{ width: "150px" }}
            className="img-fluid"
            src={OneOffSliderImg}
          />
        </div>
        <div
          className="img-thumbnail my-carousel-item text-center"
          style={{ height: 250, width: 230 }}
        >
          <p>hedge trim</p>
          <img
            style={{ width: "150px" }}
            className="img-fluid"
            src={OneOffSliderImg}
          />
        </div>
        <div
          className="img-thumbnail my-carousel-item text-center"
          style={{ height: 250, width: 230 }}
        >
          <p>tree surgery</p>
          <img
            style={{ width: "150px" }}
            className="img-fluid"
            src={OneOffSliderImg}
          />
        </div>
        <div
          className="img-thumbnail my-carousel-item text-center"
          style={{ height: 250, width: 230 }}
        >
          <p>lawn care</p>
          <img
            style={{ width: "150px" }}
            className="img-fluid"
            src={OneOffSliderImg}
          />
        </div>
        <div
          className="img-thumbnail my-carousel-item text-center"
          style={{ height: 250, width: 230 }}
        >
          <p>planting</p>
          <img
            style={{ width: "150px" }}
            className="img-fluid"
            src={OneOffSliderImg}
          />
        </div>
        <div
          className="img-thumbnail my-carousel-item text-center"
          style={{ height: 250, width: 230 }}
        >
          <p>pruning </p>
          <img
            style={{ width: "150px" }}
            className="img-fluid"
            src={OneOffSliderImg}
          />
        </div>
        <div
          className="img-thumbnail my-carousel-item text-center"
          style={{ height: 250, width: 230 }}
        >
          <p>japaneese knotweed</p>
          <img
            style={{ width: "150px" }}
            className="img-fluid"
            src={OneOffSliderImg}
          />
        </div>
      </ItemsCarousel>
    </div>
  );
}
