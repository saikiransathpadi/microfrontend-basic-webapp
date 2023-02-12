import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Loading from './components/Progress';
import { createBrowserHistory } from 'history';

const MarketingLazy = lazy(() => import('./components/MarketingApp').then((module) => ({ default: module.MarketingApp })));
const AuthLazy = lazy(() => import('./components/AuthApp').then((module) => ({ default: module.AuthApp })));
const DashLazy = lazy(() => import('./components/DashboardApp').then((module) => ({ default: module.DashApp })));

const generateClaseName = createGenerateClassName({
    productionPrefix: 'cont',
});

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard');
        }
    }, [isSignedIn]);
    return (
        <StylesProvider generateClassName={generateClaseName}>
            <Router history={history}>
                <div>
                    <Header
                        isSignedIn={isSignedIn}
                        onSignOut={() => {
                            setIsSignedIn(false);
                        }}
                    />
                    <Suspense fallback={<Loading />}>
                        <Switch>
                            <Route path='/auth'>
                                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path='/dashboard'>
                                {!isSignedIn && <Redirect to={'/'} />}
                                <DashLazy />
                            </Route>
                            <Route path='/' component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        </StylesProvider>
    );
};
