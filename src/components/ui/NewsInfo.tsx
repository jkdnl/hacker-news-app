import React from 'react';
import {BsFillHandThumbsUpFill} from "react-icons/bs";
import timeConverter from "../../utils/timeConverter";

interface NewsInfoProps {
    score?: number,
    by: string,
    time: number
}

const NewsInfo: React.FC<NewsInfoProps> = ({score, time, by }) => {
    return (
        <div className="flex text-orange-400" data-testid="newsinfo-test">
            {score &&
                <>
                    <span className="flex" data-testid="score-test">
                        <BsFillHandThumbsUpFill className="my-auto mr-1"/>
                        <p>{score}</p>
                    </span>
                    <span className="mx-2 text-white">|</span>
                </>}
            <span>{by}</span>
            <span className="mx-2 text-white">|</span>
            <span>{time && timeConverter(time)}</span>
        </div>
    );
};

export default NewsInfo;