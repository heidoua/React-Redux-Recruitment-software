import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';

var AnimateWrapper = function (_React$PureComponent) {
    _inherits(AnimateWrapper, _React$PureComponent);

    function AnimateWrapper() {
        _classCallCheck(this, AnimateWrapper);

        return _possibleConstructorReturn(this, (AnimateWrapper.__proto__ || Object.getPrototypeOf(AnimateWrapper)).apply(this, arguments));
    }

    _createClass(AnimateWrapper, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                displayType = _props.displayType,
                visible = _props.visible;

            return React.createElement(
                'div',
                { className: className + ' animate', style: { display: visible ? displayType : 'none' } },
                visible && this.props.children
            );
        }
    }]);

    return AnimateWrapper;
}(React.PureComponent);

export default AnimateWrapper;

AnimateWrapper.defaultProps = {
    className: '',
    displayType: 'flex'
};