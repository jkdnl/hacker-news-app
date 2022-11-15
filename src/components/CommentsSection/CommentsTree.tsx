import React, {useEffect} from 'react';
import IComment from "../../models/IComment";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Comment from "./Comment";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchNestedComments} from "../../store/actions/commentsActions";

interface CommentsTreeProps {
    commentsIds: []
}

const CommentsTree: React.FC<CommentsTreeProps> = ({ commentsIds }) => {

    const dispatch = useAppDispatch()
    const { data, loading, error } = useAppSelector(state => state.nestedCommentsReducer)
    useEffect(() => {
        dispatch(fetchNestedComments(commentsIds))
    }, [dispatch, commentsIds])

    const renderNestedComments = (comments: IComment[]) => {
        return comments.map(com => {
            return (
                <div key={com.parent + com.time} className="border-l md:border-l-2 border-l-orange-400 border-opacity-20 ml-2 md:ml-4">
                    <>
                        <Comment by={com.by} time={com.time} text={com.text} key={com.id}/>
                        {com.kids && renderNestedComments(com.kids)}
                    </>
                </div>
            )
        })
    }

    return (
        <>
            {loading && !error && <Loader />}
            {error && !loading && <ErrorMessage />}
            {!loading && !error && data && renderNestedComments(data)}
        </>
    );
};

export default CommentsTree;