import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import OneOffSliderImg from 'assets/images/one-off-slider-img.png';
import ArrowLeft from 'assets/images/arrow-left.png';
import ArrowRight from 'assets/images/arrow-right.png';

export default function TabletCarousel() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3}
                gutter={15}
                alwaysShowChevrons={true}
                infiniteLoop={true}
                leftChevron={<img style={{ width: '50px' }} class="mr-5" src={ArrowLeft} />}
                rightChevron={<img style={{ width: '50px' }} class="ml-5" src={ArrowRight} />}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                <div className="img-thumbnail my-carousel-item text-center" style={{ height: 200, width: 200 }}>
                    <span>clean up</span>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center" style={{ height: 200, width: 200 }}>
                    <span>hedge trim</span>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center" style={{ height: 200, width: 200 }}>
                    <span>tree surgery</span>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center" style={{ height: 200, width: 200 }}>
                    <span>lawn care</span>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center" style={{ height: 200, width: 200 }}>
                    <span>planting</span>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center" style={{ height: 200, width: 200 }}>
                    <span>pruning </span>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>
                <div className="img-thumbnail my-carousel-item text-center" style={{ height: 200, width: 200 }}>
                    <span>japaneese knotweed</span>
                    <img style={{ width: '150px' }} className="img-fluid" src={OneOffSliderImg} />
                </div>


            </ItemsCarousel>
        </div>
    );
};

