import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './Main';
import Rating from './Rating';
import Notifications from './Notifications';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from "react-browser-router";

ReactDOM.render(
    <div>
        <Main />,
    <BrowserRouter>

            <Route path="/Rating" component={Rating} />
        </BrowserRouter>
        <BrowserRouter>
            <Route path="/Notifications" component={Notifications} />
        </BrowserRouter>,
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
