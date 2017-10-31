import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, Text, StatusBar, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import varibles from '../style/themes/default.native';
import CameraRollPicker from 'react-native-camera-roll-picker';
var styles = StyleSheet.create({
    statusBarBg: {
        height: 5 * 4
    },
    naviBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9',
        height: 11 * 4
    },
    barTitle: {
        flex: 1,
        textAlign: 'center',
        fontWeight: '500',
        marginLeft: 7 * 4,
        fontSize: 16
    },
    rightBtn: {
        width: 14 * 4,
        color: varibles.brand_primary,
        fontSize: 16
    }
});

var ImageRoll = function (_React$Component) {
    _inherits(ImageRoll, _React$Component);

    function ImageRoll() {
        _classCallCheck(this, ImageRoll);

        var _this = _possibleConstructorReturn(this, (ImageRoll.__proto__ || Object.getPrototypeOf(ImageRoll)).apply(this, arguments));

        _this.onSelected = function (images) {
            _this.props.onSelected(images[0]);
            _this.props.onCancel();
        };
        return _this;
    }

    _createClass(ImageRoll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                Modal,
                { animationType: 'slide', visible: true, onRequestClose: function onRequestClose() {}, transparent: false },
                React.createElement(
                    View,
                    { style: { flex: 1 } },
                    React.createElement(StatusBar, { barStyle: 'light-content' }),
                    React.createElement(View, { style: styles.statusBarBg }),
                    React.createElement(
                        View,
                        { style: [styles.naviBar] },
                        React.createElement(
                            Text,
                            { style: [styles.barTitle] },
                            'Photos'
                        ),
                        React.createElement(
                            TouchableOpacity,
                            { onPress: this.props.onCancel },
                            React.createElement(
                                Text,
                                { style: styles.rightBtn },
                                'Cancel'
                            )
                        )
                    ),
                    React.createElement(CameraRollPicker, { selected: [], callback: this.onSelected, maximum: 1 })
                )
            );
        }
    }]);

    return ImageRoll;
}(React.Component);

export default ImageRoll;