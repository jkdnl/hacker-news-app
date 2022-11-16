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
import NewsInfo from "../components/ui/NewsInfo";
import textRefactorer from "../utils/textRefactorer";
import {Link} from "react-router-dom";

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

    if(!data && !loading) {
        return (
            <div className="mt-6">
                <ErrorMessage/>
                <Link to="/" className="block text-center mt-4 text-white/50 hover:text-orange-400 transition-all">
                    Get back to the main page
                </Link>
            </div>
        )
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
                        {data && <NewsInfo by={data.by} time={data.time}/>}
                        {
                            data?.url
                            ? (<a
                                className="overflow-hidden block my-6"
                                href={data?.url} target={"_blank"}
                                rel="noopener noreferrer"
                            >
                                {data?.url}
                            </a>
                            ) : (
                                data?.text ? (
                                    <p className="my-6">{textRefactorer(data.text)}</p>
                                ) : null
                            )
                        }
                        <div className="flex border-t pt-2">
                            <BiCommentDetail className="mr-2 my-auto" />
                            <span>
                                {`${data?.descendants} ${data?.descendants ? " Comments": "No comments yet"}`}
                            </span>
                            <button
                                className="ml-auto text-white/50 hover:text-orange-400 transition-all"
                                onClick={commentsRefreshHandler}
                            >
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
