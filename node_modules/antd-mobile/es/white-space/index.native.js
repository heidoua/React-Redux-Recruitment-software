import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View } from 'react-native';
import varibles from '../style/themes/default.native';

var WhiteSpace = function (_React$Component) {
    _inherits(WhiteSpace, _React$Component);

    function WhiteSpace() {
        _classCallCheck(this, WhiteSpace);

        return _possibleConstructorReturn(this, (WhiteSpace.__proto__ || Object.getPrototypeOf(WhiteSpace)).apply(this, arguments));
    }

    _createClass(WhiteSpace, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                size = _props.size,
                style = _props.style;

            return React.createElement(View, { style: [{ height: varibles['v_spacing_' + size] }, style] });
        }
    }]);

    return WhiteSpace;
}(React.Component);

WhiteSpace.defaultProps = {
    size: 'md'
};
export default WhiteSpace;