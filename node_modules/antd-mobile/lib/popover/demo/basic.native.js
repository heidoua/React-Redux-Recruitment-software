'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.description = exports.title = undefined;

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

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Item = _antdMobile.Popover.Item;

var PopoverExample = function (_React$Component) {
    (0, _inherits3['default'])(PopoverExample, _React$Component);

    function PopoverExample(props) {
        (0, _classCallCheck3['default'])(this, PopoverExample);

        // componentDidMount() {
        //   setInterval(() => {
        //     this.refs.mc.refs.menuContext.toggleMenu('m');
        //   }, 2000);
        // }
        var _this = (0, _possibleConstructorReturn3['default'])(this, (PopoverExample.__proto__ || Object.getPrototypeOf(PopoverExample)).call(this, props));

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


    (0, _createClass3['default'])(PopoverExample, [{
        key: 'render',
        value: function render() {
            var overlay = [1, 2, 3].map(function (i, index) {
                return _react2['default'].createElement(
                    Item,
                    { key: index, value: 'option ' + i },
                    _react2['default'].createElement(
                        _reactNative.Text,
                        null,
                        'option ',
                        i
                    )
                );
            });
            overlay = overlay.concat([_react2['default'].createElement(
                Item,
                { key: '4', value: 'disabled', disabled: true },
                _react2['default'].createElement(
                    _reactNative.Text,
                    { style: { color: '#ddd' } },
                    'disabled opt'
                )
            ), _react2['default'].createElement(
                Item,
                { key: '6', value: 'button ct', style: { backgroundColor: '#efeff4' } },
                _react2['default'].createElement(
                    _reactNative.Text,
                    null,
                    '\u5173\u95ED'
                )
            )]);
            return _react2['default'].createElement(
                _reactNative.View,
                null,
                _react2['default'].createElement(
                    _reactNative.View,
                    null,
                    _react2['default'].createElement(
                        _reactNative.Text,
                        { style: { marginTop: 30, marginLeft: 100 } },
                        '\u9009\u62E9\u4E86\uFF1A',
                        this.state.selected
                    )
                ),
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: styles.menuContainer },
                    _react2['default'].createElement(
                        _antdMobile.Popover,
                        { name: 'm', style: { backgroundColor: '#eee' }, overlay: overlay, contextStyle: styles.contextStyle, overlayStyle: [styles.overlayStyle, _reactNative.Platform.OS === 'android' && styles.androidOverlayStyle], triggerStyle: styles.triggerStyle, onSelect: this.onSelect },
                        _react2['default'].createElement(
                            _reactNative.Text,
                            null,
                            '\u83DC\u5355'
                        )
                    )
                )
            );
        }
    }]);
    return PopoverExample;
}(_react2['default'].Component);

exports['default'] = PopoverExample;

var styles = _reactNative.StyleSheet.create({
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
var title = exports.title = 'Popover';
var description = exports.description = 'Popover example';