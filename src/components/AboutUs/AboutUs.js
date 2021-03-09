import React, { Component } from 'react';
import FirstSlideImage from 'assets/images/about-us-first-image.png';
import SecondSlideImage from 'assets/images/about-us-second-image.png';
import ArrowRight from 'assets/images/arrow-right.png';

import { Button } from 'react-bootstrap';

export default class AboutUs extends Component {
    constructor() {
        super();

        this.state = {
            firstSlide: false,
        }

        this.changeSlide = this.changeSlide.bind(this);
    }


    changeSlide() {
        this.setState({
            firstSlide: !this.state.firstSlide,
        })
    }

    render() {
        return (
            <section className="about-us">
                <div
                    className={this.state.firstSlide ? 'about-us__first-slide' : 'slide-inactive'}
                >
                    <img
                        className="first-slide--img"
                        src={FirstSlideImage}
                        alt="about us"
                    />
                    <div className="first-slide--content">
                        <h1>
                            Garden maintenance.<br></br>
                            Better.
                    </h1>
                        <p>
                            Welcome to Grassgo, by North Hill Gardens!
                            Here at Grassgo, we have been tending to Glasgow’s glorious
                            gardens for over 10 years, so let us tell you about what we can do for yours! Our highly skilled gardeners are at your service, whether you need a timely trim of the lawn, a heavy-duty clean up or a specialist treatment from a gardening guru. Services range from hedge cutting, to soil improvement, to weed control – you name it and we can do it!
                            Each package we offer can be tailored to your exact needs and will be carried out by one of our highly skilled gardeners as and when you’d like it.
                            So, get in touch today – we’d love to hear from you!
                        </p>
                    </div>
                    <img
                        className="first-slide--arrow"
                        src={ArrowRight}
                        alt="arrow right"
                        onClick={this.changeSlide}
                    />
                </div>

                <div
                    className={this.state.firstSlide ? 'slide-inactive' : 'about-us__second-slide'}
                >
                    <img
                        className="second-slide--arrow"
                        src={ArrowRight}
                        onClick={this.changeSlide}
                        alt="arrow right"
                    />
                    <div className="second-slide--content">
                        <h1>
                            About us
                    </h1>
                        <p>
                            Grassgo is the latest venture of North Hill Gardens.
                            Over the years we have built up a wealth of experience in all aspects of garden
                            maintenance, landscape architecture and landscaping and have been caring
                            for and creating the most pristine gardens in Scotland.
                            If you want to learn more about North Hill Gardens visit our main website.
                        </p>

                        <Button className="go-northill-btn py-2 px-4">
                            <a href="http://northhillgardens.co.uk/" target="_blank">go to North Hill Gardens site</a>
                        </Button>
                    </div>
                    <img
                        className="second-slide--img"
                        src={SecondSlideImage}
                        alt="about us"
                    />
                </div>
            </section>
        )
    }
}
