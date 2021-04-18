import React from "react";
import propTypes from "prop-types";
import StyledAddMenu from "./addMenu.style";

const AddMenu = ({ setClicked, setCreating }) => {
  return (
    <StyledAddMenu className="add-task-menu">
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

AddMenu.propTypes = {
  setClicked: propTypes.func,
  setCreating: propTypes.func,
};

export default AddMenu;
