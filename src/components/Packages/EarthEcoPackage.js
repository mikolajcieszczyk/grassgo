import React, { Component } from "react";
import EarthImage from "assets/images/svg/Ilustracje_v3.1_2.svg";
import { Button, Card } from "react-bootstrap";

export default class EarthEcoPackage extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true,
      firstExpandHidden: true,
      secondExpandHidden: true,
      thirdExpandHidden: true,
    };

    this.hideShowContent = this.hideShowContent.bind(this);
    this.hideShowFirstExpanded = this.hideShowFirstExpanded.bind(this);
    this.hideShowSecondExpanded = this.hideShowSecondExpanded.bind(this);
    this.hideShowThirdExpanded = this.hideShowThirdExpanded.bind(this);
    this.takeMeBack = this.takeMeBack.bind(this);
  }

  hideShowContent() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  hideShowFirstExpanded() {
    console.log("firstExpandHidden");
    this.setState({
      firstExpandHidden: !this.state.firstExpandHidden,
    });
  }

  hideShowSecondExpanded() {
    console.log("secondExpandHidden");
    this.setState({
      secondExpandHidden: !this.state.secondExpandHidden,
    });
  }

  hideShowThirdExpanded() {
    console.log("thirdExpandHidden");
    this.setState({
      thirdExpandHidden: !this.state.thirdExpandHidden,
    });
  }

  takeMeBack() {
    this.setState({
      firstExpandHidden: true,
      secondExpandHidden: true,
      thirdExpandHidden: true,
    });
  }

  render() {
    return (
      <section className="d-flex align-items-center flex-column justify-content-center earth-eco-package">
        <div className="row d-flex flex-column flex-lg-row justify-items-center pt-5">
          <div className="col-12 col-lg-5 text-center">
            <img className="img-fluid" src={EarthImage} />
          </div>
          <div className="col-12 d-lg-none">
            
          </div>

          <div className="col-12 col-lg-7 d-flex flex-column">
            <h1>Earth</h1>
            <h3>Eco package</h3>
            <p>
              Creating harmony between your garden, nature and you. Our brand
              new, biologically focused, gardening service allows you to create
              a place which is a heaven for both you and the wildlife that live
              there. It is more important than ever that we garden with nature
              in mind, so get in contact today to explore what we can offer you.
            </p>
            <Button
              onClick={this.hideShowContent}
              className={
                this.state.hidden
                  ? "earth__see-more-btn align-self-center align-self-lg-end"
                  : "d-none"
              }
            >
              see more
            </Button>
          </div>
        </div>

        <div
          className={
            this.state.hidden ||
            !this.state.firstExpandHidden ||
            !this.state.secondExpandHidden ||
            !this.state.thirdExpandHidden
              ? "d-none"
              : "d-flex flex-column flex-lg-row mt-5"
          }
        >
          <Card
            className={
              this.state.firstExpandHidden ||
              this.state.secondExpandHidden ||
              this.state.thirdExpandHidden
                ? "col-12 col-lg-4 my-3 mx-1  package-card"
                : "d-none"
            }
          >
            <Card.Body className="d-flex flex-column justify-content-between align-items-center">
              <div>
                <Card.Title className="d-flex align-items-center">
                  <h1 className="d-inline">1</h1>
                  <span>basic</span>
                </Card.Title>
                <Card.Text>
                  A service designed to suit all gardens, where bugs, birds and
                  bigger mammals are invited in. Native plants are introduced to
                  help establish a rich eco-system. Maintenance is carried out
                  with nature in mind.
                </Card.Text>
              </div>
              <Button
                onClick={this.hideShowFirstExpanded}
                className="see-more-btn my-3 align-self-center"
              >
                see more
              </Button>
            </Card.Body>
          </Card>

          <Card
            className={
              this.state.firstExpandHidden ||
              this.state.secondExpandHidden ||
              this.state.thirdExpandHidden
                ? "col-12 col-lg-4 my-3 mx-1 package-card"
                : "d-none"
            }
          >
            <Card.Body className="d-flex flex-column justify-content-between align-items-center">
              <div>
                <Card.Title className="d-flex align-items-center">
                  <h1 className="d-inline">2</h1>
                  <span>intermediate</span>
                </Card.Title>
                <Card.Text>
                  To take your garden to the next level, the shoots package
                  allows your garden to become at one with nature. Garden
                  maintenance is carried out with the aim of preserving and
                  enriching the ecosystem. Habitat creation extends beyond the
                  soil and plants, to also accommodate water dwelling creatures.
                  Rainwater collection eliminates the need for tap water, saving
                  the planet and your water bill.
                </Card.Text>
              </div>
              <Button
                onClick={this.hideShowSecondExpanded}
                className="see-more-btn my-3 align-self-center"
              >
                see more
              </Button>
            </Card.Body>
          </Card>

          <Card
            className={
              this.state.firstExpandHidden ||
              this.state.secondExpandHidden ||
              this.state.thirdExpandHidden
                ? "col-12 col-lg-4 my-3 mx-1 package-card"
                : "d-none"
            }
          >
            <Card.Body className="d-flex flex-column justify-content-between align-items-center">
              <div>
                <Card.Title className="d-flex align-items-center">
                  <h1 className="d-inline">3</h1>
                  <span>advanced</span>
                </Card.Title>
                <Card.Text>
                  The Bloom Package is a personalised service, tailored to your
                  garden’s specific needs. Encouraging more biodiversity and
                  restoring habitats for wildlife is an objective from day one.
                  An Ecosystem Management Evaluation, carried out by one of our
                  knowledgeable and experienced gardeners will create a plan to
                  maximise your gardens potential. Share your garden with a
                  myriad of species you never imagined your garden could
                  accommodate.
                </Card.Text>
              </div>
              <Button
                onClick={this.hideShowThirdExpanded}
                className="see-more-btn my-3 align-self-center"
              >
                see more
              </Button>
            </Card.Body>
          </Card>
        </div>

        {/* first card */}

        <Card
          className={
            this.state.firstExpandHidden
              ? "d-none"
              : "container package-card px-5"
          }
        >
          <div className="row py-3">
            <Card.Title className="d-flex align-items-center">
              <h1 className="d-inline">1</h1>
              <span>basic</span>
            </Card.Title>
          </div>

          <div className="row d-flex">
            <div className="col-12 col-lg-4">
              <p class="p-0 mb-3">
                A service designed to suit all gardens, where bugs, birds and
                bigger mammals are invited in. Native plants are introduced to
                help establish a rich eco-system. Maintenance is carried out
                with nature in mind.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <h2>No chemical applications</h2>
              <p>
                No harmful chemical applications including weed killers,
                fertilisers and insecticides. Weeds are removed by hand or by
                mulching in appropriate areas.
              </p>
              <h2>Inviting wildlife</h2>
              <p>
                Installing bird feeders, bug hotels, log piles and hedgehog
                access to make your garden wildlife friendly
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <h2>Regular mulching</h2>
              <p>
                Mulching borders enriches the quality of the soil and all the
                plants that grow in it.
              </p>
              <h2>Composting</h2>
              <p>Making rich compost from the biproducts of your garden.</p>
              <h2>Planting native species</h2>
              <p>Supporting local ecosystem in your garden.</p>
            </div>
          </div>
          <div className="row d-flex justify-content-center justify-content-md-between my-5">
            <Button onClick={this.takeMeBack} className="see-more-btn my-2">
              all packages
            </Button>
            <Button className="book-now-btn my-2">book now</Button>
          </div>
        </Card>

        {/* second card */}

        <Card
          className={
            this.state.secondExpandHidden
              ? "d-none"
              : "container package-card px-5"
          }
        >
          <div className="row py-3">
            <Card.Title className="d-flex align-items-center">
              <h1 className="d-inline">2</h1>
              <span>intermediate</span>
            </Card.Title>
          </div>

          <div className="row d-flex">
            <div className="col-12 col-lg-4">
              <p class="p-0 mb-3">
                To take your garden to the next level, the shoots package allows
                your garden to become at one with nature. Garden maintenance is
                carried out with the aim of preserving and enriching the
                ecosystem. Habitat creation extends beyond the soil and plants,
                to also accommodate water dwelling creatures. Rainwater
                collection eliminates the need for tap water, saving the planet
                and your water bill.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <h2>Using battery powered tools</h2>

              <p>
                Less carbon and noise emissions in compare to petrol powered
                tools
              </p>

              <h2>Water habitat creation</h2>

              <p>Creating water habitats for more creatures to live.</p>

              <h2>No heavy cultivation</h2>

              <p>
                Not cultivating the soil, preserving the earth for those that
                live in it.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <h2>Using water butt</h2>

              <p>Installing a water butt to lower water usage in your garden</p>

              <h2>No bare earth</h2>

              <p>
                Leaving no bare ground, making use of every inch of growing
                space
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center justify-content-md-between my-5">
            <Button onClick={this.takeMeBack} className="see-more-btn my-2">
              all packages
            </Button>
            <Button className="book-now-btn my-2">book now</Button>
          </div>
        </Card>

        {/* third card */}

        <Card
          className={
            this.state.thirdExpandHidden
              ? "d-none"
              : "container package-card px-5"
          }
        >
          <div className="row py-3">
            <Card.Title className="d-flex align-items-center">
              <h1 className="d-inline">3</h1>
              <span>advanced</span>
            </Card.Title>
          </div>

          <div className="row d-flex">
            <div className="col-12 col-lg-4">
              <p class="p-0 mb-3">
                The Advanced Package is a personalised service, tailored to your
                garden’s specific needs. Encouraging more biodiversity and
                restoring habitats for wildlife is an objective from day one. An
                Ecosystem Management Evaluation, carried out by one of our
                knowledgeable and experienced gardeners will create a plan to
                maximise your gardens potential. Share your garden with a myriad
                of species you never imagined your garden could accommodate.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <h2>Ecosystem Management Evaluation (EMA)</h2>

              <p>
                An EMA assesses your garden potential and sets in place a plan
                to maximise its growth.
              </p>

              <h2>Biodiversity surveys</h2>

              <p>
                Periodic surveys of the species living in your garden will help
                indicate your gardens progress in becoming eco- friendly
              </p>

              <h2>Conversion of hedges to mixed native species</h2>

              <p>
                Native hedgerows require fewer fertilisers, pesticides and
                volumes of water. They also reduce air pollution and provide
                shelter for wildlife.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <h2>Wildflower meadow establishment</h2>

              <p>
                A wildflower meadow provides habitat to a great number of
                species, including birds, bees and butterflies
              </p>

              <h2>Compost teas and foliar applications</h2>

              <p>
                Feeding the plants through both their roots and also, through
                their leaves helps give them an extra boost, brightening your
                garden even more.
              </p>

              <h2>Kitchen Garden</h2>

              <p>
                Crops of fruits, vegetables and herbs are raised to supply you
                with fresh, delicious produce
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center justify-content-md-between my-5">
            <Button onClick={this.takeMeBack} className="see-more-btn my-2">
              all packages
            </Button>
            <Button className="book-now-btn my-2">book now</Button>
          </div>
        </Card>
      </section>
    );
  }
}
