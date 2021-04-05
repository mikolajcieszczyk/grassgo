import React, { Component } from "react";
import DefaultForm from 'components/Form/Stories/DefaultForm';
import PackageFormStory from "components/Form/Stories/packages/StandardPackageFormStory";
import { Button } from "react-bootstrap";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      whichForm: "standardPackage",
    };
  }

  render() {
    return (
      <section className="form-section my-5">
        <DefaultForm />
      </section>
    );
  }
}