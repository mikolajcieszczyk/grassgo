import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class DefaultForm extends Component {
  render() {
    return (
      <div>
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
          {/* first form */}
          <form className="col-12 form d-flex flex-column align-items-center mt-3">
            <p>Let us know which service would you like to book</p>
            <div>
              <div>
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                />
                <label className="ml-2" htmlFor="huey">
                  package
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                />
                <label className="ml-2" htmlFor="huey">
                  one off
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                />
                <label className="ml-2" htmlFor="huey">
                  commercial and public space
                </label>
              </div>
            </div>
            <div className="d-flex">
              <Button className="next-btn ml-5">next</Button>
            </div>
          </form>

          {/* second form */}
          <form className="col-12 form d-flex flex-column align-items-center mt-3">
            <p>Which package do you prefer?</p>
            <div>
              <div>
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                />
                <label className="ml-2" htmlFor="huey">
                  standard
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                />
                <label className="ml-2" htmlFor="huey">
                  premium
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                />
                <label className="ml-2" htmlFor="huey">
                  eco
                </label>
              </div>
            </div>
            <div className="d-flex">
              <span>
                <u>back</u>
              </span>
              <Button className="next-btn ml-5">next</Button>
            </div>
          </form>

          {/* third form */}
          <form className="col-12 form d-flex flex-column align-items-center mt-3">
            <p>Do you want to add any one-off service?</p>
            <div>
              <div>
                <input type="checkbox" id="huey" name="drone" value="huey" />
                <label className="ml-2" htmlFor="huey">
                  cleanup
                </label>
              </div>
              <div>
                <input type="checkbox" id="huey" name="drone" value="huey" />
                <label className="ml-2" htmlFor="huey">
                  hedge trim
                </label>
              </div>
              <div>
                <input type="checkbox" id="huey" name="drone" value="huey" />
                <label className="ml-2" htmlFor="huey">
                  tree surgery
                </label>
              </div>
              <div>
                <input type="checkbox" id="huey" name="drone" value="huey" />
                <label className="ml-2" htmlFor="huey">
                  lawn care
                </label>
              </div>
              <div>
                <input type="checkbox" id="huey" name="drone" value="huey" />
                <label className="ml-2" htmlFor="huey">
                  planting
                </label>
              </div>
              <div>
                <input type="checkbox" id="huey" name="drone" value="huey" />
                <label className="ml-2" htmlFor="huey">
                  pruning
                </label>
              </div>
            </div>
            <div className="d-flex">
              <span>
                <u>back</u>
              </span>
              <Button className="next-btn ml-5">next</Button>
            </div>
          </form>

          {/* fourth form */}

          <form className="col-12 form d-flex flex-column align-items-center mt-3">
            <p>You have chosen standard package and hedge trim</p>
            <input type="text" id="name" name="name" placeholder="Name" />
            <input type="email" id="email" name="email" placeholder="e-mail" />
            <input type="tel" id="tel" name="tel" placeholder="Phone no" />
            <input
              type="text"
              id="date"
              name="date"
              placeholder="Preffered date of service"
            />
            <textarea
              rows="5"
              cols="23"
              id="notes"
              name="notes"
              placeholder="Additional remarks"
            />
            <div className="d-flex">
              <span>
                <u>back</u>
              </span>
              <Button className="next-btn ml-5">next</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
