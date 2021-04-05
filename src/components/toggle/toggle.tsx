import React, { FC, useState } from "react";
import classNames from "classnames";
import StyledToggle from "./toggle.style";

interface Props {
  toggled?: boolean;
  defaultChecked?: boolean;
  onChange: (isToggled: boolean) => void;
}

const Toggle: FC<Props> = ({ toggled, defaultChecked, onChange }) => {
  const [isToggled, setToggled] = useState(toggled || defaultChecked);
  const onToggleChange = () => {
    setToggled(!isToggled);
    if (onChange) {
      onChange(!isToggled);
    }
  };
  const classes = classNames("toggle", { toggled: isToggled });

  return <StyledToggle className={classes} onClick={() => onToggleChange()} />;
};

export default Toggle;
