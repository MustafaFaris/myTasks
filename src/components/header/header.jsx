import React from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledHeader from "./header.style";
import Toggle from "components/toggle";

const Header = () => {
  const showDoneTasks = useSelector((state) => state.showDoneTasks);
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <a href="https://github.com/MustafaFaris" target="_blank" rel="noreferrer">
        <span className="user">
          <span>M</span>
        </span>
      </a>
      <div className="page-title">
        My Tasks
        <span className="toggle-done">
          Show done tasks{" "}
          <Toggle
            onChange={(isToggled) => dispatch({ type: "setDoneTasksVisibility", isToggled })}
            toggled={showDoneTasks}
          />
        </span>
      </div>
    </StyledHeader>
  );
};

export default Header;
