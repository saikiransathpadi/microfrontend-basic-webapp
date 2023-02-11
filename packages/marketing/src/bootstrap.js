import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (el, { onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory();
    onNavigate && history.listen(onNavigate);
    ReactDom.render(<App history={history} />, el);
    return {
        onParentNavigate: ({ pathname }) => {
            const { pathname: currPath } = history;
            if (currPath !== pathname) history.push(pathname);
        },
    };
};
console.log('env =>', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing_dev-root');
    console.log(devRoot);
    if (devRoot) {
        mount(devRoot, {defaultHistory: createBrowserHistory()});
    }
}
export { mount };
