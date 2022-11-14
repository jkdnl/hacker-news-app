import React, {useEffect} from 'react';
import NewsWrapper from "../components/Wrappers/NewsWrapper";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {useParams} from "react-router";
import fetchPost from "../store/actions/postActions";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import CommentsSection from "../components/CommentsSection/CommentsSection";

const NewsPage: React.FC = () => {

    const dispatch = useAppDispatch()
    const {data, error, loading} = useAppSelector(state => state.postReducer)
    const {id} = useParams<{id: string}>()

    useEffect(() => {
        dispatch(fetchPost(id))
    }, [dispatch, id])

    return (
        <NewsWrapper>
            {loading && !error && <Loader />}
            {!loading && error && data?.type === 'comment' && <ErrorMessage />}
            {!loading && !error && data?.type !== 'comment' &&
                <>
                    <div className="bg-neutral-800 p-4 rounded-xl">
                        <h2 className="text-2xl tracking-wide">{data?.title}</h2>
                        <div className="opacity-80 mb-2">
                            <span className="text-orange-400">{data?.by}</span>
                            <span className="mx-2">|</span>
                            <span
                                className="text-orange-400">{data?.time && new Date(data.time * 1000).toLocaleTimeString()}</span>
                        </div>
                        <a href={data?.url} target={"_blank"} rel="noopener noreferrer">{data?.url}</a>
                    </div>
                    {data?.kids && <CommentsSection commentsIds={data?.kids}/>}
                </>
            }
        </NewsWrapper>
    );
};

export default NewsPage;
