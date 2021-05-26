import React, { Component } from "react";
import OneOffCarousel from "./OneOffCarousel";
import OneOffImage from "assets/images/svg/Ilustracje_nowe_7.svg";
import MoreDots from "assets/images/more-dots.png";
import { Button } from "react-bootstrap";
import OneOffForm from "../Form/OneOffForm";
import SkyImage from "../../assets/images/svg/latest/Ilustracje_4_Sky_grouped.svg";

export default class OneOffServicesPackage extends Component {
  constructor() {
    super();

    this.state = {
      form: false,
    };

    this.hideShowForm = this.hideShowForm.bind(this);
  }

  hideShowForm() {
    this.setState({
      form: !this.state.form,
    });
  }

  render() {
    return (
      <>
        <section className="d-flex flex-column align-content-center  justify-content-center one-off-package py-5">
          <div className="row d-flex flex-column flex-lg-row-reverse justify-items-center">
            <div className="col-12 col-lg-6 text-center">
              <img alt="sky" style={{ width: "90%" }} src={OneOffImage} />
            </div>

            <div className="col-12 col-lg-6 d-flex flex-column sky-text">
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

            <div className="col-12 order-5 my-5 d-flex justify-content-center justify-content-lg-end">
              <Button
                onClick={this.hideShowForm}
                className="book-now-btn mt-3 mt-lg-0"
              >
                book now
              </Button>
            </div>
          </div>
        </section>
        <div className={this.state.form ? "container-fluid" : "d-none"}>
          <OneOffForm />
        </div>
      </>
    );
  }
}
