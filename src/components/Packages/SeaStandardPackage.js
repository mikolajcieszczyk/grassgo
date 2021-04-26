import React, { Component } from "react";
import StandardPackageFormStory from 'components/Form/Stories/packages/StandardPackageFormStory';
import SeaImage from "assets/images/svg/Ilustracje_nowe_1.svg";
import { Button } from "react-bootstrap";

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
        <section className="d-flex flex-column align-content-center justify-content-center sea-standard-package py-5">
          <div className="row d-flex flex-column flex-lg-row align-content-center justify-items-center">
            <div className="col-12 col-lg-6 text-center px-0">
              <img alt="sea" className="sea-img mx-auto" src={SeaImage} />
            </div>

            <div className="sea-text col-12 col-lg-6 d-flex flex-column pl-0">
              <h1>Sea</h1>
              <h3>Standard package</h3>
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

            <div
              className={
                this.state.hidden ? "d-none" : "col-12 d-flex flex-column"
              }
            >
              <div className="row sea-list">
                <div className="col-lg-5"></div>
                <div className="col-lg-6 d-md-flex pl-lg-5 ml-lg-1">
                  <ul className="mb-0 pb-0">
                    <li className="mb-4">monitoring gardens</li>
                    <li className="mb-4">grass cutting</li>
                    <li className="mb-4">edging of lawns</li>
                    <li className="mb-4">weeding / hoeing</li>
                    <li className="mb-4">general clearance of beds</li>
                  </ul>
                  <ul className="second-list ml-md-5 ml-lg-0">
                    <li className="mb-4">monitoring gardens</li>
                    <li className="mb-4">grass cutting</li>
                    <li className="mb-4">edging of lawns</li>
                    <li className="mb-4">weeding / hoeing</li>
                    <li className="mb-4">general clearance of beds</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <p className="col-12 col-lg-9 date-p">
                  1 visit per fortnight during the vegetation season (March –
                November)<br></br>1 visit per 4 weeks in winter season (December
                – February)
              </p>
                <div className="col-12 col-lg-3 text-center align-self-center">
                  <Button onClick={this.hideShowForm} className="book-now-btn">book now</Button>
                </div>
              </div>
            </div>
          </div>


        </section>

        {
          this.state.form && (
            <StandardPackageFormStory />
          )
        }
      </>
    );
  }
}
