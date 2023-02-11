import { mount as MarketingMount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const MarketingApp = () => {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        const { onParentNavigate } = MarketingMount(ref.current, {
            initialPath: history.location,
            onNavigate: ({ pathname }) => {
                const { pathname: currPath } = history.location;
                if (currPath !== pathname) history.push(pathname);
            },
        });
        history.listen(onParentNavigate);
    }, []);
    return <div ref={ref}></div>;
};
