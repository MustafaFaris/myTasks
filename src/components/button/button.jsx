import React from "react";
import propTypes from "prop-types";
import classNames from "classnames";
import StyledButton from "./button.style";

const Button = ({ children, danger, ...props }) => {
  const classes = classNames("button", { danger: danger });
  return (
    <StyledButton className={classes} {...props} type="button">
      {children}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  danger: propTypes.bool
};
