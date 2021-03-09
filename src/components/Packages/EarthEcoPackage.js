import React, { Component } from 'react';
import EarthImage from 'assets/images/earth-image.png';
import { Button, Card } from 'react-bootstrap';

export default class EarthEcoPackage extends Component {
    constructor() {
        super();

        this.state = {
            hidden: true,
            firstExpandHidden: true,
            secondExpandHidden: true,
            thirdExpandHidden: true,
        }

        this.hideShowContent = this.hideShowContent.bind(this);
        this.hideShowFirstExpanded = this.hideShowFirstExpanded.bind(this);
        this.hideShowSecondExpanded = this.hideShowSecondExpanded.bind(this);
        this.hideShowThirdExpanded = this.hideShowThirdExpanded.bind(this);
        this.takeMeBack = this.takeMeBack.bind(this);
    }

    hideShowContent() {
        this.setState({
            hidden: !this.state.hidden,
        })
    }

    hideShowFirstExpanded() {
        console.log('firstExpandHidden');
        this.setState({
            firstExpandHidden: !this.state.firstExpandHidden,
        })
    }

    hideShowSecondExpanded() {
        console.log('secondExpandHidden');
        this.setState({
            secondExpandHidden: !this.state.secondExpandHidden,
        })
    }

    hideShowThirdExpanded() {
        console.log('thirdExpandHidden');
        this.setState({
            thirdExpandHidden: !this.state.thirdExpandHidden,
        })
    }

    takeMeBack() {
        this.setState({
            firstExpandHidden: true,
            secondExpandHidden: true,
            thirdExpandHidden: true,
        })
    }

