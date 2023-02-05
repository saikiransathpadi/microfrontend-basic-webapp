import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

const mount = (el) => {
    ReactDom.render(<App/>, el);
};
console.log('env =>', process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing_dev-root');
    console.log(devRoot)
    if (devRoot) {
        mount(devRoot);
    }
}
export { mount };
