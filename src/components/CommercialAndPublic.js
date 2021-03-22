import React, { Component } from "react";
import CommercialImage from "assets/images/commercial-image.png";
import { Button } from "react-bootstrap";

export default class CommercialAndPublic extends Component {
  render() {
    return (
      <section className="d-flex flex-column justify-content-center align-items-center commercial-and-public-section pb-5 mt-5">
        <div className="commercial-and-public__heading mb-5 text-center">
          <h1>Commercial and public space care</h1>
        </div>
        <div className="d-flex justify-content-around sea-standard-package__content">
          <div className="content__image">
            <img className="w-75 img-fluid" src={CommercialImage} />
          </div>
          <div className="d-flex flex-column content__text">
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

            <Button className="book-now-btn">book now</Button>
          </div>
        </div>
      </section>
    );
  }
}
