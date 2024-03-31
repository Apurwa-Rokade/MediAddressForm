import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import TextBox from "./TextBox";
import DropDown from "./DropDown";
import { ValidateFR } from "./Schema/ValidateFR";
import { ValidateGB } from "./Schema/ValidateGB";

function Address({ Parentvalidation, name }) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const genrateValidationSchema = (country) => {
    let validationSchema;

    switch (country) {
      case "GB":
        validationSchema = ValidateGB;
        break;
      case "FR":
        validationSchema = ValidateFR;
        break;
      default:
        validationSchema = Parentvalidation;
    }
    return validationSchema;
  };

  return (
    <>
      <Formik
        initialValues={{ line1: "", line2: "", country: "", postcode: "" }}
        validationSchema={() => genrateValidationSchema(selectedCountry)}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <div className="main">
            <Form className="form-container">
              <TextBox label="Line 1" name="line1" type="text" />
              {name !== "work" && (
                <TextBox label="Line 2" name="line2" type="text" />
              )}

              <DropDown
                label="Country"
                name="country"
                type="text"
                onCountryChange={setSelectedCountry}
              />
              <TextBox label="Postcode" name="postcode" type="text" />
              <button type="submit">Submit</button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Address;
