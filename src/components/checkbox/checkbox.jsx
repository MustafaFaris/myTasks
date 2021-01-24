import React, { useState } from "react";
import propTypes from "prop-types";
import StyledCheckbox from "./checkbox.style";

const Checkbox = ({ defaultChecked }) => {
  const [isChecked, setChecked] = useState(defaultChecked);
  return (
    <StyledCheckbox className={`checkbox ${isChecked ? "checked" : null}`} onClick={() => setChecked(!isChecked)} />
  );
};

Checkbox.propTypes = {
  defaultChecked: propTypes.bool
};

export default Checkbox;
