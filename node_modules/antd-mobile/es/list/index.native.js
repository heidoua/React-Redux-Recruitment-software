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
import Item from './ListItem.native';
import listStyle from './style/index.native';
var listStyles = StyleSheet.create(listStyle);

var List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
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
                    content = React.createElement(
                        Text,
                        { style: _styles.Header },
                        content
                    );
                }
                headerDom = React.createElement(
                    View,
                    null,
                    content
                );
            }
            if (renderFooter) {
                var _content = typeof renderFooter === 'function' ? renderFooter() : renderFooter;
                if (typeof _content === 'string') {
                    _content = React.createElement(
                        Text,
                        { style: _styles.Footer },
                        _content
                    );
                }
                footerDom = React.createElement(
                    View,
                    null,
                    _content
                );
            }
            return React.createElement(
                View,
                _extends({}, restProps, { style: style }),
                headerDom,
                React.createElement(
                    View,
                    { style: _styles.Body },
                    children,
                    React.createElement(View, { style: [_styles.BodyBottomLine] })
                ),
                footerDom
            );
        }
    }]);

    return List;
}(React.Component);

export default List;

List.Item = Item;
List.defaultProps = {
    styles: listStyles
};