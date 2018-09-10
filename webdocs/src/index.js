import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route,withRouter} from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import LogInForm from './Login';

function LoginWrapper () {
  return  <LogInForm  OnLogin={LoginCheck} />
}

 function LoginCheck(loginstate) {
     console.log("LoginCheck");
     console.log(loginstate);
 }

function render () { 
    ReactDOM.render(<BrowserRouter>
        <React.Fragment>
                {/* <Route exact path="/" component={LoginWrapper} /> */}
                <Route exact path="/login" component={LoginWrapper} />
    </React.Fragment>
</BrowserRouter>, document.getElementById('body'));
}
render();
registerServiceWorker();
