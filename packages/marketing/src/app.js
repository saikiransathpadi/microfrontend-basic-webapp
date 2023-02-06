import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClaseName = createGenerateClassName({
    productionPrefix: 'mark',
});

export default () => {
    return (
        <div>
            <StylesProvider generateClassName={generateClaseName}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/'} component={Landing} />
                        <Route exact path={'/pricing'} component={Pricing} />
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    );
};
