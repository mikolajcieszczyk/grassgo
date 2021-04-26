import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      collapseFirstLevel: false,
      collapseSecondLevel: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleCollapseFirstLevel = this.toggleCollapseFirstLevel.bind(this);
    this.toggleCollapseSecondLevel = this.toggleCollapseSecondLevel.bind(this);
  }

  toggleMenu(e) {
    e.preventDefault();
    this.setState({ showMenu: !this.state.showMenu });
  }

  toggleCollapseFirstLevel() {
    this.setState({ collapseFirstLevel: !this.state.collapseFirstLevel });
  }

  toggleCollapseSecondLevel() {
    this.setState({ collapseSecondLevel: !this.state.collapseSecondLevel });
  }

  render() {
    return (
      <header>
        <nav className={this.state.showMenu ? "sidebar active" : "sidebar"}>
          <div className="hide-sidebar-btn">
            <div onClick={this.toggleMenu} className="dismiss">
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>

          <ul className="list-unstyled my-0 py-0">
            <li>
              <a href="#about-us">about us</a>
            </li>
            <li>
              <span onClick={this.toggleCollapseFirstLevel}>
                packages
                <FontAwesomeIcon
                  icon={
                    this.state.collapseFirstLevel
                      ? faSortDown
                      : faSortUp
                    }
                  className="ml-2"
                />
              </span>
              <ul
                className={
                  this.state.collapseFirstLevel
                    ? "nav-collapse__first-level"
                    : "collapse-inactive"
                }
              >
                <li className="ml-5">standard</li>
                <li className="ml-5">premium</li>
                <li>
                  <span
                    className="ml-5 p-0 d-inline"
                    onClick={this.toggleCollapseSecondLevel}
                  >
                    eco
                    <FontAwesomeIcon
                      icon={
                        this.state.collapseSecondLevel
                          ? faSortDown
                          : faSortUp
                      }
                      className="ml-3"
                    />
                  </span>
                  <ul
                    className={
                      this.state.collapseSecondLevel
                        ? "nav-collapse__second-level"
                        : "collapse-inactive"
                    }
                  >
                    <li className="ml-5 pl-4">basic</li>
                    <li className="ml-5 pl-4">medium</li>
                    <li className="ml-5 pl-4">advanced</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#one-off">
                <i className="fas fa-user"></i>one-off
              </a>
            </li>
            <li>
              <a href="#commercial">
                <i className="fas fa-pencil-alt"></i>commercial
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="fas fa-envelope"></i>contact
              </a>
            </li>
          </ul>

          <div className="nav__footer ml-2 d-flex flex-column">
            <div className="nav-footer-branding" />

            <div className="nav__footer--social mt-4">
              <FontAwesomeIcon icon={faInstagram} className="fa mx-1" />
              <FontAwesomeIcon icon={faTwitter} className="fa mx-1" />
              <FontAwesomeIcon icon={faFacebook} className="fa mx-1" />
            </div>
          </div>
        </nav>

        <div className="content">
          <a
            onClick={this.toggleMenu}
            className="btn-customized open-menu"
            href="#"
          >
            <FontAwesomeIcon icon={faBars} className="fa-3x" />
            <span className="nav__content-hamburger-signature">menu</span>
          </a>
        </div>
      </header>
    );
  }
}
