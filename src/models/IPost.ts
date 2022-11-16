export default interface IPost {
    id: number,
    by: string,
    descendants?: number,
    kids: [],
    score: number,
    time: number,
    title: string,
    type: string,
    url?: string,
    text?: string
}