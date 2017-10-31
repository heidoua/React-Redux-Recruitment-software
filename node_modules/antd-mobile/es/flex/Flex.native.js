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
import { View, TouchableWithoutFeedback } from 'react-native';

var Flex = function (_React$Component) {
    _inherits(Flex, _React$Component);

    function Flex() {
        _classCallCheck(this, Flex);

        return _possibleConstructorReturn(this, (Flex.__proto__ || Object.getPrototypeOf(Flex)).apply(this, arguments));
    }

    _createClass(Flex, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                style = _a.style,
                direction = _a.direction,
                wrap = _a.wrap,
                justify = _a.justify,
                align = _a.align,
                children = _a.children,
                restProps = __rest(_a, ["style", "direction", "wrap", "justify", "align", "children"]);
            var transferConst = [justify, align];
            transferConst = transferConst.map(function (el) {
                var tempTxt = void 0;
                switch (el) {
                    case 'start':
                        tempTxt = 'flex-start';
                        break;
                    case 'end':
                        tempTxt = 'flex-end';
                        break;
                    case 'between':
                        tempTxt = 'space-between';
                        break;
                    case 'around':
                        tempTxt = 'space-around';
                        break;
                    default:
                        tempTxt = el;
                        break;
                }
                return tempTxt;
            });
            var flexStyle = {
                flexDirection: direction,
                flexWrap: wrap,
                justifyContent: transferConst[0],
                alignItems: transferConst[1]
            };
            return React.createElement(
                TouchableWithoutFeedback,
                restProps,
                React.createElement(
                    View,
                    { style: [flexStyle, style] },
                    children
                )
            );
        }
    }]);

    return Flex;
}(React.Component);

export default Flex;

Flex.defaultProps = {
    direction: 'row',
    wrap: 'nowrap',
    justify: 'start',
    align: 'center'
};