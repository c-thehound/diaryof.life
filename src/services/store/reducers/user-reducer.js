import { LOGIN, LOGIN_FAILED } from "../constants";

const initialState = {
    login:{},
    error:null
}

export default function(state = initialState,action){
    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                login:action.payload
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