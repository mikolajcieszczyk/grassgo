import React, { Component } from "react";
import DesktopCarousel from "../Carousel/DesktopCarousel";
import TabletCarousel from "../Carousel/TabletCarousel";
import MobileCarousel from "../Carousel/MobileCarousel";
import OneOffSliderImg from "assets/images/one-off-slider-img.png";
import ArrowLeft from "assets/images/arrow-left.png";
import ArrowRight from "assets/images/arrow-right.png";

import InfiniteCarousel from "react-leaf-carousel";

export default function OneOffCarousel() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const mobileBreakpoint = 576;
  const tabletBreakpoint = 768;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width <= mobileBreakpoint) {
    return <MobileCarousel />;
  } else if (width <= tabletBreakpoint) {
    return <TabletCarousel />;
  } else {
    return <DesktopCarousel />;
  }
}
