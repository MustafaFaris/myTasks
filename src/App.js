import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./styles.css";
import Header from "components/header";
import TasksView from "components/tasksView";
import Footer from "components/footer";
import styled from "@emotion/styled";
import { getTasks } from "./helpers";

export default function App() {
  const dispatch = useDispatch();

  useEffect(async () => {
    const tasks = getTasks();
    dispatch({ type: "set", tasks });
  }, []);

  return (
    <AppStyle className="App">
      <Header />
      <TasksView />
      <Footer />
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
