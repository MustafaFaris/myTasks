import React, { FC, useContext } from "react";
import { AppContext } from "./../../context";
import StyledTasksView from "./tasksView.style";
import Task from "components/task";

const TasksView: FC = () => {
  const { tasksList, showDoneTasks } = useContext(AppContext);
  return (
    <StyledTasksView className="tasks-view">
      {tasksList.length ? (
        tasksList
          .filter((task: Task): Task[] => !task.done || showDoneTasks)
          .map((task: Task) => <Task key={"task-" + task.id} task={task} />)
      ) : (
        <p className="no-tasks">You don&apos;t have any tasks</p>
      )}
    </StyledTasksView>
  );
};

export default TasksView;
