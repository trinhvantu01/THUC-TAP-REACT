const listUser =[
    // {id: 1, name: "Văn Tú", email: "vantu@gmail.com"},
    // {id: 2, name: "Văn Tú2", email: "vantu2@gmail.com"},
    // {id: 3, name: "Văn Tú3", email: "vantu3@gmail.com"},
    // {id: 4, name: "Văn Tú4", email: "vantu4@gmail.com"},
];

const getIndexOfUser = (users,userId)=>{
    for(var i = 0; i < users.length; i++){
        var user = users[i];
        if(user.id == userId){
            return i;
        }
    }
    return -1;
};

export const userReducer =(state = listUser,action)=>{
    let users = state.slice();
    var nexUserId = users.length + 1;
    switch (action.type){
        case "SAVE_USER":
            if(action.data.userId){
                var index = getIndexOfUser(users,action.data.userId);
                if(index !== -1){
                    users[index].name = action.data.name;
                    users[index].email = action.data.email;
                }
            } else{
            users.push({
                id:nexUserId,
                name: action.data.name,
                email: action.data.email,
            });
        }
            break;
        case "ADD_USER":
            users.push({
                id:nexUserId,
                name: action.data.name,
                email: action.data.email,
            });
            break;

            case "EDIT_USER":
                var index = getIndexOfUser(users,action.data.userId);
                if( index !== -1){
                    users[index].name = action.data.name;
                    users[index].email = action.data.email;

                }
                break;

                case "DELETE_USER":
                    var index = getIndexOfUser(users,action.userId);
                    if(index !== -1){
                        users.splice(index,1);
                    }
                    break;
                    
             case "LIST_USER" :
                 users = action.users;
                 break;
                 default:
                     break; 
            
    }
    return users;
};
export default userReducer;

