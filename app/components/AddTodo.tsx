import React, { useEffect, useState } from "react";

const AddTodo: React.FC<{ onAdd: () => void }> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      const response = await fetch("/api/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      if (!response.ok) throw new Error("Failed to add todo.");

      setTitle("");
      onAdd();
    } catch (error) {
      const errorObj = {
        type: "error",
        message: "Failed to add todo. Please try again later.",
      };
      alert(errorObj.message);
    }
  };

  useEffect(() => {
    setIsFormValid(title.trim() !== "");
  }, [title]);

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        className="new-todo-input flex-1 rounded border border-gray-300 p-2 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add new todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name="title"
      />
      <button
        type="submit"
        className={`rounded px-4 py-2 text-white shadow
        ${
          isFormValid
            ? "bg-blue-500 hover:bg-blue-700"
            : "cursor-not-allowed bg-gray-500"
        }
        `}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
