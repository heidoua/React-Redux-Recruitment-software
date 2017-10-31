import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Text } from 'react-native';
var iconMap = {
    'check-circle': '\uE630',
    'check': '\uE632',
    'check-circle-o': '\uE631',
    'cross-circle': '\uE62E',
    'cross': '\uE633',
    'cross-circle-o': '\uE62F',
    'up': '\uE61E',
    'down': '\uE61D',
    'left': '\uE620',
    'right': '\uE61F',
    'ellipsis': '\uE647',
    'loading': '\uE64D'
};

var Icon = function (_React$Component) {
    _inherits(Icon, _React$Component);

    function Icon() {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    _createClass(Icon, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                size = _props.size,
                type = _props.type,
                color = _props.color;

            var sizeMap = { 'xxs': 15, 'xs': 18, 'sm': 21, 'md': 22, 'lg': 36 };
            var fontSize = typeof size === 'string' ? sizeMap[size] : size;
            var TextIconStyle = {
                fontSize: fontSize,
                color: color,
                fontFamily: 'anticon',
                flexDirection: 'row'
            };
            return React.createElement(
                Text,
                { style: TextIconStyle },
                iconMap[type] || type
            );
        }
    }]);

    return Icon;
}(React.Component);

export default Icon;

Icon.defaultProps = {
    size: 'md',
    color: '#000'
};