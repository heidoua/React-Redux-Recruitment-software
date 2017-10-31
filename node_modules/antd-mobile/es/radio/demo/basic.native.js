import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { View, Text } from 'react-native';
import { WhiteSpace, Radio, List } from 'antd-mobile';
var RadioItem = Radio.RadioItem;

var BasicRadioExample = function (_React$Component) {
    _inherits(BasicRadioExample, _React$Component);

    function BasicRadioExample() {
        _classCallCheck(this, BasicRadioExample);

        var _this = _possibleConstructorReturn(this, (BasicRadioExample.__proto__ || Object.getPrototypeOf(BasicRadioExample)).apply(this, arguments));

        _this.state = {
            part1Value: 1,
            part2Value: 1
        };
        return _this;
    }

    _createClass(BasicRadioExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                View,
                null,
                React.createElement(
                    View,
                    { style: { padding: 10 } },
                    React.createElement(
                        Radio,
                        { checked: this.state.part1Value === 1, onChange: function onChange(event) {
                                if (event.target.checked) {
                                    _this2.setState({ part1Value: 1 });
                                }
                            }, style: { borderWidth: 1, borderColor: '#999', margin: 10 } },
                        'Support'
                    ),
                    React.createElement(WhiteSpace, null),
                    React.createElement(Radio, { checked: this.state.part1Value === 2, onChange: function onChange(event) {
                            if (event.target.checked) {
                                _this2.setState({ part1Value: 2 });
                            }
                        }, style: { borderWidth: 1, borderColor: '#999', margin: 10 } }),
                    React.createElement(WhiteSpace, null)
                ),
                React.createElement(
                    List,
                    { style: { marginTop: 12 } },
                    React.createElement(
                        Text,
                        { style: { marginTop: 12 } },
                        'Form radio, radio in general list.'
                    ),
                    React.createElement(
                        RadioItem,
                        { checked: this.state.part2Value === 1, onChange: function onChange(event) {
                                if (event.target.checked) {
                                    _this2.setState({ part2Value: 1 });
                                }
                            } },
                        'Use Ant Desgin Component'
                    ),
                    React.createElement(
                        RadioItem,
                        { checked: this.state.part2Value === 2, onChange: function onChange(event) {
                                if (event.target.checked) {
                                    _this2.setState({ part2Value: 2 });
                                }
                            } },
                        'Use Ant Desgin Component'
                    ),
                    React.createElement(
                        RadioItem,
                        { disabled: true },
                        'Set disabled'
                    ),
                    React.createElement(
                        RadioItem,
                        { disabled: true, checked: true },
                        'Set disabled'
                    )
                )
            );
        }
    }]);

    return BasicRadioExample;
}(React.Component);

export default BasicRadioExample;