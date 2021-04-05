import React, { FC, useState } from "react";
import classNames from "classnames";
import StyledAddTask from "./addTask.style";
import AddMenu from "components/addMenu";
import CreateTaskMenu from "components/createTaskMenu";

const AddTask: FC = () => {
  const [isClicked, setClicked] = useState<boolean>(false);
  const [creating, setCreating] = useState<string | null>(null);

  const classes: string = classNames("add-task-button", { isClicked });

  return (
    <StyledAddTask>
      <button className={classes} onClick={() => setClicked(!isClicked)}>
        <span>+</span>
      </button>
      {isClicked && <AddMenu setClicked={setClicked} setCreating={setCreating} />}
      {creating && <CreateTaskMenu creating={creating} setCreating={setCreating} />}
    </StyledAddTask>
  );
};

export default AddTask;
