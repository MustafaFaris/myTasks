import React, { useState } from "react";
import propTypes from "prop-types";
import StyledAddTask from "./addTask.style";
import AddMenu from "components/addMenu";
import CreateTaskMenu from "components/createTaskMenu";

const AddTask = () => {
  const [isClicked, setClicked] = useState(false);
  const [creating, setCreating] = useState(null);

  return (
    <StyledAddTask>
      <button className={`add-task-button ${isClicked ? "isClicked" : ""}`} onClick={() => setClicked(!isClicked)}>
        <span>+</span>
      </button>
      {isClicked && <AddMenu setClicked={setClicked} setCreating={setCreating} />}
      {creating && <CreateTaskMenu creating={creating} setCreating={setCreating} />}
    </StyledAddTask>
  );
};

AddTask.propTypes = {
  addNewTask: propTypes.func
};

export default AddTask;
