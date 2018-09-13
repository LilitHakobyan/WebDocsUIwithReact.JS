import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route,withRouter} from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import LogInForm from './Login';
import axios from 'axios';
import UsersForm from './UserList';

 function LoginWrapper () {
   return  <LogInForm  OnLogin={LoginCheck} />
 }
  const UserWrapper= withRouter(({history}) => 
    history.push('/users')
);

 function LoginCheck(props) {
     var api_url='https://docm-qa-wdwtest.helpsysdev.com/api/oauth2/token';
     var username = props.username;
     var password = props.password;

     let data = JSON.stringify({
        grant_type:'password',
        client_id:'webdocstest', 
        password: password,
        username: username
    })
    let headers = {
        'Content-Type': 'application/json'
    }
    axios.post(api_url, data, {headers: headers})
            .then((response) => {
               // dispatch({type: FOUND_USER, data: response.data[0]})
            })
            .catch((error) => {
              //  dispatch({type: ERROR_FINDING_USER})
            })
  };

function render () { 
    ReactDOM.render(<BrowserRouter>
        <React.Fragment>      
                <Route exact path="/" component={LoginWrapper} />
                <Route exact path="/users" component={UsersForm} />
    </React.Fragment>
</BrowserRouter>, document.getElementById('body'));
}
render();
registerServiceWorker();
