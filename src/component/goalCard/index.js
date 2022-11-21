import React from "react";
import {
  GoalCardContainer,
  GoalTitleContainer,
  GoalTitle,
  GoalSpan,
} from "./goalCard.style";

const GoalCard = ({ title, children}) => { 
  return (
    <GoalCardContainer>
      <GoalTitleContainer>
        <GoalTitle>{title}</GoalTitle>
      </GoalTitleContainer>
      <GoalSpan>{children}</GoalSpan>
    </GoalCardContainer>
  );
}

export default GoalCard