import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Modal from './Modal';
import promptStyle from './style/prompt.native';
var promptStyles = StyleSheet.create(promptStyle);

var PropmptContainer = function (_React$Component) {
    _inherits(PropmptContainer, _React$Component);

    function PropmptContainer(props) {
        _classCallCheck(this, PropmptContainer);

        var _this = _possibleConstructorReturn(this, (PropmptContainer.__proto__ || Object.getPrototypeOf(PropmptContainer)).call(this, props));

        _this.onClose = function () {
            _this.setState({
                visible: false
            });
        };
        _this.state = {
            visible: true,
            text: props.defaultValue,
            password: props.type === 'secure-text' ? props.defaultValue : ''
        };
        return _this;
    }

    _createClass(PropmptContainer, [{
        key: 'onChangeText',
        value: function onChangeText(type, value) {
            this.setState(_defineProperty({}, type, value));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                title = _props.title,
                onAnimationEnd = _props.onAnimationEnd,
                message = _props.message,
                type = _props.type,
                actions = _props.actions,
                placeholders = _props.placeholders;

            var styles = this.props.styles;
            var _state = this.state,
                text = _state.text,
                password = _state.password;

            var getArgs = function getArgs(func) {
                if (type === 'login-password') {
                    return func.apply(this, [text, password]);
                } else if (type === 'secure-text') {
                    return func.apply(this, [password]);
                }
                return func.apply(this, [text]);
            };
            var callbacks = void 0;
            if (typeof actions === 'function') {
                callbacks = [{ text: '取消', style: 'cancel' }, { text: '确定', onPress: function onPress() {
                        return getArgs(actions);
                    } }];
            } else {
                callbacks = actions.map(function (item) {
                    return {
                        text: item.text,
                        onPress: function onPress() {
                            if (item.onPress) {
                                return getArgs(item.onPress);
                            }
                        },
                        style: item.style || {}
                    };
                });
            }
            var footer = callbacks.map(function (button) {
                var orginPress = button.onPress || function () {};
                button.onPress = function () {
                    var res = orginPress();
                    if (res && res.then) {
                        res.then(function () {
                            _this2.onClose();
                        });
                    } else {
                        _this2.onClose();
                    }
                };
                return button;
            });
            var firstStyle = [styles.inputWrapper];
            var lastStyle = [styles.inputWrapper];
            if (type === 'login-password') {
                firstStyle.push(styles.inputFirst);
                lastStyle.push(styles.inputLast);
            } else if (type === 'secure-text') {
                lastStyle.push(styles.inputFirst);
                lastStyle.push(styles.inputLast);
            } else {
                firstStyle.push(styles.inputFirst);
                firstStyle.push(styles.inputLast);
            }
            return React.createElement(
                Modal,
                { transparent: true, title: title, visible: this.state.visible, onClose: this.onClose, footer: footer, onAnimationEnd: onAnimationEnd },
                React.createElement(
                    KeyboardAvoidingView,
                    { behavior: 'padding' },
                    message && message.length && React.createElement(
                        Text,
                        { style: styles.message },
                        message
                    ),
                    React.createElement(
                        View,
                        { style: styles.inputGroup },
                        type !== 'secure-text' && React.createElement(
                            View,
                            { style: firstStyle },
                            React.createElement(TextInput, { autoFocus: true, onChangeText: function onChangeText(value) {
                                    _this2.onChangeText('text', value);
                                }, value: this.state.text, style: styles.input, underlineColorAndroid: 'transparent', placeholder: placeholders[0] })
                        ),
                        (type === 'secure-text' || type === 'login-password') && React.createElement(
                            View,
                            { style: lastStyle },
                            React.createElement(TextInput, { autoFocus: true, secureTextEntry: true, onChangeText: function onChangeText(value) {
                                    _this2.onChangeText('password', value);
                                }, value: this.state.password, style: styles.input, underlineColorAndroid: 'transparent', placeholder: placeholders[1] })
                        )
                    )
                )
            );
        }
    }]);

    return PropmptContainer;
}(React.Component);

export default PropmptContainer;

PropmptContainer.defaultProps = {
    type: 'default',
    defaultValue: '',
    styles: promptStyles
};