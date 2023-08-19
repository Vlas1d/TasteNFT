import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from "./App";
import "./style.scss";

const root = document.getElementById('root') as HTMLBodyElement;

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter></React.StrictMode>, root);