import axios from 'axios';
import { getRedirectPath } from '../util';

const ERROR_MSG = 'ERROR_MSG';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

const initState = {
    msg       : '',
    pwd       : '',
    user      : '',
    type      : '',
    isAuth    : false,
    redirectTo: ''
}; 

// reducer
export function user(state=initState, action){
    switch(action.type){
        case REGISTER_SUCCESS:
            return{
                ...state,
                msg       : '',
                isAuth    : true,
                redirectTo: getRedirectPath(action.data),
                ...action.data
            }; 
        case LOGIN_SUCCESS:
            return{
                ...state,
                msg       : '',
                isAuth    : true,
                redirectTo: getRedirectPath(action.data),
                ...action.data
            }; 
        case ERROR_MSG:
            return {
                ...state,
                isAuth: false,
                msg: action.msg
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

function loginSuccess(data){
    return {
        data,
        type: LOGIN_SUCCESS
    }
}

function registerSuccess(data){
    return {
        data,
        type: REGISTER_SUCCESS
    }
}

// 登录
export function login({user, pwd}){
    if (!user || !pwd){
        return errorMsg('用户名、密码必须输入！！！');
    }

    return dispatch => {
        return axios.post('/user/login', {user, pwd}).then(res => {
            if (res.status === 200 && res.data.code === 0){
                dispatch(loginSuccess(res.data.data));
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
                dispatch(registerSuccess({user, pwd, type}));
            }else{ 
                dispatch(errorMsg(res.data.msg));
            }
        });
    }
}