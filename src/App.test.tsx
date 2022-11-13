import { render, screen } from "@testing-library/react";
import App from "./App"

describe('Test the appearance of components', () => {

    test('Render header', () => {
        render(<App />)
        let Header = screen.getByTestId("nav-header")
        expect(Header).toBeInTheDocument()
    })

})