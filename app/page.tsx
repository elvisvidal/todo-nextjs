"use client";

import React, { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onDeleteSuccess = (todoId: number | string) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const fetchTodos = async () => {
    const res = await fetch("/api/todo");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4">
      <h1 className="my-4 text-center text-2xl font-bold">Todo List</h1>
      <AddTodo onAdd={fetchTodos} />
      <TodoList todos={todos} onDeleteSuccess={onDeleteSuccess} />
    </div>
  );
};

export default Home;
