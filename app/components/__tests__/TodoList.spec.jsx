import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

const testTodos = [
  { id: 1, title: "Learn Vitest", completed: false },
  { id: 2, title: "Practice React Testing", completed: true },
];

describe("TodoList", () => {
  it("renders the correct number of todo items", () => {
    const { container } = render(<TodoList todos={testTodos} />);
    const items = container.querySelectorAll(".todo-item");

    expect(items.length).toBe(testTodos.length);
  });

  it('applies "completed" class to completed todos', () => {
    const { container } = render(<TodoList todos={testTodos} />);
    const completedClass = container.querySelector(".completed");

    expect(completedClass).toBeInTheDocument();
    expect(completedClass.textContent).toContain("Practice React Testing");
  });

  // This test assumes you have a way to trigger the "handleCompleted" event in your component
  it('toggles todo completed status on "handleCompleted" event', async () => {
    const { getByText, rerender } = render(<TodoList todos={testTodos} />);

    // Simulate completing the first todo
    // For demonstration, let's pretend clicking the text does this.
    fireEvent.click(getByText("Learn Vitest"));

    // Assume "handleCompleted" updates the todo's "completed" status in the parent state
    // You'd likely need to mock this behavior or integrate it with a state management solution for testing
    testTodos[0].completed = true;

    // Rerender the component with the updated todos
    rerender(<TodoList todos={testTodos} />);

    const updatedItem = getByText("Learn Vitest");
    expect(updatedItem).toHaveClass("line-through"); // Verify the visual cue for completion
  });
});
