import ErrorMessage from "./ErrorMessage";
import {render, screen} from "@testing-library/react";

test('Error message render', () => {
    render(<ErrorMessage />)
    const el = screen.getByTestId("error-test")
    expect(el).toBeInTheDocument()
})