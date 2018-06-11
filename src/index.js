import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import Rating from './RatingDetails/';
import Notifications from './Notifications/';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from "react-router-dom";


ReactDOM.render(

    <BrowserRouter>
        <div>
            <Route exact path="/" component={Main} />
            <Route path="/Rating" component={Rating} />

            <Route path="/Notifications" component={Notifications} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
