import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IComment from "../../models/IComment";

interface CommentsState {
    data: IComment[] | null,
    loading: boolean,
    error: string
}

const initialState: CommentsState = {
    data: null,
    loading: false,
    error: ""
}

export const nestedCommentsSlice = createSlice({
    name: "nestedComments",
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
            state.error = ""
        },
        fetchingSuccess(state, action: PayloadAction<IComment[]>) {
            state.loading = false
            state.error = ""
            state.data = action.payload
        },
        fetchingError(state, action: PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        }
    }
})

export default nestedCommentsSlice.reducer
