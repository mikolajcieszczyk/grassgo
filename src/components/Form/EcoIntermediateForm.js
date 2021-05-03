import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

import FlowerImg from "assets/images/svg/kwiat-03.svg";

const API_PATH = "http://emcie.pl/grassgo/index.php";

let choiceArr = [];

export default class EcoIntermediateForm extends Component {
    constructor() {
        super();
        this.state = {
            whichServiceForm: false,
            whichPackageForm: false,
            whichOneOffForm: true,
            personalDataForm: false,

            onlyOneOffForm: false,
            onlyOneOffPersonalDataForm: false,
            onlyCommercialForm: false,

            whichService: "Package",
            whichPackage: "Earth Eco Package: INTERMEDIATE",

            cleanup: "",
            hedgeTrim: "",
            treeSurgery: "",
            lawnCare: "",
            planting: "",
            pruning: "",
            knotweed: "",

            name: "",
            email: "",
            tel: "",
            address: "",
            postcode: "",
            date: "",
            notes: "",

            mailSent: false,
            success: false,
            error: null,
            popup: false,

            fillMe: "",
        };

        this.whichServiceCatcher = this.whichServiceCatcher.bind(this);

        this.goToWhichPackageForm = this.goToWhichPackageForm.bind(this);
        this.whichPackageCatcher = this.whichPackageCatcher.bind(this);

        this.goToOneOffServicesForm = this.goToOneOffServicesForm.bind(this);

        this.goToPersonalDataForm = this.goToPersonalDataForm.bind(this);
        this.goToOnlyOneOffPersonalDataForm = this.goToOnlyOneOffPersonalDataForm.bind(
            this
        );

        this.takeMeBackFromWhichPackageForm = this.takeMeBackFromWhichPackageForm.bind(
            this
        );
        this.takeMeBackFromOneOffForm = this.takeMeBackFromOneOffForm.bind(this);
        this.takeMeBackFromPersonalDataForm = this.takeMeBackFromPersonalDataForm.bind(
            this
        );
        this.takeMeBackFromOnlyPersonalDataForm = this.takeMeBackFromOnlyPersonalDataForm.bind(
            this
        );
        this.takeMeBackFromOneOffPersonalDataForm = this.takeMeBackFromOneOffPersonalDataForm.bind(
            this
        );
        this.takeMeBackFromOnlyOneOffForm = this.takeMeBackFromOnlyOneOffForm.bind(
            this
        );

        this.oneMoreTime = this.oneMoreTime.bind(this);

        this.translateCleanup = this.translateCleanup.bind(this);
        this.translateHedgeTrim = this.translateHedgeTrim.bind(this);
        this.translateTreeSurgery = this.translateTreeSurgery.bind(this);
        this.translateLawnCare = this.translateLawnCare.bind(this);
        this.translatePlanting = this.translatePlanting.bind(this);
        this.translatePruning = this.translatePruning.bind(this);
        this.translateKnotweed = this.translateKnotweed.bind(this);
    }

    whichServiceCatcher(e) {
        this.setState({
            success: false,
        });
        if (e.target.value === "Package") {
            this.setState({
                whichService: e.target.value,
            });
            console.log(this.state.whichService);
        } else if (e.target.value === "One-Off Services") {
            this.setState({
                whichService: e.target.value,
            });
            console.log(this.state.whichService);
        } else if (e.target.value === "Commercial and public space") {
            this.setState({
                whichService: e.target.value,
            });
            console.log(this.state.whichService);
        }
    }

    goToWhichPackageForm(e) {
        e.preventDefault();

        if (this.state.whichService === "Package") {
            this.setState({
                whichServiceForm: false,
                whichPackageForm: true,
            });
        } else if (this.state.whichService === "One-Off Services") {
            this.setState({
                whichServiceForm: false,
                onlyOneOffForm: true,
            });
        } else if (this.state.whichService === "Commercial and public space") {
            this.setState({
                whichServiceForm: false,
                onlyCommercialForm: true,
            });
        }

        console.log(this.state.whichService);
    }

