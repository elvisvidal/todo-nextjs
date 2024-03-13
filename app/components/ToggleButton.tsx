import { ToggleButtonProps } from "@/lib/definitions";
import React, { useState } from "react";

const ToggleButton: React.FC<ToggleButtonProps> = ({ todo, onCompleted }) => {
  const [completed, setCompleted] = useState(todo.completed);

  const handleToggle = async () => {
    try {
      const response = await fetch(`/api/todo/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: todo.title, completed: !completed }),
      });

      if (response.ok) {
        setCompleted(!completed);
        onCompleted(todo.id);
      } else {
        throw new Error("Failed to delete the todo.");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      console.error("Error deleting todo:", errorMessage);
    }
  };

  return (
    <label className="toggle inline-flex cursor-pointer items-center">
      <input
        onChange={handleToggle}
        type="checkbox"
        className="peer sr-only"
        defaultChecked={completed}
      />
      <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
    </label>
  );
};

export default ToggleButton;
