import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ToggleButton from "../ToggleButton"; // Adjust the import path as needed
import EventContext from "../../utils/EventContext";

// Mock global functions
global.fetch = vi.fn();
window.alert = vi.fn();

describe("ToggleButton", () => {
  const mockTodo = { id: 1, title: "Test Todo", completed: false };

  beforeEach(() => {
    fetch.mockClear();
    window.alert.mockClear();
  });

  it('emits "onCompleted" event on successful toggle', async () => {
    // Mock fetch to simulate a successful response
    fetch.mockResolvedValueOnce({
      ok: true,
    });

    const onCompletedMock = vi.fn();

    render(
      <EventContext.Provider value={{ onCompleted: onCompletedMock }}>
        <ToggleButton todo={mockTodo} />
      </EventContext.Provider>,
    );

    fireEvent.click(screen.getByRole("checkbox"));

    await vi.waitFor(() => {
      act(() => {
        expect(fetch).toHaveBeenCalledWith(
          `/api/todo/${mockTodo.id}`,
          expect.objectContaining({
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: mockTodo.title, completed: true }),
          }),
        );
        expect(onCompletedMock).toHaveBeenCalledWith(mockTodo.id);
      });
    });
  });

  it("shows an alert on toggle failure", async () => {
    // Mock fetch to simulate a failure response
    fetch.mockRejectedValueOnce(new Error("Failed to complete todo."));

    render(
      <EventContext.Provider value={{ onCompleted: vi.fn() }}>
        <ToggleButton todo={mockTodo} />
      </EventContext.Provider>,
    );

    fireEvent.click(screen.getByRole("checkbox"));

    await vi.waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        "Failed to complete todo. Please try again later.",
      );
    });
  });
});
