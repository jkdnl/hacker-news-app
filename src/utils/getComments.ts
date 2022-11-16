import axios from "axios";
import IComment from "../models/IComment";

const getComments: any = (ids: []) => {
    return Promise.all(ids.map(async id => {
        const { data } = await axios.get<IComment>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        if (data.kids && data.kids.length > 0) {
            const kids = await getComments(data.kids)
            return {
                ...data, kids
            }
        }
        return {
            ...data
        }
    }))
}

export default getComments