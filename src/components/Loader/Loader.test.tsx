import Loader from "./Loader";
import {render, screen} from "@testing-library/react";

test('Loader render', () => {
    render(<Loader />)
    const el = screen.getByTestId("loader-test")
    expect(el).toBeInTheDocument()
})