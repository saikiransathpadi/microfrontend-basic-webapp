import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Loading from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp').then((module) => ({default: module.MarketingApp})));
const AuthLazy = lazy(() => import('./components/AuthApp').then((module) => ({default: module.AuthApp})));

const generateClaseName = createGenerateClassName({
    productionPrefix: 'cont',
});

export default () => {
    return (
        <StylesProvider generateClassName={generateClaseName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Suspense fallback={<Loading/>}>
                        <Switch>
                            <Route path='/auth' component={AuthLazy} />
                            <Route path='/' component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};
