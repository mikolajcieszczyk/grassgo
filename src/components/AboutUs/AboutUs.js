import React, { Component } from "react";
import FirstSlideImage from "assets/images/svg/Ilustracje_nowe_4.svg";
import SecondSlideImage from "assets/images/svg/Ilustracje_nowe_8.svg";
import ArrowRight from "assets/images/svg/strzalka-right.svg";
import ArrowLeft from "assets/images/svg/strzalka-left.svg";
import DotLighter from "assets/images/svg/dot-lighter.svg";
import DotDarker from "assets/images/svg/dot-darker.svg";

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
      <section id="#aboutUsId" className="about-us d-flex align-items-center justify-content-center my-3">
        <div
          className={this.state.firstSlide ? "about-us__first-slide" : "d-none"}
        >
          <div className="row d-flex align-items-start">
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <img
                className="first-slide--img"
                src={FirstSlideImage}
                alt="about us"
              />
            </div>

            <div className="col-12 col-lg-6 pl-lg-0">
              <h1>
                Garden maintenance.<br></br>
                Better.
              </h1>
              <p className="mb-2">
                Welcome to Grassgo, by North Hill Gardens!<br></br>
                Here at Grassgo, we have been tending to Glasgow’s glorious
                gardens for over 10 years, so let us tell you about what we can
                do for yours! Our highly skilled gardeners are at your service,
                whether you need a timely trim of the lawn, a heavy-duty clean
                up or a specialist treatment from a gardening guru. Services
                range from hedge cutting, to soil improvement, to weed control –
                you name it and we can do it! <br></br>
                Each package we offer can be tailored to your exact needs and
                will be carried out by one of our highly skilled gardeners as
                and when you’d like it. <br></br>
                So, get in touch today – we’d love to hear from you!
              </p>
            </div>

            <div className="col-12 d-flex justify-content-center align-items-center mb-3 mb-md-0 mt-md-3 mt-lg-0">
              <img
                className="first-slide--arrow"
                src={ArrowLeft}
                alt="arrow right"
                onClick={this.changeSlide}
              />
              <div>
                <img
                  src={DotDarker}
                  alt="dots"
                  className="dark-dot ml-3 mr-2"
                />
                <img
                  src={DotLighter}
                  alt="dots"
                  className="light-dot mr-3 mr-2"
                  onClick={this.changeSlide}
                />
              </div>
              <img
                className="second-slide--arrow"
                src={ArrowRight}
                onClick={this.changeSlide}
                alt="arrow right"
              />
            </div>
          </div>
        </div>

        <div
          className={
            this.state.firstSlide ? "d-none" : "about-us__second-slide row"
          }
        >
          <div className="second-slide--content order-1 order-lg-0 col-12 col-lg-6 d-flex flex-column justify-content-center px-0 ">
            <h1>About us</h1>
            <p>
              Grassgo is the latest venture of North Hill Gardens.<br></br>
              Over the years we have built up a wealth of experience in all
              aspects of garden maintenance, landscape architecture and
              landscaping and have been caring for and creating the most
              pristine gardens in Scotland. <br></br>
              <br></br>
              If you want to learn more about North Hill Gardens visit our main
              website.
            </p>
            <Button className="go-northill-btn mt-4 py-2 px-4 mr-lg-auto">
              <a
                href="http://northhillgardens.co.uk/"
                target="_blank"
                rel="noreferrer"
              >
                go to North Hill Gardens site
              </a>
            </Button>
          </div>

          <div className="second-slide__img d-flex justify-content-center order-0 order-lg-1 col-12 col-lg-6 px-lg-0">
            <img
              className="second-slide--img"
              src={SecondSlideImage}
              alt="about us"
            />
          </div>

          <div className="col-12 order-2 d-flex justify-content-center align-items-center my-4">
            <img
              className="first-slide--arrow arrow-second-slide"
              src={ArrowLeft}
              alt="arrow right"
              onClick={this.changeSlide}
            />
            <div>
              <img
                src={DotLighter}
                alt="dots"
                className="light-dot dot-second-slide ml-3 mr-2"
                onClick={this.changeSlide}
              />
              <img
                src={DotDarker}
                alt="dots"
                className="dark-dot dot-second-slide mr-3 mr-2"
              />
            </div>
            <img
              className="second-slide--arrow arrow-second-slide"
              src={ArrowRight}
              onClick={this.changeSlide}
              alt="arrow right"
            />
          </div>
        </div>
      </section>
    );
  }
}