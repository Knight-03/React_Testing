/*
 * Greet should render the text hello and if a name is passed into the component then
 * It shold render  hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("render correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

    // /nested describe blocks
  describe("Nested", () => {
    test("render with name", () => {
      render(<Greet name="Dhvani" />);
      const textElement = screen.getByText("Hello Dhvani");
      expect(textElement).toBeInTheDocument();
    });
  });
});


// multiple describe blocks 
describe("Multiple", () => {
    test("render with name", () => {
      render(<Greet name="Patel" />);
      const textElement = screen.getByText("Hello Patel");
      expect(textElement).toBeInTheDocument();
    });
  });
// test.only will execute only that test
// test.skip will skip that test

//* In terminal Test Suits corresponds to a individual files not an individual "describe block"