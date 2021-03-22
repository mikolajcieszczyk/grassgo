import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import OneOffSliderImg from 'assets/images/one-off-slider-img.png';
import ArrowLeft from 'assets/images/arrow-left.png';
import ArrowRight from 'assets/images/arrow-right.png';

export default function MobileCarousel() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    return (
        <div className="col-12" style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={1}
                gutter={15}
                alwaysShowChevrons={true}
                infiniteLoop={true}
                leftChevron={<img style={{ width: '50px' }} class="mr-5" src={ArrowLeft} />}
                rightChevron={<img style={{ width: '50px' }} class="ml-5" src={ArrowRight} />}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                <div className="img-thumbnail my-carousel-item text-center" style={{ height: 250, width: 200 }}>
                    <p style={{ fontSize: '20px'}}>clean up</p>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center" style={{ height: 250, width: 200 }}>
                    <p style={{ fontSize: '20px'}}>hedge trim</p>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center" style={{ height: 250, width: 200 }}>
                    <p style={{ fontSize: '20px'}}>tree surgery</p>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center" style={{ height: 250, width: 200 }}>
                    <p style={{ fontSize: '20px'}}>lawn care</p>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center" style={{ height: 250, width: 200 }}>
                    <p style={{ fontSize: '20px'}}>planting</p>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center" style={{ height: 250, width: 200 }}>
                    <p style={{ fontSize: '20px'}}>pruning </p>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center" style={{ height: 250, width: 200 }}>
                    <p style={{ fontSize: '20px'}}>japaneese knotweed</p>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>


            </ItemsCarousel>
        </div>
    );
};

