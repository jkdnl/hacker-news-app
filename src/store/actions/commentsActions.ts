import {AppDispatch} from "../store";
import axios from "axios";
import IComment from "../../models/IComment";
import {commentsSlice} from "../reducers/commentsSlice";

export const fetchParentComments = (ids: []) => async (dispatch: AppDispatch) => {
    try {
        dispatch(commentsSlice.actions.fetching())
        let commentsList: IComment[] = []
        for (let i = 0; i < ids.length; i++) {
            const { data } = await axios.get<IComment>(`https://hacker-news.firebaseio.com/v0/item/${ids[i]}.json`)
            commentsList.push(data)
        }
        dispatch(commentsSlice.actions.fetchingSuccess(commentsList))
    } catch(e) {
        dispatch(commentsSlice.actions.fetchingError(e as Error))
    }
}

export default fetchParentComments