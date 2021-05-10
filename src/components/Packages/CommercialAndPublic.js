import React, { Component } from "react";
import CommercialImage from "assets/images/svg/Ilustracje_nowe_5.svg";
import { Button } from "react-bootstrap";
import CommercialForm from "../Form/CommercialForm";
import SkyImage from "../../assets/images/svg/latest/Ilustracje_4_Sky_grouped.svg";
import { GreenButton } from "../Buttons";

export default class CommercialAndPublic extends Component {
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
        <section className="d-flex flex-column justify-content-center commercial-and-public-section py-5">
          <div className="row d-flex flex-column flex-lg-row justify-items-center">
            <div className="col-12 col-lg-6 text-center">
              <img alt="sky" style={{ width: "90%" }} src={CommercialImage} />
            </div>

            <div className="col-12 col-lg-6 d-flex flex-column sky-text">
              <h1>
                Commercial and public <br /> space care
              </h1>
              <p>
                Our Maintenance service doesn’t just deal in high quality
                personal gardens, we also have several industrial and commercial
                land maintenance contacts. Our experienced gardeners are able to
                maintain a high standard of work at all times, making sure your
                business appears presentable and professional. Whether it be
                overgrown hedges or litter, we are able to cater for all of your
                business needs. We also have the ability to remove any green
                waste from premises if there are not suitable disposal
                facilities on site.
              </p>
              <GreenButton
                title="see more"
                onClick={this.hideShowForm}
                className={
                  this.state.form
                    ? "d-none"
                    : "align-self-center align-self-lg-end"
                }
              />
            </div>
          </div>
        </section>
        <div className={this.state.form ? "container-fluid" : "d-none"}>
          <CommercialForm />
        </div>
      </>
    );
  }
}
