import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { Popover } from 'antd-mobile';
var Item = Popover.Item;

var PopoverExample = function (_React$Component) {
    _inherits(PopoverExample, _React$Component);

    function PopoverExample(props) {
        _classCallCheck(this, PopoverExample);

        // componentDidMount() {
        //   setInterval(() => {
        //     this.refs.mc.refs.menuContext.toggleMenu('m');
        //   }, 2000);
        // }
        var _this = _possibleConstructorReturn(this, (PopoverExample.__proto__ || Object.getPrototypeOf(PopoverExample)).call(this, props));

        _this.onSelect = function (value) {
            _this.setState({
                // visible: false,
                selected: value
            });
        };
        _this.state = {
            // visible: false,
            selected: ''
        };
        return _this;
    }
    // handleVisibleChange = (_visible) => {
    //   this.setState({
    //     visible,
    //   });
    // }


    _createClass(PopoverExample, [{
        key: 'render',
        value: function render() {
            var overlay = [1, 2, 3].map(function (i, index) {
                return React.createElement(
                    Item,
                    { key: index, value: 'option ' + i },
                    React.createElement(
                        Text,
                        null,
                        'option ',
                        i
                    )
                );
            });
            overlay = overlay.concat([React.createElement(
                Item,
                { key: '4', value: 'disabled', disabled: true },
                React.createElement(
                    Text,
                    { style: { color: '#ddd' } },
                    'disabled opt'
                )
            ), React.createElement(
                Item,
                { key: '6', value: 'button ct', style: { backgroundColor: '#efeff4' } },
                React.createElement(
                    Text,
                    null,
                    '\u5173\u95ED'
                )
            )]);
            return React.createElement(
                View,
                null,
                React.createElement(
                    View,
                    null,
                    React.createElement(
                        Text,
                        { style: { marginTop: 30, marginLeft: 100 } },
                        '\u9009\u62E9\u4E86\uFF1A',
                        this.state.selected
                    )
                ),
                React.createElement(
                    View,
                    { style: styles.menuContainer },
                    React.createElement(
                        Popover,
                        { name: 'm', style: { backgroundColor: '#eee' }, overlay: overlay, contextStyle: styles.contextStyle, overlayStyle: [styles.overlayStyle, Platform.OS === 'android' && styles.androidOverlayStyle], triggerStyle: styles.triggerStyle, onSelect: this.onSelect },
                        React.createElement(
                            Text,
                            null,
                            '\u83DC\u5355'
                        )
                    )
                )
            );
        }
    }]);

    return PopoverExample;
}(React.Component);

export default PopoverExample;

var styles = StyleSheet.create({
    contextStyle: {
        margin: 50,
        flex: 1
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 400,
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    triggerStyle: {
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    overlayStyle: {
        left: 90,
        marginTop: 20
    },
    // 在 iOS 上弹出层有阴影，Android 上没有，
    // 详细：http://facebook.github.io/react-native/releases/0.39/docs/shadow-props.html#shadowcolor
    androidOverlayStyle: {
        borderWidth: 1,
        borderColor: '#ccc'
    }
});
export var title = 'Popover';
export var description = 'Popover example';