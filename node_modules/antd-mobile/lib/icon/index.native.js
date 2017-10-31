'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
    (0, _inherits3['default'])(Icon, _React$Component);

    function Icon() {
        (0, _classCallCheck3['default'])(this, Icon);
        return (0, _possibleConstructorReturn3['default'])(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Icon, [{
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
            return _react2['default'].createElement(
                _reactNative.Text,
                { style: TextIconStyle },
                iconMap[type] || type
            );
        }
    }]);
    return Icon;
}(_react2['default'].Component);

exports['default'] = Icon;

Icon.defaultProps = {
    size: 'md',
    color: '#000'
};
module.exports = exports['default'];