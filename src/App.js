import React, { useState } from "react";
import "./styles.css";
import Header from "components/header";
import TasksView from "components/tasksView";
import Footer from "components/footer";
import styled from "@emotion/styled";

const tasks = [
  {
    title: "Got to gym",
    type: "task"
  },
  {
    title: "Do the laundry",
    type: "event"
  },
  {
    title: "Potato Potato",
    type: "task"
  }
];

export default function App() {
  const [tasksList, setTaskList] = useState(tasks);

  const addNewTask = task => {
    setTaskList([...tasksList, task]);
  };

  return (
    <AppStyle className="App">
      <Header />
      <TasksView tasksList={tasksList} />
      <Footer addNewTask={addNewTask} />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  position: relative;
  padding-bottom: 50px;
  overflow: auto;
  background: #f6f7fa;
  height: 100%;
  width: 100%;
`;

// const Explore = () => {
//   return (
//     <span></span>
//   )
// };
