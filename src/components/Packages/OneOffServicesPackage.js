import React, { Component } from 'react';
import OneOffCarousel from './OneOffCarousel';
import OneOffImage from 'assets/images/one-off-image.png';
import { Button } from 'react-bootstrap';


export default class OneOffServicesPackage extends Component {
    render() {
        return (
            <section className="mx-5 one-off-package">
                <div className="row mx-5 one-off-package__header">
                    <div className="col-9 d-flex flex-column">
                        <h1 className="mb-5">One-off services</h1>
                        <p>If a regular maintenance service is not what you’re looking for, then we can also offer you a one-off service suited to your requirements. This could be anything from hedge trimming, to treatment of Japanese knotweed or a large scale clear out. Large scale clear outs can help reign in your wild garden, getting it into a manageable state for a more regular maintenance program.</p>
                    </div>
                    <div className="col-3">
                        <img src={OneOffImage} />
                    </div>
                </div>
                <div className="mt-5">
                    <OneOffCarousel />
                </div>
                <div className="carousel-book-now-div d-flex justify-content-end mt-3 mr-5">
                    <Button className="book-now-btn">
                        book now
                    </Button>
                </div>
            </section>
        )
    }
}
