'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _setNormalizedColorAlpha = require('react-native/Libraries/StyleSheet/setNormalizedColorAlpha');

var _setNormalizedColorAlpha2 = _interopRequireDefault(_setNormalizedColorAlpha);

var _normalizeColor = require('react-native/Libraries/StyleSheet/normalizeColor');

var _normalizeColor2 = _interopRequireDefault(_normalizeColor);

var _index = require('./style/index.native');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var AndroidStyles = _reactNative.StyleSheet.create(_index2['default']);

var SegmentedControl = function (_React$Component) {
    (0, _inherits3['default'])(SegmentedControl, _React$Component);

    function SegmentedControl(props) {
        (0, _classCallCheck3['default'])(this, SegmentedControl);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (SegmentedControl.__proto__ || Object.getPrototypeOf(SegmentedControl)).call(this, props));

        _this.state = {
            selectedIndex: props.selectedIndex
        };
        return _this;
    }

    (0, _createClass3['default'])(SegmentedControl, [{
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
                var underlayColor = idx === selectedIndex ? tintColor : (0, _setNormalizedColorAlpha2['default'])((0, _normalizeColor2['default'])(tintColor), 0.3);
                return _react2['default'].createElement(
                    _reactNative.TouchableHighlight,
                    { disabled: disabled, key: idx, onPress: function onPress(e) {
                            return _this2.onPress(e, idx, value);
                        }, underlayColor: underlayColor, style: itemStyle, activeOpacity: 1 },
                    _react2['default'].createElement(
                        _reactNative.Text,
                        { style: [styles.itemText, { color: idx === selectedIndex ? '#fff' : tintColor }] },
                        value
                    )
                );
            });
            var enabledOpacity = !disabled ? 1 : 0.5;
            var segmentedStyle = (0, _extends3['default'])({}, style, { opacity: enabledOpacity, borderColor: tintColor });
            return _react2['default'].createElement(
                _reactNative.View,
                { style: [styles.segment, segmentedStyle, style] },
                items
            );
        }
    }]);
    return SegmentedControl;
}(_react2['default'].Component);

exports['default'] = SegmentedControl;

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
module.exports = exports['default'];