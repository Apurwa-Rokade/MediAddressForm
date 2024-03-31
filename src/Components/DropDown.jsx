import React from "react";
import { useField, ErrorMessage } from "formik";

function DropDown({ label, onCountryChange, ...props }) {
  const [field, meta, helpers] = useField(props);

  const handleChange = (e) => {
    helpers.setValue(e.target.value); // Set the value using Formik helpers
    onCountryChange(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor={field.name}>{label}</label>
        <select id={field.name} {...field} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="GB">Great Britain</option>
          <option value="FR">France</option>
        </select>
      </div>
      <ErrorMessage component="div" name={field.name} className="error" />
    </>
  );
}

export default DropDown;
