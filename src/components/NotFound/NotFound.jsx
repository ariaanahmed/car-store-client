import React from 'react';
import Lottie from "lottie-react";

import NotFoundPageAni from '../../assets/98170-sunthalpy-404.json';

const NotFound = () => {
    return (
        <div>
            <Lottie className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" animationData={NotFoundPageAni} loop={true} />
        </div>
    );
};

export default NotFound;