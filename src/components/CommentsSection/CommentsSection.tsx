import React, {useEffect} from 'react';
import Comment from "./Comment";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchParentComments} from "../../store/actions/commentsActions";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import NewsPageWrapper from "../Wrappers/NewsPageWrapper";


interface CommentsProps {
    commentsIds: []
}

const CommentsSection: React.FC<CommentsProps> = ({ commentsIds }) => {

    const dispatch = useAppDispatch()
    const {data, error, loading} = useAppSelector(state => state.commentsReducer)

    useEffect(() => {
        dispatch(fetchParentComments(commentsIds))
    }, [dispatch, commentsIds])

    return (
        <>
            {
                loading && !error && <Loader />
            }
            {
                !loading && error && <ErrorMessage />
            }
            {
                !loading && !error && data && !error && data.map(c => (
                    <NewsPageWrapper key={c.parent}>
                        <Comment key={c.id} time={c.time} by={c.by} text={c.text} kids={c.kids} />
                    </NewsPageWrapper>
                ))
            }
        </>
    );
};

export default CommentsSection;