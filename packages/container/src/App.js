import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import { MarketingApp } from '../components/MarketingApp';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClaseName = createGenerateClassName({
    productionPrefix: 'cont',
});

export default () => {
    return (
        <StylesProvider generateClassName={generateClaseName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};
