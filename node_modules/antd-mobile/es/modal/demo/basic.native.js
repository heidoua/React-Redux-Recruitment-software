import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:no-console */
import React from 'react';
import { View, Text } from 'react-native';
import { Modal, Button, WingBlank, WhiteSpace } from 'antd-mobile';

var BasicModalExample = function (_React$Component) {
    _inherits(BasicModalExample, _React$Component);

    function BasicModalExample(props) {
        _classCallCheck(this, BasicModalExample);

        var _this = _possibleConstructorReturn(this, (BasicModalExample.__proto__ || Object.getPrototypeOf(BasicModalExample)).call(this, props));

        _this.onClose = function () {
            _this.setState({
                visible: false
            });
        };
        _this.onClose1 = function () {
            _this.setState({
                visible1: false
            });
        };
        _this.onClose2 = function () {
            _this.setState({
                visible2: false
            });
        };
        _this.onButtonClick = function () {
            Modal.alert('Title', 'alert content', [{ text: 'Cancel', onPress: function onPress() {
                    return console.log('cancel');
                }, style: 'cancel' }, { text: 'OK', onPress: function onPress() {
                    return console.log('ok');
                } }]);
        };
        _this.onButtonClick2 = function () {
            Modal.operation([{ text: '标为未读', onPress: function onPress() {
                    return console.log('标为未读被点击了');
                } }, { text: '置顶聊天', onPress: function onPress() {
                    return console.log('置顶聊天被点击了');
                } }]);
        };
        _this.onButtonClick3 = function () {
            Modal.prompt('Login', 'Pleas input login information', function (login, password) {
                return console.log('login: ' + login + ', password: ' + password);
            }, 'login-password', null, ['Please input name', 'Please input password']);
        };
        _this.onButtonClick4 = function () {
            Modal.prompt('Input password', 'password message', function (password) {
                return console.log('password: ' + password);
            }, 'secure-text', 'defaultValue');
        };
        _this.onButtonClick5 = function () {
            Modal.prompt('Name', 'name message', function (password) {
                return console.log('password: ' + password);
            }, 'default', null, ['please input name']);
        };
        _this.state = {
            visible: false,
            visible1: false,
            visible2: false
        };
        return _this;
    }

    _createClass(BasicModalExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var footerButtons = [{ text: 'Cancel', onPress: function onPress() {
                    return console.log('cancel');
                } }, { text: 'Ok', onPress: function onPress() {
                    return console.log('ok');
                } }];
            return React.createElement(
                View,
                { style: { paddingTop: 30, marginTop: 64 } },
                React.createElement(
                    WingBlank,
                    null,
                    React.createElement(
                        Button,
                        { onClick: function onClick() {
                                return _this2.setState({ visible: true });
                            } },
                        'showModal'
                    ),
                    React.createElement(WhiteSpace, null),
                    React.createElement(
                        Button,
                        { onClick: function onClick() {
                                return _this2.setState({ visible1: true });
                            } },
                        'transparent:false'
                    ),
                    React.createElement(WhiteSpace, null),
                    React.createElement(
                        Button,
                        { onClick: function onClick() {
                                return _this2.setState({ visible2: true });
                            } },
                        'popup'
                    ),
                    React.createElement(WhiteSpace, null),
                    React.createElement(
                        Button,
                        { onClick: this.onButtonClick },
                        'Modal.alert'
                    ),
                    React.createElement(WhiteSpace, null),
                    React.createElement(
                        Button,
                        { onClick: this.onButtonClick2 },
                        'Modal.opertation'
                    ),
                    React.createElement(WhiteSpace, null),
                    React.createElement(
                        Button,
                        { onClick: this.onButtonClick5 },
                        'Modal.prompt (default)'
                    ),
                    React.createElement(WhiteSpace, null),
                    React.createElement(
                        Button,
                        { onClick: this.onButtonClick3 },
                        'Modal.prompt (login-password)'
                    ),
                    React.createElement(WhiteSpace, null),
                    React.createElement(
                        Button,
                        { onClick: this.onButtonClick4 },
                        'Modal.prompt (secure-text)'
                    )
                ),
                React.createElement(
                    Modal,
                    { title: 'Title', transparent: true, onClose: this.onClose, maskClosable: true, visible: this.state.visible, closable: true, footer: footerButtons },
                    React.createElement(
                        View,
                        { style: { paddingVertical: 20 } },
                        React.createElement(
                            Text,
                            { style: { textAlign: 'center' } },
                            'Content...'
                        ),
                        React.createElement(
                            Text,
                            { style: { textAlign: 'center' } },
                            'Content...'
                        )
                    ),
                    React.createElement(
                        Button,
                        { type: 'primary', inline: true, onClick: this.onClose },
                        'close modal'
                    )
                ),
                React.createElement(
                    Modal,
                    { transparent: false, visible: this.state.visible1, animationType: 'slide-up', onClose: this.onClose1 },
                    React.createElement(
                        View,
                        { style: { paddingVertical: 220 } },
                        React.createElement(
                            Text,
                            { style: { textAlign: 'center' } },
                            'Content...'
                        ),
                        React.createElement(
                            Text,
                            { style: { textAlign: 'center' } },
                            'Content...'
                        )
                    ),
                    React.createElement(
                        Button,
                        { type: 'primary', inline: true, onClick: this.onClose1 },
                        'close modal'
                    )
                ),
                React.createElement(
                    Modal,
                    { popup: true, visible: this.state.visible2, animationType: 'slide-up', onClose: this.onClose2 },
                    React.createElement(
                        View,
                        { style: { paddingVertical: 20, paddingHorizontal: 20 } },
                        React.createElement(
                            Text,
                            { style: { textAlign: 'center' } },
                            'Content...'
                        ),
                        React.createElement(
                            Text,
                            { style: { textAlign: 'center' } },
                            'Content...'
                        )
                    ),
                    React.createElement(
                        Button,
                        { type: 'primary', inline: true, onClick: this.onClose2 },
                        'close modal'
                    )
                )
            );
        }
    }]);

    return BasicModalExample;
}(React.Component);

export default BasicModalExample;