import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, Text } from 'react-native';
import { TabBar, SearchBar } from 'antd-mobile';

var BasicTabBarExample = function (_React$Component) {
    _inherits(BasicTabBarExample, _React$Component);

    function BasicTabBarExample(props) {
        _classCallCheck(this, BasicTabBarExample);

        var _this = _possibleConstructorReturn(this, (BasicTabBarExample.__proto__ || Object.getPrototypeOf(BasicTabBarExample)).call(this, props));

        _this.state = {
            selectedTab: 'redTab'
        };
        return _this;
    }

    _createClass(BasicTabBarExample, [{
        key: 'renderContent',
        value: function renderContent(pageText) {
            return React.createElement(
                View,
                { style: { flex: 1, alignItems: 'center', backgroundColor: 'white' } },
                React.createElement(SearchBar, { placeholder: 'Search', showCancelButton: true }),
                React.createElement(
                    Text,
                    { style: { margin: 50 } },
                    pageText
                )
            );
        }
    }, {
        key: 'onChangeTab',
        value: function onChangeTab(tabName) {
            this.setState({
                selectedTab: tabName
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                TabBar,
                { unselectedTintColor: '#949494', tintColor: '#33A3F4', barTintColor: '#ccc' },
                React.createElement(
                    TabBar.Item,
                    { title: 'Life', icon: require('./alipay.png'), selectedIcon: require('./alipay_sel.png'), selected: this.state.selectedTab === 'blueTab', onPress: function onPress() {
                            return _this2.onChangeTab('blueTab');
                        } },
                    this.renderContent('Life Tab')
                ),
                React.createElement(
                    TabBar.Item,
                    { icon: require('./koubei.png'), selectedIcon: require('./koubei_sel.png'), title: 'Koubei', badge: 2, selected: this.state.selectedTab === 'redTab', onPress: function onPress() {
                            return _this2.onChangeTab('redTab');
                        } },
                    this.renderContent('Koubei Tab')
                ),
                React.createElement(
                    TabBar.Item,
                    { icon: require('./friend.png'), selectedIcon: require('./friend_sel.png'), title: 'Friend', selected: this.state.selectedTab === 'greenTab', onPress: function onPress() {
                            return _this2.onChangeTab('greenTab');
                        } },
                    this.renderContent('Friend Tab')
                ),
                React.createElement(
                    TabBar.Item,
                    { icon: require('./busi.png'), selectedIcon: require('./busi_sel.png'), title: 'My', selected: this.state.selectedTab === 'yellowTab', onPress: function onPress() {
                            return _this2.onChangeTab('yellowTab');
                        } },
                    this.renderContent('My Tab')
                )
            );
        }
    }]);

    return BasicTabBarExample;
}(React.Component);

export default BasicTabBarExample;