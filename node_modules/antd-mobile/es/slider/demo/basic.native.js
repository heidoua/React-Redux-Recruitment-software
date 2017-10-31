import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, Text } from 'react-native';
import { Slider } from 'antd-mobile';

var BasicSliderExample = function (_React$Component) {
    _inherits(BasicSliderExample, _React$Component);

    function BasicSliderExample(props) {
        _classCallCheck(this, BasicSliderExample);

        var _this = _possibleConstructorReturn(this, (BasicSliderExample.__proto__ || Object.getPrototypeOf(BasicSliderExample)).call(this, props));

        _this.handleChange = function (value) {
            _this.setState({
                changingValue: value
            });
        };
        _this.onAfterChange = function (value) {
            _this.setState({
                changedValue: value
            });
        };
        _this.minMaxChange = function (value) {
            _this.setState({
                minMaxValue: value
            });
        };
        _this.state = {
            changingValue: 0.25,
            changedValue: 0.15,
            minMaxValue: 0,
            slideCompletionCount: 0
        };
        return _this;
    }

    _createClass(BasicSliderExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                View,
                null,
                React.createElement(
                    View,
                    null,
                    React.createElement(
                        Text,
                        null,
                        'Default settings'
                    ),
                    React.createElement(Slider, null)
                ),
                React.createElement(
                    View,
                    { style: { marginTop: 20 } },
                    React.createElement(
                        Text,
                        null,
                        'Initial value: 0.5'
                    ),
                    React.createElement(Slider, { defaultValue: 0.5 })
                ),
                React.createElement(
                    View,
                    { style: { marginTop: 20 } },
                    React.createElement(
                        Text,
                        null,
                        'min: 0, max: 1, current Value: ',
                        this.state.minMaxValue
                    ),
                    React.createElement(Slider, { min: 0, max: 1, onAfterChange: function onAfterChange(value) {
                            return _this2.minMaxChange(value);
                        } })
                ),
                React.createElement(
                    View,
                    { style: { marginTop: 20 } },
                    React.createElement(
                        Text,
                        null,
                        'step: 0.25'
                    ),
                    React.createElement(Slider, { step: 0.25, value: 0.25 })
                ),
                React.createElement(
                    View,
                    { style: { marginTop: 20 } },
                    React.createElement(
                        Text,
                        null,
                        'disabled'
                    ),
                    React.createElement(Slider, { disabled: true, defaultValue: 0.25 })
                ),
                React.createElement(
                    View,
                    { style: { marginTop: 20 } },
                    React.createElement(
                        Text,
                        null,
                        'onChange value: ',
                        this.state.changingValue
                    ),
                    React.createElement(Slider, { defaultValue: 0.25, onChange: function onChange(value) {
                            return _this2.handleChange(value);
                        } })
                ),
                React.createElement(
                    View,
                    { style: { marginTop: 20 } },
                    React.createElement(
                        Text,
                        null,
                        'onAfterChange value: ',
                        this.state.changedValue
                    ),
                    React.createElement(Slider, { defaultValue: 0.15, onAfterChange: function onAfterChange(value) {
                            return _this2.onAfterChange(value);
                        } })
                ),
                React.createElement(
                    View,
                    { style: { marginTop: 20 } },
                    React.createElement(
                        Text,
                        null,
                        'custom color: '
                    ),
                    React.createElement(Slider, { defaultValue: 0.15, minimumTrackTintColor: 'red', maximumTrackTintColor: 'blue' })
                )
            );
        }
    }]);

    return BasicSliderExample;
}(React.Component);

export default BasicSliderExample;