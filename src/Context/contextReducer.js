import { ACTION_TYPE } from "./contextType";

const contextReducer =(state, action)=>{
    switch (action.type) {
        case ACTION_TYPE.DELETE_USER:
            const filteredUsers = state.users?.filter((user)=>user.id!==action.payload);
            localStorage.setItem('usersList', JSON.stringify(filteredUsers));
            return {
                ...state,
                users:filteredUsers
            }
            case ACTION_TYPE.ADD_USER:
                localStorage.setItem('usersList', JSON.stringify([...state.users,action.payload]));
                return {
                    ...state,
                    users:[...state.users,action.payload]
                }
                case ACTION_TYPE.GET_USERS:
                 const userList =JSON.parse(localStorage.getItem('usersList'));
                 return {
                    ...state,
                    users:userList
                } 


    
        default:
            break;
    }
}
export default contextReducer;