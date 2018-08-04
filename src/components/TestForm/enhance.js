import { reduxForm } from "redux-form";
import { compose, withProps } from "recompose";
import formNames from "../../constants/formNames";

const requiredValidation = value => {
  return value || typeof value === "boolean" || typeof value === "number"
    ? undefined
    : "Required";
};

const fields = [
  {
    key: "name",
    required: true,
    data: {
      name: "name",
      type: "text",
      label: "Name"
    }
  },
  {
    key: "age",
    required: true,
    data: {
      name: "age",
      type: "number",
      label: "Age"
    }
  },
  {
    key: "employed",
    required: false,
    data: {
      name: "employed",
      type: "checkbox",
      label: "Currently Employed?"
    }
  }
];

const onSubmit = values => {
  console.log("SUBMITTING FORM!");
  console.log(values);
};

export default compose(
  withProps({ fields, validators: [requiredValidation] }),
  reduxForm({ form: formNames.testForm, onSubmit })
);
