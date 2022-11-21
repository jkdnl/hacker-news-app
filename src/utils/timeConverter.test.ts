import timeConverter from "./timeConverter";

describe('Test the time conversion', () => {

    test('Conversion test 1', () => {
        const test = timeConverter(1668622922)
        expect(test).toBe("16/11/2022 21:22")
    })

    test('Conversion test 2', () => {
        const test = timeConverter(1668623015)
        expect(test).toBe("16/11/2022 21:23")
    })

})