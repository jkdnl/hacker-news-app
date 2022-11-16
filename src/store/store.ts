import {combineReducers, configureStore} from "@reduxjs/toolkit";
import recentNewsReducer from "./reducers/recentNewsSlice";
import postReducer from "./reducers/postSlice";
import commentsReducer from "./reducers/commentsSlice";

const rootReducer = combineReducers({
    recentNewsReducer,
    postReducer,
    commentsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']