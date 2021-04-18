import React, { FC, useContext } from "react";
import { AppContext } from "./../../context";
import StyledHeader from "./header.style";
import Toggle from "components/toggle";

const Header: FC = () => {
  const { showDoneTasks, setDoneTasksVisibility } = useContext(AppContext);

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
          Show done tasks <Toggle onChange={setDoneTasksVisibility} defaultChecked={showDoneTasks} />
        </span>
      </div>
    </StyledHeader>
  );
};

export default Header;
