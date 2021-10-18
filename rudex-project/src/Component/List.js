import React, { Component } from 'react'
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
class List extends Component{
handleDelete = (user)=>{
    console.log('check delete,',user);
    this.props.deleteUser(user);
}
handleAdd = ()=>{
    const newData ={
        id:666,
        name:"tu",
        email:"abc@gmail.com"
    }
    // console.log(newData);
    this.props.addUser(newData);
 }
    render(){
        // console.log('heheh', this.props.dataRedux);
        let listUsers = this.props.dataRedux;
        return(                           
            <div>
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                listUsers.map((item,index)=>{
                    return(                        
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <button type="button" className="btn btn-primary">Edit</button>
                                <button type="button" className="btn btn-danger" onClick={()=>this.handleDelete(item)}  >Delete</button>
                                <button type="submit" className="btn btn-primary"  onClick={()=>this.handleAdd()}>Save</button>
                             </tr>
   
                    )
                })
                }
                </tbody>
                </table>
            </div>
         
       
                 
        )
    }


}

   

const mapStateToProps = (state) =>{
   return{
 dataRedux :state.users
}
}
const mapDispatchToProps =(dispatch) =>{
    return{
        deleteUser:(userDelete)=> dispatch({type:'DELETE_USER',payload:userDelete }),
        addUser:(newUser) => dispatch({type: 'ADD_USER',payload:newUser}),
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (List);
// export default List;
