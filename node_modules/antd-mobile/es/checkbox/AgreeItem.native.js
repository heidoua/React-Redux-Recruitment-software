import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';
import Checkbox from './Checkbox.native';
import AgreeItemstyle from './style/index.native';
var refCheckbox = 'checkbox';
var AgreeItemstyles = StyleSheet.create(AgreeItemstyle);

var AgreeItem = function (_React$Component) {
    _inherits(AgreeItem, _React$Component);

    function AgreeItem() {
        _classCallCheck(this, AgreeItem);

        var _this = _possibleConstructorReturn(this, (AgreeItem.__proto__ || Object.getPrototypeOf(AgreeItem)).apply(this, arguments));

        _this.handleClick = function () {
            var checkBox = _this.refs[refCheckbox];
            checkBox.handleClick();
        };
        return _this;
    }

    _createClass(AgreeItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                checkboxStyle = _props.checkboxStyle,
                children = _props.children,
                disabled = _props.disabled,
                checked = _props.checked,
                defaultChecked = _props.defaultChecked,
                onChange = _props.onChange,
                styles = _props.styles;

            styles = styles;
            var contentDom = void 0;
            if (React.isValidElement(children)) {
                contentDom = children;
            } else {
                contentDom = React.createElement(
                    Text,
                    null,
                    children
                );
            }
            return React.createElement(
                TouchableWithoutFeedback,
                { onPress: this.handleClick },
                React.createElement(
                    View,
                    { style: [styles.agreeItem, style] },
                    React.createElement(Checkbox, { ref: refCheckbox, style: [styles.agreeItemCheckbox, checkboxStyle], disabled: disabled, checked: checked, defaultChecked: defaultChecked, onChange: onChange }),
                    React.createElement(
                        View,
                        { style: { flex: 1 } },
                        contentDom
                    )
                )
            );
        }
    }]);

    return AgreeItem;
}(React.Component);

export default AgreeItem;

AgreeItem.defaultProps = {
    styles: AgreeItemstyles
};