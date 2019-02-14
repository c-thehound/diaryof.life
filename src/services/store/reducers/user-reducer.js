import { LOGIN, LOGIN_FAILED } from "../constants";

const initialState = {
    userdata:{},
    error:{}
}

export default function(state = initialState,action){
    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                userdata:action.payload
            }
        case LOGIN_FAILED:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
}