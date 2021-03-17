import React, { useState } from "react";
import classNames from "classnames";
import propTypes from "prop-types";
import StyledCheckbox from "./checkbox.style";
import CheckIcon from "./check.icon";

const Checkbox = ({ checked, defaultChecked, onChange = () => {} }) => {
  const [isChecked, setChecked] = useState(checked || defaultChecked);
  const onCheckChange = () => {
    setChecked(!isChecked);
    onChange(!isChecked);
  };
  const classes = classNames("checkbox", { checked: checked || isChecked });

  return (
    <StyledCheckbox className={classes} onClick={() => onCheckChange()}>
      <CheckIcon />
    </StyledCheckbox>
  );
};

Checkbox.propTypes = {
  defaultChecked: propTypes.bool,
  checked: propTypes.bool,
  onChange: propTypes.func
};

export default Checkbox;
