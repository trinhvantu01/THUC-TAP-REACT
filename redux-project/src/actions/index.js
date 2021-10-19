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
    return{
         type:"LIST_USER",

    };
      
};