import React from 'react';
import ReactDOM from 'react-dom/client';

import {App} from 'components/app';

import './styles/index.scss';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
    <App />
);