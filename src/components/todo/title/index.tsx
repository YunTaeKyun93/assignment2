import React from "react";
import { StyledTitle, StyledWrapper } from "./styles";

interface TodoTitleProps {
  title: string;
}

const TodoTitle: React.FC<TodoTitleProps> = ({ title }) => {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
    </StyledWrapper>
  );
};

export default TodoTitle;
