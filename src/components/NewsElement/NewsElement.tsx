import React from 'react';
import {BiTimeFive} from "react-icons/bi";
import {BsFillHandThumbsUpFill, BsFillPersonFill} from "react-icons/bs";

interface NewsProps {
    title: string,
    score: number,
    author: string,
    date: number
}

const NewsElement: React.FC<NewsProps> = ({ date, author = "anonymous", score = 0, title }) => {
    return (
        <div className="bg-neutral-800 p-4 rounded-xl hover:bg-neutral-600/50 hover:cursor-pointer group transition-all">
            <h2 className="text-lg tracking-wider">{title}</h2>
            <div className="flex w-full opacity-80 text-white tracking-wider mt-2 text-sm group-hover:text-orange-400 transition-all">
                <span className="flex">
                    <BsFillHandThumbsUpFill className="my-auto mr-1" />
                    <p>{score}</p>
                </span>
                <span className="mx-2">|</span>
                <span className="flex">
                    <BsFillPersonFill className="my-auto mr-1" />
                    <p>{author}</p>
                </span>
                <span className="mx-2">|</span>
                <span className="flex">
                    <BiTimeFive className="my-auto mr-1" />
                    <p>{new Date(date*1000).toLocaleDateString()}</p>
                </span>
            </div>
        </div>
    );
};

export default NewsElement;