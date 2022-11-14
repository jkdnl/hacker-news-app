import React from 'react';

interface CommentsProps {
    by: string,
    time: number,
    text: string
}

const Comment: React.FC<CommentsProps> = ({ text, time, by }) => {
    return (
        <div className="bg-neutral-800 p-4 rounded-xl tracking-wide">
            <>
                <span>{by}</span>
                <span className="mx-2">|</span>
                <span>{new Date(time * 1000).toLocaleTimeString()}</span>
            </>
            <p className="mt-4">
                {text ? text : <span className="text-orange-400">The comment has been deleted</span>}
            </p>
        </div>
    );
};

export default Comment;