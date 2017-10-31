'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _default = require('../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

var _reactNativeCameraRollPicker = require('react-native-camera-roll-picker');

var _reactNativeCameraRollPicker2 = _interopRequireDefault(_reactNativeCameraRollPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var styles = _reactNative.StyleSheet.create({
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
        color: _default2['default'].brand_primary,
        fontSize: 16
    }
});

var ImageRoll = function (_React$Component) {
    (0, _inherits3['default'])(ImageRoll, _React$Component);

    function ImageRoll() {
        (0, _classCallCheck3['default'])(this, ImageRoll);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (ImageRoll.__proto__ || Object.getPrototypeOf(ImageRoll)).apply(this, arguments));

        _this.onSelected = function (images) {
            _this.props.onSelected(images[0]);
            _this.props.onCancel();
        };
        return _this;
    }

    (0, _createClass3['default'])(ImageRoll, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _reactNative.Modal,
                { animationType: 'slide', visible: true, onRequestClose: function onRequestClose() {}, transparent: false },
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: { flex: 1 } },
                    _react2['default'].createElement(_reactNative.StatusBar, { barStyle: 'light-content' }),
                    _react2['default'].createElement(_reactNative.View, { style: styles.statusBarBg }),
                    _react2['default'].createElement(
                        _reactNative.View,
                        { style: [styles.naviBar] },
                        _react2['default'].createElement(
                            _reactNative.Text,
                            { style: [styles.barTitle] },
                            'Photos'
                        ),
                        _react2['default'].createElement(
                            _reactNative.TouchableOpacity,
                            { onPress: this.props.onCancel },
                            _react2['default'].createElement(
                                _reactNative.Text,
                                { style: styles.rightBtn },
                                'Cancel'
                            )
                        )
                    ),
                    _react2['default'].createElement(_reactNativeCameraRollPicker2['default'], { selected: [], callback: this.onSelected, maximum: 1 })
                )
            );
        }
    }]);
    return ImageRoll;
}(_react2['default'].Component);

exports['default'] = ImageRoll;
module.exports = exports['default'];