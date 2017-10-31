import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { StyleSheet } from 'react-native';
import Checkbox from './Checkbox.native';
import List from '../list/index.native';
import CheckboxItemStyle from './style/index.native';
var ListItem = List.Item;
var refCheckbox = 'checkbox';
var CheckboxItemStyles = StyleSheet.create(CheckboxItemStyle);

var CheckboxItem = function (_React$Component) {
    _inherits(CheckboxItem, _React$Component);

    function CheckboxItem() {
        _classCallCheck(this, CheckboxItem);

        var _this = _possibleConstructorReturn(this, (CheckboxItem.__proto__ || Object.getPrototypeOf(CheckboxItem)).apply(this, arguments));

        _this.handleClick = function () {
            var checkBox = _this.refs[refCheckbox];
            checkBox.handleClick();
            if (_this.props.onClick) {
                _this.props.onClick();
            }
        };
        return _this;
    }

    _createClass(CheckboxItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                checkboxStyle = _props.checkboxStyle,
                defaultChecked = _props.defaultChecked,
                checked = _props.checked,
                disabled = _props.disabled,
                children = _props.children,
                extra = _props.extra,
                onChange = _props.onChange;

            var styles = this.props.styles;
            var thumbEl = React.createElement(Checkbox, { ref: refCheckbox, style: [styles.checkboxItemCheckbox, checkboxStyle], defaultChecked: defaultChecked, checked: checked, onChange: onChange, disabled: disabled });
            return React.createElement(
                ListItem,
                { style: style, onClick: disabled ? undefined : this.handleClick, extra: extra, thumb: thumbEl },
                children
            );
        }
    }]);

    return CheckboxItem;
}(React.Component);

export default CheckboxItem;

CheckboxItem.defaultProps = {
    styles: CheckboxItemStyles
};