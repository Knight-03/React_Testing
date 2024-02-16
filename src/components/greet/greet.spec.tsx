/*
* Greet should render the text hello and if a name is passed into the component then
* It shold render  hello followed by the name
*/

import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

it("Greet render correctly", () => {
    render(<Greet/>)
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument()
})

it("Greet render with name", () => {
    render(<Greet name='Dhvani'/>)
    const textElement = screen.getByText("Hello Dhvani");
    expect(textElement).toBeInTheDocument()
})

// test or it works same
// test.only/fit will execute only that test 
// test.skip/xit will skip that test