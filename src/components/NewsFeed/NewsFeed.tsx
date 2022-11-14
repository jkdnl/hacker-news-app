import React from 'react';
import {RiRefreshLine} from "react-icons/ri";
import NewsElement from "../NewsElement/NewsElement";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import IPost from "../../models/IPost";
import {Link} from "react-router-dom";

interface NewsFeedProps {
    loading: boolean,
    error: string,
    data: IPost[],
    refreshHandler: () => void
}

const NewsFeed: React.FC<NewsFeedProps> = ({ refreshHandler, loading, error, data }) => {

    return (
        <>
            <button className="flex w-full my-4 justify-center items-center space-x-2 border p-2 rounded-xl group
                hover:bg-orange-400/80 hover:border-orange-400/80"
                    onClick={refreshHandler}
                    disabled={loading}>
                <RiRefreshLine className="group-hover:animate-spin w-8 h-8" />
                <p>Refresh the feed content</p>
            </button>
            {!loading && !error && data.map(n => (
                n !== null
                    ? (
                        <div>
                            <Link to={`/news/${n.id}`}>
                                <NewsElement title={n?.title} date={n?.time} score={n?.score} author={n?.by} key={n?.id} />
                            </Link>
                        </div>
                    )
                    : (
                        <p>An error occurred while fetching the content</p>
                    )
            ))}
            {!error && loading && <Loader/>}
            {!loading && error && <ErrorMessage/>}
        </>
    );
};

export default NewsFeed;