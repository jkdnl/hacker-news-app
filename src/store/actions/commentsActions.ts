import {AppDispatch} from "../store";
import axios from "axios";
import IComment from "../../models/IComment";
import {commentsSlice} from "../reducers/commentsSlice";
import getComments from "../../utils/getComments";

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
        const childComments = await getComments(ids)
        console.log(childComments)

    } catch(e) {
        dispatch(commentsSlice.actions.fetchingError(e as Error))
    }
}

export default {fetchParentComments, fetchNestedComments}