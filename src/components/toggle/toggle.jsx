import React, { useState } from "react";
import classNames from "classnames";
import propTypes from "prop-types";
import StyledToggle from "./toggle.style";

const Toggle = ({ toggled, defaultChecked, onChange = () => {} }) => {
  const [isToggled, setToggled] = useState(toggled || defaultChecked || false);
  const onToggleChange = () => {
    setToggled(toggled !== undefined ? !toggled : !isToggled);
    onChange(toggled !== undefined ? !toggled : !isToggled);
  };
  const classes = classNames("toggle", { toggled: toggled !== undefined ? toggled : isToggled });

  return <StyledToggle className={classes} onClick={() => onToggleChange()} />;
};

Toggle.propTypes = {
  defaultChecked: propTypes.bool,
  toggled: propTypes.bool,
  onChange: propTypes.func,
};

export default Toggle;
