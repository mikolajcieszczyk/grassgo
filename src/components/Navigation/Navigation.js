import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars, faSortDown } from '@fortawesome/free-solid-svg-icons';


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



    toggleMenu() {
        this.setState({ showMenu: !this.state.showMenu });
    }

    toggleCollapseFirstLevel() {
        console.log('first lvl')
    }

    toggleCollapseSecondLevel() {
        console.log('second lvl')
    }

    render() {
        return (
            <>
                <nav className={this.state.showMenu ? 'sidebar active' : 'sidebar'}>
                    <div className="hide-sidebar-btn">
                        <div onClick={this.toggleMenu} className="dismiss">
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>

                    <ul className="list-unstyled">
                        <li>
                            <a className="scroll-link" href="#about-us"><i className="fas fa-home"></i>about us</a>
                        </li>
                        <li onClick={this.toggleCollapseFirstLevel}>
                            <span className="scroll-link"><i className="fas fa-cog"></i>packages <FontAwesomeIcon icon={faSortDown} /></span>
                            <ul className="nav-collapse__first-level">
                                <li>
                                    standard
                                </li>   
                                <li>
                                    premium
                                </li>
                                <li>
                                    <span className="scroll-link"><i className="fas fa-cog"></i>eco <FontAwesomeIcon icon={faSortDown} /></span>
                                    <ul className="nav-collapse__second-level">
                                        <li>basic</li>
                                        <li>medium</li>
                                        <li>advanced</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="scroll-link" href="#one-off"><i className="fas fa-user"></i>one-off</a>
                        </li>
                        <li>
                            <a className="scroll-link" href="#commercial"><i className="fas fa-pencil-alt"></i>commercial</a>
                        </li>
                        <li>
                            <a className="scroll-link" href="#contact"><i className="fas fa-envelope"></i>contact</a>
                        </li>
                    </ul>
                </nav>


                <div className="content">
                    <a onClick={this.toggleMenu} className="btn-customized open-menu" href="#">
                        <FontAwesomeIcon icon={faBars} className="fa-3x" />
                        <span className="nav__content-hamburger-signature">menu</span>
                    </a>
                </div>

            </>
        )
    }
}
