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

var TagStyles = _reactNative.StyleSheet.create(_index2['default']);

var Tag = function (_React$Component) {
    (0, _inherits3['default'])(Tag, _React$Component);

    function Tag(props) {
        (0, _classCallCheck3['default'])(this, Tag);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));

        _this.onClick = function () {
            var _this$props = _this.props,
                disabled = _this$props.disabled,
                onChange = _this$props.onChange;

            if (disabled) {
                return;
            }
            var isSelect = _this.state.selected;
            _this.setState({
                selected: !isSelect
            }, function () {
                if (onChange) {
                    onChange(!isSelect);
                }
            });
        };
        _this.onTagClose = function () {
            if (_this.props.onClose) {
                _this.props.onClose();
            }
            _this.setState({
                closed: true
            }, _this.props.afterClose);
        };
        _this.onPressIn = function () {
            var styles = _this.props.styles;
            _this.closeDom.setNativeProps({
                style: [styles.close, _reactNative.Platform.OS === 'ios' ? styles.closeIOS : styles.closeAndroid, {
                    backgroundColor: '#888'
                }]
            });
        };
        _this.onPressOut = function () {
            var styles = _this.props.styles;
            _this.closeDom.setNativeProps({
                style: [styles.close, _reactNative.Platform.OS === 'ios' ? styles.closeIOS : styles.closeAndroid]
            });
        };
        _this.state = {
            selected: props.selected,
            closed: false
        };
        return _this;
    }

    (0, _createClass3['default'])(Tag, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.selected !== nextProps.selected) {
                this.setState({
                    selected: nextProps.selected
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                disabled = _props.disabled,
                small = _props.small,
                closable = _props.closable,
                style = _props.style;

            var styles = this.props.styles;
            var selected = this.state.selected;
            var wrapStyle = void 0;
            var textStyle = void 0;
            if (!selected && !disabled) {
                wrapStyle = styles.normalWrap;
                textStyle = styles.normalText;
            }
            if (selected && !disabled) {
                wrapStyle = styles.activeWrap;
                textStyle = styles.activeText;
            }
            if (disabled) {
                wrapStyle = styles.disabledWrap;
                textStyle = styles.disabledText;
            }
            var sizeWrapStyle = small ? styles.wrapSmall : {};
            var sizeTextStyle = small ? styles.textSmall : {};
            var closableDom = closable && !small && !disabled ? _react2['default'].createElement(
                _reactNative.TouchableWithoutFeedback,
                { onPressIn: this.onPressIn, onPressOut: this.onPressOut, onPress: this.onTagClose },
                _react2['default'].createElement(
                    _reactNative.View,
                    { ref: function ref(component) {
                            return _this2.closeDom = component;
                        }, style: [styles.close, _reactNative.Platform.OS === 'ios' ? styles.closeIOS : styles.closeAndroid] },
                    _react2['default'].createElement(
                        _reactNative.Text,
                        { style: [styles.closeText, _reactNative.Platform.OS === 'android' ? styles.closeTransform : {}] },
                        '\xD7'
                    )
                )
            ) : null;
            return !this.state.closed ? _react2['default'].createElement(
                _reactNative.View,
                { style: [styles.tag, style] },
                _react2['default'].createElement(
                    _reactNative.TouchableWithoutFeedback,
                    { onPress: this.onClick },
                    _react2['default'].createElement(
                        _reactNative.View,
                        { style: [styles.wrap, sizeWrapStyle, wrapStyle] },
                        _react2['default'].createElement(
                            _reactNative.Text,
                            { style: [styles.text, sizeTextStyle, textStyle] },
                            children,
                            ' '
                        )
                    )
                ),
                closableDom
            ) : null;
        }
    }]);
    return Tag;
}(_react2['default'].Component);

exports['default'] = Tag;

Tag.defaultProps = {
    disabled: false,
    small: false,
    selected: false,
    closable: false,
    onClose: function onClose() {},
    afterClose: function afterClose() {},
    onChange: function onChange() {},

    styles: TagStyles
};
module.exports = exports['default'];