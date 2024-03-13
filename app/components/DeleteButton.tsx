import { DeleteButtonProps } from "@/lib/definitions";
import EventContext from "@/utils/EventContext";
import React, { useContext } from "react";

const DeleteButton: React.FC<DeleteButtonProps> = ({ todoId }) => {
  const { onDelete } = useContext(EventContext);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/todo/${todoId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        onDelete(todoId);
      } else {
        throw new Error("Failed to delete the todo.");
      }
    } catch (error) {
      // If error is an instance of Error, display its message. Otherwise, display a generic error message.
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      console.error("Error deleting todo:", errorMessage);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
