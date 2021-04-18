import React, { FC, useContext, useState } from "react";
import classNames from "classnames";
import StyledTask from "./task.style";
import Card from "components/card";
import Checkbox from "components/checkbox";
import TrashIcon from "./trash.icon";
import { AppContext } from "./../../context";
import PopupMenu from "components/popupMenu";
import Button from "components/button";

interface Props {
  task: Task;
}

const Task: FC<Props> = ({ task }) => {
  const { updateTasksList } = useContext(AppContext);
  const [isDeleting, setDeleting] = useState<boolean>(false);
  const classes: { task: string; taskType: string } = {
    task: classNames("task", { done: task.done }),
    taskType: classNames("task-type", task.type),
  };
  return (
    <StyledTask className={classes.task}>
      <Card className="task-card">
        <div className="task-content">
          <span className={classes.taskType} />
          <span>{task.title}</span>
        </div>
        <div className="task-controls">
          <button className="remove-btn" onClick={() => setDeleting(true)}>
            <TrashIcon />
          </button>
          {isDeleting && (
            <PopupMenu
              title={`Deleting ${task.type}`}
              actionButtons={
                <>
                  <Button onClick={() => setDeleting(false)}>Cancel</Button>
                  <Button danger onClick={() => updateTasksList({ type: "remove", taskID: task.id })}>
                    Delete
                  </Button>
                </>
              }
              onClose={() => setDeleting(false)}
            >
              You are about to delete this {task.type}, are you sure?
            </PopupMenu>
          )}
          <Checkbox
            onChange={(isChecked) => updateTasksList({ type: "check", taskID: task.id, isChecked })}
            checked={task.done}
          />
        </div>
      </Card>
    </StyledTask>
  );
};

export default Task;
