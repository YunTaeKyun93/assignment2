import React, { useEffect, useState } from "react";
import { StyledWrapper } from "./styles";
import TodoTitle from "./title";
import TodoList from "./list";
import TodoInput from "./input";
import axios from "axios";
import { TodoT } from "../../types/todo";

const Todo = () => {
  const [pageTitle, setPageTitle] = useState("제목이래영");
  const [content, setContent] = useState<string>("");
  const [todos, setTodos] = useState<TodoT[]>([]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/items`, {
        content,
      });
      setContent("");
      alert("생성완료 >_0");
      readTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const handelUpdaetTodo = async (id: string, isChecked: boolean) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/items/${id}`, {
        isChecked,
      });
      alert("할일 했구나");
      readTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const readTodos = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/items`
      );

      setTodos(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    readTodos();
  }, []);

  return (
    <StyledWrapper>
      <TodoTitle title={pageTitle} />
      <TodoList todos={todos} onUpdate={handelUpdaetTodo} />
      <TodoInput
        handleSubmit={handleSubmit}
        content={content}
        setContent={setContent}
      />
    </StyledWrapper>
  );
};

export default Todo;
