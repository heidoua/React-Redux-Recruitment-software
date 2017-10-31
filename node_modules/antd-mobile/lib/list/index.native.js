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

var _ListItem = require('./ListItem.native');

var _ListItem2 = _interopRequireDefault(_ListItem);

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

var listStyles = _reactNative.StyleSheet.create(_index2['default']);

var List = function (_React$Component) {
    (0, _inherits3['default'])(List, _React$Component);

    function List() {
        (0, _classCallCheck3['default'])(this, List);
        return (0, _possibleConstructorReturn3['default'])(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    (0, _createClass3['default'])(List, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                children = _a.children,
                style = _a.style,
                renderHeader = _a.renderHeader,
                renderFooter = _a.renderFooter,
                styles = _a.styles,
                restProps = __rest(_a, ["children", "style", "renderHeader", "renderFooter", "styles"]);
            var _styles = styles;
            var headerDom = null;
            var footerDom = null;
            if (renderHeader) {
                var content = typeof renderHeader === 'function' ? renderHeader() : renderHeader;
                if (typeof content === 'string') {
                    content = _react2['default'].createElement(
                        _reactNative.Text,
                        { style: _styles.Header },
                        content
                    );
                }
                headerDom = _react2['default'].createElement(
                    _reactNative.View,
                    null,
                    content
                );
            }
            if (renderFooter) {
                var _content = typeof renderFooter === 'function' ? renderFooter() : renderFooter;
                if (typeof _content === 'string') {
                    _content = _react2['default'].createElement(
                        _reactNative.Text,
                        { style: _styles.Footer },
                        _content
                    );
                }
                footerDom = _react2['default'].createElement(
                    _reactNative.View,
                    null,
                    _content
                );
            }
            return _react2['default'].createElement(
                _reactNative.View,
                (0, _extends3['default'])({}, restProps, { style: style }),
                headerDom,
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: _styles.Body },
                    children,
                    _react2['default'].createElement(_reactNative.View, { style: [_styles.BodyBottomLine] })
                ),
                footerDom
            );
        }
    }]);
    return List;
}(_react2['default'].Component);

exports['default'] = List;

List.Item = _ListItem2['default'];
List.defaultProps = {
    styles: listStyles
};
module.exports = exports['default'];