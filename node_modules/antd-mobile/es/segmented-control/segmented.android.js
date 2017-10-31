import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import setNormalizedColorAlpha from 'react-native/Libraries/StyleSheet/setNormalizedColorAlpha';
import normalizeColor from 'react-native/Libraries/StyleSheet/normalizeColor';
import AndroidStyle from './style/index.native';
var AndroidStyles = StyleSheet.create(AndroidStyle);

var SegmentedControl = function (_React$Component) {
    _inherits(SegmentedControl, _React$Component);

    function SegmentedControl(props) {
        _classCallCheck(this, SegmentedControl);

        var _this = _possibleConstructorReturn(this, (SegmentedControl.__proto__ || Object.getPrototypeOf(SegmentedControl)).call(this, props));

        _this.state = {
            selectedIndex: props.selectedIndex
        };
        return _this;
    }

    _createClass(SegmentedControl, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.selectedIndex !== this.props.selectedIndex) {
                this.setState({
                    selectedIndex: nextProps.selectedIndex
                });
            }
        }
    }, {
        key: 'onPress',
        value: function onPress(e, index, value) {
            var _props = this.props,
                disabled = _props.disabled,
                onChange = _props.onChange,
                onValueChange = _props.onValueChange;

            if (!disabled) {
                e.nativeEvent.selectedSegmentIndex = index;
                e.nativeEvent.value = value;
                if (onChange) {
                    onChange(e);
                }
                if (onValueChange) {
                    onValueChange(value);
                }
                this.setState({
                    selectedIndex: index
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                style = _props2.style,
                disabled = _props2.disabled,
                _props2$values = _props2.values,
                values = _props2$values === undefined ? [] : _props2$values,
                tintColor = _props2.tintColor;

            var styles = this.props.styles;
            var selectedIndex = this.state.selectedIndex;
            var items = values.map(function (value, idx) {
                var itemRadius = null;
                if (idx === 0) {
                    itemRadius = styles.itemLeftRadius;
                } else if (idx === values.length - 1) {
                    itemRadius = styles.itemRightRadius;
                }
                var itemStyle = [styles.item, itemRadius, {
                    backgroundColor: idx === selectedIndex ? tintColor : 'transparent',
                    borderColor: tintColor
                }];
                var underlayColor = idx === selectedIndex ? tintColor : setNormalizedColorAlpha(normalizeColor(tintColor), 0.3);
                return React.createElement(
                    TouchableHighlight,
                    { disabled: disabled, key: idx, onPress: function onPress(e) {
                            return _this2.onPress(e, idx, value);
                        }, underlayColor: underlayColor, style: itemStyle, activeOpacity: 1 },
                    React.createElement(
                        Text,
                        { style: [styles.itemText, { color: idx === selectedIndex ? '#fff' : tintColor }] },
                        value
                    )
                );
            });
            var enabledOpacity = !disabled ? 1 : 0.5;
            var segmentedStyle = _extends({}, style, { opacity: enabledOpacity, borderColor: tintColor });
            return React.createElement(
                View,
                { style: [styles.segment, segmentedStyle, style] },
                items
            );
        }
    }]);

    return SegmentedControl;
}(React.Component);

export default SegmentedControl;

SegmentedControl.defaultProps = {
    selectedIndex: 0,
    disabled: false,
    values: [],
    onChange: function onChange() {},
    onValueChange: function onValueChange() {},

    tintColor: '#108ee9',
    style: {},
    styles: AndroidStyles
};