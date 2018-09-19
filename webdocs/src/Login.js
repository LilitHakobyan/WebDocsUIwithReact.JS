import React  from 'react';
import "./Login.css"
import './bootstrap.min.css';
import axios from 'axios';
import WebDocsLogo from './images/WebDocsLogo-white.png'

var access_token=null;
var refresh_token=null;
class Login extends React.Component {

    constructor(props){
      super(props);
      
      this.state={
        username: '',
        password: '',
        loading: false,
      };
      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(event){
        this.setState({
            [event.target.name]: event.target.value           
        });
    }
    handleSubmit(event) { 
        event.preventDefault();
        console.log("this.state", this.state);
        console.log("this.props", this.props);
        this.LoginCheck(this.state);
    }

    LoginCheck(props) {
        var api_url='http://localhost:55029/api/oauth2/token';//https://docm-qa-wdwtest.helpsysdev.com/api/oauth2/token
        var username = props.username;
        var password = props.password;
        var that = this;
          
       let data = `grant_type=password&client_id=custom&password=${password}&username=${username}`;
        
       let headers = {
           'Content-Type': 'application/x-www-form-urlencoded'
       }
       this.setState({loading: true});
         axios.post(api_url, data,{ headers:headers})
               .then((response) => {
                   console.log(response);
                   if(response.status===200) {
                       debugger
                        access_token=response.data.access_token;
                        refresh_token=response.data.refresh_token; 
                        that.props.history.push("/users");
                        that.setState({loading: false});
                       // if( access_token != null) return;                      
                       }                                                      
               })
               .catch((error) => {
                  console.log("error",error);
               })
   
     }

    render () {
      return (this.state.loading ? "Loadding..." :
      <form onSubmit={this.handleSubmit} >
      <div className="formdiv">
            <div className="login__input">
                <label htmlFor="username" >Username:</label>
                <input type="text" name="username" className="input login-form-item" value={this.state.username} onChange={this.onChange} required/>
            </div>
            <div className="login__input">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" className="input login-form-item" value={this.state.password} onChange={this.onChange} required/>
            </div>            
            <input className="button-green" type="submit" value="LogIn"/>
            </div>
        </form>)
    };
    
  }

function LogInForm (props) {
    return <div className="LoginForm">
        <img className="webdocs-logo" src={WebDocsLogo} alt=""/>
        <Login {...props}/>
        <div className="login-form-item">
					<i className="fa fa-angle-double-right fa-color-white"></i>
					<a href="signup.aspx">Register an account</a>
				</div>
        <div className="login-form-item">
					<i className="fa fa-angle-double-right fa-color-white"></i>
					<a href="signup.aspx">Forgot your password?</a>
				</div>      
        <div className="login-footer">
					©&nbsp;<a href="http://www.helpsystems.com">HelpSystems</a>, 2018. Version 2.1.1.132
				</div>
        </div>;
}

export default LogInForm;