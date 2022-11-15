import React, {useState} from 'react';
import {BiDownArrow, BiUpArrow} from "react-icons/bi";
import textRefactorer from "../../utils/textRefactorer";
import NewsPageWrapper from "../Wrappers/NewsPageWrapper";
import CommentsTree from "./CommentsTree";

interface CommentsProps {
    by: string,
    time: number,
    text: string,
    kids?: []
}

const Comment: React.FC<CommentsProps> = ({ text, time, by, kids= [] }) => {

    const [isOpened, setIsOpened] = useState<boolean>(false)
    const hasKids: boolean = kids?.length > 0

    const nestedCommentsHandler = () => {
        setIsOpened(prevState => !prevState)
    }

    return (
        <NewsPageWrapper>
            <>
                <span>{by}</span>
                <span className="mx-2">|</span>
                <span>{new Date(time * 1000).toLocaleTimeString()}</span>
            </>
            <p className="mt-4 break-words">
                {/*there are some posts without text, so giving them some artificial text*/}
                {text ? textRefactorer(text) : <span className="text-orange-400">The comment has been deleted</span>}
            </p>
            {hasKids && (
                <>
                    <button
                        onClick={nestedCommentsHandler}
                        className="p-2 ml-auto mt-4 border rounded-lg hover:bg-orange-400/80
                        hover:border-orange-400/80 transition-all
                        flex justify-center">
                        {isOpened ? "Close the thread" : "Open the thread"}
                        {isOpened ? <BiUpArrow className="ml-2 my-auto"/> : <BiDownArrow className="ml-2 my-auto"/>}
                    </button>
                    {hasKids && isOpened && <CommentsTree commentsIds={kids} />}
                </>
            )}
        </NewsPageWrapper>
    );
};

export default Comment;