import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const API_PATH = "http://emcie.pl/grassgo/index.php";

export default class StandardPackageFormStory extends Component {
  constructor() {
    super();
    this.state = {
      variant: "Sea Standard Package",
      secondForm: false,
      name: "",
      email: "",
      tel: "",
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
      popupSuccess: false,
    };

    this.secondForm = this.secondForm.bind(this);
    this.translateCleanup = this.translateCleanup.bind(this);
    this.translateHedgeTrim = this.translateHedgeTrim.bind(this);
    this.translateTreeSurgery = this.translateTreeSurgery.bind(this);
    this.translateLawnCare = this.translateLawnCare.bind(this);
    this.translatePlanting = this.translatePlanting.bind(this);
    this.translatePruning = this.translatePruning.bind(this);
    this.translateKnotweed = this.translateKnotweed.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  translateCleanup(e) {
    if (e.target.checked) {
      this.setState({
        cleanup: e.target.value,
      });
    } else {
      this.setState({
        cleanup: "",
      });
    }
  }

  translateHedgeTrim(e) {
    if (e.target.checked) {
      this.setState({
        hedgeTrim: e.target.value,
      });
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
    } else {
      this.setState({
        knotweed: "",
      });
    }
  }

  secondForm() {
    this.setState({
      secondForm: !this.state.secondForm,
    });

    console.log(this.state);
  }

  closePopup() {
    this.setState({
      popupSuccess: false
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);


    this.setState({
      popup: true,
    });

    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state,
    })
      .then((result) => {
        this.setState({
          mailSent: result.data.sent,
          popup: false,
          popupSuccess: true,
        });
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  render() {
    return (
      <div className="form-section package-story-form my-5">
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
              this.state.secondForm
                ? "d-none"
                : "col-12 form d-flex flex-column align-items-center"
            }
          >
            <p className="summary-p mt-5 text-center">
              You have chosen <b>standard package</b>.
            </p>
            <p className="answer-p text-center">
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
                  <Button onClick={this.secondForm} className="next-btn">
                    next
                  </Button>
                </div>
              </div>
            </div>
          </form>
          <form
            className={
              this.state.secondForm
                ? "col-12 form d-flex flex-column align-items-center mt-3"
                : "d-none"
            }
          >
            <p className="summary-p">You have chosen standard package and hedge trim</p>
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
            <input
              onChange={(e) => this.setState({ date: e.target.value })}
              type="text"
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
            <div className="col-12">
              <div className="row">
                <div className="col-6">
                  <span onClick={this.secondForm} className="back-btn">
                    <u>back</u>
                  </span>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <Button onClick={this.handleFormSubmit} className="next-btn">
                    send
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* popup */}

        <div 
          className={
            this.state.popup || this.state.popupSuccess
              ? "form-popup__bg"
              : "d-none"
          }
          onClick={this.closePopup}
        >
          <div 
            className={
              this.state.popup
                ? "form-popup"
                : "d-none"
            }
          >
            <div className="col-12 text-center d-flex flex-column align-items-center">
              <p>please wait a few seconds</p>
              <p>message is sending now</p>
            </div>
          </div>

          <div 
            className={
              this.state.popupSuccess
                ? "form-popup"
                : "d-none"
            }
          >
            <div className="col-12 text-center d-flex flex-column align-items-center">
              <p>success</p>
              <p>click anywhere to close this window</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
