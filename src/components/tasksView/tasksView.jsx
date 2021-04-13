import React from "react";
import useStore from "./../../store";
import StyledTasksView from "./tasksView.style";
import Task from "components/task";

const TasksView = () => {
  const tasksList = useStore((state) => state.tasksList);
  const showDoneTasks = useStore((state) => state.showDoneTasks);

  return (
    <StyledTasksView className="tasks-view">
      {tasksList.length ? (
        tasksList
          .filter((task) => !task.done || showDoneTasks)
          .map((task) => <Task key={"task-" + task.id} task={task} />)
      ) : (
        <p className="no-tasks">You don&apos;t have any tasks</p>
      )}
    </StyledTasksView>
  );
};

export default TasksView;
