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

var _index = require('./style/index.native');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SliderAntm = function (_React$Component) {
    (0, _inherits3['default'])(SliderAntm, _React$Component);

    function SliderAntm() {
        (0, _classCallCheck3['default'])(this, SliderAntm);
        return (0, _possibleConstructorReturn3['default'])(this, (SliderAntm.__proto__ || Object.getPrototypeOf(SliderAntm)).apply(this, arguments));
    }

    (0, _createClass3['default'])(SliderAntm, [{
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

            return _react2['default'].createElement(
                _reactNative.View,
                null,
                _react2['default'].createElement(_reactNative.Slider, { value: defaultValue || value, minimumValue: min, maximumValue: max, step: step, minimumTrackTintColor: minimumTrackTintColor, maximumTrackTintColor: maximumTrackTintColor, disabled: disabled, onValueChange: onChange, onSlidingComplete: onAfterChange })
            );
        }
    }]);
    return SliderAntm;
}(_react2['default'].Component);

exports['default'] = SliderAntm;

SliderAntm.defaultProps = {
    onChange: function onChange() {},
    onAfterChange: function onAfterChange() {},

    defaultValue: 0,
    disabled: false,
    maximumTrackTintColor: _index2['default'].maximum.color,
    minimumTrackTintColor: _index2['default'].minimum.color
};
module.exports = exports['default'];