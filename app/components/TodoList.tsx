import React from "react";
import DeleteButton from "@/components/DeleteButton";
import { Todo } from "@/lib/definitions";
import EditLink from "@/components/EditLink";
import ToggleButton from "@/components/ToggleButton";

const TodoList: React.FC<{
  todos: Todo[];
}> = ({ todos }) => {
  return (
    <div className="todo-list mt-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item flex items-center gap-2 border-b border-gray-200 p-2
          ${todo.completed ? "completed" : ""}`}
        >
          <p className={`flex-1 ${todo.completed ? "line-through" : ""}`}>
            {todo.title}
          </p>
          <ToggleButton todo={todo} />
          <EditLink todoId={todo.id} />
          <DeleteButton todoId={todo.id} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
