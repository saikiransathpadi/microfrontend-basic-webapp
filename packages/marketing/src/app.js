import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClaseName = createGenerateClassName({
    productionPrefix: 'mark',
});

export default ({ history }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClaseName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path={'/'} component={Landing} />
                        <Route exact path={'/pricing'} component={Pricing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
};
