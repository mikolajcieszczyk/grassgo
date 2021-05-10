import React, { Component } from "react";
import SeaImage from "assets/images/svg/latest/Ilustracje_4_Sea_group-01.svg";
import { Button } from "react-bootstrap";
import StandardPackageForm from "../Form/StandardPackageForm";
import SkyImage from "../../assets/images/svg/latest/Ilustracje_4_Sky_grouped.svg";
import { GreenButton } from "../Buttons";

export default class SeaStandardPackage extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true,
      form: false,
    };

    this.hideShowContent = this.hideShowContent.bind(this);
    this.hideShowForm = this.hideShowForm.bind(this);
  }

  hideShowContent() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  hideShowForm() {
    this.setState({
      form: !this.state.form,
    });
  }

  render() {
    return (
      <>
        <section
          id="standard"
          className="d-flex sea-standard-package flex-column align-content-center justify-content-center py-5"
        >
          <div className="row d-flex flex-column flex-lg-row justify-items-center">
            <div className="col-12 col-lg-6 text-center">
              <img alt="sky" style={{ width: "90%" }} src={SkyImage} />
            </div>

            <div className="col-12 col-lg-6 d-flex flex-column sky-text">
              <h1>Sea</h1>
              <h3>Standard package</h3>
              <p>
                Everything you need to keep your garden looking tiptop. Included
                are all your essential services, from grass cutting to hedge
                trimming. Naturally, this package can be adapted to fit your
                gardens specific needs. For example, you can add additional
                services such as Japanese knotweed removal or remove other
                services such as lawn mowing if you have an artificial lawn. The
                Standard package is recommended to people with smaller gardens
                as all general gardening requirements are included as part of
                the service.
              </p>
              <GreenButton
                title="see more"
                onClick={this.hideShowContent}
                className={
                  this.state.hidden
                    ? "align-self-center align-self-lg-end"
                    : "d-none"
                }
              />
            </div>

            <div
              className={
                this.state.hidden ? "d-none" : "col-12 d-flex flex-column"
              }
            >
              <div className="row sea-list">
                <div className="col-lg-6"></div>
                <div className="col-lg-6 d-md-flex pl-2">
                  <ul className="mb-0 pb-0 list-unstyled">
                    <li className="mb-4">monitoring gardens</li>
                    <li className="mb-4">grass cutting</li>
                    <li className="mb-4">edging of lawns</li>
                    <li className="mb-4">weeding / hoeing</li>
                    <li className="mb-4">general clearance of beds</li>
                  </ul>
                  <ul className="second-list ml-md-5 ml-lg-0">
                    <li className="mb-4">pruning</li>
                    <li className="mb-4">hedge and shrub trimming</li>
                    <li className="mb-4">leaf removal</li>
                    <li className="mb-4">deadheding</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-12 col-lg-6 d-flex flex-column flex-lg-row">
                  <p className="col-12 col-lg-6 date-p small-text pl-0">
                    1 visit per fortnight during the vegetation season (March –
                    November)<br></br>1 visit per 4 weeks in winter season
                    (December – February)
                  </p>
                  <div className="col-12 col-lg-6 text-center">
                    <Button
                      onClick={this.hideShowForm}
                      className="book-now-btn book-now-up"
                    >
                      book now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={this.state.form ? "container-fluid" : "d-none"}>
          <StandardPackageForm />
        </div>
      </>
    );
  }
}
