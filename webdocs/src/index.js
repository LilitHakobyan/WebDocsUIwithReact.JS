import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import LogInForm from './Login';
import UsersForm from './UserList';


function render () { 
    ReactDOM.render(<BrowserRouter>
        <React.Fragment>      
                <Route exact path="/" component={LogInForm} />
                <Route exact path="/users" component={UsersForm} />
    </React.Fragment>
</BrowserRouter>, document.getElementById('root'));
}



render();
registerServiceWorker();
