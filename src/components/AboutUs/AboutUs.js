import React, { Component } from "react";
import FirstSlideImage from "assets/images/svg/latest/Ilustracje_4_gardenm_group.svg";
import SecondSlideImage from "assets/images/svg/latest/Ilustracje_4_about us_group.svg";
import ArrowRight from "assets/images/svg/strzalka-right.svg";
import ArrowLeft from "assets/images/svg/strzalka-left.svg";
import DotLighter from "assets/images/svg/dot-lighter.svg";
import DotDarker from "assets/images/svg/dot-darker.svg";
import { GreenButton } from "../Buttons";

import { Button } from "react-bootstrap";

export default class AboutUs extends Component {
  constructor() {
    super();

    this.state = {
      firstSlide: true,
    };

    this.changeSlide = this.changeSlide.bind(this);
  }

  changeSlide() {
    this.setState({
      firstSlide: !this.state.firstSlide,
    });
  }

  render() {
    return (
      <section className="about-us d-flex flex-column align-content-center justify-content-center py-5">
        <div
          className={
            this.state.firstSlide
              ? "row d-flex flex-column" + " flex-lg-row justify-items-center"
              : "d-none"
          }
        >
          <div className="col-12 col-lg-6 text-center">
            <img alt="sky" style={{ width: "90%" }} src={FirstSlideImage} />
          </div>

          <div
            className={
              this.state.firstSlide
                ? "col-12 col-lg-6 d-flex" + " flex-column sky-text"
                : "d-none"
            }
          >
            <h1>
              Garden maintenance. <br />
              Better.
            </h1>
            <p>
              Welcome to Grassgo, by North Hill Gardens! Here at Grassgo, we
              have been tending to Glasgow’s glorious gardens for over 10 years,
              so let us tell you about what we can do for yours! Our highly
              skilled gardeners are at your service, whether you need a timely
              trim of the lawn, a heavy-duty clean up or a specialist treatment
              from a gardening guru. Services range from hedge cutting, to soil
              improvement, to weed control – you name it and we can do it! Each
              package we offer can be tailored to your exact needs and will be
              carried out by one of our highly skilled gardeners as and when
              you’d like it. So, get in touch today – we’d love to hear from
              you!
            </p>
          </div>
        </div>

        <div
          className={
            this.state.firstSlide
              ? "d-none"
              : "row d-flex flex-column flex-lg-row-reverse justify-items-center"
          }
        >
          <div className="col-12 col-lg-6 text-center">
            <img alt="sky" style={{ width: "90%" }} src={SecondSlideImage} />
          </div>

          <div className="col-12 col-lg-6 d-flex flex-column sky-text">
            <h1>About us</h1>
            <p>
              Grassgo is the latest venture of North Hill Gardens. Over the
              years we have built up a wealth of experience in all aspects of
              garden maintenance, landscape architecture and landscaping and
              have been caring for and creating the most pristine gardens in
              Scotland. If you want to learn more about North Hill Gardens visit
              our main website.
            </p>
            <a href="http://northhillgardens.co.uk/" target="_blank">
              <GreenButton
                className="nh-btn-link d-none d-lg-block mt-lg-3"
                title="go to North Hill Gardens site"
              />
            </a>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <img
            onClick={this.changeSlide}
            src={ArrowLeft}
            style={{ width: "30px", height: "50px" }}
            alt="arrow"
          />
          <img
            src={this.state.firstSlide ? DotDarker : DotLighter}
            style={{ width: "10px", height: "10px", margin: "0.8%" }}
            alt="dot"
          />
          <img
            src={this.state.firstSlide ? DotLighter : DotDarker}
            style={{ width: "10px", height: "10px", margin: "0.8%" }}
            alt="dot"
          />
          <img
            onClick={this.changeSlide}
            src={ArrowRight}
            style={{ width: "30px", height: "50px" }}
            alt="arrow"
          />
        </div>
      </section>
    );
  }
}
