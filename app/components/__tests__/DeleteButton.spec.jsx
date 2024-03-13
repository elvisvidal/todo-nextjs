import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import DeleteButton from "../DeleteButton"; // Adjust the import path
import EventContext from "../../utils/EventContext";

// Mocks
window.alert = vi.fn();
const todoId = 123;

describe("DeleteButton in React", () => {
  // Reset mocks after each test
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("emits an event on successful deletion", async () => {
    // Mock fetch to resolve successfully
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
      }),
    );

    const onDeleteMock = vi.fn(); // Mock onDelete event handler
    const { getByRole } = render(
      <EventContext.Provider value={{ onDelete: onDeleteMock }}>
        <DeleteButton todoId={todoId} />
      </EventContext.Provider>,
    );

    fireEvent.click(getByRole("button"));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(`/api/todo/${todoId}`, {
        method: "DELETE",
      });
    });

    expect(onDeleteMock).toHaveBeenCalledWith(todoId);
  });

  it("shows an alert on deletion failure", async () => {
    // Mock fetch to reject
    global.fetch = vi.fn(() => Promise.reject(new Error("Failed")));

    const { getByRole } = render(
      <EventContext.Provider value={{ onDelete: vi.fn() }}>
        <DeleteButton todoId={todoId} />
      </EventContext.Provider>,
    );

    fireEvent.click(getByRole("button"));

    await waitFor(() => {
      // Check if alert was called correctly
      expect(window.alert).toHaveBeenCalledWith(
        "Failed to delete todo. Please try again later.",
      );
    });
  });
});
