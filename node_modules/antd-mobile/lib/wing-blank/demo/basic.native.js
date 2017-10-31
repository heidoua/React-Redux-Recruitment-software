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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var PlaceHolder = function PlaceHolder(props) {
    return _react2['default'].createElement(
        _reactNative.View,
        (0, _extends3['default'])({ style: { backgroundColor: '#fff', height: 30, alignItems: 'center', justifyContent: 'center' } }, props),
        _react2['default'].createElement(
            _reactNative.Text,
            { style: { color: '#bbb' } },
            'Block'
        )
    );
};

var WingBlankExample = function (_React$Component) {
    (0, _inherits3['default'])(WingBlankExample, _React$Component);

    function WingBlankExample() {
        (0, _classCallCheck3['default'])(this, WingBlankExample);
        return (0, _possibleConstructorReturn3['default'])(this, (WingBlankExample.__proto__ || Object.getPrototypeOf(WingBlankExample)).apply(this, arguments));
    }

    (0, _createClass3['default'])(WingBlankExample, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _reactNative.View,
                null,
                _react2['default'].createElement(_antdMobile.WhiteSpace, null),
                _react2['default'].createElement(
                    _antdMobile.WingBlank,
                    null,
                    _react2['default'].createElement(PlaceHolder, null)
                ),
                _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
                _react2['default'].createElement(
                    _antdMobile.WingBlank,
                    { size: 'md' },
                    _react2['default'].createElement(PlaceHolder, null)
                ),
                _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
                _react2['default'].createElement(
                    _antdMobile.WingBlank,
                    { size: 'sm' },
                    _react2['default'].createElement(PlaceHolder, null)
                )
            );
        }
    }]);
    return WingBlankExample;
}(_react2['default'].Component);

exports['default'] = WingBlankExample;
module.exports = exports['default'];