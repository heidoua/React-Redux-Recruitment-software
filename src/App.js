import React, { Component } from 'react';
class App extends Component{
    render(){
        const store = this.props.store;
        const num = store.getState();
        const {increase, decrease} = this.props;
        
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