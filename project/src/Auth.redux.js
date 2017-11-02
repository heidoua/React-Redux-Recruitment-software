import axios from 'axios';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const USER_DATA = 'USER_DATA';

const initState = {
    isAuth: false,
    user:'Fang',
    age: 20
};

export function auth(state=initState, action){
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                isAuth: true 
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false 
            }
        case USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export const userData = (data) => ({
    type: USER_DATA,
     payload: data
});

export const login = () => ({
    type: LOGIN
});

export const logout = () => ({
    type: LOGOUT
});

export const getUserData = () => (dispatch) => {
    return axios.get('./data').then(res => {
        if (res.status === 200){ 
            dispatch(userData(res.data));
        }
    });
};