import React, {useEffect} from 'react';
import NewsWrapper from "../components/Wrappers/NewsWrapper";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {useHistory, useParams} from "react-router";
import fetchPost from "../store/actions/postActions";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import CommentsSection from "../components/CommentsSection/CommentsSection";
import NewsPageWrapper from "../components/Wrappers/NewsPageWrapper";
import {BiArrowBack, BiCommentDetail} from "react-icons/bi";
import {fetchParentComments} from "../store/actions/commentsActions";

const NewsPage: React.FC = () => {

    const dispatch = useAppDispatch()
    const history = useHistory()
    const {data, error, loading} = useAppSelector(state => state.postReducer)
    const {id} = useParams<{id: string}>()

    useEffect(() => {
        dispatch(fetchPost(id))
    }, [dispatch, id])

    const commentsRefreshHandler = () => {
        data?.kids && dispatch(fetchParentComments(data.kids))
    }

    return (
        <NewsWrapper>
            {loading && !error && <Loader />}
            {!loading && error && data?.type === 'comment' && <ErrorMessage />}
            {!loading && !error && data?.type !== 'comment' &&
                <>
                    <NewsPageWrapper>
                        <button className="text-small text-white/50 hover:text-orange-400/80 transition-all"
                        onClick={() => history.push("/")}>
                            <BiArrowBack className="inline mr-2" />
                            Back to all news
                        </button>
                        <h2 className="text-2xl tracking-wide mt-3">{data?.title}</h2>
                        <div className="opacity-80">
                            <span className="text-orange-400">{data?.by}</span>
                            <span className="mx-2">|</span>
                            <span
                                className="text-orange-400">{data?.time && new Date(data.time * 1000).toLocaleTimeString()}</span>
                        </div>
                        <a className="overflow-hidden block my-6" href={data?.url} target={"_blank"} rel="noopener noreferrer">{data?.url}</a>
                        <div className="flex border-t pt-2">
                            <BiCommentDetail className="mr-2 my-auto" />
                            <span>
                                {data?.kids && data?.kids?.length > 0 ? data?.kids?.length + " Comments" : "No comments yet"}
                            </span>
                            <button
                            className="ml-auto text-white/50 hover:text-orange-400 transition-all"
                            onClick={commentsRefreshHandler}>
                                Refresh Comments
                            </button>
                        </div>
                    </NewsPageWrapper>
                    {data?.kids && <CommentsSection commentsIds={data?.kids}/>}
                </>
            }
        </NewsWrapper>
    );
};

export default NewsPage;
