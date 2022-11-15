import axios from "axios";
import IComment from "../models/IComment";

const getComments: Awaited<Promise<any>> = (ids: []) => {
    try {
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
    } catch(e) {
        console.error(e)
    }
}

export default getComments