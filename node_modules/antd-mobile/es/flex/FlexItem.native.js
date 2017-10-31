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

var FlexItem = function (_React$Component) {
    _inherits(FlexItem, _React$Component);

    function FlexItem() {
        _classCallCheck(this, FlexItem);

        return _possibleConstructorReturn(this, (FlexItem.__proto__ || Object.getPrototypeOf(FlexItem)).apply(this, arguments));
    }

    _createClass(FlexItem, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                style = _a.style,
                children = _a.children,
                flex = _a.flex,
                restProps = __rest(_a, ["style", "children", "flex"]);
            var flexItemStyle = {
                flex: flex || 1
            };
            // support other touchablewithoutfeedback props
            // TODO  support TouchableHighlight
            return React.createElement(
                TouchableWithoutFeedback,
                restProps,
                React.createElement(
                    View,
                    { style: [flexItemStyle, style] },
                    children
                )
            );
        }
    }]);

    return FlexItem;
}(React.Component);

export default FlexItem;

FlexItem.defaultProps = {
    flex: 1
};