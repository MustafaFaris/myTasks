import React, { FC, useState } from "react";
import classNames from "classnames";
import StyledCheckbox from "./checkbox.style";
import CheckIcon from "./check.icon";

interface Props {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange: (isChecked: boolean) => void;
}

const Checkbox: FC<Props> = ({ checked, defaultChecked, onChange }) => {
  const [isChecked, setChecked] = useState<boolean>(checked || defaultChecked || false);
  const onCheckChange = () => {
    setChecked(!isChecked);
    if (onChange) onChange(!isChecked);
  };
  const classes = classNames("checkbox", { checked: checked || isChecked });

  return (
    <StyledCheckbox className={classes} onClick={() => onCheckChange()}>
      <CheckIcon />
    </StyledCheckbox>
  );
};

export default Checkbox;
