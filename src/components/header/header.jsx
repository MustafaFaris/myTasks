import React, { useContext } from "react";
import { AppContext } from "./../../context";
import StyledHeader from "./header.style";
import Toggle from "components/toggle";

const Header = () => {
  const { showDoneTasks, setDoneTasksVisibility } = useContext(AppContext);

  return (
    <StyledHeader>
      <span className="user">
        <span>M</span>
      </span>
      <div className="page-title">
        My Tasks
        <span className="toggle-done">
          Show done tasks <Toggle onChange={setDoneTasksVisibility} toggled={showDoneTasks} />
        </span>
      </div>
    </StyledHeader>
  );
};

export default Header;
