'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:jsx-no-multiline-js */

var buttonStyles = _reactNative.StyleSheet.create(_index2['default']);

var Button = function (_React$Component) {
    (0, _inherits3['default'])(Button, _React$Component);

    function Button(props) {
        (0, _classCallCheck3['default'])(this, Button);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.onPressIn = function () {
            _this.setState({ pressIn: true });
            if (_this.props.onPressIn) {
                var _this$props;

                (_this$props = _this.props).onPressIn.apply(_this$props, arguments);
            }
        };
        _this.onPressOut = function () {
            _this.setState({ pressIn: false });
            if (_this.props.onPressOut) {
                var _this$props2;

                (_this$props2 = _this.props).onPressOut.apply(_this$props2, arguments);
            }
        };
        _this.onShowUnderlay = function () {
            _this.setState({ touchIt: true });
            if (_this.props.onShowUnderlay) {
                var _this$props3;

                (_this$props3 = _this.props).onShowUnderlay.apply(_this$props3, arguments);
            }
        };
        _this.onHideUnderlay = function () {
            _this.setState({ touchIt: false });
            if (_this.props.onHideUnderlay) {
                var _this$props4;

                (_this$props4 = _this.props).onHideUnderlay.apply(_this$props4, arguments);
            }
        };
        _this.state = {
            pressIn: false,
            touchIt: false
        };
        return _this;
    }

    (0, _createClass3['default'])(Button, [{
        key: 'render',
        value: function render() {
            // TODO: replace `TouchableHighlight` with `TouchableWithoutFeedback` in version 1.1.0
            // for using setNativeProps to improve performance
            var _a = this.props,
                _a$size = _a.size,
                size = _a$size === undefined ? 'large' : _a$size,
                _a$type = _a.type,
                type = _a$type === undefined ? 'default' : _a$type,
                disabled = _a.disabled,
                activeStyle = _a.activeStyle,
                onClick = _a.onClick,
                style = _a.style,
                styles = _a.styles,
                loading = _a.loading,
                restProps = __rest(_a, ["size", "type", "disabled", "activeStyle", "onClick", "style", "styles", "loading"]);
            var _styles = styles;
            ['activeOpacity', 'underlayColor', 'onPress', 'onPressIn', 'onPressOut', 'onShowUnderlay', 'onHideUnderlay'].forEach(function (prop) {
                if (restProps.hasOwnProperty(prop)) {
                    delete restProps[prop];
                }
            });
            var textStyle = [_styles[size + 'RawText'], _styles[type + 'RawText'], disabled && _styles[type + 'DisabledRawText'], this.state.pressIn && _styles[type + 'HighlightText']];
            var wrapperStyle = [_styles.wrapperStyle, _styles[size + 'Raw'], _styles[type + 'Raw'], disabled && _styles[type + 'DisabledRaw'], this.state.pressIn && activeStyle && _styles[type + 'Highlight'], activeStyle && this.state.touchIt && activeStyle, style];
            var underlayColor = _reactNative.StyleSheet.flatten(_styles[activeStyle ? type + 'Highlight' : type + 'Raw']).backgroundColor;
            var indicatorColor = _reactNative.StyleSheet.flatten(this.state.pressIn ? _styles[type + 'HighlightText'] : _styles[type + 'RawText']).color;
            return _react2['default'].createElement(
                _reactNative.TouchableHighlight,
                (0, _extends3['default'])({ activeOpacity: 1, underlayColor: underlayColor, style: wrapperStyle, onPress: function onPress(e) {
                        return onClick && onClick(e);
                    }, onPressIn: this.onPressIn, onPressOut: this.onPressOut, onShowUnderlay: this.onShowUnderlay, onHideUnderlay: this.onHideUnderlay, disabled: disabled }, restProps),
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: _styles.container },
                    loading ? _react2['default'].createElement(_reactNative.ActivityIndicator, { style: _styles.indicator, animating: true, color: indicatorColor, size: 'small' }) : null,
                    _react2['default'].createElement(
                        _reactNative.Text,
                        { style: textStyle },
                        this.props.children
                    )
                )
            );
        }
    }]);
    return Button;
}(_react2['default'].Component);

exports['default'] = Button;

Button.defaultProps = {
    pressIn: false,
    disabled: false,
    activeStyle: {},
    loading: false,
    onClick: function onClick(_x) {},
    onPressIn: function onPressIn(_x) {},
    onPressOut: function onPressOut(_x) {},
    onShowUnderlay: function onShowUnderlay(_x) {},
    onHideUnderlay: function onHideUnderlay(_x) {},
    styles: buttonStyles
};
module.exports = exports['default'];