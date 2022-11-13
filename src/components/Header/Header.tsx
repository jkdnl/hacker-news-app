import React from 'react';

const Header: React.FC = () => {
    return (
        <div data-testid={"nav-header"} className="bg-neutral-800 h-[10vh] flex justify-center">
            <h1 className="my-auto text-lg font-bold tracking-widest">Hacker News</h1>
        </div>
    );
};

export default Header;