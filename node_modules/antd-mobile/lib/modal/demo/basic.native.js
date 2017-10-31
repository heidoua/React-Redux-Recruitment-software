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

var BasicModalExample = function (_React$Component) {
    (0, _inherits3['default'])(BasicModalExample, _React$Component);

    function BasicModalExample(props) {
        (0, _classCallCheck3['default'])(this, BasicModalExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (BasicModalExample.__proto__ || Object.getPrototypeOf(BasicModalExample)).call(this, props));

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
            _antdMobile.Modal.alert('Title', 'alert content', [{ text: 'Cancel', onPress: function onPress() {
                    return console.log('cancel');
                }, style: 'cancel' }, { text: 'OK', onPress: function onPress() {
                    return console.log('ok');
                } }]);
        };
        _this.onButtonClick2 = function () {
            _antdMobile.Modal.operation([{ text: '标为未读', onPress: function onPress() {
                    return console.log('标为未读被点击了');
                } }, { text: '置顶聊天', onPress: function onPress() {
                    return console.log('置顶聊天被点击了');
                } }]);
        };
        _this.onButtonClick3 = function () {
            _antdMobile.Modal.prompt('Login', 'Pleas input login information', function (login, password) {
                return console.log('login: ' + login + ', password: ' + password);
            }, 'login-password', null, ['Please input name', 'Please input password']);
        };
        _this.onButtonClick4 = function () {
            _antdMobile.Modal.prompt('Input password', 'password message', function (password) {
                return console.log('password: ' + password);
            }, 'secure-text', 'defaultValue');
        };
        _this.onButtonClick5 = function () {
            _antdMobile.Modal.prompt('Name', 'name message', function (password) {
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

    (0, _createClass3['default'])(BasicModalExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var footerButtons = [{ text: 'Cancel', onPress: function onPress() {
                    return console.log('cancel');
                } }, { text: 'Ok', onPress: function onPress() {
                    return console.log('ok');
                } }];
            return _react2['default'].createElement(
                _reactNative.View,
                { style: { paddingTop: 30, marginTop: 64 } },
                _react2['default'].createElement(
                    _antdMobile.WingBlank,
                    null,
                    _react2['default'].createElement(
                        _antdMobile.Button,
                        { onClick: function onClick() {
                                return _this2.setState({ visible: true });
                            } },
                        'showModal'
                    ),
                    _react2['default'].createElement(_antdMobile.WhiteSpace, null),
                    _react2['default'].createElement(
                        _antdMobile.Button,
                        { onClick: function onClick() {
                                return _this2.setState({ visible1: true });
                            } },
                        'transparent:false'
                    ),
                    _react2['default'].createElement(_antdMobile.WhiteSpace, null),
                    _react2['default'].createElement(
                        _antdMobile.Button,
                        { onClick: function onClick() {
                                return _this2.setState({ visible2: true });
                            } },
                        'popup'
                    ),
                    _react2['default'].createElement(_antdMobile.WhiteSpace, null),
                    _react2['default'].createElement(
                        _antdMobile.Button,
                        { onClick: this.onButtonClick },
                        'Modal.alert'
                    ),
                    _react2['default'].createElement(_antdMobile.WhiteSpace, null),
                    _react2['default'].createElement(
                        _antdMobile.Button,
                        { onClick: this.onButtonClick2 },
                        'Modal.opertation'
                    ),
                    _react2['default'].createElement(_antdMobile.WhiteSpace, null),
                    _react2['default'].createElement(
                        _antdMobile.Button,
                        { onClick: this.onButtonClick5 },
                        'Modal.prompt (default)'
                    ),
                    _react2['default'].createElement(_antdMobile.WhiteSpace, null),
                    _react2['default'].createElement(
                        _antdMobile.Button,
                        { onClick: this.onButtonClick3 },
                        'Modal.prompt (login-password)'
                    ),
                    _react2['default'].createElement(_antdMobile.WhiteSpace, null),
                    _react2['default'].createElement(
                        _antdMobile.Button,
                        { onClick: this.onButtonClick4 },
                        'Modal.prompt (secure-text)'
                    )
                ),
                _react2['default'].createElement(
                    _antdMobile.Modal,
                    { title: 'Title', transparent: true, onClose: this.onClose, maskClosable: true, visible: this.state.visible, closable: true, footer: footerButtons },
                    _react2['default'].createElement(
                        _reactNative.View,
                        { style: { paddingVertical: 20 } },
                        _react2['default'].createElement(
                            _reactNative.Text,
                            { style: { textAlign: 'center' } },
                            'Content...'
                        ),
                        _react2['default'].createElement(
                            _reactNative.Text,
                            { style: { textAlign: 'center' } },
                            'Content...'
                        )
                    ),
                    _react2['default'].createElement(
                        _antdMobile.Button,
                        { type: 'primary', inline: true, onClick: this.onClose },
                        'close modal'
                    )
                ),
                _react2['default'].createElement(
                    _antdMobile.Modal,
                    { transparent: false, visible: this.state.visible1, animationType: 'slide-up', onClose: this.onClose1 },
                    _react2['default'].createElement(
                        _reactNative.View,
                        { style: { paddingVertical: 220 } },
                        _react2['default'].createElement(
                            _reactNative.Text,
                            { style: { textAlign: 'center' } },
                            'Content...'
                        ),
                        _react2['default'].createElement(
                            _reactNative.Text,
                            { style: { textAlign: 'center' } },
                            'Content...'
                        )
                    ),
                    _react2['default'].createElement(
                        _antdMobile.Button,
                        { type: 'primary', inline: true, onClick: this.onClose1 },
                        'close modal'
                    )
                ),
                _react2['default'].createElement(
                    _antdMobile.Modal,
                    { popup: true, visible: this.state.visible2, animationType: 'slide-up', onClose: this.onClose2 },
                    _react2['default'].createElement(
                        _reactNative.View,
                        { style: { paddingVertical: 20, paddingHorizontal: 20 } },
                        _react2['default'].createElement(
                            _reactNative.Text,
                            { style: { textAlign: 'center' } },
                            'Content...'
                        ),
                        _react2['default'].createElement(
                            _reactNative.Text,
                            { style: { textAlign: 'center' } },
                            'Content...'
                        )
                    ),
                    _react2['default'].createElement(
                        _antdMobile.Button,
                        { type: 'primary', inline: true, onClick: this.onClose2 },
                        'close modal'
                    )
                )
            );
        }
    }]);
    return BasicModalExample;
}(_react2['default'].Component); /* tslint:disable:no-console */


exports['default'] = BasicModalExample;
module.exports = exports['default'];