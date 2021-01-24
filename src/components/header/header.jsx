import React from "react";
import StyledHeader from "./header.style";

const Header = () => {
  return (
    <StyledHeader>
      <span className="user">
        <span>M</span>
      </span>
      <div className="page-title">My tasks</div>
    </StyledHeader>
  );
};

export default Header;
