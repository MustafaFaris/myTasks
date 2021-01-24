import React from "react";
import propTypes from "prop-types";
import StyledAddMenu from "./addMenu.style";

const AddMenu = ({ setClicked, setCreating }) => {
  return (
    <StyledAddMenu>
      <ul>
        <li
          onClick={() => {
            setClicked(false);
            setCreating("task");
          }}
        >
          Add Task
        </li>
        <li
          onClick={() => {
            setClicked(false);
            setCreating("event");
          }}
        >
          Add Event
        </li>
      </ul>
      <div className="add-menu-blocker" onClick={() => setClicked(false)} />
    </StyledAddMenu>
  );
};

AddMenu.propTypes = {
  setClicked: propTypes.func,
  setCreating: propTypes.func
};

export default AddMenu;
