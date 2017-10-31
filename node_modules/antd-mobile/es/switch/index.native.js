import React from 'react';
import { Switch } from 'react-native';
var AntmSwitch = function AntmSwitch(props) {
    var style = props.style,
        onChange = props.onChange,
        _props$checked = props.checked,
        checked = _props$checked === undefined ? false : _props$checked,
        _props$disabled = props.disabled,
        disabled = _props$disabled === undefined ? false : _props$disabled,
        _props$color = props.color,
        color = _props$color === undefined ? '#4dd865' : _props$color;

    return React.createElement(Switch, { style: style, onValueChange: onChange, value: checked, disabled: disabled, onTintColor: color });
};
export default AntmSwitch;