'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var AntmSwitch = function AntmSwitch(props) {
    var style = props.style,
        onChange = props.onChange,
        _props$checked = props.checked,
        checked = _props$checked === undefined ? false : _props$checked,
        _props$disabled = props.disabled,
        disabled = _props$disabled === undefined ? false : _props$disabled,
        _props$color = props.color,
        color = _props$color === undefined ? '#4dd865' : _props$color;

    return _react2['default'].createElement(_reactNative.Switch, { style: style, onValueChange: onChange, value: checked, disabled: disabled, onTintColor: color });
};
exports['default'] = AntmSwitch;
module.exports = exports['default'];