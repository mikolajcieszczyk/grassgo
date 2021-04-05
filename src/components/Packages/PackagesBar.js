import React, { Component } from 'react';
import ArrowDown from 'assets/images/arrow-down.png';

export default class PackagesBar extends Component {
    render() {
        return (
            <div className="packages__bar d-flex flex-column justify-content-center align-items-center mt-3">
                <h1>Our Packages</h1>
                <img src={ArrowDown} className="arrow-down" alt="arrow" />
            </div>
        )
    }
}