    whichPackageCatcher(e) {
        if (e.target.value === "Sea Standard Package") {
            this.setState({
                whichPackage: e.target.value,
            });
            console.log(this.state.whichPackage);
        } else if (e.target.value === "Sky Premium Package") {
            this.setState({
                whichPackage: e.target.value,
            });
            console.log(this.state.whichPackage);
        } else if (
            e.target.value === "Earth Eco Package: BASIC" ||
            e.target.value === "Earth Eco Package: INTERMEDIATE" ||
            e.target.value === "Earth Eco Package: ADVANCED"
        ) {
            this.setState({
                whichPackage: e.target.value,
            });
            console.log(this.state.whichPackage);
        }
    }

    goToOneOffServicesForm(e) {
        e.preventDefault();

        this.setState({
            whichPackageForm: false,
            whichOneOffForm: true,
        });
        console.log(this.state.whichPackage);
    }

    goToPersonalDataForm(e) {
        e.preventDefault();

        this.setState({
            whichOneOffForm: false,
            personalDataForm: true,
        });
        console.log(this.state.whichPackage);
    }

    goToOnlyOneOffPersonalDataForm(e) {
        e.preventDefault();

        this.setState({
            onlyOneOffForm: false,
            onlyOneOffPersonalDataForm: true,
        });
        console.log(this.state.whichPackage);
    }

    takeMeBackFromWhichPackageForm() {
        this.setState({
            whichService: "",
            whichPackageForm: false,
            whichServiceForm: true,
        });
    }

    takeMeBackFromOneOffForm() {
        this.setState({
            whichOneOffForm: false,
            whichPackageForm: true,
        });

        var inputs = document.querySelectorAll(".my-checkbox");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
        }

