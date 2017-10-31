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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var BadgeStyles = _reactNative.StyleSheet.create(_index2['default']);

var Badge = function (_React$Component) {
    (0, _inherits3['default'])(Badge, _React$Component);

    function Badge() {
        (0, _classCallCheck3['default'])(this, Badge);
        return (0, _possibleConstructorReturn3['default'])(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Badge, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                styles = _a.styles,
                style = _a.style,
                children = _a.children,
                text = _a.text,
                size = _a.size,
                overflowCount = _a.overflowCount,
                dot = _a.dot,
                corner = _a.corner,
                restProps = __rest(_a, ["styles", "style", "children", "text", "size", "overflowCount", "dot", "corner"]);
            styles = styles;
            text = typeof text === 'number' && text > overflowCount ? overflowCount + '+' : text;
            // dot mode don't need text
            if (dot) {
                text = '';
            }
            var badgeCls = corner ? 'textCorner' : 'textDom';
            var contentDom = !dot ? _react2['default'].createElement(
                _reactNative.View,
                (0, _extends3['default'])({}, restProps, { style: [styles[badgeCls], styles['' + badgeCls + size]] }),
                _react2['default'].createElement(
                    _reactNative.Text,
                    { style: [styles.text] },
                    text
                )
            ) : _react2['default'].createElement(_reactNative.View, (0, _extends3['default'])({}, restProps, { style: [styles.dot, styles['dotSize' + size]] }));
            return _react2['default'].createElement(
                _reactNative.View,
                { style: [styles.wrap, style] },
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: [styles[badgeCls + 'Wrap']] },
                    children,
                    text || dot ? contentDom : null
                )
            );
        }
    }]);
    return Badge;
}(_react2['default'].Component);

exports['default'] = Badge;

Badge.defaultProps = {
    size: 'small',
    overflowCount: 99,
    dot: false,
    corner: false,
    styles: BadgeStyles
};
module.exports = exports['default'];