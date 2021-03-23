import React, { Component } from "react";
import FirstSlideImage from "assets/images/about-us-first-image.png";
import SecondSlideImage from "assets/images/about-us-second-image.png";
import ArrowRight from "assets/images/arrow-right.png";
import ArrowLeft from "assets/images/arrow-left.png";

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
      <section className="about-us d-flex align-items-center">
        {/* <div
                    className={this.state.firstSlide ? 'about-us__first-slide' : 'slide-inactive'}
                >
                    
                    <div className="first-slide--content">
                        <h1>
                            Garden maintenance.<br></br>
                            Better.
                    </h1>
                        <p>
                            Welcome to Grassgo, by North Hill Gardens!
                            Here at Grassgo, we have been tending to Glasgow’s glorious
                            gardens for over 10 years, so let us tell you about what we can do for yours! Our highly skilled gardeners are at your service, whether you need a timely trim of the lawn, a heavy-duty clean up or a specialist treatment from a gardening guru. Services range from hedge cutting, to soil improvement, to weed control – you name it and we can do it!
                            Each package we offer can be tailored to your exact needs and will be carried out by one of our highly skilled gardeners as and when you’d like it.
                            So, get in touch today – we’d love to hear from you!
                        </p>
                    </div>
                    <img
                        className="first-slide--arrow"
                        src={ArrowRight}
                        alt="arrow right"
                        onClick={this.changeSlide}
                    />
                </div> */}

        <div
          className={this.state.firstSlide ? "about-us__first-slide" : "d-none"}
        >
          <div className="row">
            <div className="col-12 col-lg-4 d-none d-md-flex justify-items-center first-slide--img">
              <img
                className="first-slide--img mx-auto h-75"
                src={FirstSlideImage}
                alt="about us"
              />
            </div>

            <div className="col-12 col-lg-7">
              <h1>
                Garden maintenance.<br></br>
                Better.
              </h1>
              <p>
                Welcome to Grassgo, by North Hill Gardens! Here at Grassgo, we
                have been tending to Glasgow’s glorious gardens for over 10
                years, so let us tell you about what we can do for yours! Our
                highly skilled gardeners are at your service, whether you need a
                timely trim of the lawn, a heavy-duty clean up or a specialist
                treatment from a gardening guru. Services range from hedge
                cutting, to soil improvement, to weed control – you name it and
                we can do it! Each package we offer can be tailored to your
                exact needs and will be carried out by one of our highly skilled
                gardeners as and when you’d like it. So, get in touch today –
                we’d love to hear from you!
              </p>
            </div>

            <div className="col-12 col-lg-1 d-flex align-items-center">
              <img
                className="first-slide--arrow mx-auto mt-5"
                src={ArrowRight}
                alt="arrow right"
                onClick={this.changeSlide}
              />
            </div>
          </div>
        </div>

        <div
          className={
            this.state.firstSlide ? "d-none" : "about-us__second-slide row"
          }
        >
          <div className="col-12 col-lg-1 order-3 order-lg-3 d-flex justify-content-center align-items-center mt-5">
            <img
              className="second-slide--arrow"
              src={ArrowLeft}
              onClick={this.changeSlide}
              alt="arrow right"
            />
          </div>
          <div className="second-slide--content order-2 col-12 col-lg-7 d-flex flex-column">
            <h1>About us</h1>
            <p>
              Grassgo is the latest venture of North Hill Gardens. Over the
              years we have built up a wealth of experience in all aspects of
              garden maintenance, landscape architecture and landscaping and
              have been caring for and creating the most pristine gardens in
              Scotland. If you want to learn more about North Hill Gardens visit
              our main website.
            </p>

            <Button className="go-northill-btn py-2 px-4 ml-auto">
              <a
                href="http://northhillgardens.co.uk/"
                target="_blank"
                rel="noreferrer"
              >
                go to North Hill Gardens site
              </a>
            </Button>
          </div>
          <div className="col-12 col-lg-4 order-1 d-none d-md-flex justify-content-center">
            <img
              className="second-slide--img"
              src={SecondSlideImage}
              alt="about us"
            />
          </div>
        </div>
      </section>
    );
  }
}
