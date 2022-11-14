import React, {useEffect} from 'react';
import NewsWrapper from "../components/Wrappers/NewsWrapper";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchRecentNews} from "../store/actions/recentNewsActions";

const MainPage: React.FC = () => {

    const {data, error, loading} = useAppSelector(state => state.recentNewsReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        data.length === 0 && dispatch(fetchRecentNews())
    }, [dispatch, data.length])

    useEffect(() => {
        setInterval(() => {
            dispatch(fetchRecentNews())
        }, 60000)
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