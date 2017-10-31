import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import Swipeout from 'rc-swipeout/es/Swipeout';

var SwipeAction = function (_React$Component) {
    _inherits(SwipeAction, _React$Component);

    function SwipeAction() {
        _classCallCheck(this, SwipeAction);

        return _possibleConstructorReturn(this, (SwipeAction.__proto__ || Object.getPrototypeOf(SwipeAction)).apply(this, arguments));
    }

    _createClass(SwipeAction, [{
        key: 'render',
        value: function render() {
            return React.createElement(Swipeout, this.props);
        }
    }]);

    return SwipeAction;
}(React.Component);

export default SwipeAction;