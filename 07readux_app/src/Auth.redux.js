const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export function auth(state={isAuth: false, user:'Fang'}, action){
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
        default:
            return state;
    }
}

export const login = () => ({
    type: LOGIN
});

export const logout = () => ({
    type: LOGOUT
});