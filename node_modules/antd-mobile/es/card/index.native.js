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
import { View, StyleSheet } from 'react-native';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardStyle from './style/index.native';
var CardStyles = StyleSheet.create(CardStyle);

var Card = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card() {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    _createClass(Card, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                style = _a.style,
                styles = _a.styles,
                full = _a.full,
                children = _a.children,
                restProps = __rest(_a, ["style", "styles", "full", "children"]);
            var cardStyle = full ? styles.full : {};
            var childDom = React.Children.map(children, function (child) {
                return React.cloneElement(child, { styles: styles });
            });
            return React.createElement(
                View,
                _extends({ style: [styles.card, cardStyle, style] }, restProps),
                childDom
            );
        }
    }]);

    return Card;
}(React.Component);

export default Card;

Card.defaultProps = {
    style: {},
    full: false,
    styles: CardStyles
};
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;