import React from "react";
import propTypes from "prop-types";
import StyledCard from "./card.style";

const Card = ({ className, children }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

Card.propTypes = {
  className: propTypes.string,
  children: propTypes.any,
};

export default Card;
