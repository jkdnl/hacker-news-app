import {AppDispatch} from "../store";
import axios from "axios";
import IComment from "../../models/IComment";
import {commentsSlice} from "../reducers/commentsSlice";
import getComments from "../../utils/getComments";
import {nestedCommentsSlice} from "../reducers/nestedCommentsSlice";

export const fetchParentComments = (ids: []) => async (dispatch: AppDispatch) => {
    try {
        dispatch(commentsSlice.actions.fetching())
        const parentComments = []
        for (const id of ids) {
            const { data } = await axios.get<IComment>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            parentComments.push(data)
        }
        dispatch(commentsSlice.actions.fetchingSuccess(parentComments))
    } catch(e) {
        dispatch(commentsSlice.actions.fetchingError(e as Error))
    }
}

export const fetchNestedComments = (ids: []) => async (dispatch: AppDispatch) => {
    try {
        dispatch(nestedCommentsSlice.actions.fetching())
        const childComments: IComment[] = await getComments(ids)
        // console.log(childComments)
        dispatch(nestedCommentsSlice.actions.fetchingSuccess(childComments))
    } catch(e) {
        dispatch(nestedCommentsSlice.actions.fetchingError(e as Error))
    }
}

export default {fetchParentComments, fetchNestedComments}