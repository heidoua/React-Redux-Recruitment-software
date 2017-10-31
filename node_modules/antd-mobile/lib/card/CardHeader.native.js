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
/* tslint:disable:jsx-no-multiline-js */

var CardHeader = function (_React$Component) {
    (0, _inherits3['default'])(CardHeader, _React$Component);

    function CardHeader() {
        (0, _classCallCheck3['default'])(this, CardHeader);
        return (0, _possibleConstructorReturn3['default'])(this, (CardHeader.__proto__ || Object.getPrototypeOf(CardHeader)).apply(this, arguments));
    }

    (0, _createClass3['default'])(CardHeader, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                title = _a.title,
                thumb = _a.thumb,
                thumbStyle = _a.thumbStyle,
                extra = _a.extra,
                style = _a.style,
                styles = _a.styles,
                restProps = __rest(_a, ["title", "thumb", "thumbStyle", "extra", "style", "styles"]);
            var titleDom = _react2['default'].isValidElement(title) ? _react2['default'].createElement(
                _reactNative.View,
                { style: { flex: 1 } },
                title
            ) : _react2['default'].createElement(
                _reactNative.Text,
                { style: styles.headerContent },
                title
            );
            var extraDom = _react2['default'].isValidElement(extra) ? _react2['default'].createElement(
                _reactNative.View,
                { style: { flex: 1 } },
                extra
            ) : _react2['default'].createElement(
                _reactNative.Text,
                { style: [styles.headerExtra] },
                extra
            );
            return _react2['default'].createElement(
                _reactNative.View,
                (0, _extends3['default'])({ style: [styles.headerWrap, style] }, restProps),
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: [styles.headerTitle] },
                    typeof thumb === 'string' ? _react2['default'].createElement(_reactNative.Image, { source: { uri: thumb }, style: [styles.headerImage, thumbStyle] }) : thumb,
                    titleDom
                ),
                extra ? extraDom : null
            );
        }
    }]);
    return CardHeader;
}(_react2['default'].Component);

exports['default'] = CardHeader;

CardHeader.defaultProps = {
    thumbStyle: {},
    style: {}
};
module.exports = exports['default'];