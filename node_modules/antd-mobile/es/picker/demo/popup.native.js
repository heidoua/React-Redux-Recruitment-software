import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import { View } from 'react-native';
import { Picker, List } from 'antd-mobile';
import React from 'react';
import { district } from 'antd-mobile-demo-data';

var PopupExample = function (_React$Component) {
    _inherits(PopupExample, _React$Component);

    function PopupExample(props) {
        _classCallCheck(this, PopupExample);

        var _this = _possibleConstructorReturn(this, (PopupExample.__proto__ || Object.getPrototypeOf(PopupExample)).call(this, props));

        _this.onClick = function () {
            // console.log('start loading data');
            setTimeout(function () {
                _this.setState({
                    data: district
                });
            }, 500);
        };
        _this.onChange = function (value) {
            // console.log(value);
            _this.setState({ value: value });
        };
        _this.state = {
            data: [],
            value: []
        };
        return _this;
    }

    _createClass(PopupExample, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                View,
                { style: { marginTop: 30 } },
                React.createElement(
                    List,
                    null,
                    React.createElement(
                        Picker,
                        { data: this.state.data, cols: 2, value: this.state.value, onChange: this.onChange },
                        React.createElement(
                            List.Item,
                            { arrow: 'horizontal', last: true, onClick: this.onClick },
                            '\u7701\u5E02\u9009\u62E9(\u5F02\u6B65\u52A0\u8F7D)'
                        )
                    )
                )
            );
        }
    }]);

    return PopupExample;
}(React.Component);

export default PopupExample;