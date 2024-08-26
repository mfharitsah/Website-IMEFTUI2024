import React from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimatedOutlet = () => {
    const location = useLocation();
    const outlet = useOutlet();

    return (
        <AnimatePresence mode="wait" initial={true}>
            {outlet && React.cloneElement(outlet, { key: location.pathname })}
        </AnimatePresence>
    );
};

export default AnimatedOutlet;
