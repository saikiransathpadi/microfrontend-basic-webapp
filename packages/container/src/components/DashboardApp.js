import { mount as DashMount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

export const DashApp = () => {
    const ref = useRef(null);
    useEffect(() => {
        console.log('asdjkf')
        DashMount(ref.current);
    }, []);
    return <div ref={ref}></div>;
};
