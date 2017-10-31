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

var TabBar = function (_React$Component) {
    (0, _inherits3['default'])(TabBar, _React$Component);

    function TabBar() {
        (0, _classCallCheck3['default'])(this, TabBar);
        return (0, _possibleConstructorReturn3['default'])(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).apply(this, arguments));
    }

    (0, _createClass3['default'])(TabBar, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                barTintColor = _a.barTintColor,
                tintColor = _a.tintColor,
                unselectedTintColor = _a.unselectedTintColor,
                restProps = __rest(_a, ["barTintColor", "tintColor", "unselectedTintColor"]);
            return _react2['default'].createElement(_reactNative.TabBarIOS, (0, _extends3['default'])({ barTintColor: barTintColor, tintColor: tintColor, unselectedTintColor: unselectedTintColor }, restProps));
        }
    }]);
    return TabBar;
}(_react2['default'].Component);

TabBar.defaultProps = {
    barTintColor: 'white',
    tintColor: '#108ee9',
    unselectedTintColor: '#888'
};
TabBar.Item = _reactNative.TabBarIOS.Item;
exports['default'] = TabBar;
module.exports = exports['default'];