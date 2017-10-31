import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View } from 'react-native';
import varibles from '../style/themes/default.native';

var WingBlank = function (_React$Component) {
    _inherits(WingBlank, _React$Component);

    function WingBlank() {
        _classCallCheck(this, WingBlank);

        return _possibleConstructorReturn(this, (WingBlank.__proto__ || Object.getPrototypeOf(WingBlank)).apply(this, arguments));
    }

    _createClass(WingBlank, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                size = _props.size,
                style = _props.style,
                children = _props.children;

            var margin = varibles['h_spacing_' + size];
            return React.createElement(
                View,
                { style: [{ marginLeft: margin, marginRight: margin }, style] },
                children
            );
        }
    }]);

    return WingBlank;
}(React.Component);

WingBlank.defaultProps = {
    size: 'lg'
};
export default WingBlank;