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
import { SegmentedControlIOS } from 'react-native';

var SegmentedControl = function (_React$Component) {
    _inherits(SegmentedControl, _React$Component);

    function SegmentedControl() {
        _classCallCheck(this, SegmentedControl);

        return _possibleConstructorReturn(this, (SegmentedControl.__proto__ || Object.getPrototypeOf(SegmentedControl)).apply(this, arguments));
    }

    _createClass(SegmentedControl, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                tintColor = _a.tintColor,
                disabled = _a.disabled,
                selectedIndex = _a.selectedIndex,
                restProps = __rest(_a, ["tintColor", "disabled", "selectedIndex"]);
            return React.createElement(SegmentedControlIOS, _extends({ tintColor: tintColor, selectedIndex: selectedIndex }, restProps, { enabled: !disabled }));
        }
    }]);

    return SegmentedControl;
}(React.Component);

export default SegmentedControl;

SegmentedControl.defaultProps = {
    tintColor: '#108ee9',
    selectedIndex: 0
};