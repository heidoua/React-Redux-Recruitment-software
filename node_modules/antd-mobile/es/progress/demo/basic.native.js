import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, Text } from 'react-native';
import { WhiteSpace, Button, Progress } from 'antd-mobile';

var BasicProgressExample = function (_React$Component) {
    _inherits(BasicProgressExample, _React$Component);

    function BasicProgressExample(props) {
        _classCallCheck(this, BasicProgressExample);

        var _this = _possibleConstructorReturn(this, (BasicProgressExample.__proto__ || Object.getPrototypeOf(BasicProgressExample)).call(this, props));

        _this.onAdd = function () {
            var p = _this.state.percent + 10;
            if (_this.state.percent >= 100) {
                p = 0;
            }
            _this.setState({ percent: p });
        };
        _this.state = {
            percent: 40
        };
        return _this;
    }

    _createClass(BasicProgressExample, [{
        key: 'render',
        value: function render() {
            var style = {
                marginTop: 80,
                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
            };
            return React.createElement(
                View,
                null,
                React.createElement(Progress, { percent: 90, position: 'fixed' }),
                React.createElement(
                    View,
                    { style: [style] },
                    React.createElement(
                        View,
                        { style: { marginRight: 10, height: 4, flex: 1 } },
                        React.createElement(Progress, { percent: this.state.percent })
                    ),
                    React.createElement(
                        Text,
                        null,
                        this.state.percent,
                        '%'
                    )
                ),
                React.createElement(
                    Button,
                    { style: { width: 50, marginLeft: 10 }, type: 'ghost', size: 'small', onClick: this.onAdd },
                    '(+-)10'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(Progress, { percent: 5 })
            );
        }
    }]);

    return BasicProgressExample;
}(React.Component);

export default BasicProgressExample;