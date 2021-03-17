import React, { useState } from "react";
import classNames from "classnames";
import propTypes from "prop-types";
import StyledToggle from "./toggle.style";

const Toggle = ({ toggled, defaultChecked, onChange = () => {} }) => {
  const [isToggled, setToggled] = useState(toggled || defaultChecked);
  const onToggleChange = () => {
    setToggled(!isToggled);
    onChange(!isToggled);
  };
  const classes = classNames("toggle", { toggled: isToggled });

  return <StyledToggle className={classes} onClick={() => onToggleChange()} />;
};

Toggle.propTypes = {
  defaultChecked: propTypes.bool,
  toggled: propTypes.bool,
  onChange: propTypes.func
};

export default Toggle;
