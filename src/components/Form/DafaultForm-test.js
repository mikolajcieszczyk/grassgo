import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import FlowerImg from "assets/images/svg/kwiat-03.svg";
import DefaultForm from "components/Form/DefaultForm";

const API_PATH = "http://emcie.pl/grassgo/index.php";

let choiceArr = ["package"];

export default class StandardPackageFormStory extends Component {
  constructor() {
    super();
    this.state = {
      whichService: "",
      variant: "",
      zeroForm: true,
      variantForm: false,
      firstForm: false,
      secondForm: false,
      successMessage: false,
      defaultForm: false,
      name: "",
      email: "",
      tel: "",
      address: "",
      postcode: "",
      date: "",
      notes: "",
      cleanup: "",
      hedgeTrim: "",
      treeSurgery: "",
      lawnCare: "",
      planting: "",
      pruning: "",
      knotweed: "",
      mailSent: false,
      error: null,
      popup: false,
    };

    this.whichServiceTrigger = this.whichServiceTrigger.bind(this);
    this.whichServiceNextBtn = this.whichServiceNextBtn.bind(this);
    this.whichVariantTrigger = this.whichVariantTrigger.bind(this);
    this.whichVariantNextBtn = this.whichVariantNextBtn.bind(this);
    this.changeFormToSecond = this.changeFormToSecond.bind(this);
    this.showDefaultForm = this.showDefaultForm.bind(this);
    this.translateCleanup = this.translateCleanup.bind(this);
    this.translateHedgeTrim = this.translateHedgeTrim.bind(this);
    this.translateTreeSurgery = this.translateTreeSurgery.bind(this);
    this.translateLawnCare = this.translateLawnCare.bind(this);
    this.translatePlanting = this.translatePlanting.bind(this);
    this.translatePruning = this.translatePruning.bind(this);
    this.translateKnotweed = this.translateKnotweed.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  whichServiceTrigger(e) {
    if (e.target.value === "package") {
      this.setState({
        whichService: e.target.value,
      });
      console.log(e.target.value);
    } else if (e.target.value === "oneoff") {
      this.setState({
        whichService: e.target.value,
      });
      console.log(e.target.value);
    } else if (e.target.value === "commercialpublic") {
      this.setState({
        whichService: e.target.value,
      });
      console.log(e.target.value);
    }
  }

  whichServiceNextBtn(e) {
    e.preventDefault();

    console.log("whichService: " + this.state.whichService);
    console.log(this.state);

    this.setState({
      zeroForm: !this.state.zeroForm,
      variantForm: !this.state.variantForm,
    });
  }

  whichVariantTrigger(e) {
    if (e.target.value === "standardpackage") {
      this.setState({
        variant: "Sea Standard Package",
      });

      console.log(this.state.variant);
    } else if (e.target.value === "premiumpackage") {
      this.setState({
        variant: "Sky Premium Package",
      });

      console.log(this.state.variant);
    } else if (e.target.value === "ecopackage") {
      this.setState({
        variant: "Earth Eco Package",
      });

      console.log(this.state.variant);
    }
  }

  whichVariantNextBtn(e) {
    e.preventDefault();

    console.log("variant: " + this.state.variant);
    console.log(this.state);

    choiceArr.push(this.state.variant);
    console.log(choiceArr);

    this.setState({
      variantForm: !this.state.variantForm,
      firstForm: !this.state.firstForm,
    });
  }

  // changeFormToFirst() {
  //   this.setState({
  //     zeroForm: !this.state.zeroForm,
  //     firstForm: !this.state.first,
  //   });

  //   console.log(this.state);
  // }

  changeFormToSecond() {
    this.setState({
      firstForm: !this.state.firstForm,
      secondForm: !this.state.secondForm,
    });

    console.log(this.state);
  }

  showDefaultForm() {
    this.setState({
      defaultForm: true,
    });
  }

  translateCleanup(e) {
    if (e.target.checked) {
      this.setState({
        cleanup: e.target.value,
      });
      choiceArr.push(e.target.value);
      console.log(choiceArr);
    } else {
      this.setState({
        cleanup: "",
      });

      this.deleteString("CleanUp");
      console.log(choiceArr);
    }
  }

  translateHedgeTrim(e) {
    if (e.target.checked) {
      this.setState({
        hedgeTrim: e.target.value,
      });
      choiceArr.push(e.target.value);
      console.log(choiceArr);
    } else {
      this.setState({
        hedgeTrim: "",
      });
    }
  }

  translateTreeSurgery(e) {
    if (e.target.checked) {
      this.setState({
        treeSurgery: e.target.value,
      });
      choiceArr.push(e.target.value);
      console.log(choiceArr);
    } else {
      this.setState({
        treeSurgery: "",
      });
    }
  }

  translateLawnCare(e) {
    if (e.target.checked) {
      this.setState({
        lawnCare: e.target.value,
      });
      choiceArr.push(e.target.value);
      console.log(choiceArr);
    } else {
      this.setState({
        lawnCare: "",
      });
    }
  }

  translatePlanting(e) {
    if (e.target.checked) {
      this.setState({
        planting: e.target.value,
      });
      choiceArr.push(e.target.value);
      console.log(choiceArr);
    } else {
      this.setState({
        planting: "",
      });
    }
  }

  translatePruning(e) {
    if (e.target.checked) {
      this.setState({
        pruning: e.target.value,
      });
      choiceArr.push(e.target.value);
      console.log(choiceArr);
    } else {
      this.setState({
        pruning: "",
      });
    }
  }

  translateKnotweed(e) {
    if (e.target.checked) {
      this.setState({
        knotweed: e.target.value,
      });
      choiceArr.push(e.target.value);
      console.log(choiceArr);
    } else {
      this.setState({
        knotweed: "",
      });
    }
  }

  closePopup() {
    this.setState({
      popupSuccess: false,
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);

    this.setState({
      popup: true,
      // usun to co ponizej
      popup: false,
      successMessage: true,
    });

    // axios({
    //   method: "post",
    //   url: `${API_PATH}`,
    //   headers: { "content-type": "application/json" },
    //   data: this.state,
    // })
    //   .then((result) => {
    //     this.setState({
    //       mailSent: result.data.sent,
    //       // odkomentuj
    //       // popup: false,
    //       // successMessage: true,
    //     });
    //   })
    //   .catch((error) => this.setState({ error: error.message }));
  };

  render() {
    const isDefaultForm = this.state.defaultForm;
    return (
      <>
        {isDefaultForm ? (
          <DefaultForm />
        ) : (
          <div className="form-section package-story-form py-5">
            {/* always on top content */}
            <div className="row text-center">
              <div className="col-12">
                <h1 className="form__title">Book your visit</h1>
              </div>
              <div className="col-12 col-lg-6">
                <a className="form__phone-number" href="tel:0141 332 55 33">
                  0141 332 55 33
                </a>
              </div>
              <div className="col-12 col-lg-6">
                <a className="form__mail" href="mailto: info@grassgo.co.uk">
                  info@grassgo.co.uk
                </a>
              </div>
            </div>
            {/* form start */}
            <div className="row form__container">
              <form
                className={
                  this.state.zeroForm
                    ? "col-12 form d-flex flex-column align-items-center"
                    : "d-none"
                }
              >
                <p>Let us know which service would you like to book</p>
                <div>
                  <input
                    onClick={this.whichServiceTrigger}
                    type="radio"
                    id="package"
                    name="whichServiceName"
                    value="package"
                  />
                  <label className="ml-2" htmlFor="package">
                    package
                  </label>
                </div>
                <div>
                  <input
                    onClick={this.whichServiceTrigger}
                    type="radio"
                    id="oneoff"
                    name="whichServiceName"
                    value="oneoff"
                  />
                  <label className="ml-2" htmlFor="oneoff">
                    one off
                  </label>
                </div>
                <div>
                  <input
                    onClick={this.whichServiceTrigger}
                    type="radio"
                    id="commercialpublic"
                    name="whichServiceName"
                    value="commercialpublic"
                  />
                  <label className="ml-2" htmlFor="commercialpublic">
                    commercial and public space
                  </label>
                </div>

                <button className="next-btn" onClick={this.whichServiceNextBtn}>
                  next
                </button>
              </form>

              {/* which package form */}

              <form
                className={
                  this.state.variantForm &&
                  this.state.successMessage === false &&
                  this.state.defaultForm === false
                    ? "col-12 form d-flex flex-column align-items-center"
                    : "d-none"
                }
              >
                <p>Let us know which package would you like to book</p>
                <div>
                  <input
                    onClick={this.whichVariantTrigger}
                    type="radio"
                    id="standardpackage"
                    name="whichPackageName"
                    value="standardpackage"
                  />
                  <label className="ml-2" htmlFor="standardpackage">
                    Sea Standard Package
                  </label>
                </div>
                <div>
                  <input
                    onClick={this.whichVariantTrigger}
                    type="radio"
                    id="premiumpackage"
                    name="whichPackageName"
                    value="premiumpackage"
                  />
                  <label className="ml-2" htmlFor="premiumpackage">
                    Sky Premium Package
                  </label>
                </div>
                <div>
                  <input
                    onClick={this.whichVariantTrigger}
                    type="radio"
                    id="ecopackage"
                    name="whichPackageName"
                    value="ecopackage"
                  />
                  <label className="ml-2" htmlFor="ecopackage">
                    Earth Eco Package
                  </label>
                </div>
                <button className="next-btn" onClick={this.whichVariantNextBtn}>
                  next
                </button>
              </form>

              <form
                className={
                  this.state.firstForm &&
                  this.state.successMessage === false &&
                  this.state.defaultForm === false
                    ? "col-12 form d-flex flex-column align-items-center"
                    : "d-none"
                }
              >
                <p className="message-p text-center">
                  You have chosen {this.state.variant}
                </p>
                <p className="summary-p text-center">
                  Do you want to add any <b>one-off service</b>?
                </p>
                <div className="col-6 col-lg-4">
                  <div>
                    <input
                      onClick={this.translateCleanup}
                      type="checkbox"
                      id="cleanup"
                      name="cleanup"
                      value="CleanUp"
                    />
                    <label className="ml-2" htmlFor="cleanup">
                      cleanup
                    </label>
                  </div>
                  <div>
                    <input
                      onClick={this.translateHedgeTrim}
                      type="checkbox"
                      id="hedgeTrim"
                      name="hedgeTrim"
                      value="Hedge Trim"
                    />
                    <label className="ml-2" htmlFor="huey">
                      hedge trim
                    </label>
                  </div>
                  <div>
                    <input
                      onClick={this.translateTreeSurgery}
                      type="checkbox"
                      id="treeSurgery"
                      name="treeSurgery"
                      value="Tree Surgery"
                    />
                    <label className="ml-2" htmlFor="huey">
                      tree surgery
                    </label>
                  </div>
                  <div>
                    <input
                      onClick={this.translateLawnCare}
                      type="checkbox"
                      id="lawnCare"
                      name="lawnCare"
                      value="Lawn care"
                    />
                    <label className="ml-2" htmlFor="huey">
                      lawn care
                    </label>
                  </div>
                  <div>
                    <input
                      onClick={this.translatePlanting}
                      type="checkbox"
                      id="planting"
                      name="planting"
                      value="Planting"
                    />
                    <label className="ml-2" htmlFor="huey">
                      planting
                    </label>
                  </div>
                  <div>
                    <input
                      onClick={this.translatePruning}
                      type="checkbox"
                      id="pruning"
                      name="pruning"
                      value="Pruning"
                    />
                    <label className="ml-2" htmlFor="huey">
                      pruning
                    </label>
                  </div>
                  <div>
                    <input
                      onClick={this.translateKnotweed}
                      type="checkbox"
                      id="knotweed"
                      name="knotweed"
                      value="Japanese Knotweed"
                    />
                    <label className="ml-2" htmlFor="huey">
                      japanese knotweed
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-6">
                      {/* <span className="back-btn">
                    <u>back</u>
                  </span> */}
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <Button
                        onClick={this.changeFormToSecond}
                        className="next-btn"
                      >
                        next
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
              <form
                className={
                  this.state.secondForm &&
                  this.state.successMessage === false &&
                  this.state.defaultForm === false
                    ? "col-12 form d-flex flex-column align-items-center mt-3"
                    : "d-none"
                }
              >
                <p className="w-75 message-p text-center">
                  You have chosen
                  {this.state.variant === "" &&
                  this.state.cleanup === "" &&
                  this.state.hedgeTrim === "" &&
                  this.state.treeSurgery === "" &&
                  this.state.lawnCare === "" &&
                  this.state.planting === "" &&
                  this.state.pruning === "" &&
                  this.state.knotweed === ""
                    ? ` without any one-off services`
                    : ` and ` +
                      choiceArr.reduce((res, k, i) =>
                        [res, k].join(
                          i === choiceArr.length - 1 ? " and " : ", "
                        )
                      )}
                </p>
                <p className="summary-p">
                  Please give us some details, so we can plan the visit
                </p>
                <input
                  onChange={(e) => this.setState({ name: e.target.value })}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-50"
                />
                <input
                  onChange={(e) => this.setState({ email: e.target.value })}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e-mail"
                  className="w-50"
                />
                <input
                  onChange={(e) => this.setState({ tel: e.target.value })}
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Phone no"
                  className="w-50"
                />
                <div className="input-group w-50 mb-1">
                  <input
                    onChange={(e) => this.setState({ address: e.target.value })}
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Street"
                    className="w-50"
                  />
                  <input
                    onChange={(e) =>
                      this.setState({ postcode: e.target.value })
                    }
                    type="text"
                    id="postcode"
                    name="postcode"
                    placeholder="Postcode"
                    className="w-50"
                  />
                </div>
                <input
                  onChange={(e) => this.setState({ date: e.target.value })}
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Preffered date of service"
                  className="w-50"
                />
                <textarea
                  onChange={(e) => this.setState({ notes: e.target.value })}
                  rows="5"
                  cols="23"
                  id="notes"
                  name="notes"
                  placeholder="Additional remarks"
                  className="w-50"
                />
                <div className="col-8">
                  <div className="row">
                    <div className="col-6">
                      <span onClick={this.changeForm} className="back-btn">
                        <u>back</u>
                      </span>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                      <Button
                        onClick={this.handleFormSubmit}
                        className="next-btn"
                      >
                        send
                      </Button>
                    </div>
                  </div>
                </div>
              </form>

              <div
                className={
                  this.state.successMessage
                    ? "col-12 form d-flex flex-column align-items-center"
                    : "d-none"
                }
              >
                Thank you! <br></br>
                Your form was sent and we will contact you soon!
                <button className="next-btn" onClick={this.showDefaultForm}>
                  book another visit
                </button>
              </div>
            </div>

            {/* popup */}

            <div className={this.state.popup ? "form-popup__bg" : "d-none"}>
              <div className={this.state.popup ? "form-popup" : "d-none"}>
                <div className="col-12 text-center d-flex flex-column justify-content-center align-items-center h-100">
                  <img
                    src={FlowerImg}
                    alt="flower"
                    className="flower-img rotate-center"
                  />
                  <p>your message is being processed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
