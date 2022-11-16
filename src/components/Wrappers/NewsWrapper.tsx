import React from 'react';

interface Props {
    children: React.ReactNode
}

const NewsWrapper: React.FC<Props> = ({ children }) => {
    return (
        <div className="md:w-2/3 lg:w-3/5 mx-auto p-4 md:p-4 space-y-2">
            {children}
        </div>
    );
};

export default NewsWrapper;