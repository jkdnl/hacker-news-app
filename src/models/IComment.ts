export default interface IComment {
    by: string,
    id: number,
    parent: number,
    text: string,
    time: Date,
    type: string
}