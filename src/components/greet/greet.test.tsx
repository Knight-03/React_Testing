import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

// First Test
test("greet renders correctly", () => {
    render(<Greet/>)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
})