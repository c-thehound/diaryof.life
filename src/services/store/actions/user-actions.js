import $ from 'jquery';
import { BASE_URL } from '../settings';
import { LOGIN, LOGIN_FAILED } from '../constants';

export const login = (credentials) => dispatch =>{
    $.ajax({
        url:BASE_URL+'api/auth/login/',
        type:"POST",
        data:credentials,
        success:function(response){
            dispatch({
                type:LOGIN,
                payload:response
            })
        },
        error:function(error){
            dispatch({
                type:LOGIN_FAILED,
                payload:error
            })
        }
    })
}