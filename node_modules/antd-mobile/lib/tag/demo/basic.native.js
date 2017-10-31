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

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function onChange(selected) {
    console.log('tag selected: ' + selected);
} /* tslint:disable:no-console */

var BasicTagExample = function (_React$Component) {
    (0, _inherits3['default'])(BasicTagExample, _React$Component);

    function BasicTagExample() {
        (0, _classCallCheck3['default'])(this, BasicTagExample);
        return (0, _possibleConstructorReturn3['default'])(this, (BasicTagExample.__proto__ || Object.getPrototypeOf(BasicTagExample)).apply(this, arguments));
    }

    (0, _createClass3['default'])(BasicTagExample, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _reactNative.View,
                { style: { padding: 10 } },
                _react2['default'].createElement(
                    _antdMobile.Tag,
                    null,
                    'Basic'
                ),
                _react2['default'].createElement(_antdMobile.WhiteSpace, null),
                _react2['default'].createElement(
                    _antdMobile.Tag,
                    { selected: true },
                    'Selected'
                ),
                _react2['default'].createElement(_antdMobile.WhiteSpace, null),
                _react2['default'].createElement(
                    _antdMobile.Tag,
                    { disabled: true },
                    'Disabled'
                ),
                _react2['default'].createElement(_antdMobile.WhiteSpace, null),
                _react2['default'].createElement(
                    _antdMobile.Tag,
                    { onChange: onChange },
                    'Callback'
                ),
                _react2['default'].createElement(_antdMobile.WhiteSpace, null),
                _react2['default'].createElement(
                    _antdMobile.Tag,
                    { closable: true, onClose: function onClose() {
                            console.log('onClose');
                        }, afterClose: function afterClose() {
                            console.log('afterClose');
                        } },
                    'Closable'
                ),
                _react2['default'].createElement(_antdMobile.WhiteSpace, null),
                _react2['default'].createElement(
                    _antdMobile.Tag,
                    { small: true },
                    'Small and Readonly'
                )
            );
        }
    }]);
    return BasicTagExample;
}(_react2['default'].Component);

exports['default'] = BasicTagExample;
module.exports = exports['default'];