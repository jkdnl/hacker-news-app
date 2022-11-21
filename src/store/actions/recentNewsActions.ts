import {AppDispatch} from "../store";
import axios from "axios";
import {recentNewsSlice} from "../reducers/recentNewsSlice";
import IRecentNews from "../../models/IRecentNews";
import IPost from "../../models/IPost";

export const fetchRecentNews = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(recentNewsSlice.actions.fetching())

        const {data: newsIds} = await axios.get<IRecentNews[]>("https://hacker-news.firebaseio.com/v0/newstories.json")
        const promises = [...newsIds.slice(0,100)].map(id => `https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        const newsArray = await Promise.all(promises.map(async res => {
            const {data} = await axios.get<IPost>(res)
            return data
        }))

        dispatch(recentNewsSlice.actions.fetchingSuccess(newsArray))
    } catch (e) {
        dispatch(recentNewsSlice.actions.fetchingError(e as Error))
    }
}

export default fetchRecentNews