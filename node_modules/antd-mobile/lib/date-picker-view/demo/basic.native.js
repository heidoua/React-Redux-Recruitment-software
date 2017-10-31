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

var _reactNative = require('react-native');

var _antdMobile = require('antd-mobile');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var DatePickerViewExample = function (_React$Component) {
    (0, _inherits3['default'])(DatePickerViewExample, _React$Component);

    function DatePickerViewExample() {
        (0, _classCallCheck3['default'])(this, DatePickerViewExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (DatePickerViewExample.__proto__ || Object.getPrototypeOf(DatePickerViewExample)).apply(this, arguments));

        _this.state = {
            value: null
        };
        _this.onChange = function (value) {
            console.log(value);
            _this.setState({ value: value });
        };
        _this.onValueChange = function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            console.log(args);
        };
        return _this;
    }

    (0, _createClass3['default'])(DatePickerViewExample, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _reactNative.View,
                null,
                _react2['default'].createElement(
                    _reactNative.Text,
                    { style: { margin: 16 } },
                    'Start DateTime'
                ),
                _react2['default'].createElement(_antdMobile.DatePickerView, { value: this.state.value, onChange: this.onChange, onValueChange: this.onValueChange }),
                _react2['default'].createElement(
                    _reactNative.Text,
                    { style: { margin: 16 } },
                    'End DateTime'
                ),
                _react2['default'].createElement(_antdMobile.DatePickerView, { value: this.state.value, onChange: this.onChange, onValueChange: this.onValueChange })
            );
        }
    }]);
    return DatePickerViewExample;
}(_react2['default'].Component); /* tslint:disable:no-console */


exports['default'] = DatePickerViewExample;
module.exports = exports['default'];