import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { ScrollView, View, StyleSheet, PixelRatio, Text } from 'react-native';
import PickerMixin from './PickerMixin';
var ratio = PixelRatio.get();
var styles = StyleSheet.create({
    indicator: {
        position: 'absolute',
        left: 0,
        top: -99,
        borderColor: '#aaa',
        borderTopWidth: 1 / ratio,
        borderBottomWidth: 1 / ratio
    },
    scrollView: {
        height: 0
    },
    selectedItemText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    itemText: {
        fontSize: 20,
        color: '#aaa',
        textAlign: 'center'
    }
});

var Picker = function (_React$Component) {
    _inherits(Picker, _React$Component);

    function Picker() {
        _classCallCheck(this, Picker);

        var _this = _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));

        _this.onItemLayout = function (e) {
            var _e$nativeEvent$layout = e.nativeEvent.layout,
                height = _e$nativeEvent$layout.height,
                width = _e$nativeEvent$layout.width;
            // console.log('onItemLayout', height);

            if (_this.itemHeight !== height || _this.itemWidth !== width) {
                _this.itemWidth = width;
                _this.indicatorRef.setNativeProps({
                    style: [styles.indicator, {
                        top: height * 3,
                        height: height,
                        width: width
                    }]
                });
            }
            if (_this.itemHeight !== height) {
                _this.itemHeight = height;
                _this.scrollerRef.setNativeProps({
                    style: {
                        height: height * 7
                    }
                });
                _this.contentRef.setNativeProps({
                    style: {
                        paddingTop: height * 3,
                        paddingBottom: height * 3
                    }
                });
                // i do no know why!...
                setTimeout(function () {
                    _this.props.select(_this.props.selectedValue, _this.itemHeight, _this.scrollTo);
                }, 0);
            }
        };
        _this.scrollTo = function (y) {
            _this.scrollerRef.scrollTo({
                y: y,
                animated: false
            });
        };
        _this.fireValueChange = function (selectedValue) {
            if (_this.props.selectedValue !== selectedValue && _this.props.onValueChange) {
                _this.props.onValueChange(selectedValue);
            }
        };
        _this.onScroll = function (e) {
            var y = e.nativeEvent.contentOffset.y;

            _this.clearScrollBuffer();
            _this.scrollBuffer = setTimeout(function () {
                _this.clearScrollBuffer();
                _this.props.doScrollingComplete(y, _this.itemHeight, _this.fireValueChange);
            }, 100);
        };
        return _this;
    }

    _createClass(Picker, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.props.select(this.props.selectedValue, this.itemHeight, this.scrollTo);
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            this.clearScrollBuffer();
        }
    }, {
        key: 'clearScrollBuffer',
        value: function clearScrollBuffer() {
            if (this.scrollBuffer) {
                clearTimeout(this.scrollBuffer);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                itemStyle = _props.itemStyle,
                selectedValue = _props.selectedValue,
                style = _props.style;

            var items = React.Children.map(children, function (item, index) {
                var totalStyle = [styles.itemText];
                if (selectedValue === item.props.value) {
                    totalStyle.push(styles.selectedItemText);
                }
                totalStyle.push(itemStyle);
                return React.createElement(
                    View,
                    { ref: function ref(el) {
                            return _this2['item' + index] = el;
                        }, onLayout: index === 0 ? _this2.onItemLayout : undefined, key: item.key },
                    React.createElement(
                        Text,
                        { style: totalStyle, numberOfLines: 1 },
                        item.props.label
                    )
                );
            });
            return React.createElement(
                View,
                { style: style },
                React.createElement(
                    ScrollView,
                    { style: styles.scrollView, ref: function ref(el) {
                            return _this2.scrollerRef = el;
                        }, onScroll: this.onScroll, scrollEventThrottle: 16, showsVerticalScrollIndicator: false, overScrollMode: 'never' },
                    React.createElement(
                        View,
                        { ref: function ref(el) {
                                return _this2.contentRef = el;
                            } },
                        items
                    )
                ),
                React.createElement(View, { ref: function ref(el) {
                        return _this2.indicatorRef = el;
                    }, style: styles.indicator })
            );
        }
    }]);

    return Picker;
}(React.Component);

export default PickerMixin(Picker);