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

var WhiteSpace = function (_React$Component) {
    (0, _inherits3['default'])(WhiteSpace, _React$Component);

    function WhiteSpace() {
        (0, _classCallCheck3['default'])(this, WhiteSpace);
        return (0, _possibleConstructorReturn3['default'])(this, (WhiteSpace.__proto__ || Object.getPrototypeOf(WhiteSpace)).apply(this, arguments));
    }

    (0, _createClass3['default'])(WhiteSpace, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                size = _props.size,
                style = _props.style;

            return _react2['default'].createElement(_reactNative.View, { style: [{ height: _default2['default']['v_spacing_' + size] }, style] });
        }
    }]);
    return WhiteSpace;
}(_react2['default'].Component);

WhiteSpace.defaultProps = {
    size: 'md'
};
exports['default'] = WhiteSpace;
module.exports = exports['default'];