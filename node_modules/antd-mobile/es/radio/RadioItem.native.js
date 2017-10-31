import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Radio from './Radio.native';
import List from '../list/index.native';
import RadioItemStyle from './style/index.native';
var ListItem = List.Item;
var refRadio = 'radio';
var RadioItemStyles = StyleSheet.create(RadioItemStyle);

var RadioItem = function (_React$Component) {
    _inherits(RadioItem, _React$Component);

    function RadioItem() {
        _classCallCheck(this, RadioItem);

        var _this = _possibleConstructorReturn(this, (RadioItem.__proto__ || Object.getPrototypeOf(RadioItem)).apply(this, arguments));

        _this.handleClick = function () {
            var radio = _this.refs[refRadio];
            radio.handleClick();
        };
        return _this;
    }

    _createClass(RadioItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                radioStyle = _props.radioStyle,
                defaultChecked = _props.defaultChecked,
                checked = _props.checked,
                disabled = _props.disabled,
                children = _props.children,
                onChange = _props.onChange;

            var styles = this.props.styles;
            var contentDom = null;
            if (children && React.isValidElement(children)) {
                contentDom = React.createElement(
                    View,
                    { style: { flex: 1 } },
                    children
                );
            } else {
                var contentStyle = [styles.radioItemContent, disabled ? styles.radioItemContentDisable : {}];
                contentDom = React.createElement(
                    Text,
                    { style: contentStyle, numberOfLines: 1 },
                    this.props.children
                );
            }
            var radioEl = React.createElement(Radio, { ref: refRadio, style: radioStyle, defaultChecked: defaultChecked, checked: checked, onChange: onChange, disabled: disabled });
            return React.createElement(
                ListItem,
                { style: style, onClick: disabled ? undefined : this.handleClick, extra: radioEl },
                contentDom
            );
        }
    }]);

    return RadioItem;
}(React.Component);

export default RadioItem;

RadioItem.defaultProps = {
    styles: RadioItemStyles
};