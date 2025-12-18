import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders the footer component", () => {
    render(<Footer />);
    const stTax = screen.getByText("ST Tax");
    expect(stTax).toBeTruthy();
  });

  it("displays contact information", () => {
    render(<Footer />);
    expect(screen.getByText(/\(555\) 123-4567/)).toBeTruthy();
    expect(screen.getByText("info@sttax.com")).toBeTruthy();
  });

  it("displays service links", () => {
    render(<Footer />);
    expect(screen.getByText("Tax Preparation")).toBeTruthy();
    expect(screen.getByText("Accounting")).toBeTruthy();
    expect(screen.getByText("Bookkeeping")).toBeTruthy();
    expect(screen.getByText("Payroll")).toBeTruthy();
  });

  it("displays company links", () => {
    render(<Footer />);
    expect(screen.getByText("About Us")).toBeTruthy();
    expect(screen.getByText("Blog")).toBeTruthy();
    expect(screen.getByText("Privacy Policy")).toBeTruthy();
    expect(screen.getByText("Terms of Service")).toBeTruthy();
  });

  it("displays social media links", () => {
    render(<Footer />);
    const socialLinks = screen.getAllByRole("link");
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  it("includes copyright year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(new RegExp(currentYear.toString()));
    expect(copyrightText).toBeTruthy();
  });
});
