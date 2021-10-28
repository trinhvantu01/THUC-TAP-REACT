import userApi from "../api/userAPI";

export const addUser = (data) => {
    return {
      
      type: "ADD_USER",
      data: {
        name: data.name,
        email: data.email,
      },
    };
  };

//   export const saveUser = (data) => {
//     return dispatch => {
//         fetch("http://localhost:3000/api/user/save",{
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(data)
//         }).then(res => res.json()).then(
//             (result) => { dispatch(fetchuser(result))},
//             (error) => { dispatch(handlerError(error)) }
//         );
//     }
// };

  export const editUser = (userId, data) => {
    return {
      type: "EDIT_USER",
      data: {
        name: data.name,
        email: data.email,
        userId: userId,
      },
    };
  };
  
  export const deleteUser = (userId) => {
    return {
      type: "DELETE_USER",
      userId: userId,
    };
  };

//   function addProduct(ctx) {
//     try {
//         const postData = ctx.request.body
//         addUser(postData)
//         ctx.status = 201
//         return (ctx.body = {
//             success: true,
//         })
//     } catch (e) {
//         return (ctx.body = {
//             success: false,
//             error: e.message,
//         })
//     }
// }
  
  export const listUser = () => async(dispatch)=> {
    try {
      const {data} = await userApi.getAll();
      // console.log(data);
      dispatch({type : "LIST_USER",payload:data});
    } catch (error){
      console.log(error);
    }
  };
  
//   module.exports = {
 
//     addProduct,
// }
  