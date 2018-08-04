import React, { Component } from "react";
import { connect } from "react-redux";
import { submit } from "redux-form";

import TestForm from "../../components/TestForm";
import SubmitButton from "../../components/SubmitButton";
import Data from "../Data";

import formNames from "../../constants/formNames";
import "./styles.css";

class App extends Component {
  onSubmit = () => {
    this.props.dispatch(submit(formNames.testForm));
  };

  render() {
    return (
      <div className="App container">
        <TestForm />
        <SubmitButton onClick={this.onSubmit} />

        <div className="data-container">
          <Data />
        </div>
      </div>
    );
  }
}

export default connect()(App);
