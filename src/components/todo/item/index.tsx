import React, { useState } from "react";
import {
  StyledContent,
  StyledContentWrapper,
  StyledItemWrapper,
  StyledTitle,
  StyledCheckbox,
  StyledContentText,
} from "./styles";
import { TodoT } from "../../../types/todo";

interface TodoItemProps {
  item: TodoT;
  onUpdate: (id: string, isChecked: boolean) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, onUpdate }) => {
  const [isChecked, setIsChecked] = useState(item.isChecked);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
    onUpdate(item.id, !isChecked);
  };

  const handleItemClick = () => {
    setIsChecked((prev) => !prev);
    onUpdate(item.id, !isChecked);
  };

  return (
    <StyledItemWrapper onClick={handleItemClick}>
      <StyledTitle>{item.title}</StyledTitle>
      <StyledContentWrapper>
        <StyledContent>
          <StyledCheckbox
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <StyledContentText isChecked={isChecked}>
            {item.content}
          </StyledContentText>
        </StyledContent>
        <StyledContentText isChecked={isChecked}>
          {new Date(item.createdAt).toLocaleString()}
        </StyledContentText>
      </StyledContentWrapper>
    </StyledItemWrapper>
  );
};

export default TodoItem;
