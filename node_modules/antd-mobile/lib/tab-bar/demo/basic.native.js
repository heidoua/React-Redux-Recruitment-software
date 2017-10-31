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

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var BasicTabBarExample = function (_React$Component) {
    (0, _inherits3['default'])(BasicTabBarExample, _React$Component);

    function BasicTabBarExample(props) {
        (0, _classCallCheck3['default'])(this, BasicTabBarExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (BasicTabBarExample.__proto__ || Object.getPrototypeOf(BasicTabBarExample)).call(this, props));

        _this.state = {
            selectedTab: 'redTab'
        };
        return _this;
    }

    (0, _createClass3['default'])(BasicTabBarExample, [{
        key: 'renderContent',
        value: function renderContent(pageText) {
            return _react2['default'].createElement(
                _reactNative.View,
                { style: { flex: 1, alignItems: 'center', backgroundColor: 'white' } },
                _react2['default'].createElement(_antdMobile.SearchBar, { placeholder: 'Search', showCancelButton: true }),
                _react2['default'].createElement(
                    _reactNative.Text,
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

            return _react2['default'].createElement(
                _antdMobile.TabBar,
                { unselectedTintColor: '#949494', tintColor: '#33A3F4', barTintColor: '#ccc' },
                _react2['default'].createElement(
                    _antdMobile.TabBar.Item,
                    { title: 'Life', icon: require('./alipay.png'), selectedIcon: require('./alipay_sel.png'), selected: this.state.selectedTab === 'blueTab', onPress: function onPress() {
                            return _this2.onChangeTab('blueTab');
                        } },
                    this.renderContent('Life Tab')
                ),
                _react2['default'].createElement(
                    _antdMobile.TabBar.Item,
                    { icon: require('./koubei.png'), selectedIcon: require('./koubei_sel.png'), title: 'Koubei', badge: 2, selected: this.state.selectedTab === 'redTab', onPress: function onPress() {
                            return _this2.onChangeTab('redTab');
                        } },
                    this.renderContent('Koubei Tab')
                ),
                _react2['default'].createElement(
                    _antdMobile.TabBar.Item,
                    { icon: require('./friend.png'), selectedIcon: require('./friend_sel.png'), title: 'Friend', selected: this.state.selectedTab === 'greenTab', onPress: function onPress() {
                            return _this2.onChangeTab('greenTab');
                        } },
                    this.renderContent('Friend Tab')
                ),
                _react2['default'].createElement(
                    _antdMobile.TabBar.Item,
                    { icon: require('./busi.png'), selectedIcon: require('./busi_sel.png'), title: 'My', selected: this.state.selectedTab === 'yellowTab', onPress: function onPress() {
                            return _this2.onChangeTab('yellowTab');
                        } },
                    this.renderContent('My Tab')
                )
            );
        }
    }]);
    return BasicTabBarExample;
}(_react2['default'].Component);

exports['default'] = BasicTabBarExample;
module.exports = exports['default'];