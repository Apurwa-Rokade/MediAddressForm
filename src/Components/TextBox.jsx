import React from "react";
import { useField, ErrorMessage } from "formik";

function TextBox({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <div>
        <label htmlFor={field.name}>{label}</label>
        <input
          type="text"
          className={`${meta.touched && meta.error && "is-invalid"}`}
          {...field}
          {...props}
          autoComplete="off"
        />
      </div>
      <ErrorMessage component="div" name={field.name} className="error" />
      <br></br>
    </>
  );
}

export default TextBox;
