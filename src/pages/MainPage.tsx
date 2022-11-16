import React, {useEffect} from 'react';
import NewsWrapper from "../components/Wrappers/NewsWrapper";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchRecentNews} from "../store/actions/recentNewsActions";

const REFRESH_DELAY = 60000

const MainPage: React.FC = () => {

    const {data, error, loading} = useAppSelector(state => state.recentNewsReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        data.length === 0 && dispatch(fetchRecentNews())
    }, [dispatch])

    useEffect(() => {
        setInterval(() => {
            dispatch(fetchRecentNews())
        }, REFRESH_DELAY)
    }, [dispatch])

    const refreshHandler = () => {
        dispatch(fetchRecentNews())
    }

    return (
        <NewsWrapper>
            <NewsFeed error={error} loading={loading} data={data} refreshHandler={refreshHandler} />
        </NewsWrapper>
    );
};

export default MainPage;