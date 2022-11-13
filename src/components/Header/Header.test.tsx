import { render, screen } from "@testing-library/react";
import Header from "./Header";

test('Render the header', () => {
    render(<Header />)
    let h1 = screen.getByText("Hacker News")
    expect(h1).toBeInTheDocument()
})