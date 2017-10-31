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

var BasicSliderExample = function (_React$Component) {
    (0, _inherits3['default'])(BasicSliderExample, _React$Component);

    function BasicSliderExample(props) {
        (0, _classCallCheck3['default'])(this, BasicSliderExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (BasicSliderExample.__proto__ || Object.getPrototypeOf(BasicSliderExample)).call(this, props));

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

    (0, _createClass3['default'])(BasicSliderExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2['default'].createElement(
                _reactNative.View,
                null,
                _react2['default'].createElement(
                    _reactNative.View,
                    null,
                    _react2['default'].createElement(
                        _reactNative.Text,
                        null,
                        'Default settings'
                    ),
                    _react2['default'].createElement(_antdMobile.Slider, null)
                ),
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: { marginTop: 20 } },
                    _react2['default'].createElement(
                        _reactNative.Text,
                        null,
                        'Initial value: 0.5'
                    ),
                    _react2['default'].createElement(_antdMobile.Slider, { defaultValue: 0.5 })
                ),
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: { marginTop: 20 } },
                    _react2['default'].createElement(
                        _reactNative.Text,
                        null,
                        'min: 0, max: 1, current Value: ',
                        this.state.minMaxValue
                    ),
                    _react2['default'].createElement(_antdMobile.Slider, { min: 0, max: 1, onAfterChange: function onAfterChange(value) {
                            return _this2.minMaxChange(value);
                        } })
                ),
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: { marginTop: 20 } },
                    _react2['default'].createElement(
                        _reactNative.Text,
                        null,
                        'step: 0.25'
                    ),
                    _react2['default'].createElement(_antdMobile.Slider, { step: 0.25, value: 0.25 })
                ),
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: { marginTop: 20 } },
                    _react2['default'].createElement(
                        _reactNative.Text,
                        null,
                        'disabled'
                    ),
                    _react2['default'].createElement(_antdMobile.Slider, { disabled: true, defaultValue: 0.25 })
                ),
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: { marginTop: 20 } },
                    _react2['default'].createElement(
                        _reactNative.Text,
                        null,
                        'onChange value: ',
                        this.state.changingValue
                    ),
                    _react2['default'].createElement(_antdMobile.Slider, { defaultValue: 0.25, onChange: function onChange(value) {
                            return _this2.handleChange(value);
                        } })
                ),
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: { marginTop: 20 } },
                    _react2['default'].createElement(
                        _reactNative.Text,
                        null,
                        'onAfterChange value: ',
                        this.state.changedValue
                    ),
                    _react2['default'].createElement(_antdMobile.Slider, { defaultValue: 0.15, onAfterChange: function onAfterChange(value) {
                            return _this2.onAfterChange(value);
                        } })
                ),
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: { marginTop: 20 } },
                    _react2['default'].createElement(
                        _reactNative.Text,
                        null,
                        'custom color: '
                    ),
                    _react2['default'].createElement(_antdMobile.Slider, { defaultValue: 0.15, minimumTrackTintColor: 'red', maximumTrackTintColor: 'blue' })
                )
            );
        }
    }]);
    return BasicSliderExample;
}(_react2['default'].Component);

exports['default'] = BasicSliderExample;
module.exports = exports['default'];