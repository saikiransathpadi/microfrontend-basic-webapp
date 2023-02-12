import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (el, {onSignIn, onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    onNavigate && history.listen(onNavigate);
    ReactDom.render(<App history={history} onSignIn={onSignIn} />, el);
    return {
        onParentNavigate: ({ pathname }) => {
            const { pathname: currPath } = history;
            if (currPath !== pathname) history.push(pathname);
        },
    };
};
console.log('env =>', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth_dev-root');
    console.log(devRoot);
    if (devRoot) {
        mount(devRoot, {defaultHistory: createBrowserHistory()});
    }
}
export { mount };
