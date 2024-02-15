/*
* Greet should render the text hello and if a name is passed into the component then
* It shold render  hello followed by the name
*/

import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet render correctly", () => {
    render(<Greet/>)
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument()
})

test("Greet render with name", () => {
    render(<Greet name='Dhvani'/>)
    const textElement = screen.getByText("Hello Dhvani");
    expect(textElement).toBeInTheDocument()
})

// test.only will execute only that test 
// test.skip will skip that test