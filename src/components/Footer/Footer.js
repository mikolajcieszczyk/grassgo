import React, { Component } from "react";
import GrassGoLogo from "assets/images/grassgo-logo.jpg";
import GardenersGuideLogo from "assets/images/the-gardeners-guild-logo.jpg";
import SepaLogo from "assets/images/sepa-logo.jpg";
import InstaIcon from "assets/images/social-insta.svg";
import TwitterIcon from "assets/images/social-twitter.svg";
import FacebookIcon from "assets/images/social-fb.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer className="container row d-flex justify-items-center mx-auto text-center">
        <div className="col-12 col-lg-4 p-2 p-lg-0">
          <img
            src={GrassGoLogo}
            alt="grassgo logo"
            style={{ width: "200px" }}
          />
        </div>
        <div className="col-lg-1 p-0"></div>
        <div className="col-12 col-lg-2 p-2 p-lg-0 text-lg-left">
          <div>
            0141 332 5533 <br></br>
            info@grassgo.co.uk
          </div>

          <div className="d-flex justify-content-between w-75 my-1">
            <a
              href="https://instagram.com/northhillgardens/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <img src={InstaIcon} style={{ width: "25px" }} alt="instagram" />
            </a>
            <a
              href="https://twitter.com/northhilldesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <img
                src={TwitterIcon}
                style={{ width: "25px" }}
                alt="instagram"
              />
            </a>
            <a
              href="https://facebook.com/northhillgardens/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <img
                src={FacebookIcon}
                style={{ width: "25px" }}
                alt="instagram"
              />
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-2 p-2 p-lg-0 text-lg-left">
          Hillington Business Centre <br></br>
          15-17 Nasmyth Road South,<br></br>
          G52 4RE, Glasgow<br></br>
          <p></p>
          <a
            href="https://www.google.com/maps/place/North+Hill+Gardens+-+Landscape+Architecture+%26+Garden+Design/@55.8562933,-4.3586785,17z/data=!3m1!4b1!4m5!3m4!1s0x488848b2f48b21b9:0x2cb91c6c33335a3d!8m2!3d55.8562903!4d-4.3564898"
            target="_blank"
          >
            <div>View on Google Maps ></div>
          </a>
        </div>
        <div className="col-12 col-lg-3 p-2 p-lg-0">
          <a
            href="NorthHillGardensTermsAndConditions_v1-2021.pdf"
            target="_blank"
          >
            <div>Terms and Conditions</div>
          </a>
          <div className="d-flex justify-content-center mt-2">
            <a href="https://www.thegardenersguild.co.uk/" target="_blank">
              <img
                src={GardenersGuideLogo}
                style={{ width: "70px", height: "45px" }}
                alt="The Gardeners Guild Logo"
              />
            </a>
            <a href="https://www.sepa.org.uk/" target="_blank">
              <img
                src={SepaLogo}
                style={{ width: "70px", height: "45px", marginLeft: "5px" }}
                alt="SEPA Logo"
              />
            </a>
          </div>
        </div>

        <div className="copyright align-self-end col-12">
          © 2021 Grassgo gardeners
        </div>
      </footer>
    );
  }
}
