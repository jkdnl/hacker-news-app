import React, {useEffect, useState} from 'react';
import getComments from "../../utils/getComments";
import {useAppDispatch} from "../../hooks/redux";
import {fetchNestedComments} from "../../store/actions/commentsActions";

interface CommentTreeProps {
    firstKids: []
}

const CommentTree: React.FC<CommentTreeProps> = ({ firstKids }) => {

    const [tree, setTree] = useState()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchNestedComments(firstKids))
    }, [])


    // const getTree = async () => {
    //     return await getComments(firstKids)
    // }
    // const tree = getTree()
    // console.log(tree)

    return (
        <div>
        dsa
        </div>
    )
};

export default CommentTree;