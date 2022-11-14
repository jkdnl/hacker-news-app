import React, {useEffect} from 'react';
import Comment from "./Comment";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import fetchParentComments from "../../store/actions/commentsActions";

interface CommentTreeProps {
    kids: []
}

const CommentTree: React.FC<CommentTreeProps> = ({ kids }) => {

    const dispatch = useAppDispatch()
    const {data, error, loading} = useAppSelector(state => state.commentsReducer)

    useEffect(() => {
        dispatch(fetchParentComments(kids))
    }, [dispatch, kids])

    return (
        <>
            {
                data && data.forEach(c => (
                    <Comment by={c.by} time={c.time} text={c.text} />
                ))
            }
        </>
    );
};

export default CommentTree;