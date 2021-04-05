import React, { FC } from "react";
import StyledCard from "./card.style";

interface Props {
  className: string;
}

const Card: FC<Props> = ({ className, children }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

export default Card;
