import React from "react";
import propTypes from "prop-types";
import StyledTextInput from "./textInput.style";

const TextInput = React.forwardRef(({ label, name = "input", required, error, ...props }, ref) => {
  return (
    <StyledTextInput className={`text-input ${error ? "has-error" : ""}`}>
      <label htmlFor={name}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input type="text" name={name} autoComplete="off" ref={ref} required={required} {...props} />
    </StyledTextInput>
  );
});

TextInput.propTypes = {
  label: propTypes.string,
  name: propTypes.string,
  required: propTypes.bool,
  error: propTypes.bool
};

export default TextInput;
