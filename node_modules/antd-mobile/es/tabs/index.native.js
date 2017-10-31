import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Tabs as RMCTabs, DefaultTabBar as RMCDefaultTabBar } from 'rmc-tabs/es/index.native';
import Styles from './style/index.native';

var Tabs = function (_React$PureComponent) {
    _inherits(Tabs, _React$PureComponent);

    function Tabs() {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));

        _this.renderTabBar = function (props) {
            var renderTab = _this.props.renderTab;

            return React.createElement(RMCDefaultTabBar, _extends({ styles: Styles }, props, { renderTab: renderTab }));
        };
        return _this;
    }

    _createClass(Tabs, [{
        key: 'render',
        value: function render() {
            return React.createElement(RMCTabs, _extends({ styles: Styles, renderTabBar: this.renderTabBar }, this.props));
        }
    }]);

    return Tabs;
}(React.PureComponent);

export default Tabs;

Tabs.DefaultTabBar = RMCDefaultTabBar;
Tabs.defaultProps = {};