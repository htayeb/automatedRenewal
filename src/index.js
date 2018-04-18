import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import App from './components/app';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        </div>
    </BrowserRouter>
    , document.querySelector('.container'));
