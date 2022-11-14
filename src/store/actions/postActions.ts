import {AppDispatch} from "../store";
import {postSlice} from "../reducers/postSlice";
import axios from "axios";
import IPost from "../../models/IPost";

export const fetchPost = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.fetching())
        const { data } = await axios.get<IPost>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        dispatch(postSlice.actions.fetchingSuccess(data))
    } catch(e) {
        dispatch(postSlice.actions.fetchingError(e as Error))
    }
}

export default fetchPost