"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EditTodoPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      if (!id) return;

      try {
        const response = await fetch(`/api/todo/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch the todo item");
        }
        const data = await response.json();
        setTitle(data.title);
        setCompleted(data.completed);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodo();
  }, [id]);

  useEffect(() => {
    setIsFormValid(title.trim() !== "");
  }, [title]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    await fetch(`/api/todo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, completed }),
    });
    setTitle("");
    router.push("/");
  };

  return (
    <div className="mx-auto max-w-4xl px-4">
      <h1 className="my-4 text-center text-2xl font-bold">
        Editing Todo id: {id}
      </h1>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          className="flex-1 rounded border border-gray-300 p-2 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
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
    </div>
  );
};

export default EditTodoPage;
