import {render, screen} from "@testing-library/react";
import NewsElement from "./NewsElement";

describe('the news element render', () => {
    test('News Element with all props', () => {
        const data = {
            time: 1668171555,
            score: 488,
            title: "Resolving the great undo-redo quandary",
            by: "kerblang"
        }

        render(<NewsElement time={data.time} by={data.by} score={data.score} title={data.title} />)
        const el = screen.getByTestId("newsel-test")
        const author = screen.getByText("kerblang")
        const title = screen.getByText("Resolving the great undo-redo quandary")
        const elements =  [el, author, title]
        elements.forEach(item => expect(item).toBeInTheDocument())
    })

    test('News Element without Author', () => {
        const data = {
            time: 1668171555,
            score: 488,
            title: "Resolving the great undo-redo quandary",
            by: undefined
        }

        render(<NewsElement time={data.time} by={data.by} score={data.score} title={data.title} />)
        const author = screen.getByText("Anonymous")
        expect(author).toBeInTheDocument()
    })
})
