import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from "react-router-dom";
import TotalUsers from './TotalUsers';
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Main} />
            <Route path="/totalusers" component={TotalUsers} />
        </div>
    </BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();
