import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import NewsFeedWrapper from "../components/Wrappers/NewsFeedWrapper";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchRecentNews} from "../store/actions/recentNewsActions";

const MainPage: React.FC = () => {

    const {data, error, loading} = useAppSelector(state => state.recentNewsReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchRecentNews())
    }, [dispatch])

    useEffect(() => {
        setInterval(() => {
            dispatch(fetchRecentNews())
        }, 60000)
    }, [dispatch])

    const refreshHandler = () => {
        dispatch(fetchRecentNews())
    }

    return (
        <>
            <Header />
            <NewsFeedWrapper>
                <NewsFeed error={error} loading={loading} data={data} refreshHandler={refreshHandler} />
            </NewsFeedWrapper>
        </>
    );
};

export default MainPage;