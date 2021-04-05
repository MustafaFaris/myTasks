import React from "react";
import StyledTextInput from "./textInput.style";

interface Props {
  label: string;
  name: string;
  required?: boolean;
  onChange?: () => void;
  error?: boolean;
  [key: string]: any;
}

const TextInput = React.forwardRef<HTMLInputElement, Props>(
  ({ label, name = "input", required, error, ...props }, ref) => {
    return (
      <StyledTextInput className={`text-input ${error ? "has-error" : ""}`}>
        <label htmlFor={name}>
          {label}
          {required && <span className="required">*</span>}
        </label>
        <input type="text" name={name} autoComplete="off" ref={ref} required={required} {...props} />
      </StyledTextInput>
    );
  }
);

export default TextInput;
