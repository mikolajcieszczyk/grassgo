import React, { Component } from "react";
import EarthImage from "assets/images/svg/Ilustracje_nowe_2.svg";
import { Button } from "react-bootstrap";
import EcoBasicForm from "../Form/EcoBasicForm";
import EcoIntermediateForm from "../Form/EcoIntermediateForm";
import EcoAdvancedForm from "../Form/EcoAdvancedForm";

export default class EarthEcoPackage extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true,
      firstBigCardExpanded: false,
      secondBigCardExpanded: false,
      thirdBigCardExpanded: false,
      basicForm: false,
      intermediateForm: false,
      advancedForm: false,

      propsForDisplayBasic: false,
    };

    this.hideShowContent = this.hideShowContent.bind(this);
    this.expandFirstBigCard = this.expandFirstBigCard.bind(this);
    this.expandSecondBigCard = this.expandSecondBigCard.bind(this);
    this.expandThirdBigCard = this.expandThirdBigCard.bind(this);
    this.takeMeBackToAllPackages = this.takeMeBackToAllPackages.bind(this);
    this.hideShowBasicForm = this.hideShowBasicForm.bind(this);
    this.hideShowIntermediateForm = this.hideShowIntermediateForm.bind(this);
    this.hideShowAdvancedForm = this.hideShowAdvancedForm.bind(this);
  }

  hideShowBasicForm() {
    this.setState({
      basicForm: !this.state.basicForm,
      intermediateForm: false,
      advancedForm: false,
    });
  }

  hideShowIntermediateForm() {
    this.setState({
      intermediateForm: !this.state.intermediateForm,
      basicForm: false,
      advancedForm: false,
    });
  }

  hideShowAdvancedForm() {
    this.setState({
      advancedForm: !this.state.advancedForm,
      basicForm: false,
      intermediateForm: false,
    });
  }

  hideShowContent() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  expandFirstBigCard() {
    this.setState({
      firstBigCardExpanded: !this.state.firstBigCardExpanded,
      hidden: !this.state.hidden,
    });
  }

  expandSecondBigCard() {
    this.setState({
      secondBigCardExpanded: !this.state.secondBigCardExpanded,
      hidden: !this.state.hidden,
    });
  }

  expandThirdBigCard() {
    this.setState({
      thirdBigCardExpanded: !this.state.thirdBigCardExpanded,
      hidden: !this.state.hidden,
    });
  }

  takeMeBackToAllPackages() {
    this.setState({
      firstBigCardExpanded: false,
      secondBigCardExpanded: false,
      thirdBigCardExpanded: false,
      hidden: false,
      basicForm: false,
      intermediateForm: false,
      advancedForm: false,
    });
  }

  componentDidMount() {
    if (this.props.displayBasic) {
      this.setState({
        firstBigCardExpanded: true,
        hidden: true,
      });
    } else if (this.props.displayIntermediate) {
      this.setState({
        secondBigCardExpanded: true,
        hidden: true,
      });
    } else if (this.props.displayAdvanced) {
      this.setState({
        thirdBigCardExpanded: true,
        hidden: true,
      });
    } else if (this.props.displayNormal) {
      this.setState({
        firstBigCardExpanded: false,
        secondBigCardExpanded: false,
        thirdBigCardExpanded: false,
        hidden: true,
      });
    }
  }

  render() {
    return (
      <>
        <section className="d-flex flex-column align-content-center justify-content-center earth-eco-package py-5">
          <div className="row d-flex flex-column flex-lg-row justify-items-center">
            <div className="col-12 col-lg-6 text-center">
              <img className="img-fluid earth-img" alt="sky" src={EarthImage} />
            </div>

            <div className="col-12 col-lg-6 d-flex flex-column earth-text">
              <h1>Earth</h1>
              <h3>Eco package</h3>

              <p>
                Creating harmony between your garden, nature and you. Our brand
                new, biologically focused, gardening service allows you to
                create a place which is a heaven for both you and the wildlife
                that live there. It is more important than ever that we garden
                with nature in mind, so get in contact today to explore what we
                can offer you.
              </p>
              <Button
                onClick={this.hideShowContent}
                className={
                  this.state.hidden ||
                  this.firstBigCardExpanded ||
                  this.secondBigCardExpanded ||
                  this.thirdBigCardExpanded
                    ? "see-more-btn align-self-center align-self-lg-end"
                    : "d-none"
                }
              >
                see more
              </Button>
            </div>

            <div
              className={
                this.state.hidden ||
                this.firstBigCardExpanded ||
                this.secondBigCardExpanded ||
                this.thirdBigCardExpanded
                  ? "d-none"
                  : "w-100 mt-5 d-flex flex-column align-items-center flex-lg-row justify-content-lg-between cards-container"
              }
            >
              {/* first small card */}

              <div className="small-card w-100 h-100 mr-lg-5 mb-5 mb-lg-0">
                <div className="d-flex flex-column justify-content-between align-items-center h-100">
                  <div>
                    <div className="d-flex align-items-center small-card-title pl-3">
                      <h1 className="d-inline">1</h1>
                      <span>basic</span>
                    </div>
                    <div className="small-card-text px-3">
                      A service designed to suit all gardens, where bugs, birds
                      and bigger mammals are invited in. Native plants are
                      introduced to help establish a rich eco-system.
                      Maintenance is carried out with nature in mind.
                    </div>
                  </div>
                  <Button
                    onClick={this.expandFirstBigCard}
                    className="see-more-btn my-3 align-self-center"
                  >
                    see more
                  </Button>
                </div>
              </div>

              {/* second small card */}

              <div className="small-card w-100 h-100 mr-lg-5 mb-5 mb-lg-0">
                <div className="d-flex flex-column justify-content-between align-items-center h-100">
                  <div>
                    <div className="d-flex align-items-center small-card-title pl-3">
                      <h1 className="d-inline">2</h1>
                      <span>intermediate</span>
                    </div>
                    <div className="small-card-text px-3">
                      To take your garden to the next level, the intermediate
                      package allows your garden to become at one with nature.
                      Garden maintenance is carried out with the aim of
                      preserving and enriching the ecosystem. Habitat creation
                      extends beyond the soil and plants, to also accommodate
                      water dwelling creatures.
                    </div>
                  </div>
                  <Button
                    onClick={this.expandSecondBigCard}
                    className="see-more-btn my-3 align-self-center"
                  >
                    see more
                  </Button>
                </div>
              </div>

              {/* third small card */}

              <div className="small-card w-100 h-100">
                <div className="d-flex flex-column justify-content-between align-items-center h-100">
                  <div>
                    <div className="d-flex align-items-center small-card-title pl-3">
                      <h1 className="d-inline">3</h1>
                      <span>advanced</span>
                    </div>
                    <div className="small-card-text px-3">
                      The advanced package is a personalised service, tailored
                      to your garden’s specific needs. Encouraging more
                      biodiversity and restoring habitats for wildlife is an
                      objective from day one. An Ecosystem Management
                      Evaluation, carried out by one of our knowledgeable and
                      experienced gardeners will create a plan to maximise your
                      gardens potential.
                    </div>
                  </div>
                  <Button
                    onClick={this.expandThirdBigCard}
                    className="see-more-btn my-3 align-self-center"
                  >
                    see more
                  </Button>
                </div>
              </div>
            </div>

            {/* first big card */}

            <div
              className={
                this.state.firstBigCardExpanded
                  ? "w-100 mt-5 d-flex flex-column align-items-center cards-container"
                  : "d-none"
              }
            >
              <div className="big-card p-4 w-100 h-100">
                <div>
                  <div className="big-card-title">
                    <h1 className="d-inline">1</h1>
                    <span>basic</span>
                  </div>
                </div>

                <div className="row big-card-body d-flex flex-column flex-lg-row flex-grow-1">
                  <div className="col-12 col-lg-4 pr-lg-0">
                    <p>
                      A service designed to suit all gardens, where bugs, birds
                      and bigger mammals are invited in. Native plants are
                      introduced to help establish a rich eco-system.
                      Maintenance is carried out with nature in mind.
                    </p>
                  </div>
                  <div className="col-12 col-lg-4">
                    <h2>No chemical applications</h2>
                    <p>
                      No harmful chemical applications including weed killers,
                      fertilisers and insecticides. Weeds are removed by hand or
                      by mulching in appropriate areas.
                    </p>
                    <h2>Inviting wildlife</h2>
                    <p>
                      Installing bird feeders, bug hotels, log piles and
                      hedgehog access to make your garden wildlife friendly
                    </p>
                  </div>
                  <div className="col-12 col-lg-4">
                    <h2>Regular mulching</h2>
                    <p>
                      Mulching borders enriches the quality of the soil and all
                      the plants that grow in it.
                    </p>
                    <h2>Composting</h2>
                    <p>
                      Making rich compost from the biproducts of your garden.
                    </p>
                    <h2>Planting native species</h2>
                    <p>Supporting local ecosystem in your garden.</p>
                  </div>
                </div>
                <div className="big-card-buttons row d-flex flex-column justify-content-center align-items-center flex-lg-row justify-content-lg-between my-5">
                  <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
                    <Button
                      onClick={this.takeMeBackToAllPackages}
                      className="all-packages-btn"
                    >
                      all packages
                    </Button>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                    <Button
                      onClick={this.hideShowBasicForm}
                      className="book-now-btn eco-book-now"
                    >
                      book now
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* second big card */}

            <div
              className={
                this.state.secondBigCardExpanded
                  ? "w-100 mt-5 d-flex flex-column align-items-center cards-container"
                  : "d-none"
              }
            >
              <div className="big-card p-4 w-100 h-100">
                <div>
                  <div className="big-card-title">
                    <h1 className="d-inline">2</h1>
                    <span>intermediate</span>
                  </div>
                </div>

                <div className="row big-card-body d-flex flex-column flex-lg-row flex-grow-1">
                  <div className="col-12 col-lg-4 pr-lg-0">
                    <p>
                      To take your garden to the next level, the shoots package
                      allows your garden to become at one with nature. Garden
                      maintenance is carried out with the aim of preserving and
                      enriching the ecosystem. Habitat creation extends beyond
                      the soil and plants, to also accommodate water dwelling
                      creatures. Rainwater collection eliminates the need for
                      tap water, saving the planet and your water bill.
                    </p>
                  </div>
                  <div className="col-12 col-lg-4">
                    <h2>Using battery powered tools</h2>
                    <p>
                      Less carbon and noise emissions in compare to petrol
                      powered tools
                    </p>
                    <h2>Water habitat creation</h2>
                    <p>Creating water habitats for more creatures to live.</p>
                    <h2>No heavy cultivation</h2>
                    <p>
                      Not cultivating the soil, preserving the earth for those
                      that live in it.
                    </p>
                  </div>
                  <div className="col-12 col-lg-4">
                    <h2>Using water butt</h2>
                    <p>
                      Installing a water butt to lower water usage in your
                      garden
                    </p>
                    <h2>No bare earth</h2>
                    <p>
                      Leaving no bare ground, making use of every inch of
                      growing space
                    </p>
                  </div>
                </div>
                <div className="big-card-buttons row d-flex flex-column justify-content-center align-items-center flex-lg-row justify-content-lg-between my-5">
                  <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
                    <Button
                      onClick={this.takeMeBackToAllPackages}
                      className="all-packages-btn"
                    >
                      all packages
                    </Button>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                    <Button
                      onClick={this.hideShowIntermediateForm}
                      className="book-now-btn eco-book-now"
                    >
                      book now
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* third big card */}

            <div
              className={
                this.state.thirdBigCardExpanded
                  ? "w-100 mt-5 d-flex flex-column align-items-center cards-container"
                  : "d-none"
              }
            >
              <div className="big-card p-4 w-100 h-100">
                <div>
                  <div className="big-card-title">
                    <h1 className="d-inline">3</h1>
                    <span>advanced</span>
                  </div>
                </div>

                <div className="row big-card-body d-flex flex-column flex-lg-row flex-grow-1">
                  <div className="col-12 col-lg-4 pr-lg-0">
                    <p>
                      The Advanced Package is a personalised service, tailored
                      to your garden’s specific needs. Encouraging more
                      biodiversity and restoring habitats for wildlife is an
                      objective from day one. An Ecosystem Management
                      Evaluation, carried out by one of our knowledgeable and
                      experienced gardeners will create a plan to maximise your
                      gardens potential. Share your garden with a myriad of
                      species you never imagined your garden could accommodate.
                    </p>
                  </div>
                  <div className="col-12 col-lg-4">
                    <h2>Ecosystem Management Evaluation (EMA)</h2>
                    <p>
                      An EMA assesses your garden potential and sets in place a
                      plan to maximise its growth.
                    </p>
                    <h2>Biodiversity surveys</h2>
                    <p>
                      Periodic surveys of the species living in your garden will
                      help indicate your gardens progress in becoming eco-
                      friendly
                    </p>
                    <h2>Conversion of hedges to mixed native species</h2>
                    <p>
                      Native hedgerows require fewer fertilisers, pesticides and
                      volumes of water. They also reduce air pollution and
                      provide shelter for wildlife.
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
                      Feeding the plants through both their roots and also,
                      through their leaves helps give them an extra boost,
                      brightening your garden even more.
                    </p>

                    <h2>Kitchen Garden</h2>

                    <p>
                      Crops of fruits, vegetables and herbs are raised to supply
                      you with fresh, delicious produce
                    </p>
                  </div>
                </div>
                <div className="big-card-buttons row d-flex flex-column justify-content-center align-items-center flex-lg-row justify-content-lg-between my-5">
                  <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
                    <Button
                      onClick={this.takeMeBackToAllPackages}
                      className="all-packages-btn"
                    >
                      all packages
                    </Button>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                    <Button
                      onClick={this.hideShowAdvancedForm}
                      className="book-now-btn eco-book-now"
                    >
                      book now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={this.state.basicForm ? "container-fluid" : "d-none"}>
          <EcoBasicForm />
        </div>
        <div
          className={this.state.intermediateForm ? "container-fluid" : "d-none"}
        >
          <EcoIntermediateForm />
        </div>
        <div className={this.state.advancedForm ? "container-fluid" : "d-none"}>
          <EcoAdvancedForm />
        </div>
      </>
    );
  }
}
