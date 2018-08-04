import React from "react";
import "./styles.css";

const RenderField = ({
  input,
  label,
  type,
  required,
  meta: { touched, error }
}) => (
  <div>
    <div className="control">
      <label className={"col-3 " + (touched && error ? "hasError" : "")}>
        {label} <span>{required ? "*" : ""}</span>
      </label>
      <input className="col-9" {...input} type={type} />
    </div>
  </div>
);

export default RenderField;
