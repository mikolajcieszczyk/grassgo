import React, { Component } from "react";
import SkyImage from "assets/images/sky-image.png";
import { Button } from "react-bootstrap";

export default class SkyPremiumPackage extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true,
    };

    this.hideShowContent = this.hideShowContent.bind(this);
  }

  hideShowContent() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  render() {
    return (
      <section className="d-flex align-items-center flex-column sky-premium-package py-5">
        <div className="row align-self-start d-none d-lg-block">
          <h1>Sky</h1>
          <h3>Premium package</h3>
        </div>

        <div className="row d-flex flex-column flex-lg-row justify-items-center pt-5">
          <div className="col-12 col-lg-3 text-center">
            <img className="img-fluid" src={SkyImage} />
          </div>
          <div className="col-12 d-lg-none">
            <h1>Sky</h1>
            <h3>Premium package</h3>
          </div>

          <div className="col-12 col-lg-9 d-flex flex-column">
            <p>
              Gardening service, with all the trimmings. As well as including
              all the services from the [standard] package, your garden will
              also benefit from our additional expert services as well as free
              bedding plants and rock salt. We would highly recommend this
              service to any client with a large garden or who wants their
              garden to be regularly maintained to a very high standard.
            </p>
            <Button
              onClick={this.hideShowContent}
              className={
                this.state.hidden
                  ? "see-more-btn align-self-center align-self-lg-end"
                  : "d-none"
              }
            >
              see more
            </Button>
          </div>

          <div
            className={
              this.state.hidden ? "d-none" : "col-12 d-flex flex-column"
            }
          >
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-9 d-md-flex">
                <ul className="mt-3 mb-0 pb-0">
                  <li>monitoring gardens</li>
                  <li>grass cutting</li>
                  <li>edging of lawns</li>
                  <li>weeding / hoeing</li>
                  <li>general clearance of beds</li>
                  <li>fertilising plants</li>
                  <li>supply seasonal bedding plants</li>
                  <li>aeration, scarification and sanding of lawns</li>
                  <li>planting new plants</li>
                </ul>
                <ul className="mt-3">
                  <li>monitoring gardens</li>
                  <li>hedge and shrub trimming</li>
                  <li>leaf removal</li>
                  <li>deadheading</li>
                  <li>snow removal and spreading salt</li>
                  <li>spraying of weeds</li>
                  <li>drain cover cleaning</li>
                  <li>winter plant protection</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <p className="col-12 col-lg-9">
                1 visit per fortnight during the vegetation season (March –
                November)<br></br>1 visit per 4 weeks in winter season (December
                – February)
              </p>
              <div className="col-12 col-lg-3 text-center align-self-center">
                <Button className="book-now-btn">book now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
