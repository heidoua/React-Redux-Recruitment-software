import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, Text, Modal, TouchableHighlight, Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import modalStyle from './style/index.native';
import RCModal from 'rmc-dialog/es/Modal';
var maxHeight = StyleSheet.create({
    'maxHeight': {
        maxHeight: Dimensions.get('window').height
    }
}).maxHeight;
var modalStyles = StyleSheet.create(modalStyle);

var AntmModal = function (_React$Component) {
    _inherits(AntmModal, _React$Component);

    function AntmModal() {
        _classCallCheck(this, AntmModal);

        var _this = _possibleConstructorReturn(this, (AntmModal.__proto__ || Object.getPrototypeOf(AntmModal)).apply(this, arguments));

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

    _createClass(AntmModal, [{
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
                    return React.createElement(
                        TouchableHighlight,
                        { key: i, style: horizontalFlex, underlayColor: '#ddd', onPress: onPressFn },
                        React.createElement(
                            View,
                            { style: [buttonWrapStyle, noneBorder] },
                            React.createElement(
                                Text,
                                { style: [styles.buttonText, buttonStyle] },
                                button.text || '\u6309\u94AE' + i
                            )
                        )
                    );
                });
                footerDom = React.createElement(
                    View,
                    { style: [btnGroupStyle, styles.footer], onLayout: this.onFooterLayout },
                    footerButtons
                );
            }
            var animType = this.props.animationType;
            if (transparent) {
                if (animType === 'slide') {
                    animType = 'slide-up';
                }
                var closableDom = closable ? React.createElement(
                    View,
                    { style: [styles.closeWrap] },
                    React.createElement(
                        TouchableWithoutFeedback,
                        { onPress: onClose },
                        React.createElement(
                            View,
                            null,
                            React.createElement(
                                Text,
                                { style: [styles.close] },
                                '\xD7'
                            )
                        )
                    )
                ) : null;
                return React.createElement(
                    View,
                    { style: styles.container },
                    React.createElement(
                        RCModal,
                        { onClose: onClose, animationType: animType, wrapStyle: transparent ? styles.wrap : undefined, style: [styles.innerContainer, style], visible: visible, onAnimationEnd: onAnimationEnd, animateAppear: animateAppear, maskClosable: maskClosable },
                        React.createElement(
                            View,
                            { style: maxHeight, ref: this.saveRoot },
                            title ? React.createElement(
                                Text,
                                { style: [styles.header] },
                                title
                            ) : null,
                            React.createElement(
                                View,
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
                return React.createElement(
                    View,
                    { style: styles.container },
                    React.createElement(
                        RCModal,
                        { onClose: onClose, animationType: animType, style: [styles.popupContainer, styles['popup' + aType], style], visible: visible, onAnimationEnd: onAnimationEnd, animateAppear: animateAppear, maskClosable: maskClosable },
                        React.createElement(
                            View,
                            { ref: this.saveRoot, style: bodyStyle },
                            children
                        )
                    )
                );
            }
            if (animType === 'slide-up' || animType === 'slide-down' || animType === 'slide') {
                animType = 'slide';
            }
            return React.createElement(
                View,
                { style: styles.container },
                React.createElement(
                    Modal,
                    { visible: visible, animationType: animType, onRequestClose: onClose },
                    React.createElement(
                        View,
                        { style: style },
                        children
                    )
                )
            );
        }
    }]);

    return AntmModal;
}(React.Component);

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
export default AntmModal;