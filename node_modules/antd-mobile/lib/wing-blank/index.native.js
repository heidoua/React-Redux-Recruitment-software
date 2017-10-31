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

var _default = require('../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var WingBlank = function (_React$Component) {
    (0, _inherits3['default'])(WingBlank, _React$Component);

    function WingBlank() {
        (0, _classCallCheck3['default'])(this, WingBlank);
        return (0, _possibleConstructorReturn3['default'])(this, (WingBlank.__proto__ || Object.getPrototypeOf(WingBlank)).apply(this, arguments));
    }

    (0, _createClass3['default'])(WingBlank, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                size = _props.size,
                style = _props.style,
                children = _props.children;

            var margin = _default2['default']['h_spacing_' + size];
            return _react2['default'].createElement(
                _reactNative.View,
                { style: [{ marginLeft: margin, marginRight: margin }, style] },
                children
            );
        }
    }]);
    return WingBlank;
}(_react2['default'].Component);

WingBlank.defaultProps = {
    size: 'lg'
};
exports['default'] = WingBlank;
module.exports = exports['default'];