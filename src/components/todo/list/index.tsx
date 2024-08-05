import React from "react";
import { StyledTextArea, StyledWrapper } from "./styles";
import { TodoT } from "../../../types/todo";
import TodoItem from "../item";

interface TodoListProps {
  todos: TodoT[];
  onUpdate: (id: string, isChecked: boolean) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onUpdate }) => {
  return (
    <StyledWrapper>
      {todos.map((todo) => (
        <TodoItem item={todo} key={todo.id} onUpdate={onUpdate} />
      ))}
    </StyledWrapper>
  );
};

export default TodoList;
