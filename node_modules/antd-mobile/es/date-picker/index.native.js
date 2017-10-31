import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import PopupDatePicker from 'rmc-date-picker/es/Popup';
import PickerStyle from '../picker/style/index.native';
import { formatFn } from './utils';
import RCDatePicker from 'rmc-date-picker/es/DatePicker';
import { getComponentLocale } from '../_util/getLocale';
var PickerStyles = StyleSheet.create(PickerStyle);

var DatePicker = function (_React$Component) {
    _inherits(DatePicker, _React$Component);

    function DatePicker() {
        _classCallCheck(this, DatePicker);

        return _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).apply(this, arguments));
    }

    _createClass(DatePicker, [{
        key: 'render',
        value: function render() {
            var props = this.props,
                context = this.context;
            var children = props.children,
                value = props.value,
                styles = props.styles;

            var locale = getComponentLocale(props, context, 'DatePicker', function () {
                return require('./locale/zh_CN');
            });
            var okText = locale.okText,
                dismissText = locale.dismissText,
                extra = locale.extra,
                DatePickerLocale = locale.DatePickerLocale;

            var dataPicker = React.createElement(RCDatePicker, { minuteStep: props.minuteStep, locale: DatePickerLocale, mode: props.mode, minDate: props.minDate, maxDate: props.maxDate, defaultDate: value, onValueChange: props.onValueChange });
            return React.createElement(
                PopupDatePicker,
                _extends({ datePicker: dataPicker, styles: styles }, props, { date: value, dismissText: this.props.dismissText || dismissText, okText: this.props.okText || okText }),
                children && React.cloneElement(children, { extra: value ? formatFn(this, value) : this.props.extra || extra })
            );
        }
    }]);

    return DatePicker;
}(React.Component);

export default DatePicker;

DatePicker.defaultProps = {
    mode: 'datetime',
    triggerType: 'onClick',
    styles: PickerStyles,
    minuteStep: 1
};
DatePicker.contextTypes = {
    antLocale: PropTypes.object
};