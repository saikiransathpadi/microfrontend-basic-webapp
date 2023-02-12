import { mount as AuthMount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthApp = ({onSignIn}) => {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        const { onParentNavigate } = AuthMount(ref.current, {
            initialPath: history.location,
            onNavigate: ({ pathname }) => {
                const { pathname: currPath } = history.location;
                if (currPath !== pathname) history.push(pathname);
            },
            onSignIn: () => {
                onSignIn()
                history.push('/')
            }
        });
        history.listen(onParentNavigate);
    }, []);
    return <div ref={ref}></div>;
};
