import axios from 'axios';
import { getRedirectPath } from '../util';

const LOAD_DATA = 'LOAD_DATA';
const ERROR_MSG = 'ERROR_MSG';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
// const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

const initState = {
    msg       : '',
    user      : '',
    type      : '',
    // isAuth    : false,
    redirectTo: ''
}; 

function authSuccess(data){
    return {
        type: AUTH_SUCCESS,
        payload: data
     }
}

// reducer
export function user(state=initState, action){
    switch(action.type){
        case AUTH_SUCCESS:
            return{
                ...state,
                msg       : '',
                // isAuth    : true,
                redirectTo: getRedirectPath(action.payload),
                ...action.payload
            };
        case ERROR_MSG:
            return {
                ...state,
                isAuth: false,
                msg: action.msg
            };
        case LOAD_DATA:
            return {
                ...state,
                ...action.payload
            };
         default:
            return state;
    }
}

// action
function errorMsg(msg){
    return {
        msg,
        type: ERROR_MSG
    }
}

// function loginSuccess(data){
//     return {
//         data,
//         type: LOGIN_SUCCESS
//     }
// }

export function loadData(userInfo){
    return {
        type: LOAD_DATA,
        payload: userInfo
    };    
}

// function registerSuccess(data){
//     return {
//         data,
//         type: REGISTER_SUCCESS
//     }
// }

export const update = (data) => (dispatch) => {
    axios.post('user/update', data).then(res => {
        if (res.status === 200 && res.data.code === 0){
            dispatch(authSuccess(res.data.data));
        }else{
            dispatch(errorMsg(res.data.msg));
        }
    });
}

// 登录
export function login({user, pwd}){
    if (!user || !pwd){
        return errorMsg('用户名、密码必须输入！！！');
    }

    return dispatch => {
        return axios.post('/user/login', {user, pwd}).then(res => {
            if (res.status === 200 && res.data.code === 0){
                dispatch(authSuccess(res.data.data));
            }else{
                dispatch(errorMsg(res.data.msg));
            }
        });
    }
}

// 注册
export function register({user, pwd, repeatPwd,type}){
    if (!user || !pwd || !type){
        return errorMsg('用户名、密码必须输入！！！');
    }

    if (pwd != repeatPwd){
         return errorMsg('密码和确认密码不同！！！');
    }

    return dispatch => {
        return axios.post('/user/register', {user, pwd, type}).then(res => {
            if (res.status === 200 && res.data.code === 0){
                dispatch(authSuccess({user, type}));
            }else{ 
                dispatch(errorMsg(res.data.msg));
            }
        });
    }
}