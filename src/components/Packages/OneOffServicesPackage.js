import React, { Component } from "react";
import OneOffCarousel from "./OneOffCarousel";
import OneOffImage from "assets/images/svg/Ilustracje_v3.1_7.svg";
import MoreDots from "assets/images/more-dots.png";
import { Button } from "react-bootstrap";

export default class OneOffServicesPackage extends Component {
  render() {
    return (
      <section className="d-flex flex-column justify-content-center one-off-package py-2">
        <div className="row d-flex flex-column flex-lg-row justify-items-center pt-5">
          <div className="col-12 col-lg-5 text-center order-lg-3">
            <img className="img-fluid" src={OneOffImage} />
          </div>
          <div className="col-12 col-lg-7 d-flex flex-column">
            <h1>One-off services</h1>
            <p>
              If a regular maintenance service is not what you’re looking for,
              then we can also offer you a one-off service suited to your
              requirements. This could be anything from hedge trimming, to
              treatment of Japanese knotweed or a large scale clear out. Large
              scale clear outs can help reign in your wild garden, getting it
              into a manageable state for a more regular maintenance program.
            </p>
          </div>

          <div className="col-12 order-4">
            <OneOffCarousel />
          </div>

          <div className="col-11 order-5 ml-5 mt-3 mb-5 d-flex justify-content-center justify-content-lg-end">
            <img className="more-dots" src={MoreDots} alt="dots" />
            <Button className="book-now-btn">book now</Button>
          </div>
        </div>
      </section>
    );
  }
}
