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

var _index = require('rmc-tabs/lib/index.native');

var _index2 = require('./style/index.native');

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Tabs = function (_React$PureComponent) {
    (0, _inherits3['default'])(Tabs, _React$PureComponent);

    function Tabs() {
        (0, _classCallCheck3['default'])(this, Tabs);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));

        _this.renderTabBar = function (props) {
            var renderTab = _this.props.renderTab;

            return _react2['default'].createElement(_index.DefaultTabBar, (0, _extends3['default'])({ styles: _index3['default'] }, props, { renderTab: renderTab }));
        };
        return _this;
    }

    (0, _createClass3['default'])(Tabs, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(_index.Tabs, (0, _extends3['default'])({ styles: _index3['default'], renderTabBar: this.renderTabBar }, this.props));
        }
    }]);
    return Tabs;
}(_react2['default'].PureComponent);

exports['default'] = Tabs;

Tabs.DefaultTabBar = _index.DefaultTabBar;
Tabs.defaultProps = {};
module.exports = exports['default'];