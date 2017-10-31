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
import { TabBarIOS } from 'react-native';

var TabBar = function (_React$Component) {
    _inherits(TabBar, _React$Component);

    function TabBar() {
        _classCallCheck(this, TabBar);

        return _possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).apply(this, arguments));
    }

    _createClass(TabBar, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                barTintColor = _a.barTintColor,
                tintColor = _a.tintColor,
                unselectedTintColor = _a.unselectedTintColor,
                restProps = __rest(_a, ["barTintColor", "tintColor", "unselectedTintColor"]);
            return React.createElement(TabBarIOS, _extends({ barTintColor: barTintColor, tintColor: tintColor, unselectedTintColor: unselectedTintColor }, restProps));
        }
    }]);

    return TabBar;
}(React.Component);

TabBar.defaultProps = {
    barTintColor: 'white',
    tintColor: '#108ee9',
    unselectedTintColor: '#888'
};
TabBar.Item = TabBarIOS.Item;
export default TabBar;