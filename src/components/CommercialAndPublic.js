import React, { Component } from "react";
import CommercialImage from "assets/images/commercial-image.png";
import { Button } from "react-bootstrap";

export default class CommercialAndPublic extends Component {
    render() {
    return (
      <section className="d-flex flex-column justify-content-center commercial-and-public-section py-5">
        <div className="row d-flex flex-column flex-lg-row justify-items-center pt-5">
          <div className="col-12 col-lg-5 text-center">
            <img className="img-fluid" src={CommercialImage} />
          </div>
          <div className="col-12 col-lg-7 d-flex flex-column">
            <h1>Commercial and public space care</h1>
            <p>
              Our Maintenance service doesn’t just deal in high quality personal
              gardens, we also have several industrial and commercial land
              maintenance contacts. Our experienced gardeners are able to
              maintain a high standard of work at all times, making sure your
              business appears presentable and professional. Whether it be
              overgrown hedges or litter, we are able to cater for all of your
              business needs. We also have the ability to remove any green waste
              from premises if there are not suitable disposal facilities on
              site.
            </p>
            <div className="col-12 order-5 mt-5 d-flex justify-content-center justify-content-lg-end">
              <Button className="book-now-btn">book now</Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
