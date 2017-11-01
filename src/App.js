import React, { Component } from 'react';
import { increase, decrease } from './index.redux';

class App extends Component{
    render(){
        const store = this.props.store;
        const num = store.getState();
        return (
            <div>
                <div>现在的值为{num}</div>
                <button onClick={() => store.dispatch(increase())}>+</button>
                <button onClick={() => store.dispatch(decrease())}>-</button>
            </div>
        );
    };
}

export default App;