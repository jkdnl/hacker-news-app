// The API sends comments with lots of HTML attributes which break the design
// the scripts refactors the inner tags into consistent and readable piece of content

const textRefactorer = (text: string) => {
    const refactoredText = document.createElement("div")
    refactoredText.innerHTML = text
    return refactoredText.innerText
}

export default textRefactorer