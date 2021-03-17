import React, { useContext, useEffect } from "react";
import { AppContext } from "./context";
import "./styles.css";
import Header from "components/header";
import TasksView from "components/tasksView";
import Footer from "components/footer";
import styled from "@emotion/styled";
import { getTasks } from "./helpers";

export default function App() {
  const { setTaskList, tasksList, addNewTask } = useContext(AppContext);

  useEffect(async () => {
    const tasks = getTasks();
    setTaskList(tasks);
  }, []);

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
