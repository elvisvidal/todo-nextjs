import React from "react";
import DeleteButton from "@/components/DeleteButton";
import { Todo } from "@/lib/definitions";
import EditLink from "@/components/EditLink";

const TodoList: React.FC<{
  todos: Todo[];
  onDeleteSuccess: (todoId: number | string) => void;
}> = ({ todos, onDeleteSuccess }) => {
  return (
    <div className="mt-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center gap-2 border-b border-gray-200 p-2"
        >
          <p className="flex-1">{todo.title}</p>
          <EditLink todoId={todo.id} />
          <DeleteButton todoId={todo.id} onDeleteSuccess={onDeleteSuccess} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
