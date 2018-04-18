import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import App from './components/app';
import Header from "./components/header";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        </div>
    </BrowserRouter>
    , document.querySelector('.root'));
