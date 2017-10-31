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
/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import DrawerLayout from 'react-native-drawer-layout';

var Drawer = function (_React$Component) {
    _inherits(Drawer, _React$Component);

    function Drawer() {
        _classCallCheck(this, Drawer);

        return _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).apply(this, arguments));
    }

    _createClass(Drawer, [{
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
            var _position = DrawerLayout.positions.Left;
            if (position === 'right') {
                _position = DrawerLayout.positions.Right;
            }
            return React.createElement(DrawerLayout, _extends({ ref: function ref(el) {
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
}(React.Component);

export default Drawer;

Drawer.defaultProps = {
    position: 'left',
    open: false,
    drawerWidth: 300
};