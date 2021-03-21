import React, { Component } from 'react';
// import DesktopCarousel from '../Carousel/DesktopCarousel';
// import TabletCarousel from '../Carousel/TabletCarousel';
// import MobileCarousel from '../Carousel/MobileCarousel';
import OneOffSliderImg from 'assets/images/one-off-slider-img.png';
import ArrowLeft from 'assets/images/arrow-left.png';
import ArrowRight from 'assets/images/arrow-right.png';

import InfiniteCarousel from 'react-leaf-carousel';

export default class OneOffCarousel extends Component {
    render() {
        return (
            <InfiniteCarousel
                breakpoints={[
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 2560,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                        },
                    },
                ]}
                dots={false}
                showSides={true}
                swipe={true}
                sidesOpacity={0.5}
                sideSize={0.1}
                slidesToScroll={4}
                slidesToShow={4}
                scrollOnDevice={true}
                showSides={false}
            >
                <div className="img-thumbnail my-carousel-item text-center">
                    <p>clean up</p>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center">
                    <p>hedge trim</p>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center">
                    <p>tree surgery</p>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center">
                    <p>lawn care</p>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center">
                    <p>planting</p>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center">
                    <p>pruning </p>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center">
                    <p>japaneese knotweed</p>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
            </InfiniteCarousel>
        )
    }
}