import React from "react";
import DeleteButton from "./DeleteButton";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList: React.FC<{
  todos: Todo[];
  onDeleteSuccess: (todoId: number | string) => void;
}> = ({ todos, onDeleteSuccess }) => {
  return (
    <div className="mt-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center border-b border-gray-200 p-2"
        >
          <p className="flex-1">{todo.title}</p>
          <DeleteButton todoId={todo.id} onDeleteSuccess={onDeleteSuccess} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