        choiceArr = [];
    }

    takeMeBackFromOnlyOneOffForm() {
        this.setState({
            onlyOneOffForm: false,
            whichServiceForm: true,
        });

        var inputs = document.querySelectorAll(".my-checkbox");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
        }

        choiceArr = [];
    }

    takeMeBackFromPersonalDataForm() {
        this.setState({
            personalDataForm: false,
            whichOneOffForm: true,
        });
    }

    takeMeBackFromOneOffPersonalDataForm() {
        this.setState({
            onlyOneOffPersonalDataForm: false,
            onlyOneOffForm: true,
        });
    }

    takeMeBackFromOnlyPersonalDataForm() {
        this.setState({
            onlyCommercialForm: false,
            whichServiceForm: true,
        });
    }

    oneMoreTime() {
        choiceArr = [];

        this.setState({
            whichServiceForm: true,
            whichPackageForm: false,
            whichOneOffForm: false,
            personalDataForm: false,

            onlyOneOffForm: false,
            onlyOneOffPersonalDataForm: false,
            onlyCommercialForm: false,

            whichService: "",
            whichPackage: "",

            cleanup: "",
            hedgeTrim: "",
            treeSurgery: "",
            lawnCare: "",
            planting: "",
            pruning: "",
            knotweed: "",

            name: "",
            email: "",
            tel: "",
            address: "",
            postcode: "",
            date: "",
            notes: "",

            success: false,
            error: null,
            popup: false,
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

            choiceArr.splice(choiceArr.indexOf("CleanUp"), 1);

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

            choiceArr.splice(choiceArr.indexOf("Hedge Trim"), 1);

            console.log(choiceArr);
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

            choiceArr.splice(choiceArr.indexOf("Tree Surgery"), 1);

            console.log(choiceArr);
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

            choiceArr.splice(choiceArr.indexOf("Lawn care"), 1);

            console.log(choiceArr);
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

            choiceArr.splice(choiceArr.indexOf("Planting"), 1);

            console.log(choiceArr);
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

            choiceArr.splice(choiceArr.indexOf("Pruning"), 1);

            console.log(choiceArr);
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

            choiceArr.splice(choiceArr.indexOf("Japanese Knotweed removal"), 1);

            console.log(choiceArr);
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        if (this.state.fillMe !== "") {
            alert("something went wrong :(");
        } else {
            console.log(this.state);

            this.setState({
                popup: true,
                personalDataForm: false,
                onlyOneOffPersonalDataForm: false,
                onlyCommercialForm: false,
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
                        success: true,
                        popup: false,
                    });
                })
                .catch((error) => this.setState({ error: error.message }));
        }
    };

    render() {
        return (
            <>
                <div className="form-section package-story-form py-5">
                    {/* always on top content start */}
                    <div className="row text-center mb-5">
                        <div className="col-12">
                            <h1 className="form__title mb-3">Book your visit</h1>
                            <input
                                type="text"
                                className="fill-me"
                                value=""
                                onChange={(e) => this.setState({ fillMe: e.target.value })}
                            ></input>
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
                    {/* always on top content end */}

                    {/* which service form start */}
                    <form
                        className={
                            this.state.whichServiceForm
                                ? "row form d-flex flex-column align-items-center"
                                : "d-none"
                        }
                    >
                        <p className="p-tellUs text-center">Let us know which service would you like to book</p>

                        <div className="col-10 col-lg-4">
                            <input
                                onClick={this.whichServiceCatcher}
                                type="radio"
                                id="package"
                                name="whichServiceName"
                                value="Package"
                            />
                            <label className="ml-3 form-label" htmlFor="package">
                                package
              </label>
                        </div>
                        <div className="col-10 col-lg-4">
                            <input
                                onClick={this.whichServiceCatcher}
                                type="radio"
                                id="oneoff"
                                name="whichServiceName"
                                value="One-Off Services"
                            />
                            <label className="ml-3 form-label" htmlFor="oneoff">
                                one off
              </label>
                        </div>
                        <div className="col-10 col-lg-4">
                            <input
                                onClick={this.whichServiceCatcher}
                                type="radio"
                                id="commercialpublic"
                                name="whichServiceName"
                                value="Commercial and public space"
                            />
                            <label className="ml-3 form-label" htmlFor="commercialpublic">
                                commercial and public space
              </label>
                        </div>

                        <div className="col-12 text-center text-lg-right ml-lg-4">
                            <button className="next-btn ml-lg-auto mr-lg-5" onClick={this.goToWhichPackageForm}>
                                next
            </button>
                        </div>
                    </form>
                    {/* which service form finish */}

                    {/* which package form start */}
                    <form
                        className={
                            this.state.whichService === "Package" &&
                                this.state.whichPackageForm &&
                                !this.state.whichServiceForm
                                ? "col-12 form d-flex flex-column align-items-center"
                                : "d-none"
                        }
                    >
                        <p className="p-tellUs text-center">Which package do you prefer?</p>
                        <div className="col-10 col-md-5 col-lg-4">
                            <input
                                onClick={this.whichPackageCatcher}
                                type="radio"
                                id="standardpackage"
                                name="whichPackageName"
                                value="Sea Standard Package"
                            />
                            <label className="ml-3 form-label" htmlFor="standardpackage">
                                Sea Standard Package
              </label>
                        </div>
                        <div className="col-10 col-md-5 col-lg-4">
                            <input
                                onClick={this.whichPackageCatcher}
                                type="radio"
                                id="premiumpackage"
                                name="whichPackageName"
                                value="Sky Premium Package"
                            />
                            <label className="ml-3 form-label" htmlFor="premiumpackage">
                                Sky Premium Package
              </label>
                        </div>
                        <div className="col-10 col-md-5 col-lg-4 ml-4">
                            <label className="form-label ml-3" htmlFor="ecopackage">
                                Earth Eco Package
              </label>
                            <br></br>
                            <input
                                class="ml-4"
                                onClick={this.whichPackageCatcher}
                                type="radio"
                                id="ecopackageBasic"
                                name="whichPackageName"
                                value="Earth Eco Package: BASIC"
                            />
                            <label className="ml-3 form-label" htmlFor="ecopackageBasic">
                                Basic
              </label>

                            <br></br>
                            <input
                                class="ml-4"
                                onClick={this.whichPackageCatcher}
                                type="radio"
                                id="ecopackageIntermediate"
                                name="whichPackageName"
                                value="Earth Eco Package: INTERMEDIATE"
                            />
                            <label className="ml-3 form-label" htmlFor="ecopackageIntermediate">
                                Intermediate
              </label>

                            <br></br>
                            <input
                                class="ml-4"
                                onClick={this.whichPackageCatcher}
                                type="radio"
                                id="ecopackageAdvanced"
                                name="whichPackageName"
                                value="Earth Eco Package: ADVANCED"
                            />
                            <label className="ml-3 form-label" htmlFor="ecopackageAdvanced">
                                Advanced
              </label>
                        </div>
                        <div className="row mt-3 w-100 d-flex justify-items-between">
                            <div className="col-3 col-md-6 text-center">
                                <span
                                    className="back-btn"
                                    onClick={this.takeMeBackFromWhichPackageForm}
                                >
                                    <u>back</u>
                                </span>
                            </div>
                            <div className="col-6 col-md-6 text-right">
                                <button
                                    className="next-btn"
                                    onClick={this.goToOneOffServicesForm}
                                >
                                    next
                </button>
                            </div>
                        </div>
                    </form>
                    {/* which package form finish */}

                    {/* one off services form start */}
                    <form
                        className={
                            this.state.whichOneOffForm
                                ? "col-12 form d-flex flex-column align-items-center"
                                : "d-none"
                        }
                    >
                        <p className="p-tellUs text-center">
                            You have chosen <b>{this.state.whichPackage}</b>
                        </p>
                        <p className="p-tellUs text-center">
                            Do you want to add any <b>one-off service</b>?
            </p>
                        <div className="col-12 col-md-5 col-lg-4">
                            <div>
                                <input
                                    onClick={this.translateCleanup}
                                    type="checkbox"
                                    class="my-checkbox styled-checkbox"
                                    id="intermediateCleanup"
                                    name="intermediateCleanup"
                                    value="CleanUp"
                                />
                                <label className="ml-3 form-label" htmlFor="intermediateCleanup">
                                    cleanup
                </label>
                            </div>
                            <div>
                                <input
                                    onClick={this.translateHedgeTrim}
                                    type="checkbox"
                                    class="my-checkbox styled-checkbox"
                                    id="intermediateHedgeTrim"
                                    name="intermediateHedgeTrim"
                                    value="Hedge Trim"
                                />
                                <label className="ml-3 form-label" htmlFor="intermediateHedgeTrim">
                                    hedge trim
                </label>
                            </div>
                            <div>
                                <input
                                    onClick={this.translateTreeSurgery}
                                    type="checkbox"
                                    class="my-checkbox styled-checkbox"
                                    name="intermediateTreeSurgery"
                                    id="intermediateTreeSurgery"
                                    value="Tree Surgery"
                                />
                                <label className="ml-3 form-label" htmlFor="intermediateTreeSurgery">
                                    tree surgery
                </label>
                            </div>
                            <div>
                                <input
                                    onClick={this.translateLawnCare}
                                    type="checkbox"
                                    class="my-checkbox styled-checkbox"
                                    name="intermediateLawnCare"
                                    id="intermediateLawnCare"
                                    value="Lawn care"
                                />
                                <label className="ml-3 form-label" htmlFor="intermediateLawnCare">
                                    lawn care
                </label>
                            </div>
                            <div>
                                <input
                                    onClick={this.translatePlanting}
                                    type="checkbox"
                                    class="my-checkbox styled-checkbox"
                                    name="intermediatePlanting"
                                    id="intermediatePlanting"
                                    value="Planting"
                                />
                                <label className="ml-3 form-label" htmlFor="intermediatePlanting">
                                    planting
                </label>
                            </div>
                            <div>
                                <input
                                    onClick={this.translatePruning}
                                    type="checkbox"
                                    class="my-checkbox styled-checkbox"
                                    name="intermediatePruning"
                                    id="intermediatePruning"
                                    value="Pruning"
                                />
                                <label className="ml-3 form-label" htmlFor="intermediatePruning">
                                    pruning
                </label>
                            </div>
                            <div>
                                <input
                                    onClick={this.translateKnotweed}
                                    type="checkbox"
                                    class="my-checkbox styled-checkbox"
                                    id="intermediateKnotweed"
                                    name="intermediateKnotweed"
                                    value="Japanese Knotweed removal"
                                />
                                <label className="ml-3 form-label japanese w-100" htmlFor="intermediateKnotweed">
                                    japanese knotweed removal
                </label>
                            </div>
                        </div>

                        <div className="row mt-3 w-100 d-flex justify-items-between">
                            <div className="col-3 col-md-6 text-center">
                                <span
                                    className="back-btn"
                                    onClick={this.takeMeBackFromOneOffForm}
                                >
                                    <u>back</u>
                                </span>
                            </div>
                            <div className="col-6 text-right">
                                <button
                                    className="next-btn"
                                    onClick={this.goToPersonalDataForm}
                                >
                                    next
                </button>
                            </div>
                        </div>
                    </form>
                    {/* one off services form finish */}

                    {/* personal data form start*/}
                    <form
                        className={
                            this.state.personalDataForm
                                ? "col-12 form d-flex flex-column align-items-center personal-data-form"
                                : "d-none"
                        }
                    >
                        <p className="p-tellUs text-center">
                            You have chosen <b>{this.state.whichPackage} </b>
                            <span className={choiceArr.length === 0 ? "d-none" : "d-inline"}>
                                and <b>{choiceArr.join(", ")}</b>
                            </span>
                        </p>
                        <p className="p-tellUs text-center">
                            Please give us some details, so we can plan the visit
            </p>
                        <input
                            required
                            onChange={(e) => this.setState({ name: e.target.value })}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            className="personal-data-input"
                        />
                        <input
                            required
                            onChange={(e) => this.setState({ email: e.target.value })}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="e-mail"
                            className="personal-data-input"
                        />
                        <input
                            required
                            onChange={(e) => this.setState({ tel: e.target.value })}
                            type="tel"
                            id="tel"
                            name="tel"
                            placeholder="Phone no"
                            className="personal-data-input"
                        />
                        <div className="input-group personal-data-input mb-lg-2">
                            <input
                                required
                                onChange={(e) => this.setState({ address: e.target.value })}
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Street"
                                className="w-50"
                            />
                            <input
                                required
                                onChange={(e) => this.setState({ postcode: e.target.value })}
                                type="text"
                                id="postcode"
                                name="postcode"
                                placeholder="Postcode"
                                className="w-50"
                            />
                        </div>
                        <input
                            required
                            onChange={(e) => this.setState({ date: e.target.value })}
                            type="date"
                            id="date"
                            name="date"
                            placeholder="Preffered date of service"
                            className="personal-data-input"
                        />
                        <textarea
                            onChange={(e) => this.setState({ notes: e.target.value })}
                            rows="5"
                            cols="23"
                            id="notes"
                            name="notes"
                            placeholder="Additional remarks"
                            className="personal-data-input"
                        />
                        <div className="row mt-3 w-100 d-flex justify-items-between">
                            <div className="col-3 col-md-6 text-center">
                                <span
                                    className="back-btn"
                                    onClick={this.takeMeBackFromPersonalDataForm}
                                >
                                    <u>back</u>
                                </span>
                            </div>
                            <div className="col-6 col-md-6 text-right">
                                <Button className="next-btn" onClick={this.handleFormSubmit}>
                                    send
                </Button>
                            </div>
                        </div>
                    </form>
                    {/* personal data form finish*/}

                    {/* only oneoff services form start */}
                    <form
                        className={
                            this.state.whichService === "One-Off Services" &&
                                this.state.onlyOneOffForm &&
                                !this.state.whichServiceForm
                                ? "col-12 form d-flex flex-column align-items-center"
                                : "d-none"
                        }
                    >
                        <p className="p-tellUs text-center">
                            You have chosen <b>{this.state.whichService}</b>
                        </p>
                        <p className="p-tellUs text-center">
                            Which of <b>one-off services</b> do you want to choose?
            </p>
                        <div className="col-12 col-md-5 col-lg-4">
                            <div>
                                <input
                                    onClick={this.translateCleanup}
                                    type="checkbox"
                                    id="intermediate-cleanup-only"
                                    name="cleanup"
                                    value="CleanUp"
                                    class="my-checkbox styled-checkbox"
                                />
                                <label className="ml-2 form-label" htmlFor="intermediate-cleanup-only">
                                    cleanup
                </label>
                            </div>
                            <div>
                                <input
                                    onClick={this.translateHedgeTrim}
                                    type="checkbox"
                                    id="intermediate-hedgeTrim-only"
                                    name="hedgeTrim"
                                    value="Hedge Trim"
                                    class="my-checkbox styled-checkbox"
                                />
                                <label className="ml-2 form-label" htmlFor="intermediate-hedgeTrim-only">
                                    hedge trim
                </label>
                            </div>
                            <div>
                                <input
                                    onClick={this.translateTreeSurgery}
                                    type="checkbox"
                                    id="intermediate-treeSurgery-only"
                                    name="treeSurgery"
                                    value="Tree Surgery"
                                    class="my-checkbox styled-checkbox"
                                />
                                <label className="ml-2 form-label" htmlFor="intermediate-treeSurgery-only">
                                    tree surgery
                </label>
                            </div>
                            <div>
                                <input
                                    onClick={this.translateLawnCare}
                                    type="checkbox"
                                    id="intermediate-lawnCare-only"
                                    name="lawnCare"
                                    value="Lawn care"
                                    class="my-checkbox styled-checkbox"
                                />
                                <label className="ml-2 form-label" htmlFor="intermediate-lawnCare-only">
                                    lawn care
                </label>
                            </div>
                            <div>
                                <input
                                    onClick={this.translatePlanting}
                                    type="checkbox"
                                    id="intermediate-planting-only"
                                    name="planting"
                                    value="Planting"
                                    class="my-checkbox styled-checkbox"
                                />
                                <label className="ml-2 form-label" htmlFor="intermediate-planting-only">
                                    planting
                </label>
                            </div>
                            <div>
                                <input
                                    onClick={this.translatePruning}
                                    type="checkbox"
                                    id="intermediate-pruning-only"
                                    name="pruning"
                                    value="Pruning"
                                    class="my-checkbox styled-checkbox"
                                />
                                <label className="ml-2 form-label" htmlFor="intermediate-pruning-only">
                                    pruning
                </label>
                            </div>
                            <div>
                                <input
                                    onClick={this.translateKnotweed}
                                    type="checkbox"
                                    id="intermediate-knotweed-only"
                                    name="knotweed"
                                    value="Japanese Knotweed removal"
                                    class="my-checkbox styled-checkbox"
                                />
                                <label className="ml-2 form-label w-100 japanese" htmlFor="intermediate-knotweed-only">
                                    japanese knotweed removal
                </label>
                            </div>
                        </div>
                        <div className="row mt-3 w-100 d-flex justify-items-between">
                            <div className="col-3 col-md-6 text-center">
                                <span
                                    className="back-btn"
                                    onClick={this.takeMeBackFromOnlyOneOffForm}
                                >
                                    <u>back</u>
                                </span>
                            </div>
                            <div className="col-6 col-md-6 text-right">
                                <button
                                    className="next-btn"
                                    onClick={this.goToOnlyOneOffPersonalDataForm}
                                >
                                    next
                </button>
                            </div>
                        </div>
                    </form>

                    <form
                        className={
                            this.state.onlyOneOffPersonalDataForm
                                ? "col-12 form d-flex flex-column align-items-center"
                                : "d-none"
                        }
                    >
                        <p className="p-tellUs text-center">
                            You have chosen <b>{this.state.whichService}</b>: <b>{choiceArr.join(", ")}</b>
                        </p>
                        <p className="p-tellUs text-center">
                            Please give us some details, so we can plan the visit
            </p>
                        <input
                            onChange={(e) => this.setState({ name: e.target.value })}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            className="personal-data-input"
                        />
                        <input
                            onChange={(e) => this.setState({ email: e.target.value })}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="e-mail"
                            className="personal-data-input"
                        />
                        <input
                            onChange={(e) => this.setState({ tel: e.target.value })}
                            type="tel"
                            id="tel"
                            name="tel"
                            placeholder="Phone no"
                            className="personal-data-input"
                        />
                        <div className="input-group personal-data-input mb-1">
                            <input
                                onChange={(e) => this.setState({ address: e.target.value })}
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Street"
                                className="w-50"
                            />
                            <input
                                onChange={(e) => this.setState({ postcode: e.target.value })}
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
                            className="personal-data-input"
                        />
                        <textarea
                            onChange={(e) => this.setState({ notes: e.target.value })}
                            rows="5"
                            cols="23"
                            id="notes"
                            name="notes"
                            placeholder="Additional remarks"
                            className="personal-data-input"
                        />
                        <div className="row mt-3 w-100 d-flex justify-items-between">
                            <div className="col-3 col-md-6 text-center">
                                <span
                                    className="back-btn"
                                    onClick={this.takeMeBackFromOneOffPersonalDataForm}
                                >
                                    <u>back</u>
                                </span>
                            </div>
                            <div className="col-6 col-md-6 text-right">
                                <Button className="next-btn" onClick={this.handleFormSubmit}>
                                    send
                </Button>
                            </div>
                        </div>
                    </form>
                    {/* only oneoff services form finish */}

                    {/* only commercial form start */}
                    <form
                        className={
                            this.state.whichService === "Commercial and public space" &&
                                this.state.onlyCommercialForm &&
                                !this.state.whichServiceForm
                                ? "col-12 form d-flex flex-column align-items-center"
                                : "d-none"
                        }
                    >
                        <p className="message-p text-center">
                            You have chosen <b>{this.state.whichService} care</b>.
            </p>
                        <p className="p-tellUs text-center">
                            Please give us some details, so we can plan the visit
            </p>
                        <input
                            onChange={(e) => this.setState({ name: e.target.value })}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            className="personal-data-input"
                        />
                        <input
                            onChange={(e) => this.setState({ email: e.target.value })}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="e-mail"
                            className="personal-data-input"
                        />
                        <input
                            onChange={(e) => this.setState({ tel: e.target.value })}
                            type="tel"
                            id="tel"
                            name="tel"
                            placeholder="Phone no"
                            className="personal-data-input"
                        />
                        <div className="input-group personal-data-input mb-1">
                            <input
                                onChange={(e) => this.setState({ address: e.target.value })}
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Street"
                                className="w-50"
                            />
                            <input
                                onChange={(e) => this.setState({ postcode: e.target.value })}
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
                            className="personal-data-input"
                        />
                        <textarea
                            onChange={(e) => this.setState({ notes: e.target.value })}
                            rows="5"
                            cols="23"
                            id="notes"
                            name="notes"
                            placeholder="Additional remarks"
                            className="personal-data-input"
                        />
                        <div className="row mt-3 w-100 d-flex justify-items-between">
                            <div className="col-3 col-md-6 text-center">
                                <span
                                    className="back-btn"
                                    onClick={this.takeMeBackFromOnlyPersonalDataForm}
                                >
                                    <u>back</u>
                                </span>
                            </div>
                            <div className="col-6 col-md-6 text-right">
                                <Button className="next-btn" onClick={this.handleFormSubmit}>
                                    send
                </Button>
                            </div>
                        </div>
                    </form>
                    {/* only commercial form finish */}

                    <div
                        className={
                            this.state.success === true
                                ? "col-12 form d-flex flex-column align-items-center"
                                : "d-none"
                        }
                    >
                        <p className="p-success">Thank you!</p>
                        <p>Your form was sent and we will contact you soon!</p>
                        <div>
                            <Button className="next-btn" onClick={this.oneMoreTime}>
                                book another visit
              </Button>
                        </div>
                    </div>

                    {/* popup sending data */}
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
            </>
        );
    }
}
