const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export function counter(state = 0, action){
    switch(action.type){
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default: 
            return state;
    }
}

export const decrease = () => ({
    type: DECREASE
});

export const increase = () => ({
    type: INCREASE
})