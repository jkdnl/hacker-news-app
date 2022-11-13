export default interface IPost {
    by: string,
    descendants: number,
    kids: [id: number],
    id: number,
    score: number,
    time: number,
    title: string,
    type: string,
    url: string
}