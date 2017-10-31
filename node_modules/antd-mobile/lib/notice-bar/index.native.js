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

var _index = require('./style/index.native');

var _index2 = _interopRequireDefault(_index);

var _Marquee = require('./Marquee.native');

var _Marquee2 = _interopRequireDefault(_Marquee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var NoticeStyles = _reactNative.StyleSheet.create(_index2['default']);

var NoticeBar = function (_React$Component) {
    (0, _inherits3['default'])(NoticeBar, _React$Component);

    function NoticeBar(props) {
        (0, _classCallCheck3['default'])(this, NoticeBar);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (NoticeBar.__proto__ || Object.getPrototypeOf(NoticeBar)).call(this, props));

        _this.onClick = function () {
            var _this$props = _this.props,
                mode = _this$props.mode,
                onClick = _this$props.onClick;

            if (onClick) {
                onClick();
            }
            if (mode === 'closable') {
                _this.setState({
                    show: false
                });
            }
        };
        _this.state = {
            show: true
        };
        return _this;
    }

    (0, _createClass3['default'])(NoticeBar, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                mode = _props.mode,
                icon = _props.icon,
                style = _props.style,
                action = _props.action,
                marqueeProps = _props.marqueeProps;

            var styles = this.props.styles;
            var operationDom = null;
            if (mode === 'closable') {
                operationDom = _react2['default'].createElement(
                    _reactNative.TouchableWithoutFeedback,
                    { onPress: this.onClick },
                    _react2['default'].createElement(
                        _reactNative.View,
                        { style: styles.actionWrap },
                        action ? action : _react2['default'].createElement(
                            _reactNative.Text,
                            { style: [styles.close] },
                            '\xD7'
                        )
                    )
                );
            } else if (mode === 'link') {
                operationDom = _react2['default'].createElement(
                    _reactNative.View,
                    { style: styles.actionWrap },
                    action ? action : _react2['default'].createElement(
                        _reactNative.Text,
                        { style: [styles.link] },
                        '\u221F'
                    )
                );
            }
            var main = _react2['default'].createElement(
                _reactNative.View,
                { style: [styles.notice, style] },
                icon && _react2['default'].createElement(
                    _reactNative.View,
                    { style: styles.left15 },
                    icon
                ),
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: [styles.container, icon ? styles.left6 : styles.left15] },
                    _react2['default'].createElement(_Marquee2['default'], (0, _extends3['default'])({ style: styles.content, text: children }, marqueeProps))
                ),
                operationDom
            );
            return this.state.show ? mode === 'closable' ? main : _react2['default'].createElement(
                _reactNative.TouchableWithoutFeedback,
                { onPress: this.onClick },
                main
            ) : null;
        }
    }]);
    return NoticeBar;
}(_react2['default'].Component);

exports['default'] = NoticeBar;

NoticeBar.defaultProps = {
    mode: '',
    onClick: function onClick() {},

    icon: _react2['default'].createElement(_reactNative.Image, { source: { uri: 'https://zos.alipayobjects.com/rmsportal/UgviADRsIpznkjSEXWEaPTlKtPCMSlth.png' }, style: { width: 14, height: 12 } }),
    styles: NoticeStyles
};
module.exports = exports['default'];