import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { InputItem, List, Button } from 'antd-mobile';

var BasicInputItemExample = function (_React$Component) {
    _inherits(BasicInputItemExample, _React$Component);

    function BasicInputItemExample(props) {
        _classCallCheck(this, BasicInputItemExample);

        var _this = _possibleConstructorReturn(this, (BasicInputItemExample.__proto__ || Object.getPrototypeOf(BasicInputItemExample)).call(this, props));

        _this.state = {
            value: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            labelnum1: '',
            labelnum2: '',
            labelnum3: '',
            text: '',
            bankCard: '',
            phone: '',
            password: '',
            number: '',
            focused: false
        };
        return _this;
    }

    _createClass(BasicInputItemExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                ScrollView,
                { style: { flex: 1 }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false },
                React.createElement(
                    List,
                    { renderHeader: function renderHeader() {
                            return '基本';
                        } },
                    React.createElement(
                        InputItem,
                        { clear: true, error: true, onErrorPress: function onErrorPress() {
                                return alert('clicked me');
                            }, value: this.state.value, onChange: function onChange(value) {
                                _this2.setState({
                                    value: value
                                });
                            }, extra: '\u5143', placeholder: '\u6709\u6807\u7B7E' },
                        '\u8F93\u5165\u6846'
                    ),
                    React.createElement(
                        InputItem,
                        { clear: true, onErrorPress: function onErrorPress() {
                                alert(1);
                            }, value: '\u4E0D\u53EF\u7F16\u8F91', onChange: function onChange(value) {
                                _this2.setState({
                                    value: value
                                });
                            }, extra: React.createElement(
                                Text,
                                null,
                                '\u5143'
                            ), placeholder: '\u4E0D\u53EF\u7F16\u8F91', editable: false },
                        '\u8F93\u5165\u6846'
                    ),
                    React.createElement(InputItem, { clear: true, value: this.state.value1, onChange: function onChange(value) {
                            _this2.setState({
                                value1: value
                            });
                        }, placeholder: '\u65E0\u6807\u7B7E' }),
                    React.createElement(
                        InputItem,
                        { defaultValue: 'xx', clear: true, placeholder: '\u81EA\u52A8\u83B7\u53D6\u5149\u6807', autoFocus: typeof jest === 'undefined' },
                        '\u6807\u9898'
                    ),
                    React.createElement(
                        InputItem,
                        { clear: true, placeholder: '\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8BE5\u8F93\u5165\u6846\u4F1A\u83B7\u53D6\u5149\u6807', focused: this.state.focused, onFocus: function onFocus() {
                                _this2.setState({
                                    focused: false
                                });
                            } },
                        '\u6807\u9898'
                    ),
                    React.createElement(
                        List.Item,
                        null,
                        React.createElement(
                            Button,
                            { onClick: function onClick() {
                                    _this2.setState({
                                        focused: true
                                    });
                                }, type: 'primary' },
                            '\u70B9\u51FB\u83B7\u53D6\u5149\u6807'
                        )
                    )
                ),
                React.createElement(
                    List,
                    { renderHeader: function renderHeader() {
                            return '固定标签字数';
                        } },
                    React.createElement(
                        InputItem,
                        { clear: true, value: this.state.labelnum1, onChange: function onChange(value) {
                                _this2.setState({
                                    labelnum1: value
                                });
                            }, labelNumber: 2, placeholder: '\u4E24\u4E2A\u5B57\u6807\u7B7E' },
                        '\u59D3\u540D'
                    ),
                    React.createElement(
                        InputItem,
                        { clear: true, value: this.state.labelnum2, onChange: function onChange(value) {
                                _this2.setState({
                                    labelnum2: value
                                });
                            }, labelNumber: 3, placeholder: '\u4E09\u4E2A\u5B57\u6807\u7B7E' },
                        '\u6821\u9A8C\u7801'
                    ),
                    React.createElement(
                        InputItem,
                        { clear: true, value: this.state.labelnum3, onChange: function onChange(value) {
                                _this2.setState({
                                    labelnum3: value
                                });
                            }, labelNumber: 4, placeholder: '\u56DB\u4E2A\u5B57\u6807\u7B7E\uFF08\u9ED8\u8BA4\uFF09' },
                        '\u56DB\u5B57\u6807\u7B7E'
                    )
                ),
                React.createElement(
                    List,
                    { renderHeader: function renderHeader() {
                            return '格式';
                        } },
                    React.createElement(
                        InputItem,
                        { clear: true, error: true, value: this.state.text, onChange: function onChange(value) {
                                _this2.setState({
                                    text: value
                                });
                            }, placeholder: 'text' },
                        '\u6587\u672C\u8F93\u5165'
                    ),
                    React.createElement(
                        InputItem,
                        { clear: true, type: 'bankCard', value: this.state.bankcard, onChange: function onChange(value) {
                                _this2.setState({
                                    bankcard: value
                                });
                            }, placeholder: 'bankCard' },
                        '\u94F6\u884C\u5361'
                    ),
                    React.createElement(
                        InputItem,
                        { clear: true, type: 'phone', value: this.state.phone, onChange: function onChange(value) {
                                _this2.setState({
                                    phone: value
                                });
                            }, placeholder: 'phone' },
                        '\u624B\u673A\u53F7'
                    ),
                    React.createElement(
                        InputItem,
                        { clear: true, type: 'password', value: this.state.password, onChange: function onChange(value) {
                                _this2.setState({
                                    password: value
                                });
                            }, placeholder: 'password' },
                        '\u5BC6\u7801'
                    ),
                    React.createElement(
                        InputItem,
                        { clear: true, type: 'number', value: this.state.number, onChange: function onChange(value) {
                                _this2.setState({
                                    number: value
                                });
                            }, placeholder: 'number' },
                        '\u6570\u5B57'
                    )
                )
            );
        }
    }]);

    return BasicInputItemExample;
}(React.Component);

export default BasicInputItemExample;