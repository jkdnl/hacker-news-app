export default interface IComment {
    id: number,
    by: string,
    parent: number,
    kids: [],
    text: string,
    time: number,
    type: string
}