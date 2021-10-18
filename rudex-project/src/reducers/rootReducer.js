const initState={
    users:[
        {id: 1, name:'vantu',email:"tu@gmail.com"},
        {id: 2, name:'trinhtu',email:"trinhtu@gmail.com"}
    ]
}
const rootReducer = (state = initState,action) =>{


    switch(action.type) {
        case 'DELETE_USER':
            console.log(action.payload);
        let users = state.users;
        users = users.filter(item =>item.id !== action.payload.id)
            return {
                ...state,users
            };

        case 'ADD_USER':
            // let users = state.users;
            // console.log(action.payload);    
            // console.log(state.users);    
            return{
                ...state,users: [...state.users,action.payload]
            }
        default:
            return state;
      }

}
export default rootReducer;