import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navigation from "components/Navigation/Navigation";
import AboutUs from "components/AboutUs/AboutUs";
import PackagesBar from "components/Packages/PackagesBar";
import SeaStandardPackage from "components/Packages/SeaStandardPackage";
import SkyPremiumPackage from "components/Packages/SkyPremiumPackage";
import EarthEcoPackage from "components/Packages/EarthEcoPackage";
import OneOffServicesPackage from "components/Packages/OneOffServicesPackage";
import CommercialAndPublic from "components/CommercialAndPublic";
import DefaultForm from "components/Form/DefaultForm";
import Footer from "components/Footer/Footer";

import { NavHashLink } from 'react-router-hash-link';

export default function App() {
  
  
  
  return (
    <div className="App">
    <Router>
    {/* <div>
          <li>
            <NavHashLink to="/aboutUsId">about us</NavHashLink>
          </li>
          <li>
            <NavHashLink to="/standardpackage">standard package</NavHashLink>
          </li>
          <li>
            <NavHashLink to="/premiumpackage">premium package</NavHashLink>
          </li>
    </div> */}
      <Navigation />
      <AboutUs />
      <PackagesBar />
      <SeaStandardPackage />
      <SkyPremiumPackage />
      <EarthEcoPackage />
      <OneOffServicesPackage />
      <CommercialAndPublic />
      <DefaultForm />
      <Footer />

        <Switch>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/standardpackage">
            <SeaStandardPackage />
          </Route>
          <Route path="/premiumpackage">
            <SkyPremiumPackage />
          </Route>
          <Route path="/ecopackage">
            <EarthEcoPackage />
          </Route>
          <Route path="/oneoffservices">
            <OneOffServicesPackage />
          </Route>
          <Route path="/commercialpublic">
            <CommercialAndPublic />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

