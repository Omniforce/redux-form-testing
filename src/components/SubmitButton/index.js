import React from "react";
import "./styles.css";

const SubmitButton = ({ onClick }) => {
  return (
    <button className="btn btn-block btn-primary" onClick={onClick}>
      Submit
    </button>
  );
};

export default SubmitButton;
