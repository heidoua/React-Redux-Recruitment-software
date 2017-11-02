import axios from 'axios';

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';

const initState = {
    msg   : '',
    pwd   : '',
    user  : '',
    type  : '',
    isAuth: false
}; 

// reducer
export function user(state=initState, action){
    switch(action.type){
        case REGISTER_SUCCESS:
            return{
                ...state,
                msg: '',
                isAuth: true,
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

function registerSuccess(data){
    return {
        data,
        type: REGISTER_SUCCESS
    }
}

export function register({user, pwd, repeatPwd,type}){
    if (!user || !pwd || !type){
        return errorMsg('用户名、密码必须输入！！！');
    }

    if (pwd != repeatPwd){
         return errorMsg('密码和确认密码不同！！！');
    }

    return dispatch => {
        return axios.post('/user/register', {user, pwd, type}).then(res => {
            if (res.status === 200 && res.code === 0){
                dispatch(registerSuccess({user, pwd, type}));
            }else{ 
                dispatch(errorMsg(res.data.msg));
            }
        });
    }
}