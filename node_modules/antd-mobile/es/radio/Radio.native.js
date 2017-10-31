import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { TouchableWithoutFeedback, Image, Text, View, StyleSheet } from 'react-native';
import RadioStyle from './style/index.native';
var RadioStyles = StyleSheet.create(RadioStyle);

var Radio = function (_React$Component) {
    _inherits(Radio, _React$Component);

    function Radio(props, context) {
        _classCallCheck(this, Radio);

        var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props, context));

        _this.handleClick = function () {
            if (_this.props.disabled) {
                return;
            }
            if (!('checked' in _this.props)) {
                _this.setState({
                    checked: true
                });
            }
            if (_this.props.onChange) {
                _this.props.onChange({ target: { checked: true } });
            }
        };
        _this.state = {
            checked: props.checked || props.defaultChecked || false
        };
        return _this;
    }

    _createClass(Radio, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('checked' in nextProps) {
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
                children = _props.children;

            var styles = this.props.styles;
            var checked = this.state.checked;
            var imgSrc = undefined;
            if (checked) {
                if (disabled) {
                    imgSrc = require('./image/checked_disable.png');
                } else {
                    imgSrc = require('./image/checked.png');
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
                        null,
                        this.props.children
                    ) : children
                )
            );
        }
    }]);

    return Radio;
}(React.Component);

export default Radio;

Radio.defaultProps = {
    styles: RadioStyles
};