import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="w-full text-center">
            <div
                className="border-b-4 border-t-4 border-b-orange-400 rounded-full
                w-20 aspect-square animate-spin mx-auto my-4"
            />
            <p>We are preparing the feed</p>
            <p>Please, wait</p>
        </div>
    );
};

export default Loader;