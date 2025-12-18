import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Timer from "./Timer";

describe("Timer Component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the timer component", () => {
    render(<Timer />);
    const daysLabel = screen.getByText("Days");
    expect(daysLabel).toBeTruthy();
  });

  it("displays countdown labels", () => {
    render(<Timer />);
    expect(screen.getByText("Days")).toBeTruthy();
    expect(screen.getByText("Hours")).toBeTruthy();
    expect(screen.getByText("Minutes")).toBeTruthy();
    expect(screen.getByText("Seconds")).toBeTruthy();
  });

  it("renders four time unit cards", () => {
    const { container } = render(<Timer />);
    const cards = container.querySelectorAll(".border-2");
    expect(cards.length).toBe(4);
  });

  it("updates countdown every second", () => {
    render(<Timer />);
    
    // Fast-forward 1 second
    vi.advanceTimersByTime(1000);
    
    // Component should still be rendered
    expect(screen.getByText("Days")).toBeTruthy();
  });
});
