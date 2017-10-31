import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:no-console */
import { View } from 'react-native';
import { DatePicker, List } from 'antd-mobile';
import React from 'react';
var now = new Date();

var PopupExample = function (_React$Component) {
    _inherits(PopupExample, _React$Component);

    function PopupExample(props) {
        _classCallCheck(this, PopupExample);

        var _this = _possibleConstructorReturn(this, (PopupExample.__proto__ || Object.getPrototypeOf(PopupExample)).call(this, props));

        _this.onChange = function (value) {
            _this.setState({ value: value });
        };
        _this.state = {
            value: undefined
        };
        return _this;
    }

    _createClass(PopupExample, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                View,
                null,
                React.createElement(
                    List,
                    null,
                    React.createElement(
                        DatePicker,
                        { defaultDate: now, value: this.state.value, mode: 'date', minDate: this.date1MinDate || (this.date1MinDate = new Date(2015, 7, 6)), maxDate: this.date1MaxDate || (this.date1MaxDate = new Date(2016, 11, 3)), onChange: this.onChange, format: 'YYYY-MM-DD' },
                        React.createElement(
                            List.Item,
                            { arrow: 'horizontal' },
                            'Select Date'
                        )
                    )
                )
            );
        }
    }]);

    return PopupExample;
}(React.Component);

export default PopupExample;