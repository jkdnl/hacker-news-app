import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import NewsFeedWrapper from "../components/Wrappers/NewsFeedWrapper";
import NewsElement from "../components/NewsElement/NewsElement";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
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
            // dispatch(fetchRecentNews())
        }, 60000)
    }, [])

    return (
        <>
            <Header />
            <NewsFeedWrapper>
                {!loading && !error && data.map(n => (
                    n !== null
                        ? <NewsElement title={n?.title} date={n?.time} score={n?.score} author={n?.by} key={n?.id} />
                        : <p>Error</p>
                ))}
                {!error && loading && <Loader/>}
                {!loading && error && <ErrorMessage/>}
            </NewsFeedWrapper>
        </>
    );
};

export default MainPage;