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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var CardFooter = function (_React$Component) {
    (0, _inherits3['default'])(CardFooter, _React$Component);

    function CardFooter() {
        (0, _classCallCheck3['default'])(this, CardFooter);
        return (0, _possibleConstructorReturn3['default'])(this, (CardFooter.__proto__ || Object.getPrototypeOf(CardFooter)).apply(this, arguments));
    }

    (0, _createClass3['default'])(CardFooter, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                content = _a.content,
                extra = _a.extra,
                styles = _a.styles,
                style = _a.style,
                restProps = __rest(_a, ["content", "extra", "styles", "style"]);
            var contentDom = _react2['default'].isValidElement(content) ? _react2['default'].createElement(
                _reactNative.View,
                { style: { flex: 1 } },
                content
            ) : _react2['default'].createElement(
                _reactNative.Text,
                { style: styles.footerContent },
                content
            );
            var extraDom = _react2['default'].isValidElement(extra) ? _react2['default'].createElement(
                _reactNative.View,
                { style: { flex: 1 } },
                extra
            ) : _react2['default'].createElement(
                _reactNative.Text,
                { style: [styles.footerExtra] },
                extra
            );
            return _react2['default'].createElement(
                _reactNative.View,
                (0, _extends3['default'])({ style: [styles.footerWrap, style] }, restProps),
                contentDom,
                extra ? extraDom : null
            );
        }
    }]);
    return CardFooter;
}(_react2['default'].Component);

exports['default'] = CardFooter;

CardFooter.defaultProps = {
    style: {}
};
module.exports = exports['default'];