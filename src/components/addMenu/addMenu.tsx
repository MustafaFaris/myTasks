import React, { FC } from "react";
import StyledAddMenu from "./addMenu.style";

interface Props {
  setClicked: (isClicked: boolean) => void;
  setCreating: (creating: "task" | "event") => void;
}

const AddMenu: FC<Props> = ({ setClicked, setCreating }) => {
  return (
    <StyledAddMenu>
      <ul>
        <li
          onClick={() => {
            setClicked(false);
            setCreating("task");
          }}
        >
          Add a new Task
        </li>
        <li
          onClick={() => {
            setClicked(false);
            setCreating("event");
          }}
        >
          Add a new Event
        </li>
      </ul>
      <div className="add-menu-blocker" onClick={() => setClicked(false)} />
    </StyledAddMenu>
  );
};

export default AddMenu;
