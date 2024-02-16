/*
 * Greet should render the text hello and if a name is passed into the component then
 * It shold render  hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("render correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });
});

// test or it - we can write both
// test.only/fit will execute only that test
// test.skip/xit will skip that test

//* In terminal Test Suits corresponds to a individual files not an individual "describe block"