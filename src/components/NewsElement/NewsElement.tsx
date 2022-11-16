import React from 'react';
import NewsInfo from "../ui/NewsInfo";

interface NewsProps {
    title: string,
    score: number,
    by?: string,
    time: number
}

const NewsElement: React.FC<NewsProps> = ({ time, by = "Anonymous", score = 0, title }) => {

    return (
        <div data-testid="newsel-test"
            className="bg-neutral-800 p-4 rounded-xl hover:bg-neutral-600/50 hover:cursor-pointer group transition-all">
            <h2 className="text-lg tracking-wider">{title}</h2>
            <div
                className="flex w-full opacity-80 text-white tracking-wider mt-2 text-sm
                group-hover:text-orange-400 transition-all"
            >
                <NewsInfo by={by} time={time} score={score} />
            </div>
        </div>
    );
};

export default NewsElement;