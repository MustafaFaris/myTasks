import React, { useContext } from "react";
import { AppContext } from "./../../context";
import propTypes from "prop-types";
import StyledTasksView from "./tasksView.style";
import Task from "components/task";

const TasksView = ({ tasksList = [] }) => {
  const { showDoneTasks } = useContext(AppContext);
  return (
    <StyledTasksView>
      {tasksList.length ? (
        tasksList.filter(task => !task.done || showDoneTasks).map(task => <Task key={"task-" + task.id} task={task} />)
      ) : (
        <p className="no-tasks">You don&apos;t have any tasks</p>
      )}
    </StyledTasksView>
  );
};

TasksView.propTypes = {
  tasksList: propTypes.array
};

export default TasksView;
