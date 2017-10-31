'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var FlexItem = function (_React$Component) {
    (0, _inherits3['default'])(FlexItem, _React$Component);

    function FlexItem() {
        (0, _classCallCheck3['default'])(this, FlexItem);
        return (0, _possibleConstructorReturn3['default'])(this, (FlexItem.__proto__ || Object.getPrototypeOf(FlexItem)).apply(this, arguments));
    }

    (0, _createClass3['default'])(FlexItem, [{
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
            return _react2['default'].createElement(
                _reactNative.TouchableWithoutFeedback,
                restProps,
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: [flexItemStyle, style] },
                    children
                )
            );
        }
    }]);
    return FlexItem;
}(_react2['default'].Component);

exports['default'] = FlexItem;

FlexItem.defaultProps = {
    flex: 1
};
module.exports = exports['default'];