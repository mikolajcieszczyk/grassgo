import React, { Component } from "react";
import SkyImage from "assets/images/svg/Ilustracje_nowe_3.svg";
import { Button } from "react-bootstrap";
import PremiumPackageFormStory from "components/Form/Stories/packages/PremiumPackageFormStory";

export default class SkyPremiumPackage extends Component {
    constructor() {
        super();

        this.state = {
            hidden: true,
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
                <section className="d-flex flex-column justify-content-center sky-premium-package py-5">
                    <div className="row d-flex flex-column flex-lg-row justify-items-center">
                        <div className="col-12 col-lg-6 text-center">
                            <img className="img-fluid sky-img" alt="sky" src={SkyImage} />
                        </div>

                        <div className="col-12 col-lg-6 d-flex flex-column sky-text">
                            <h1>Sky</h1>
                            <h3>Premium package</h3>
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
                            <div className="row sky-list">
                                <div className="col-lg-5"></div>
                                <div className="col-lg-6 d-md-flex pl-lg-5 ml-lg-1">
                                    <ul className="mb-0 pb-0">
                                        <li className="mb-4">monitoring gardens</li>
                                        <li className="mb-4">grass cutting</li>
                                        <li className="mb-4">edging of lawns</li>
                                        <li className="mb-4">weeding / hoeing</li>
                                        <li className="mb-4">general clearance of beds</li>
                                        <li className="mb-4">fertilising plants</li>
                                        <li className="mb-4">supply seasonal bedding plants</li>
                                        <li className="mb-4">aeration, scarification and sanding of lawns</li>
                                        <li className="mb-4">planting new plants</li>
                                    </ul>
                                    <ul className="second-list ml-md-5 ml-lg-0">
                                        <li className="mb-4">monitoring gardens</li>
                                        <li className="mb-4">hedge and shrub trimming</li>
                                        <li className="mb-4">leaf removal</li>
                                        <li className="mb-4">deadheading</li>
                                        <li className="mb-4">snow removal and spreading salt</li>
                                        <li className="mb-4">spraying of weeds</li>
                                        <li className="mb-4">drain cover cleaning</li>
                                        <li className="mb-4">winter plant protection</li>
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
                        <PremiumPackageFormStory />
                    )
                }
            </>
        );
    }
}
