import React from "react";
import StyledButton from "./button.style";

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props} type="button">
      {children}
    </StyledButton>
  );
};

export default Button;
