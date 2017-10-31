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

var _default = require('../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

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

function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}
var TextAreaItemStyles = _reactNative.StyleSheet.create(_index2['default']);

var TextAreaItem = function (_React$Component) {
    (0, _inherits3['default'])(TextAreaItem, _React$Component);

    function TextAreaItem(props) {
        (0, _classCallCheck3['default'])(this, TextAreaItem);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (TextAreaItem.__proto__ || Object.getPrototypeOf(TextAreaItem)).call(this, props));

        _this.onChange = function (event) {
            var text = event.nativeEvent.text;
            var onChange = _this.props.onChange;

            _this.setState({
                inputCount: text.length
            });
            if (onChange) {
                onChange(text);
            }
        };
        _this.onContentSizeChange = function (event) {
            var height = void 0;
            var _this$props = _this.props,
                autoHeight = _this$props.autoHeight,
                onContentSizeChange = _this$props.onContentSizeChange;

            var rows = _this.props.rows;
            if (autoHeight) {
                height = event.nativeEvent.contentSize.height;
            } else if (rows > 1) {
                height = 6 * rows * 4;
            } else {
                height = _default2['default'].list_item_height;
            }
            _this.setState({
                height: height
            });
            if (onContentSizeChange) {
                onContentSizeChange(event);
            }
        };
        _this.state = {
            inputCount: 0,
            height: props.rows > 1 ? 6 * props.rows * 4 : _default2['default'].list_item_height
        };
        return _this;
    }

    (0, _createClass3['default'])(TextAreaItem, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                rows = _a.rows,
                error = _a.error,
                clear = _a.clear,
                count = _a.count,
                autoHeight = _a.autoHeight,
                last = _a.last,
                onErrorClick = _a.onErrorClick,
                styles = _a.styles,
                style = _a.style,
                restProps = __rest(_a, ["rows", "error", "clear", "count", "autoHeight", "last", "onErrorClick", "styles", "style"]);var value = restProps.value,
                defaultValue = restProps.defaultValue;
            var inputCount = this.state.inputCount;

            var valueProps = void 0;
            if ('value' in this.props) {
                valueProps = {
                    value: fixControlledValue(value)
                };
            } else {
                valueProps = {
                    defaultValue: defaultValue
                };
            }
            var containerStyle = {
                borderBottomWidth: last ? 0 : _default2['default'].border_width_sm
            };
            var textareaStyle = {
                color: error ? '#f50' : _default2['default'].color_text_base,
                paddingRight: error ? 2 * _default2['default'].h_spacing_lg : 0
            };
            var maxLength = count > 0 ? count : undefined;
            return _react2['default'].createElement(
                _reactNative.View,
                { style: [styles.container, containerStyle, { position: 'relative' }] },
                _react2['default'].createElement(_reactNative.TextInput, (0, _extends3['default'])({ clearButtonMode: clear ? 'while-editing' : 'never', underlineColorAndroid: 'transparent', style: [styles.input, textareaStyle, { height: Math.max(45, this.state.height) }, style] }, restProps, valueProps, { onChange: function onChange(event) {
                        return _this2.onChange(event);
                    }, onContentSizeChange: this.onContentSizeChange, multiline: rows > 1 || autoHeight, numberOfLines: rows, maxLength: maxLength })),
                error ? _react2['default'].createElement(
                    _reactNative.TouchableWithoutFeedback,
                    { onPress: onErrorClick },
                    _react2['default'].createElement(
                        _reactNative.View,
                        { style: [styles.errorIcon] },
                        _react2['default'].createElement(_reactNative.Image, { source: require('../style/images/error.png'), style: { width: _default2['default'].icon_size_xs, height: _default2['default'].icon_size_xs } })
                    )
                ) : null,
                rows > 1 && count > 0 ? _react2['default'].createElement(
                    _reactNative.View,
                    { style: [styles.count] },
                    _react2['default'].createElement(
                        _reactNative.Text,
                        null,
                        inputCount,
                        ' / ',
                        count
                    )
                ) : null
            );
        }
    }]);
    return TextAreaItem;
}(_react2['default'].Component);

exports['default'] = TextAreaItem;

TextAreaItem.defaultProps = {
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onErrorClick: function onErrorClick() {},

    clear: true,
    error: false,
    editable: true,
    rows: 1,
    count: 0,
    keyboardType: 'default',
    autoHeight: false,
    last: false,
    styles: TextAreaItemStyles
};
module.exports = exports['default'];