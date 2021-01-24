import React from "react";
import propTypes from "prop-types";
import StyledTask from "./task.style";
import Card from "components/card";
import Checkbox from "components/checkbox";

const Task = ({ task }) => {
  return (
    <Card className="task">
      <StyledTask>
        <div>
          <span className={"task-type " + task.type} />
          <span>{task.title}</span>
        </div>
        <Checkbox />
      </StyledTask>
    </Card>
  );
};

Task.propTypes = {
  task: propTypes.object
};

export default Task;
