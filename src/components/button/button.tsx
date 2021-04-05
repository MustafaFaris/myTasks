import React, { FC } from "react";
import classNames from "classnames";
import StyledButton from "./button.style";

interface Props {
  onClick: () => void;
  danger?: boolean;
  [key: string]: any;
}

const Button: FC<Props> = ({ onClick, danger, children, ...props }) => {
  const classes = classNames("button", { danger: danger });
  return (
    <StyledButton onClick={onClick} className={classes} {...props} type="button">
      {children}
    </StyledButton>
  );
};

export default Button;
