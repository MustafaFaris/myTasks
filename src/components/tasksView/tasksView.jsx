import React, { useContext } from "react";
import { AppContext } from "./../../context";
import StyledTasksView from "./tasksView.style";
import Task from "components/task";

const TasksView = () => {
  const { tasksList, showDoneTasks } = useContext(AppContext);
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

export default TasksView;
