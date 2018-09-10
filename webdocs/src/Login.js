import React  from 'react';
import "./Login.css"
import './bootstrap.min.css';
import WebDocsLogo from './images/WebDocsLogo-white.png'
class Login extends React.Component {

    constructor(props){
      super(props);
      this.state={
        username: '',
        password: ''
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

        this.props.onLogin(this.state);
        
    }

    render () {
      return <form onSubmit={this.handleSubmit} >
            <div className="login__input">
                <label htmlFor="username" >Username:</label>
                <input type="text" name="username" className="input login-form-item" value={this.state.username} onChange={this.onChange}/>
            </div>
            <div className="login__input">
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" className="input login-form-item" value={this.state.password} onChange={this.onChange}/>
            </div>            
            <input className="button-green" type="submit" value="LogIn"/>
        </form>
    };
    
  }

function LogInForm ({OnLogin}) {
    return <div className="LoginForm">
        <img className="webdocs-logo" src={WebDocsLogo} alt=""/>
        <Login  onLogin={OnLogin} />
        <div className="login-footer">
					©&nbsp;<a href="http://www.helpsystems.com">HelpSystems</a>, 2018. Version 2.1.1.132
				</div>
        </div>;
}

export default LogInForm;