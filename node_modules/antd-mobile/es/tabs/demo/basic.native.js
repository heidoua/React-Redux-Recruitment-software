import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:no-console */
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Tabs } from 'antd-mobile';
var renderContent = function renderContent(tab, index) {
  var style = {
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#ddd'
  };
  var content = [1, 2, 3, 4, 5, 6, 7, 8].map(function (i) {
    return React.createElement(
      View,
      { key: index + '_' + i, style: style },
      React.createElement(
        Text,
        null,
        tab.title,
        ' - ',
        i
      )
    );
  });
  return React.createElement(
    ScrollView,
    { style: { backgroundColor: '#fff' } },
    content
  );
};

var BasicTabsExample = function (_React$Component) {
  _inherits(BasicTabsExample, _React$Component);

  function BasicTabsExample() {
    _classCallCheck(this, BasicTabsExample);

    return _possibleConstructorReturn(this, (BasicTabsExample.__proto__ || Object.getPrototypeOf(BasicTabsExample)).apply(this, arguments));
  }

  _createClass(BasicTabsExample, [{
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
      return React.createElement(
        View,
        { style: { flex: 1 } },
        React.createElement(
          Tabs,
          { tabs: tabs, initialPage: 1 },
          React.createElement(
            View,
            { style: style },
            React.createElement(
              Text,
              null,
              'Content of First Tab'
            )
          ),
          React.createElement(
            View,
            { style: style },
            React.createElement(
              Text,
              null,
              'Content of Second Tab'
            )
          ),
          React.createElement(
            View,
            { style: style },
            React.createElement(
              Text,
              null,
              'Content of Third Tab'
            )
          )
        ),
        React.createElement(
          View,
          { style: { flex: 2 } },
          React.createElement(
            Tabs,
            { tabs: tabs2, initialPage: 1, tabBarPosition: 'top' },
            renderContent
          )
        )
      );
    }
  }]);

  return BasicTabsExample;
}(React.Component);

export default BasicTabsExample;

export var title = 'Tabs';
export var description = 'Tabs example';