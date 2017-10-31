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

function onChange(value) {
  console.log('changed', value);
} /* tslint:disable:no-console */

var StepperExample = function (_React$Component) {
  (0, _inherits3['default'])(StepperExample, _React$Component);

  function StepperExample() {
    (0, _classCallCheck3['default'])(this, StepperExample);
    return (0, _possibleConstructorReturn3['default'])(this, (StepperExample.__proto__ || Object.getPrototypeOf(StepperExample)).apply(this, arguments));
  }

  (0, _createClass3['default'])(StepperExample, [{
    key: 'render',
    value: function render() {
      var readOnly = _react2['default'].createElement(_antdMobile.Stepper, { size: 'small', key: '1', max: 10, min: 1, readOnly: false, defaultValue: 1, onChange: onChange });
      return _react2['default'].createElement(
        _reactNative.View,
        { style: { marginTop: 20 } },
        _react2['default'].createElement(
          _antdMobile.List,
          null,
          _react2['default'].createElement(
            _antdMobile.List.Item,
            { extra: _react2['default'].createElement(_antdMobile.Stepper, { key: '0', max: 10, min: 1, defaultValue: 3, onChange: onChange }) },
            'readOnly: true'
          ),
          _react2['default'].createElement(
            _antdMobile.List.Item,
            { extra: readOnly },
            'readOnly: false'
          ),
          _react2['default'].createElement(
            _antdMobile.List.Item,
            { extra: _react2['default'].createElement(_antdMobile.Stepper, { key: '2', disabled: true, max: 10, min: 1, defaultValue: 3, onChange: onChange }) },
            'Disabled'
          )
        )
      );
    }
  }]);
  return StepperExample;
}(_react2['default'].Component);

exports['default'] = StepperExample;
module.exports = exports['default'];