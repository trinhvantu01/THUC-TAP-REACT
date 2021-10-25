export const addUser = (data) =>{
    return{
        type : "ADD_USER",
        data:{
            name: data.name,
            email: data.email,
        },
    };
};

export const editUser = (userId,data)=>{
    return{
        type: "EDIT_USER",
        data:{
            name: data.name,
            email: data.email,
            userId: userId,
        },
    };
};

export const saveUser = (data)=>{
    return{
        type: "SAVE_USER",
        data:{
            name: data.name,
            email: data.email,
            userId: data.id ?? 0,
        },
    };
};


export const deleteUser = (userId)=>{
    return{
        type: "DELETE_USER",
        userId: userId,

    };
};

export const listUser = ()=>{
    return dispatch => {
     fetch("http://localhost:3000/api/user/list").then(res => res.json()).then(
         (result)=>{ dispatch( fetchUsers(result))},
         (error)=> {dispatch(handlerError(error))}
     );
    }
      
};
export const handlerError = (error) =>{
    return{
        type: 'API_ERROR',
        message : error
    }
}
const fetchUsers = (users) =>{
    return {
         type: 'LIST',
         users: users
    }
}