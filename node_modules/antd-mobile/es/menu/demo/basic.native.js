import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import { Menu } from 'antd-mobile';
import React from 'react';

var MenuExample = function (_React$Component) {
    _inherits(MenuExample, _React$Component);

    function MenuExample() {
        _classCallCheck(this, MenuExample);

        return _possibleConstructorReturn(this, (MenuExample.__proto__ || Object.getPrototypeOf(MenuExample)).apply(this, arguments));
    }

    _createClass(MenuExample, [{
        key: 'render',
        value: function render() {
            return React.createElement(Menu, null);
        }
    }]);

    return MenuExample;
}(React.Component);

export default MenuExample;