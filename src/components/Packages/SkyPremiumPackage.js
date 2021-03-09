import React, { Component } from 'react';
import SkyImage from 'assets/images/sky-image.png';
import { Button } from 'react-bootstrap';

export default class SkyPremiumPackage extends Component {
    constructor() {
        super();

        this.state = {
            hidden: true,
        }

        this.hideShowContent = this.hideShowContent.bind(this);
    }

    hideShowContent() {
        this.setState({
            hidden: !this.state.hidden,
        })
    }

    render() {
        return (
            <section className="d-flex flex-column justify-content-center align-items-center sky-premium-package pb-5">
                <div className="sky-premium-package__heading mb-5">
                    <h1>Sky</h1>
                    <h3>Premium package</h3>
                </div>
                <div className="d-flex justify-content-around sky-premium-package__content">
                    <div className="content__image">
                        <img className="w-75 img-fluid" src={SkyImage} />
                    </div>
                    <div className="d-flex flex-column content__text">
                        <p>
                            Gardening service, with all the trimmings. As well as including all the services
                            from the [standard] package, your garden will also benefit from our additional
                            expert services as well as free bedding plants and rock salt.
                            We would highly recommend this service to any client with a large garden or
                            who wants their garden to be regularly maintained to a very high standard.
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
                                    <li>fertilising plants</li>
                                    <li>supply seasonal bedding plants</li>
                                    <li>aeration, scarification and sanding of lawns</li>
                                    <li>planting new plants</li>
                                </ul>

                                <ul className="sea-content__hidden--list">
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
                </div>
            </section>
        )
    }
}
