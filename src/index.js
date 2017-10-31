 import { createStore } from 'redux';
 
 function counter(state=0, action){
    switch(action.type){
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            return state;
    }
 }

 function listener(){
    //  获取state
     const currState = store.getState();
     console.log(`现在的值为${currState}`);   
}

//  新建store
 const store = createStore(counter);

 store.subscribe(listener);

//  派发事件，传递action
 store.dispatch({
     type: 'INCREASE'
 });
 
