import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { ThemeProvider } from "@/contexts/ThemeContext";

describe("Navigation Component", () => {
  const renderNavigation = () => {
    return render(
      <ThemeProvider defaultTheme="light">
        <Navigation />
      </ThemeProvider>
    );
  };

  it("renders the navigation component", () => {
    renderNavigation();
    const stLogo = screen.getByText("ST");
    expect(stLogo).toBeTruthy();
  });

  it("displays menu items", () => {
    renderNavigation();
    expect(screen.getByText("Home")).toBeTruthy();
    expect(screen.getByText("Services")).toBeTruthy();
    expect(screen.getByText("About")).toBeTruthy();
    expect(screen.getByText("Contact")).toBeTruthy();
  });

  it("displays Call Now button", () => {
    renderNavigation();
    const buttons = screen.getAllByText("Call Now");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("renders logo with ST branding", () => {
    const { container } = renderNavigation();
    const logo = container.querySelector("div.bg-gradient-to-br");
    expect(logo).toBeTruthy();
  });

  it("has proper navigation links", () => {
    renderNavigation();
    const homeLink = screen.getByText("Home").closest("a");
    const servicesLink = screen.getByText("Services").closest("a");

    expect(homeLink?.getAttribute("href")).toBe("/");
    expect(servicesLink?.getAttribute("href")).toBe("#services");
  });
});
