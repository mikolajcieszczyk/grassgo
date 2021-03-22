import React, { Component } from "react";
import OneOffCarousel from "./OneOffCarousel";
import OneOffImage from "assets/images/one-off-image.png";
import { Button } from "react-bootstrap";

export default class OneOffServicesPackage extends Component {
  render() {
    return (
        <section className="d-flex flex-column justify-items-center one-off-package py-2">
        <div className="row align-self-start d-none d-lg-block mt-5">
          <h1 className="ml-3">One-off services</h1>
        </div>

        <div className="row d-flex flex-column flex-lg-row justify-items-center pt-5">
          <div className="col-12 col-lg-3 text-center order-lg-3">
            <img className="img-fluid" src={OneOffImage} />
          </div>
          <div className="col-12 d-lg-none">
            <h1>One-off services</h1>
          </div>

          <div className="col-12 col-lg-9 d-flex flex-column">
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

          <div className="col-12 order-5 my-5 d-flex justify-content-center justify-content-lg-end">
            <Button className="book-now-btn">book now</Button>
          </div>
        </div>
      </section>
    );
  }
}
