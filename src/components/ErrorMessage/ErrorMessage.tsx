import React from 'react';
import {TbFaceIdError} from "react-icons/tb";

const ErrorMessage: React.FC = () => {
    return (
        <div className="w-full" data-testid="error-test">
            <TbFaceIdError className="text-6xl text-orange-400 items-center mx-auto" />
            <p className="text-lg text-center">An unexpected error has occurred</p>
            <p className="text-lg text-center">Please, try again later</p>
        </div>
    );
};

export default ErrorMessage;