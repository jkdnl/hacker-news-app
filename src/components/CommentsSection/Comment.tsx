import React, {useState} from 'react';
import {BiDownArrow, BiUpArrow} from "react-icons/bi";
import textRefactorer from "../../utils/textRefactorer";
import IComment from "../../models/IComment";
import NewsInfo from "../ui/NewsInfo";

interface CommentsProps {
    by: string,
    time: number,
    text: string,
    kids: IComment[]
}

const Comment: React.FC<CommentsProps> = ({ text, time, by = "Anonymous", kids= [] }) => {

    const [isOpened, setIsOpened] = useState<boolean>(false)
    const hasKids: boolean = kids?.length > 0

    const nestedCommentsHandler = () => {
        setIsOpened(prevState => !prevState)
    }

    return (
        <div>
            <NewsInfo by={by} time={time} />
            <p className="mt-4 break-words">
                {text ? textRefactorer(text) : <span className="text-orange-400">The comment has been deleted</span>}
            </p>
            {hasKids && (
                <>
                    <button
                        onClick={nestedCommentsHandler}
                        className="ml-auto mt-4 hover:text-orange-400/80 text-white/50
                        transition-all flex justify-center">
                        {isOpened ? "Close replies" : `Show ${kids.length} more ${kids.length === 1 ? "reply" : "replies"}`}
                        {isOpened ? <BiUpArrow className="ml-2 my-auto"/> : <BiDownArrow className="ml-2 my-auto"/>}
                    </button>
                    {
                        hasKids && isOpened &&
                        kids.map(com =>
                            <div key={com.parent + com.time}
                                 className="border-l md:border-l-2 border-l-orange-400 border-opacity-20 pl-6 py-6 md:ml-4">
                                <Comment by={com.by} time={com.time} text={com.text} key={com.id} kids={com.kids}/>
                            </div>
                        )
                    }
                </>
            )}
        </div>
    );
};

export default Comment;