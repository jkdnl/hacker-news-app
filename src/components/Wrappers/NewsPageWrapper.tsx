import React from 'react';

interface Props {
    children: React.ReactNode
}

const NewsPageWrapper: React.FC<Props> = ({ children }) => {
    return (
        <div className="bg-neutral-800 p-4 text-sm md:p-6 md:text-base lg:px-8 rounded-xl tracking-wide">
            {children}
        </div>
    );
};

export default NewsPageWrapper;