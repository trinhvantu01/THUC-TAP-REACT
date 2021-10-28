import "./App.css";
import React,{useState,useEffect} from 'react';
import {connect,useSelector} from "react-redux";
import {deleteUser,saveUser,editUser, addUser, listUser} from './actions/index'
import { useForm } from "react-hook-form";



function App(props) {
  let { dispatch } = props;
  const users = useSelector((state) => state.userReducer);
  console.log("user",users);
  const [value, setValue] = useState("");
  const [userSelected, setUserSelected] = useState(null);

  const { register, handleSubmit } = useForm();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const validateEmail = (email, userId) => {
    let message = "";

    if (email == "" || email == undefined) {
      return "Vui lòng nhập email đầy đủ của bạn";
    }
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validateEmail = re.test(String(email).toLowerCase());
    if (validateEmail == false) {
      return "Vui lòng nhập thông tin email chính xác của bạn!!!";
    }

    if (users.length) {
      for (let i = 0; i < users.length; i++) {
        if (userId == 0 && users[i].email == email) {
          return "Email của bạn bị trùng lặp, vui lòng  nhập lại email của bạn1";
        }
        if (userId != 0) {
          if (userId != users[i].id && users[i].email == email) {
            return "Email của bạn bị trùng lặp, vui lòng  nhập lại email của bạn2";
          }
        }
      }
    }
    return message;
  };
  // const handleSaveUser = (values) => {
  //   console.log("values", values);
  //   let message = null;
  //   const checkEmail = users.find(
  //     (user) => user.email.toLowerCase() === values.email.toLowerCase()
  //   );
  //   if (checkEmail) {
  //     message = "Email của bạn bị trùng lặp, vui lòng nhập lại email của bạn3";
  //   }
  //   if (message) {
  //     alert(message);
  //     return false;
  //   }

  //   dispatch(saveUser(values));
  // };
  const handleEditUser = (userId) => {};
  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };
 

   useEffect(()=>{
     dispatch(listUser())
   },[])
     
     
 
  return (
    <div className="App">
      
      <div className="container">
        <h1>React-redux</h1>
        <form
          // onSubmit={
          //   userSelected
          //     ? handleSubmit(handleEditUser)
          //     : handleSubmit(handleSaveUser)
          // }
        >
          <label for="exampleInputEmail1">Name</label>
          <input type="text" className="form-control"{...register("name")} placeholder="Enter Name" />
          <label for="exampleInputEmail1">Age</label>
          <input type="text" className="form-control"{...register("age")} placeholder="Enter Age" />

          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" {...register("email")} placeholder="Enter Email" />
          <button type="submit" className="btn btn-success">Save</button>
       
        </form>
        <table  className="table table-bordered">
          <thead>
            <tr>
            <th>No.</th>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.users.map((user, index) => {
              return (
                
                <tr key={`user-${index}`}>
                     <input type="checkbox" aria-label="Checkbox for following text input"></input>
                  <td>{user.id}</td>
                  <td className="name">{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn btn-primary"
                      onClick={() => {
                        setUserSelected(user);
                      }}
                    >
                      Edit
                    </button>
                    <button className="btn btn-danger"
                      type="delete"
                      onClick={() => {
                        handleDeleteUser(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
         
        </table>
        <button type="button" class="btn btn-warning">Chọn tất cả</button>
        <button type="button" class="btn btn-danger">Delete</button>
      </div>
      
    </div>
  );
}
const mapStatesToProps = (state) => ({
  users: state.user,
});
export default connect(mapStatesToProps)(App);