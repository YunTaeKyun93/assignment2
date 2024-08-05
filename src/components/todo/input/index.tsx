import React from "react";
import {
  StyledAddButton,
  StyledForm,
  StyledTextArea,
  StyledWrapper,
} from "./styles";

interface TodoInputProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const TodoInput: React.FC<TodoInputProps> = ({
  handleSubmit,
  content,
  setContent,
}) => {
  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="할 일"
        />
        <StyledAddButton type="submit">Add</StyledAddButton>
      </StyledForm>
    </StyledWrapper>
  );
};

export default TodoInput;
