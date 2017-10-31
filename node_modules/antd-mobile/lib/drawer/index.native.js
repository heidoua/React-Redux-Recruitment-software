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

var _reactNativeDrawerLayout = require('react-native-drawer-layout');

var _reactNativeDrawerLayout2 = _interopRequireDefault(_reactNativeDrawerLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:jsx-no-multiline-js */

var Drawer = function (_React$Component) {
    (0, _inherits3['default'])(Drawer, _React$Component);

    function Drawer() {
        (0, _classCallCheck3['default'])(this, Drawer);
        return (0, _possibleConstructorReturn3['default'])(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Drawer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.open) {
                this.drawer.openDrawer();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.open !== this.props.open) {
                this.drawer[nextProps.open ? 'openDrawer' : 'closeDrawer']();
            }
        }
    }, {
        key: 'onOpenChange',
        value: function onOpenChange(isOpen) {
            if (this.props.onOpenChange) {
                this.props.onOpenChange(isOpen);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                sidebar = _a.sidebar,
                position = _a.position,
                drawerRef = _a.drawerRef,
                restProps = __rest(_a, ["sidebar", "position", "drawerRef"]);
            ['onOpenChange', 'onDrawerOpen', 'onDrawerClose', 'drawerPosition', 'renderNavigationView'].forEach(function (prop) {
                if (restProps.hasOwnProperty(prop)) {
                    delete restProps[prop];
                }
            });
            var _position = _reactNativeDrawerLayout2['default'].positions.Left;
            if (position === 'right') {
                _position = _reactNativeDrawerLayout2['default'].positions.Right;
            }
            return _react2['default'].createElement(_reactNativeDrawerLayout2['default'], (0, _extends3['default'])({ ref: function ref(el) {
                    if (drawerRef) {
                        drawerRef(el);
                    }
                    _this2.drawer = el;
                }, renderNavigationView: function renderNavigationView() {
                    return sidebar;
                }, drawerPosition: _position, onDrawerOpen: function onDrawerOpen() {
                    return _this2.onOpenChange(true);
                }, onDrawerClose: function onDrawerClose() {
                    return _this2.onOpenChange(false);
                }, keyboardDismissMode: 'on-drag' }, restProps));
        }
    }]);
    return Drawer;
}(_react2['default'].Component);

exports['default'] = Drawer;

Drawer.defaultProps = {
    position: 'left',
    open: false,
    drawerWidth: 300
};
module.exports = exports['default'];