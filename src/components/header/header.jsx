import React from "react";
import useStore from "./../../store";
import StyledHeader from "./header.style";
import Toggle from "components/toggle";

const Header = () => {
  const showDoneTasks = useStore((state) => state.showDoneTasks);
  const setDoneTasksVisibility = useStore((state) => state.setDoneTasksVisibility);

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
          Show done tasks <Toggle onChange={setDoneTasksVisibility} toggled={showDoneTasks} />
        </span>
      </div>
    </StyledHeader>
  );
};

export default Header;
