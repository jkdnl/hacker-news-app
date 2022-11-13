import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IPost from "../../models/IPost";

interface NewsState {
    data: IPost[],
    loading: boolean,
    error: string
}
const initialState: NewsState = {
    data: [],
    loading: false,
    error: ""
}

export const recentNewsSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
            state.error = ""
        },
        fetchingSuccess(state, action: PayloadAction<IPost[]>) {
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

export default recentNewsSlice.reducer