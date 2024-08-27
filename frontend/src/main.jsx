import React from 'react';
import ReactDom from 'react-dom/client';

import App from './components/App';

import {GlobalStyle} from './styles/styles';

ReactDom.createRoot(document.querySelector('#root')).render(
    <>
        <GlobalStyle/>
        <App/>
    </>
)