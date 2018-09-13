import React from 'react';
import axios from 'axios';
import './App.css';
import './bootstrap.min.css';

const User = (props) => {
    console.log(props.isActive);
    let active;
    let admin;
    if(props.isActive===true)
       active="V";
       else
       active="X";
       if(props.isAdministrator===true)
       admin="V";
       else
       admin="X";

  return (  
    <tr>
    <td>
    <a id="edituser" title="Edit User" class="editlink actionButton" href="">
							    <i class="fa fa-lg fa-edit fa-webdocs-dark-blue"> V </i>
    <a id="deleteuser" title="Delete User" class="delete actionButton" href="">
                    <i class="fa fa-lg fa-close fa-webdocs-dark-blue"> X </i>
							</a>
			</a>
      </td>
    <td><a href="" title="Edit User">
               {props.fullName} 
				</a>
      </td>
    <td>{props.emailAddress}</td>
    <td>{active}</td>
    <td >{admin}</td>    
    </tr>
  );
};

const UserList = (props) => {
  return (
    <div className="container">
    <div className="row">
      <div className="col s12 board">
        <table id="simple-board">
          <thead>
          <tr className="header-row">
           <th>Actions</th>
           <th>Name</th>
           <th>Email Address</th>
           <th>Active?</th>
           <th>Admin?</th>
          </tr>
          </thead>       
          <tbody>
            {props.users.map(user => <User {...user} />)}
           </tbody>
         </table>
      </div>
    </div>
  </div>
  )
}

class UsersForm extends React.Component {
  state={
    users:[]
  };
  componentWillMount(){
    axios.get(`http://localhost:55029/api/users`)
    .then(resp => {
      this.setState({
        users: resp.data
   });
})
  }
  render() {
      return (
          <div>
              <UserList users={this.state.users}/>
          </div>
      );
  }
}

export default UsersForm;
