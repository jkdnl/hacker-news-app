import {AppDispatch} from "../store";
import IComment from "../../models/IComment";
import {commentsSlice} from "../reducers/commentsSlice";
import getComments from "../../utils/getComments";

export const fetchParentComments = (ids: []) => async (dispatch: AppDispatch) => {
    try {
        dispatch(commentsSlice.actions.fetching())
        const childComments: IComment[] = await getComments(ids)
        dispatch(commentsSlice.actions.fetchingSuccess(childComments))
    } catch(e) {
        dispatch(commentsSlice.actions.fetchingError(e as Error))
    }
}

export default fetchParentComments