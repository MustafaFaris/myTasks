import React from "react";
import propTypes from "prop-types";
import StyledFooter from "./footer.style";
import AddTask from "components/addTask";

const Footer = ({ setTaskList, addNewTask }) => {
  return (
    <StyledFooter>
      <AddTask setTaskList={setTaskList} addNewTask={addNewTask} />
    </StyledFooter>
  );
};

Footer.propTypes = {
  setTaskList: propTypes.func,
  addNewTask: propTypes.func
};

export default Footer;
