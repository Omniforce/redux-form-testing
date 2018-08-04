import React from "react";
import { Form, Field } from "redux-form";
import RenderField from "./RenderField";

import enhance from "./enhance";
import "./styles.css";

const TestForm = ({ fields, validators, handleSubmit }) => {
  return (
    <div>
      <div className="h1">COOL FORM</div>
      <Form onSubmit={handleSubmit}>
        {fields.map(({ key, required, data }) => (
          <div key={key}>
            <Field
              component={RenderField}
              {...{ ...data, required }}
              validate={required ? validators : []}
            />
          </div>
        ))}
      </Form>
    </div>
  );
};

export default enhance(TestForm);
