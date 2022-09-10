import { ACTION_TYPE } from "./contextType";

const contextReducer =(state, action)=>{
    switch (action.type) {
        case ACTION_TYPE.DELETE_USER:
            return {
                ...state,
                users:state.users?.filter((user)=>user.id!==action.payload)
            }
            break;
            case ACTION_TYPE.ADD_USER:
                return {
                    ...state,
                    users:[...state.users,action.payload]
                }
            
                break;
    
        default:
            break;
    }
}
export default contextReducer;