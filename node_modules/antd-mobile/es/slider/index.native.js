import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, Slider } from 'react-native';
import SliderStyle from './style/index.native';

var SliderAntm = function (_React$Component) {
    _inherits(SliderAntm, _React$Component);

    function SliderAntm() {
        _classCallCheck(this, SliderAntm);

        return _possibleConstructorReturn(this, (SliderAntm.__proto__ || Object.getPrototypeOf(SliderAntm)).apply(this, arguments));
    }

    _createClass(SliderAntm, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                defaultValue = _props.defaultValue,
                value = _props.value,
                min = _props.min,
                max = _props.max,
                step = _props.step,
                disabled = _props.disabled,
                onChange = _props.onChange,
                onAfterChange = _props.onAfterChange,
                maximumTrackTintColor = _props.maximumTrackTintColor,
                minimumTrackTintColor = _props.minimumTrackTintColor;

            return React.createElement(
                View,
                null,
                React.createElement(Slider, { value: defaultValue || value, minimumValue: min, maximumValue: max, step: step, minimumTrackTintColor: minimumTrackTintColor, maximumTrackTintColor: maximumTrackTintColor, disabled: disabled, onValueChange: onChange, onSlidingComplete: onAfterChange })
            );
        }
    }]);

    return SliderAntm;
}(React.Component);

export default SliderAntm;

SliderAntm.defaultProps = {
    onChange: function onChange() {},
    onAfterChange: function onAfterChange() {},

    defaultValue: 0,
    disabled: false,
    maximumTrackTintColor: SliderStyle.maximum.color,
    minimumTrackTintColor: SliderStyle.minimum.color
};