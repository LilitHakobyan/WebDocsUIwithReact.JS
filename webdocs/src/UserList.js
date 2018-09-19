import React from 'react';
import axios from 'axios';
import './UserList.css';
import './bootstrap.min.css';
import acceptpic from './images/accept.png';
import crosspic from './images/cross.png';
import editpic from './images/edit.png';
import closepic from './images/close.png';
import PropTypes from 'prop-types';

const User = (props) => {
    let active;
    let admin;
    if(props.isActive===true)
       active=acceptpic;
       else
       active=crosspic;
       if(props.isAdministrator===true)
       admin=acceptpic;
       else
       admin=crosspic;

  return (  
    <tr>
    <td>
    <a id="edituser" title="Edit User" className="editlink actionButton" href="">
							    <i ><img src={editpic} alt="" className="fa fa-lg fa-edit fa-webdocs-dark-blue"/></i>	</a>
    <a id="deleteuser" title="Delete User" className="delete actionButton" href="">
                    <i ><img src={closepic} alt="" className="fa fa-lg fa-close fa-webdocs-dark-blue"/> </i>	</a>
      </td>
    <td><a href="" title="Edit User">
               {props.fullName} 
				</a>
      </td>
    <td>{props.emailAddress}</td>
    <td><a href="" className="activ" ><img src={active} alt=""/> </a></td>
    <td ><a href="" className="admin" ><img  src={admin} alt=""/></a></td>    
    </tr>
  );
};

User.propTypes = {
  fullName: PropTypes.string,
  emailAddress: PropTypes.string,
  isActive:PropTypes.bool,
  isAdministrator:PropTypes.bool
};

const UserList = (props) => {
  return (
  
    <div className="page-content">
      <header className="page-header">
			Users
		</header>
    <div className="row">
      <div className="col s12 board">
        <table className="rjs-table">
          <thead>
          <tr className="header-row">
           <th scope="col" className="thaction">Actions</th>
           <th scope="col">Name</th>
           <th scope="col">Email Address</th>
           <th scope="col" className="thwidth">Active?</th>
           <th scope="col" className="thwidth">Admin?</th>
          </tr>
          </thead>       
          <tbody>
            {props.users.map(user => <User {...user} key={user.id} />)}
           </tbody>
         </table>
      </div>
    </div>
  </div>
  )
}
UserList.propTypes = {
  users: PropTypes.array
};
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
UsersForm.propTypes = {
  users: PropTypes.array
};

export default UsersForm;
