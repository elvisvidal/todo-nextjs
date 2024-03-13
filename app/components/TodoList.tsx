import React from "react";
import DeleteButton from "@/components/DeleteButton";
import { Todo } from "@/lib/definitions";
import EditLink from "@/components/EditLink";
import ToggleButton from "@/components/ToggleButton";

const TodoList: React.FC<{
  todos: Todo[];
  onCompleted: (todoId: number | string) => void;
  onDeleteSuccess: (todoId: number | string) => void;
}> = ({ todos, onCompleted, onDeleteSuccess }) => {
  return (
    <div className="mt-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center gap-2 border-b border-gray-200 p-2"
        >
          <p className={`flex-1 ${todo.completed ? "line-through" : ""}`}>
            {todo.title}
          </p>
          <ToggleButton todo={todo} onCompleted={onCompleted} />
          <EditLink todoId={todo.id} />
          <DeleteButton todoId={todo.id} onDeleteSuccess={onDeleteSuccess} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
