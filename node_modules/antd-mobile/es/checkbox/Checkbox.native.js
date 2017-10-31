import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { TouchableWithoutFeedback, Image, View, Text, StyleSheet } from 'react-native';
import CheckboxStyle from './style/index.native';
var CheckboxStyles = StyleSheet.create(CheckboxStyle);

var Checkbox = function (_React$Component) {
    _inherits(Checkbox, _React$Component);

    function Checkbox(props, context) {
        _classCallCheck(this, Checkbox);

        var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props, context));

        _this.handleClick = function () {
            if (_this.props.disabled) {
                return;
            }
            var checked = !_this.state.checked;
            if (!(typeof _this.props.checked === 'boolean')) {
                _this.setState({
                    checked: checked
                });
            }
            if (_this.props.onChange) {
                _this.props.onChange({ target: { checked: checked } });
            }
        };
        _this.state = {
            checked: props.checked || props.defaultChecked || false
        };
        return _this;
    }

    _createClass(Checkbox, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (typeof nextProps.checked === 'boolean') {
                this.setState({
                    checked: !!nextProps.checked
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                disabled = _props.disabled,
                children = _props.children,
                styles = _props.styles;

            var checked = this.state.checked;
            var imgSrc = void 0;
            if (checked) {
                if (disabled) {
                    imgSrc = require('./image/checked_disable.png');
                } else {
                    imgSrc = require('./image/checked.png');
                }
            } else {
                if (disabled) {
                    imgSrc = require('./image/normal_disable.png');
                } else {
                    imgSrc = require('./image/normal.png');
                }
            }
            return React.createElement(
                TouchableWithoutFeedback,
                { onPress: this.handleClick },
                React.createElement(
                    View,
                    { style: [styles.wrapper] },
                    React.createElement(Image, { source: imgSrc, style: [styles.icon, style] }),
                    typeof children === 'string' ? React.createElement(
                        Text,
                        { style: styles.iconRight },
                        this.props.children
                    ) : children
                )
            );
        }
    }]);

    return Checkbox;
}(React.Component);

export default Checkbox;

Checkbox.defaultProps = {
    styles: CheckboxStyles
};