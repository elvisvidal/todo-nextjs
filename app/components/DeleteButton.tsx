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
      if (!response.ok) throw new Error("Failed to delete todo.");

      onDelete(todoId);
    } catch (error) {
      const errorObj = {
        type: "error",
        message: "Failed to delete todo. Please try again later.",
      };
      alert(errorObj.message);
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
