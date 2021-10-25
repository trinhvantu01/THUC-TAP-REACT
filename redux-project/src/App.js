import './App.css';
import React,{Component} from 'react';
import {connect} from "react-redux";
import {deleteUser,saveUser,editUser, addUser, listUser} from './actions/index'

export class App extends Component{
  constructor (props, context){
    super (props, context);
    this.handleChange = this.handleChange.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }
  saveUser(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let userId = document.getElementById("user_id").value;
    if(name == '' || name == undefined){
      alert("Vui lòng nhập tên đầy đủ của bạn");
      return false;
    }
    if (email == '' || email == undefined){
      alert("Vui lòng nhập email đầy đủ của bạn");
      return false;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validateEmail = re.test(String(email).toLowerCase());
     if( validateEmail === false){
     alert('email của bạn không hợp lệ');
  return false;
}
    this.props.dispatch(saveUser({name: name, email: email, id: userId}));
  }
  handlerEdit(userId){
    let users = this.props.users;
    for(let i = 0; i< users.length; i++ ){
      let user = users[i];
      if(user.id == userId){
        document.getElementById('name'). value = user.name;
        document.getElementById('email'). value = user.email;
        document.getElementById('user_id'). value = userId;
      }
    }
  }

  editUser(userId,event){
    this.props.dispatch(editUser(userId,event))
  }

  deleteUser(userId){
    this.props.dispatch(deleteUser(userId));
  }
  render(){
    const users = this.props.users;
    return(
    <div className="App">
      <div className="Container">
        <h1> React-Redux</h1>
        <label>Name</label>
        <input type="text" id="name" placeholder="Enter Name"/>
        <input type="hidden" id="user_id"/>
        <label> Email Address</label>
        <input type="email" id="email" name="email" placeholder="Enter email"/>
        <button className="btn btn-success" onClick={this.saveUser}> Save</button>
        <table  className="table table-bordered">
          <thead>
            <tr>
              <th>No</th> 
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>  
        <tbody>
          {users.map((user,key)=>{
            return(
              <tr key ={user.id}>
                <td>{user.id}</td>
                <td className="name">{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-primary" type="edit" onClick={this.handlerEdit.bind(this,user.id)}>
                    Edit
                  </button>
                  <button className="btn btn-danger" type="delete" onClick={this.deleteUser.bind(this,user.id)}>
                  
                  Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
       
       
        </table>
        <button type="button" class="btn btn-warning">Chọn tất cả</button>
        <button className="btn btn-danger" type="delete">  Delete </button>


        
      </div>
    </div>
    );
  }
}

const mapStatesToProps = (state) =>{
  return{
    users:state.user,
  };
};

const mapDipatchToProps= (dispatch) =>{
  return{
    addUser:() =>dispatch(addUser()),
    editUser :(id,event)=> dispatch(editUser(id,event)),
    deleteUser: (id) => dispatch(deleteUser(id)),
    listUser:() =>dispatch(listUser())
  }
}
export default connect(mapStatesToProps,mapDipatchToProps) (App);
