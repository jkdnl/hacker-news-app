const timeConverter = (time: number) => {
    const date = new Date(time * 1000)
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString().slice(0, -3)}`
}

export default timeConverter