import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IPost from "../../models/IPost";

interface PostState {
    data: IPost | null,
    loading: boolean,
    error: string
}

const initialState: PostState = {
    data: null,
    loading: false,
    error: ""
}

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
            state.error = ""
        },
        fetchingSuccess(state, action: PayloadAction<IPost>) {
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

export default postSlice.reducer