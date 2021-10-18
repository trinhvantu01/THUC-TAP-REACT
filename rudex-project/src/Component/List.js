import React, { Component } from 'react'
import { connect } from 'react-redux';
class List extends Component{

handleDelete = (user)=>{
    console.log('check delete,',user);
    this.props.deleteUser(user);
}

handleAdd = ()=>{
    this.props.addUser();
 
 
 }


    render(){
        // console.log('heheh', this.props.dataRedux);
        let listUsers = this.props.dataRedux;
        return(        
         
                       
            <div>
                {
                listUsers.map((item,index)=>{
                    return(                        
                      <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                       </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <button type="button" class="btn btn-primary">Edit</button>
                                <button type="button" class="btn btn-danger" onClick={()=>this.handleDelete(item)}  >Delete</button>
                                <button type="submit" className="btn btn-primary"  onClick={()=>this.handleAdd()}>Save</button>
     
                             </tr>
   
                        </tbody>
                      </table>
                    )
                })
                }
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
        addUser:() => dispatch({type: 'ADD_USER'}),
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (List);
// export default List;
