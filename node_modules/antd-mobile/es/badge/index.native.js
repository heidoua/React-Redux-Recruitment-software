import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BadgeStyle from './style/index.native';
var BadgeStyles = StyleSheet.create(BadgeStyle);

var Badge = function (_React$Component) {
    _inherits(Badge, _React$Component);

    function Badge() {
        _classCallCheck(this, Badge);

        return _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
    }

    _createClass(Badge, [{
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
            var contentDom = !dot ? React.createElement(
                View,
                _extends({}, restProps, { style: [styles[badgeCls], styles['' + badgeCls + size]] }),
                React.createElement(
                    Text,
                    { style: [styles.text] },
                    text
                )
            ) : React.createElement(View, _extends({}, restProps, { style: [styles.dot, styles['dotSize' + size]] }));
            return React.createElement(
                View,
                { style: [styles.wrap, style] },
                React.createElement(
                    View,
                    { style: [styles[badgeCls + 'Wrap']] },
                    children,
                    text || dot ? contentDom : null
                )
            );
        }
    }]);

    return Badge;
}(React.Component);

export default Badge;

Badge.defaultProps = {
    size: 'small',
    overflowCount: 99,
    dot: false,
    corner: false,
    styles: BadgeStyles
};