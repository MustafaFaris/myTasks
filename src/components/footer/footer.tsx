import React, { FC } from "react";
import StyledFooter from "./footer.style";
import AddTask from "components/addTask";

const Footer: FC = () => {
  return (
    <StyledFooter>
      <AddTask />
    </StyledFooter>
  );
};

export default Footer;
