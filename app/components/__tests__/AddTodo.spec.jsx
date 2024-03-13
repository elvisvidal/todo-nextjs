import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import AddTodo from "../AddTodo";

// Mocks
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
  }),
);
window.alert = vi.fn();

describe("AddTodo in React", () => {
  afterEach(() => {
    global.fetch.mockClear();
    window.alert.mockClear();
  });

  it('emits an "onAdd" event with valid form submission', async () => {
    const { getByPlaceholderText } = render(<AddTodo />);
    const input = getByPlaceholderText("Add new todo");
    const form = input.closest("form");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.submit(form);

    await waitFor(() => {
      console.log(input.value);
      expect(input).toHaveValue("");
    });

    expect(fetch).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ title: "New Todo" }),
      }),
    );
  });

  it('does not emit "onAdd" with invalid input', async () => {
    const { getByPlaceholderText } = render(<AddTodo />);
    const input = getByPlaceholderText("Add new todo");
    const form = input.closest("form");

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.submit(form);

    await waitFor(() => {
      expect(fetch).not.toHaveBeenCalled();
    });
  });

  it("handles fetch failure gracefully", async () => {
    global.fetch.mockRejectedValue(new Error("Network error"));
    const { getByPlaceholderText } = render(<AddTodo />);
    const input = getByPlaceholderText("Add new todo");
    const form = input.closest("form");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.submit(form);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(expect.any(String));
    });
  });
});
