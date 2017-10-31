'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.description = exports.title = undefined;

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

var renderContent = function renderContent(tab, index) {
  var style = {
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#ddd'
  };
  var content = [1, 2, 3, 4, 5, 6, 7, 8].map(function (i) {
    return _react2['default'].createElement(
      _reactNative.View,
      { key: index + '_' + i, style: style },
      _react2['default'].createElement(
        _reactNative.Text,
        null,
        tab.title,
        ' - ',
        i
      )
    );
  });
  return _react2['default'].createElement(
    _reactNative.ScrollView,
    { style: { backgroundColor: '#fff' } },
    content
  );
}; /* tslint:disable:no-console */

var BasicTabsExample = function (_React$Component) {
  (0, _inherits3['default'])(BasicTabsExample, _React$Component);

  function BasicTabsExample() {
    (0, _classCallCheck3['default'])(this, BasicTabsExample);
    return (0, _possibleConstructorReturn3['default'])(this, (BasicTabsExample.__proto__ || Object.getPrototypeOf(BasicTabsExample)).apply(this, arguments));
  }

  (0, _createClass3['default'])(BasicTabsExample, [{
    key: 'render',
    value: function render() {
      var tabs = [{ title: 'First Tab' }, { title: 'Second Tab' }, { title: 'Third Tab' }];
      var tabs2 = [{ title: '1st Tab' }, { title: '2nd Tab' }, { title: '3rd Tab' }, { title: '4th Tab' }, { title: '5th Tab' }, { title: '6th Tab' }, { title: '7th Tab' }, { title: '8th Tab' }, { title: '9th Tab' }];
      var style = {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        backgroundColor: '#fff'
      };
      return _react2['default'].createElement(
        _reactNative.View,
        { style: { flex: 1 } },
        _react2['default'].createElement(
          _antdMobile.Tabs,
          { tabs: tabs, initialPage: 1 },
          _react2['default'].createElement(
            _reactNative.View,
            { style: style },
            _react2['default'].createElement(
              _reactNative.Text,
              null,
              'Content of First Tab'
            )
          ),
          _react2['default'].createElement(
            _reactNative.View,
            { style: style },
            _react2['default'].createElement(
              _reactNative.Text,
              null,
              'Content of Second Tab'
            )
          ),
          _react2['default'].createElement(
            _reactNative.View,
            { style: style },
            _react2['default'].createElement(
              _reactNative.Text,
              null,
              'Content of Third Tab'
            )
          )
        ),
        _react2['default'].createElement(
          _reactNative.View,
          { style: { flex: 2 } },
          _react2['default'].createElement(
            _antdMobile.Tabs,
            { tabs: tabs2, initialPage: 1, tabBarPosition: 'top' },
            renderContent
          )
        )
      );
    }
  }]);
  return BasicTabsExample;
}(_react2['default'].Component);

exports['default'] = BasicTabsExample;
var title = exports.title = 'Tabs';
var description = exports.description = 'Tabs example';