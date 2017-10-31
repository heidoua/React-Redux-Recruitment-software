import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import DateTimePicker from 'rmc-date-picker';

var TimePicker = function (_React$PureComponent) {
    _inherits(TimePicker, _React$PureComponent);

    function TimePicker() {
        _classCallCheck(this, TimePicker);

        var _this = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).apply(this, arguments));

        _this.onDateChange = function (date) {
            var onValueChange = _this.props.onValueChange;

            onValueChange && onValueChange(date);
        };
        return _this;
    }

    _createClass(TimePicker, [{
        key: 'getMinTime',
        value: function getMinTime(date) {
            var minDate = this.props.minDate;
            if (!date || date.getFullYear() > minDate.getFullYear() || date.getMonth() > minDate.getMonth() || date.getDate() > minDate.getDate()) {
                return TimePicker.defaultProps.minDate;
            }
            return minDate;
        }
    }, {
        key: 'getMaxTime',
        value: function getMaxTime(date) {
            var maxDate = this.props.maxDate;
            if (!date || date.getFullYear() < maxDate.getFullYear() || date.getMonth() < maxDate.getMonth() || date.getDate() < maxDate.getDate()) {
                return TimePicker.defaultProps.maxDate;
            }
            return maxDate;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                locale = _props.locale,
                title = _props.title,
                value = _props.value,
                defaultValue = _props.defaultValue,
                prefixCls = _props.prefixCls,
                pickerPrefixCls = _props.pickerPrefixCls,
                clientHeight = _props.clientHeight;

            var date = value || defaultValue || undefined;
            var height = clientHeight && clientHeight * 3 / 8 - 52 || Number.POSITIVE_INFINITY;
            return React.createElement(
                'div',
                { className: 'time-picker' },
                React.createElement(
                    'div',
                    { className: 'title' },
                    title
                ),
                React.createElement(DateTimePicker, { prefixCls: prefixCls, pickerPrefixCls: pickerPrefixCls, style: {
                        height: height > 164 || height < 0 ? 164 : height,
                        overflow: 'hidden'
                    }, mode: 'time', date: date, locale: locale, minDate: this.getMinTime(date), maxDate: this.getMaxTime(date), onDateChange: this.onDateChange, use12Hours: true })
            );
        }
    }]);

    return TimePicker;
}(React.PureComponent);

export default TimePicker;

TimePicker.defaultProps = {
    minDate: new Date(0, 0, 0, 0, 0),
    maxDate: new Date(9999, 11, 31, 23, 59, 59),
    defaultValue: new Date(2000, 1, 1, 8)
};