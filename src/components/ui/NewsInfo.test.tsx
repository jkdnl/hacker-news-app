import NewsInfo from "./NewsInfo";
import {render, screen} from "@testing-library/react";

describe("Test NewsInfo component", () => {

    const data = {
        by: "jk",
        time: 1668539402,
        score: 21
    }

    test("Render with score", () => {
        render(<NewsInfo by={data.by} time={data.time} score={data.score} />)
        const el = screen.getByTestId("newsinfo-test")
        const author = screen.getByText("jk")
        const time = screen.getByText("15/11/2022 22:10")
        const score = screen.getByTestId("score-test")
        const elements = [el, author, time, score]
        elements.forEach(item => expect(item).toBeInTheDocument())
    })

    test("Render without score", () => {
        render(<NewsInfo by={data.by} time={data.time} />)
        const score = screen.queryByTestId("score-test")
        expect(score).not.toBeInTheDocument()
    })

})