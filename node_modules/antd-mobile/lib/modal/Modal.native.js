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

var _Modal = require('rmc-dialog/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var maxHeight = _reactNative.StyleSheet.create({
    'maxHeight': {
        maxHeight: _reactNative.Dimensions.get('window').height
    }
}).maxHeight;
var modalStyles = _reactNative.StyleSheet.create(_index2['default']);

var AntmModal = function (_React$Component) {
    (0, _inherits3['default'])(AntmModal, _React$Component);

    function AntmModal() {
        (0, _classCallCheck3['default'])(this, AntmModal);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (AntmModal.__proto__ || Object.getPrototypeOf(AntmModal)).apply(this, arguments));

        _this.onFooterLayout = function (e) {
            if (_this.root) {
                _this.root.setNativeProps({
                    style: [{ paddingBottom: e.nativeEvent.layout.height }, maxHeight]
                });
            }
        };
        _this.saveRoot = function (root) {
            _this.root = root;
        };
        return _this;
    }

    (0, _createClass3['default'])(AntmModal, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                closable = _props.closable,
                footer = _props.footer,
                children = _props.children,
                style = _props.style,
                animateAppear = _props.animateAppear,
                maskClosable = _props.maskClosable,
                popup = _props.popup,
                transparent = _props.transparent,
                visible = _props.visible,
                onClose = _props.onClose,
                bodyStyle = _props.bodyStyle,
                onAnimationEnd = _props.onAnimationEnd,
                operation = _props.operation;

            var styles = this.props.styles;
            var btnGroupStyle = styles.buttonGroupV;
            var horizontalFlex = {};
            if (footer && footer.length === 2 && !operation) {
                btnGroupStyle = styles.buttonGroupH;
                horizontalFlex = { flex: 1 };
            }
            var buttonWrapStyle = footer && footer.length === 2 ? styles.buttonWrapH : styles.buttonWrapV;
            var footerDom = void 0;
            if (footer && footer.length) {
                var footerButtons = footer.map(function (button, i) {
                    var buttonStyle = {};
                    if (operation) {
                        buttonStyle = styles.buttonTextOperation;
                    }
                    if (button.style) {
                        buttonStyle = button.style;
                        if (typeof buttonStyle === 'string') {
                            var styleMap = {
                                'cancel': {},
                                'default': {},
                                'destructive': { color: 'red' }
                            };
                            buttonStyle = styleMap[buttonStyle] || {};
                        }
                    }
                    var noneBorder = footer && footer.length === 2 && i === 1 ? { borderRightWidth: 0 } : {};
                    var onPressFn = function onPressFn() {
                        if (button.onPress) {
                            button.onPress();
                        }
                        if (onClose) {
                            onClose();
                        }
                    };
                    return _react2['default'].createElement(
                        _reactNative.TouchableHighlight,
                        { key: i, style: horizontalFlex, underlayColor: '#ddd', onPress: onPressFn },
                        _react2['default'].createElement(
                            _reactNative.View,
                            { style: [buttonWrapStyle, noneBorder] },
                            _react2['default'].createElement(
                                _reactNative.Text,
                                { style: [styles.buttonText, buttonStyle] },
                                button.text || '\u6309\u94AE' + i
                            )
                        )
                    );
                });
                footerDom = _react2['default'].createElement(
                    _reactNative.View,
                    { style: [btnGroupStyle, styles.footer], onLayout: this.onFooterLayout },
                    footerButtons
                );
            }
            var animType = this.props.animationType;
            if (transparent) {
                if (animType === 'slide') {
                    animType = 'slide-up';
                }
                var closableDom = closable ? _react2['default'].createElement(
                    _reactNative.View,
                    { style: [styles.closeWrap] },
                    _react2['default'].createElement(
                        _reactNative.TouchableWithoutFeedback,
                        { onPress: onClose },
                        _react2['default'].createElement(
                            _reactNative.View,
                            null,
                            _react2['default'].createElement(
                                _reactNative.Text,
                                { style: [styles.close] },
                                '\xD7'
                            )
                        )
                    )
                ) : null;
                return _react2['default'].createElement(
                    _reactNative.View,
                    { style: styles.container },
                    _react2['default'].createElement(
                        _Modal2['default'],
                        { onClose: onClose, animationType: animType, wrapStyle: transparent ? styles.wrap : undefined, style: [styles.innerContainer, style], visible: visible, onAnimationEnd: onAnimationEnd, animateAppear: animateAppear, maskClosable: maskClosable },
                        _react2['default'].createElement(
                            _reactNative.View,
                            { style: maxHeight, ref: this.saveRoot },
                            title ? _react2['default'].createElement(
                                _reactNative.Text,
                                { style: [styles.header] },
                                title
                            ) : null,
                            _react2['default'].createElement(
                                _reactNative.View,
                                { style: [styles.body, bodyStyle] },
                                children
                            ),
                            footerDom,
                            closableDom
                        )
                    )
                );
            }
            if (popup) {
                var aType = 'SlideDown';
                if (animType === 'slide-up') {
                    animType = 'slide-up';
                    aType = 'SlideUp';
                } else {
                    animType = 'slide-down';
                }
                return _react2['default'].createElement(
                    _reactNative.View,
                    { style: styles.container },
                    _react2['default'].createElement(
                        _Modal2['default'],
                        { onClose: onClose, animationType: animType, style: [styles.popupContainer, styles['popup' + aType], style], visible: visible, onAnimationEnd: onAnimationEnd, animateAppear: animateAppear, maskClosable: maskClosable },
                        _react2['default'].createElement(
                            _reactNative.View,
                            { ref: this.saveRoot, style: bodyStyle },
                            children
                        )
                    )
                );
            }
            if (animType === 'slide-up' || animType === 'slide-down' || animType === 'slide') {
                animType = 'slide';
            }
            return _react2['default'].createElement(
                _reactNative.View,
                { style: styles.container },
                _react2['default'].createElement(
                    _reactNative.Modal,
                    { visible: visible, animationType: animType, onRequestClose: onClose },
                    _react2['default'].createElement(
                        _reactNative.View,
                        { style: style },
                        children
                    )
                )
            );
        }
    }]);
    return AntmModal;
}(_react2['default'].Component);

AntmModal.defaultProps = {
    visible: false,
    closable: false,
    maskClosable: false,
    style: {},
    bodyStyle: {},
    animationType: 'fade',
    onClose: function onClose() {},

    footer: [],
    transparent: false,
    popup: false,
    animateAppear: true,
    styles: modalStyles,
    operation: false
};
exports['default'] = AntmModal;
module.exports = exports['default'];