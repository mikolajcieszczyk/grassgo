import React, { useEffect, useState, useRef, Component } from "react";
import { useWindowScroll } from "react-use";

import AboutUs from "components/AboutUs/AboutUs";
import PackagesBar from "components/Packages/PackagesBar";
import SeaStandardPackage from "components/Packages/SeaStandardPackage";
import SkyPremiumPackage from "components/Packages/SkyPremiumPackage";
import EarthEcoPackage from "components/Packages/EarthEcoPackage";
import OneOffServicesPackage from "components/Packages/OneOffServicesPackage";
import CommercialAndPublic from "components/CommercialAndPublic";
import DefaultForm from "components/Form/DefaultForm";
import Footer from "components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSortDown,
  faSortUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ScrollIndicator = () => {
  const { x, y } = useWindowScroll();
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolled((y / height) * 100);
  }, [y]);
};

export default function App() {
  const [showNav, setShowNav] = useState(true);
  const [showPackagesNav, setShowPackagesNav] = useState(false);
  const [showEcoPackagesNav, setShowEcoPackagesNav] = useState(false);

  const aboutUsSection = useRef(null);
  const standardPackageSection = useRef(null);
  const premiumPackageSection = useRef(null);
  const ecoPackageSection = useRef(null);
  const oneOffSection = useRef(null);
  const commercialSection = useRef(null);
  const contactSection = useRef(null);

  const goToAboutUsSection = () =>
    window.scrollTo({
      top: aboutUsSection.current.offsetTop,
      behavior: "smooth",
    });

  const goToStandardPackageSection = () =>
    window.scrollTo({
      top: standardPackageSection.current.offsetTop,
      behavior: "smooth",
    });

  const goToPremiumPackageSection = () =>
    window.scrollTo({
      top: premiumPackageSection.current.offsetTop,
      behavior: "smooth",
    });

  const goToEcoPackageSection = () =>
    window.scrollTo({
      top: ecoPackageSection.current.offsetTop,
      behavior: "smooth",
    });

  const goToOneOffSection = () =>
    window.scrollTo({
      top: oneOffSection.current.offsetTop,
      behavior: "smooth",
    });

  const goToCommercialSection = () =>
    window.scrollTo({
      top: commercialSection.current.offsetTop,
      behavior: "smooth",
    });

  const goToContactSection = () =>
    window.scrollTo({
      top: contactSection.current.offsetTop,
      behavior: "smooth",
    });

  return (
    <div className="App">
      <header>
        <div
          className="open-nav position-fixed ml-3 pt-4"
          onClick={() => setShowNav(!showNav)}
        >
          <FontAwesomeIcon icon={faBars} className="fa-3x" />
          <span className="nav__content-hamburger-signature">menu</span>
        </div>
        {showNav && (
          <nav className="d-flex flex-column justify-content-between">
            <div className="container w-75 d-flex flex-column align-items-start mt-4">
              <div
                className="close-nav mb-3"
                onClick={() => setShowNav(!showNav)}
              >
                x
              </div>
              <div className="mt-5 mb-2" onClick={goToAboutUsSection}>
                about us
              </div>
              <div className="my-2">
                <span onClick={() => setShowPackagesNav(!showPackagesNav)}>
                  packages{" "}
                  <FontAwesomeIcon
                    icon={showPackagesNav ? faSortDown : faSortUp}
                    className="ml-3"
                  />
                </span>
                {showPackagesNav && (
                  <ul className="container mb-0 font-weight-normal">
                    <li className="my-2" onClick={goToStandardPackageSection}>
                      standard
                    </li>
                    <li className="my-2" onClick={goToPremiumPackageSection}>
                      premium
                    </li>
                    <li className="mt-2">
                      <span
                        onClick={() =>
                          setShowEcoPackagesNav(!showEcoPackagesNav)
                        }
                      >
                        eco{" "}
                        <FontAwesomeIcon
                          icon={showEcoPackagesNav ? faSortDown : faSortUp}
                          className="ml-3"
                        />
                      </span>
                    </li>
                    {showEcoPackagesNav && (
                      <ul className="container">
                        <li className="my-2" onClick={goToEcoPackageSection}>
                          basic
                        </li>
                        <li className="my-2" onClick={goToEcoPackageSection}>
                          medium
                        </li>
                        <li className="mt-2" onClick={goToEcoPackageSection}>
                          advanced
                        </li>
                      </ul>
                    )}
                  </ul>
                )}
              </div>
              <div className="my-2" onClick={goToOneOffSection}>
                one-off
              </div>
              <div className="my-2" onClick={goToCommercialSection}>
                commercial
              </div>
              <div className="my-2" onClick={goToContactSection}>
                contact
              </div>
            </div>
            <div className="container w-75 mb-5 nav__footer">
              <div className="nav-footer-branding mb-3" />
              <div className="nav__footer--social">
                <a
                  href="https://instagram.com/northhillgardens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mr-2"
                >
                  <FontAwesomeIcon icon={faInstagram} className="fa mx-1" />
                </a>
                <a
                  href="https://twitter.com/northhilldesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mr-2"
                >
                  <FontAwesomeIcon icon={faTwitter} className="fa mx-1" />
                </a>
                <a
                  href="https://facebook.com/northhillgardens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FontAwesomeIcon icon={faFacebook} className="fa mx-1" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </header>
      <span ref={aboutUsSection}></span>
      <AboutUs />
      <PackagesBar />
      <span ref={standardPackageSection}></span>
      <SeaStandardPackage />
      <span ref={premiumPackageSection}></span>
      <SkyPremiumPackage />
      <span ref={ecoPackageSection}></span>
      <EarthEcoPackage />
      <span ref={oneOffSection}></span>
      <OneOffServicesPackage />
      <span ref={commercialSection}></span>
      <CommercialAndPublic />
      <span ref={contactSection}></span>
      <DefaultForm />
      <Footer />
    </div>
  );
}
