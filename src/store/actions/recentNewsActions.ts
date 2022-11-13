import {AppDispatch} from "../store";
import axios from "axios";
import {recentNewsSlice} from "../reducers/recentNewsSlice";
import IRecentNews from "../../models/IRecentNews";
import IPost from "../../models/IPost";

export const fetchRecentNews = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(recentNewsSlice.actions.fetching())
        const {data: newsIds} = await axios.get<IRecentNews[]>("https://hacker-news.firebaseio.com/v0/newstories.json")
        const ids = newsIds.slice(0,100)
        const newsArray: IPost[] = []
        for (let i = 0; i<ids.length; i++) {
            const {data} = await axios.get<IPost>(`https://hacker-news.firebaseio.com/v0/item/${ids[i]}.json`)
            newsArray.push(data)
        }
        dispatch(recentNewsSlice.actions.fetchingSuccess(newsArray))
    } catch (e) {
        dispatch(recentNewsSlice.actions.fetchingError(e as Error))
    }
}

export default fetchRecentNews