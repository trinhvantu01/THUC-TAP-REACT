// const listUser =[
//     {id: 1, name: "Văn Tú", email: "vantu@gmail.com"},
//     {id: 2, name: "Văn Tú2", email: "vantu2@gmail.com"},
//     {id: 3, name: "Văn Tú3", email: "vantu3@gmail.com"},
//     {id: 4, name: "Văn Tú4", email: "vantu4@gmail.com"},
// ];

// const jsonUsers = require("../../api/user.json")

const getIndexOfUser = (users, userId) => {
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      if (user.id == userId) {
        return i;
      }
    }
    return -1;
  };
  
  const initUser = {users:[]};
  
  const userReducer = (state = initUser, action) => {
    // let users = state.slice();
    // let nexUserId = users.length + 1;
    const { type, payload } = action;
    switch (type) {
      // case "SAVE_USER":
      //   return [...state, { ...payload, id: nexUserId }];
      // case "ADD_USER":
      //   users.push({
      //     id: nexUserId,
      //     name: action.data.name,
      //     age: action.data.age,
      //     email: action.data.email,
      //   });
      //   break;
      // case "EDIT_USER":
      //   var index = getIndexOfUser(users, action.data.userId);
      //   if (index !== -1) {
      //     users[index].name = action.data.name;
      //     users[index].age = action.data.age;
      //     users[index].email = action.data.email;
      //   }
      //   break;
      // case "DELETE_USER":
      //   var index = getIndexOfUser(users, action.userId);
      //   if (index !== -1) {
      //     users.splice(index, 1);
      //   }
      //   break;
      case "LIST_USER":
        // users = action.payload;
        // console.log(payload);
        return {
          ...state,users : payload
        }; 
    
      default:
        return state;
    }
    // return users;
  };
  
  export default userReducer;