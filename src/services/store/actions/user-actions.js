import $ from 'jquery';
import { LOGIN, LOGIN_FAILED } from '../constants';
import csrftoken from '../../../utils/getCSRFCookie';

export const login = (credentials) => dispatch =>{
    $.ajax({
        url:'api/auth/login/',
        type:"POST",
        data:credentials,
        headers:{
            'X-CSRFTOKEN':csrftoken
        },
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