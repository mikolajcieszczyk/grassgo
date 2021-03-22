import React, { Component } from "react";
import SeaImage from "assets/images/sea-image.png";
import { Button } from "react-bootstrap";

export default class SeaStandardPackage extends Component {
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
      <section className="sea-standard-package py-5">
        <div className="row d-none d-lg-block">
          <h1>Sea</h1>
          <h3>Standard package</h3>
        </div>

        <div className="row d-flex flex-column flex-lg-row justify-items-center pt-5">
          <div className="col-12 col-lg-3 text-center">
            <img className="img-fluid" src={SeaImage} />
          </div>
          <div className="col-12 d-lg-none">
            <h1>Sea</h1>
            <h3>Standard package</h3>
          </div>

          <div className="col-12 col-lg-9 d-lg-flex flex-column">
            <p>
              Everything you need to keep your garden looking tiptop. Included
              are all your essential services, from grass cutting to hedge
              trimming. Naturally, this package can be adapted to fit your
              gardens specific needs. For example, you can add additional
              services such as Japanese knotweed removal or remove other
              services such as lawn mowing if you have an artificial lawn. The
              Standard package is recommended to people with smaller gardens as
              all general gardening requirements are included as part of the
              service.
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

          <div className={this.state.hidden ? "d-none" : "col-12"}>
            <div className="row">
              <ul className="mt-3 mb-0 pb-0">
                <li>monitoring gardens</li>
                <li>grass cutting</li>
                <li>edging of lawns</li>
                <li>weeding / hoeing</li>
                <li>general clearance of beds</li>
              </ul>
              <ul className="mt-3">
                <li>monitoring gardens</li>
                <li>grass cutting</li>
                <li>edging of lawns</li>
                <li>weeding / hoeing</li>
                <li>general clearance of beds</li>
              </ul>
            </div>
            <div className="row">
              <p className="col-12">
                1 visit per fortnight during the vegetation season (March –
                November)<br></br>1 visit per 4 weeks in winter season (December
                – February)
              </p>
              <div className="col-12 text-center">
                <Button className="book-now-btn">book now</Button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="sea-standard-package__heading mb-5">
                    <h1>Sea</h1>
                    <h3>Standard package</h3>
                </div>
                <div className="d-flex justify-content-around sea-standard-package__content">
                    <div className="content__image">
                        <img className="w-75 img-fluid" src={SeaImage} />
                    </div>
                    <div className="d-flex flex-column content__text">
                        <p>
                            Everything you need to keep your garden looking tiptop. Included are all your
                            essential services, from grass cutting to hedge trimming.
                            Naturally, this package can be adapted to fit your gardens specific needs. For
                            example, you can add additional services such as Japanese knotweed removal
                            or remove other services such as lawn mowing if you have an artificial lawn. The
                            Standard package is recommended to people with smaller gardens as all
                            general gardening requirements are included as part of the service.
                        </p>

                        <div
                            className={this.state.hidden ? 'd-none' : 'sea-content__hidden w-100'}
                        >
                            <div className="d-flex justify-content-between">
                                <ul className="sea-content__hidden--list">
                                    <li>monitoring gardens</li>
                                    <li>grass cutting</li>
                                    <li>edging of lawns</li>
                                    <li>weeding / hoeing</li>
                                    <li>general clearance of beds</li>
                                </ul>

                                <ul className="sea-content__hidden--list">
                                    <li>monitoring gardens</li>
                                    <li>grass cutting</li>
                                    <li>edging of lawns</li>
                                    <li>weeding / hoeing</li>
                                    <li>general clearance of beds</li>
                                </ul>
                            </div>

                            <div className="d-flex">
                                <div className="booking-info">
                                    <p>
                                        1 visit per fortnight during the vegetation season (March – November)<br></br>
                                        1 visit per 4 weeks in winter season (December – February)
                                    </p>
                                </div>
                                <Button
                                    className="book-now-btn"
                                >
                                    book now
                                </Button>
                            </div>

                        </div>

                        <Button
                            onClick={this.hideShowContent}
                            className={this.state.hidden ? 'see-more-btn' : 'd-none'}
                        >
                            see more
                        </Button>
                    </div>
                </div> */}
      </section>
    );
  }
}