    render() {
        return (
            <section className="d-flex flex-column justify-content-center align-items-center earth-eco-package w-100 pb-5">
                <div className="earth-eco-package__heading mb-5">
                    <h1>Earth</h1>
                    <h3>Eco package</h3>
                </div>
                <div className="d-flex justify-content-around earth-eco-package__content">
                    <div className="content__image">
                        <img className="w-75 img-fluid ml-auto" src={EarthImage} />
                    </div>
                    <div className="d-flex flex-column content__text">
                        <p>
                            Gardening service, with all the trimmings. As well as including all the services
                            from the [standard] package, your garden will also benefit from our additional
                            expert services as well as free bedding plants and rock salt.
                            We would highly recommend this service to any client with a large garden or
                            who wants their garden to be regularly maintained to a very high standard.
                        </p>
                    </div>



                    <Button
                        onClick={this.hideShowContent}
                        className={this.state.hidden ? 'earth__see-more-btn' : 'd-none'}
                    >
                        see more
                        </Button>
                </div>

                <div
                    className={this.state.hidden || !this.state.firstExpandHidden || !this.state.secondExpandHidden || !this.state.thirdExpandHidden ? 'd-none' : 'earth-content__hidden w-100 mt-5'}
                >
                    <Card
                        className={this.state.firstExpandHidden || this.state.secondExpandHidden || this.state.thirdExpandHidden ? 'w-100' : 'd-none'}
                    >
                        <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                            <div>
                                <Card.Title className="d-flex align-items-center">
                                    <h1 class="d-inline">1</h1>
                                    <span>basic</span>
                                </Card.Title>
                                <Card.Text>
                                    <p>A service designed to suit all gardens, where bugs, birds and
                                    bigger mammals are invited in. Native plants are introduced to
                                    help establish a rich eco-system.
                                    Maintenance is carried out with
                                nature in mind.</p>
                                </Card.Text>
                            </div>
                            <Button
                                onClick={this.hideShowFirstExpanded}
                                className="see-more-btn"
                            >
                                see more
                            </Button>
                        </Card.Body>
                    </Card>

                    <Card
                        className={this.state.firstExpandHidden || this.state.secondExpandHidden || this.state.thirdExpandHidden ? 'w-100' : 'd-none'}
                    >
                        <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                            <div>
                                <Card.Title className="d-flex align-items-center">
                                    <h1 class="d-inline">2</h1>
                                    <span>intermediate</span>
                                </Card.Title>
                                <Card.Text>
                                    <p>To take your garden to the next level, the shoots package allows your garden to become at one with nature. Garden maintenance is carried out with the aim of preserving and enriching the ecosystem. Habitat creation extends beyond the soil
                                    and plants, to also accommodate water dwelling creatures. Rainwater
                                    collection eliminates the need for tap
                                water, saving the planet and your water bill.</p>
                                </Card.Text>
                            </div>
                            <Button
                                onClick={this.hideShowSecondExpanded}
                                className="see-more-btn">
                                see more
                            </Button>
                        </Card.Body>
                    </Card>

                    <Card
                        className={this.state.firstExpandHidden || this.state.secondExpandHidden || this.state.thirdExpandHidden ? 'w-100' : 'd-none'}
                    >
                        <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                            <div>
                                <Card.Title className="d-flex align-items-center">
                                    <h1 class="d-inline">3</h1>
                                    <span>advanced</span>
                                </Card.Title>
                                <Card.Text>
                                    <p>The Bloom Package is a personalised
                                    service, tailored to your garden’s specific needs. Encouraging more biodiversity and restoring habitats for wildlife is an objective from day one.
                                    An Ecosystem Management Evaluation, carried out by one of our  knowledgeable and experienced gardeners will create a plan to maximise your gardens potential.
                                Share your garden with a myriad of species you never imagined your garden could accommodate.</p>
                                </Card.Text>
                            </div>
                            <Button
                                onClick={this.hideShowThirdExpanded}
                                className="see-more-btn">
                                see more
                            </Button>
                        </Card.Body>
                    </Card>
                </div>

                <Card
                    className={this.state.firstExpandHidden ? 'd-none' : 'expanded-card'}
                >
                    <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                        <div>
                            <Card.Title className="d-flex align-items-center">
                                <h1 class="d-inline pl-3">1</h1>
                                <span>basic</span>
                            </Card.Title>
                            <Card.Text>
                                <div className="expanded-card__content d-flex">
                                    <div>
                                        <p>
                                            A service designed to suit all gardens, where bugs, birds and
                                            bigger mammals are invited in. Native plants are introduced to
                                            help establish a rich eco-system. Maintenance is carried out with
                                            nature in mind.
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <h5>No chemical applications</h5>
                                            <span>No harmful chemical applications
                                            including weed killers, fertilisers and
                                            insecticides. Weeds are removed by
                                            hand or by mulching in appropriate
                                            areas.</span>
                                        </p>

                                        <p>
                                            <h5>Inviting wildlife</h5>
                                            <span>Installing bird feeders, bug hotels, log piles and hedgehog access to make your garden wildlife friendly</span>
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <h5>Regular mulching</h5>
                                            <span>Mulching borders enriches the quality of the soil and all the plants that grow in it.</span>
                                        </p>

                                        <p>
                                            <h5>Composting</h5>
                                            <span>Making rich compost from the
                                            biproducts of your garden.</span>
                                        </p>

                                        <p>
                                            <h5>Planting native species</h5>
                                            <span>Supporting local ecosystem in your garden.</span>
                                        </p>
                                    </div>
                                </div>
                            </Card.Text>
                        </div>
                        <div className="expanded-card__buttons d-flex justify-content-between">
                            <Button
                                onClick={this.takeMeBack}
                                className="see-more-btn card__buttons--back ml-5">
                                all packages
                        </Button>
                            <Button className="see-more-btn card__buttons--book-now mr-5">
                                book now
                        </Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card
                    className={this.state.secondExpandHidden ? 'd-none' : 'expanded-card'}
                >
                    <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                        <div>
                            <Card.Title className="d-flex align-items-center">
                                <h1 class="d-inline pl-3">2</h1>
                                <span>intermediate</span>
                            </Card.Title>
                            <Card.Text>
                                <div className="expanded-card__content d-flex">
                                    <div>
                                        <p>
                                            To take your garden to the next level, the shoots package allows
                                            your garden to become at one with nature. Garden maintenance
                                            is carried out with the aim of preserving and enriching the
                                            ecosystem. Habitat creation extends beyond the soil and plants,
                                            to also accommodate water dwelling creatures. Rainwater
                                            collection eliminates the need for tap water, saving the planet
                                            and your water bill.
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <h5>Using battery powered tools</h5>
                                            <span>Less carbon and noise emissions in
                                            compare to petrol powered tools</span>
                                        </p>

                                        <p>
                                            <h5>Water habitat creation</h5>
                                            <span>Creating water habitats for more
                                            creatures to live.</span>
                                        </p>

                                        <p>
                                            <h5>No heavy cultivation</h5>
                                            <span>Not cultivating the soil, preserving the
                                            earth for those that live in it.</span>
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <h5>Using water butt</h5>
                                            <span>Installing a water butt to lower water usage in your garden
                                            </span>
                                        </p>

                                        <p>
                                            <h5>No bare earth</h5>
                                            <span>Leaving no bare ground, making use of every inch of growing space
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </Card.Text>
                        </div>
                        <div className="expanded-card__buttons d-flex justify-content-between">
                            <Button
                                onClick={this.takeMeBack}
                                className="see-more-btn card__buttons--back ml-5">
                                all packages
                        </Button>
                            <Button className="see-more-btn card__buttons--book-now mr-5">
                                book now
                        </Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card
                    className={this.state.thirdExpandHidden ? 'd-none' : 'expanded-card'}
                >
                    <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                        <div>
                            <Card.Title className="d-flex align-items-center">
                                <h1 class="d-inline pl-3">3</h1>
                                <span>advanced</span>
                            </Card.Title>
                            <Card.Text>
                                <div className="expanded-card__content d-flex">
                                    <div>
                                        <p>
                                            The Advanced Package is a personalised service, tailored to your garden’s specific needs. Encouraging more biodiversity and restoring habitats for wildlife is an objective from day one.
                                            An Ecosystem Management Evaluation, carried out by one of our  knowledgeable and experienced gardeners will create a plan to maximise your gardens potential. Share your garden with a myriad of species you never imagined your garden could accommodate.
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <h5>Ecosystem Management
                                                Evaluation (EMA)</h5>
                                            <span>An EMA assesses your garden potential
                                            and sets in place a plan to maximise its
                                            growth.</span>
                                        </p>

                                        <p>
                                            <h5>Biodiversity surveys</h5>
                                            <span>Periodic surveys of the species living in
                                            your garden will help indicate your
                                            gardens progress in becoming eco-
                                            friendly</span>
                                        </p>

                                        <p>
                                            <h5>Conversion of hedges to mixed
                                                native species</h5>
                                            <span>Native hedgerows require fewer fertilisers, pesticides and volumes of water. They also reduce air pollution and provide shelter for wildlife.</span>
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <h5>Wildflower meadow
                                                establishment</h5>
                                            <span>A wildflower meadow provides habitat
                                            to a great number of species, including
                                            birds, bees and butterflies</span>
                                        </p>

                                        <p>
                                            <h5>Compost teas and foliar applications</h5>
                                            <span>Feeding the plants through both their
                                            roots and also, through their leaves
                                            helps give them an extra boost,
                                            brightening your garden even more.</span>
                                        </p>

                                        <p>
                                            <h5>Kitchen Garden</h5>
                                            <span>Crops of fruits, vegetables and herbs are
                                            raised to supply you with fresh, delicious
                                            produce</span>
                                        </p>
                                    </div>
                                </div>
                            </Card.Text>
                        </div>
                        <div className="expanded-card__buttons d-flex justify-content-between">
                            <Button
                                onClick={this.takeMeBack}
                                className="see-more-btn card__buttons--back ml-5">
                                all packages
                        </Button>
                            <Button className="see-more-btn card__buttons--book-now mr-5">
                                book now
                        </Button>
                        </div>
                    </Card.Body>
                </Card>
            </section>
        )
    }
}