import React, { FC, useContext, useEffect } from "react";
import { AppContext } from "./context";
import "./styles.css";
import Header from "components/header";
import TasksView from "components/tasksView";
import Footer from "components/footer";
import styled from "@emotion/styled";
import { getTasks } from "./helpers";

const App: FC = () => {
  const { updateTasksList } = useContext(AppContext);

  useEffect(() => {
    const tasks = getTasks();
    updateTasksList({ type: "set", tasks });
  }, []);

  return (
    <AppStyle className="App">
      <Header />
      <TasksView />
      <Footer />
    </AppStyle>
  );
};

const AppStyle = styled.div`
  position: relative;
  padding-bottom: 50px;
  overflow: auto;
  background: #f6f7fa;
  height: 100%;
  width: 100%;
`;

export default App;
