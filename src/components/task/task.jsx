import React, { useState } from "react";
import classNames from "classnames";
import propTypes from "prop-types";
import StyledTask from "./task.style";
import Card from "components/card";
import Checkbox from "components/checkbox";
import TrashIcon from "./trash.icon";
import { useDispatch } from "react-redux";
import PopupMenu from "components/popupMenu";
import Button from "components/button";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isDeleting, setDeleting] = useState(false);
  const classes = { task: classNames("task", { done: task.done }), taskType: classNames("task-type", task.type) };
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
                  <Button danger onClick={() => dispatch({ type: "remove", taskID: task.id })}>
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
            onChange={(isChecked) => dispatch({ type: "check", taskID: task.id, isChecked })}
            checked={task.done}
          />
        </div>
      </Card>
    </StyledTask>
  );
};

Task.propTypes = {
  task: propTypes.object,
  index: propTypes.number,
  onCheck: propTypes.func,
};

export default Task;
