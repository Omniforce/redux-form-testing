import React, { Fragment } from "react";
import { connect } from "react-redux";

const displayValue = value =>
  typeof value === typeof true ? (value ? "true" : "false") : value;

const Data = ({ values }) => {
  return (
    <Fragment>
      {Object.entries(values).map(([key, value]) => (
        <div key={key}>
          {key} : {displayValue(value)}
        </div>
      ))}
    </Fragment>
  );
};

const mapStateToProps = ({ form }) => {
  const values =
    form && form.TestForm && form.TestForm.values ? form.TestForm.values : {};

  return { values };
};

export default connect(mapStateToProps)(Data);
