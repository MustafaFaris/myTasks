import React from "react";
import propTypes from "prop-types";
import StyledTasksView from "./tasksView.style";
import Task from "components/task";

const TasksView = ({ tasksList = [] }) => {
  return (
    <StyledTasksView>
      {tasksList.map((task, index) => (
        <Task key={"task-" + index} task={task} />
      ))}
    </StyledTasksView>
  );
};

TasksView.propTypes = {
  tasksList: propTypes.array
};

export default TasksView;
