import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect } from 'react-router-dom';
import {withRouter } from 'react-router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import LogInForm from './Login';
import axios from 'axios';
import UsersForm from './UserList';


var access_token=null;
var refresh_token=null;

//  function LoginWrapper(props) {
//     return (
//     <LogInForm  OnLogin={LoginCheck} /> 
//   );            
//  }

 const UserWrapper= withRouter(({history}) => 
    history.push('/users')
   );
  

class userRender extends React.Component {
    render() {
        return (
            <div>
             <Redirect to='/users'/> 
             </div>
        );
    }
  }
function rendering(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
       return <UsersForm />
    }
    return <LogInForm />;
  }

//  function LoginCheck (props) {
//      var api_url='http://localhost:55029/api/oauth2/token';
//      var username = props.username;
//      var password = props.password;
       
//     let data = `grant_type=password&client_id=custom&password=${password}&username=${username}`;
     
//     let headers = {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }
//       axios.post(api_url, data,{ headers:headers})
//             .then((response) => {
//                 console.log(response);
//                 debugger
//                 if(response.status===200) {    
//                      access_token=response.data.access_token;
//                      refresh_token=response.data.refresh_token; 
//                      if( access_token != null)
//                      this.withRouter("/users");
//                     //  return ReactDOM.render(                   
//                     //     <UsersForm atoken={access_token} rtoken={refresh_token} />                   
//                     //       , document.getElementById('root'))
//                     }                                  
//                  else
//                  {
//                     render();
//                  }
                 
//             })
//             .catch((error) => {
//                console.log("error",error);
//             })

//   };
 
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
