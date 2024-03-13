"use client";

import React, { useEffect, useState } from "react";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import { Todo } from "@/lib/definitions";
import EventContext from "@/utils/EventContext";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleOnDelete = (todoId: number | string) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleOnCompleted = (todoId: number | string) => {
    const newTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(newTodos);
  };

  const fetchTodos = async () => {
    try {
      const response = await fetch("/api/todo");
      if (!response.ok) throw new Error("Failed to load todos.");

      const data = await response.json();
      setTodos(data);
    } catch (error) {
      const errorObj = {
        type: "error",
        message: "Failed to load todos. Please try again later.",
      };
      alert(errorObj.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4">
      <h1 className="my-4 text-center text-2xl font-bold">Todo List</h1>
      <AddTodo onAdd={fetchTodos} />
      <EventContext.Provider
        value={{ onDelete: handleOnDelete, onCompleted: handleOnCompleted }}
      >
        <TodoList todos={todos} />
      </EventContext.Provider>
    </div>
  );
};

export default Home;
