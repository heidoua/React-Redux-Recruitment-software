import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increase, decrease, increaseAsy } from './index.redux';
class App extends Component{
    render(){
        return (
            <div>
                <div>现在的值为{this.props.num}</div>
                <button onClick={this.props.increase}>+</button>
                <button onClick={this.props.decrease}>-</button>
                <button onClick={this.props.increaseAsy}>++</button>
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        num: state
    }
}

export default connect(
    mapStateToProps, 
    {increase, decrease, increaseAsy}
)(App);