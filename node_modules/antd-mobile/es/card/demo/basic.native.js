import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, Text } from 'react-native';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';

var BasicCardExample = function (_React$Component) {
  _inherits(BasicCardExample, _React$Component);

  function BasicCardExample() {
    _classCallCheck(this, BasicCardExample);

    return _possibleConstructorReturn(this, (BasicCardExample.__proto__ || Object.getPrototypeOf(BasicCardExample)).apply(this, arguments));
  }

  _createClass(BasicCardExample, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        View,
        { style: { paddingTop: 30 } },
        React.createElement(
          WingBlank,
          { size: 'lg' },
          React.createElement(
            Card,
            null,
            React.createElement(Card.Header, { title: 'This is title', thumbStyle: { width: 30, height: 30 }, thumb: 'http://gravatar.com/avatar/e9c13fb979736b16033acbce4c710ca1.png?size=32', extra: 'this is extra' }),
            React.createElement(
              Card.Body,
              null,
              React.createElement(
                View,
                { style: { height: 42 } },
                React.createElement(
                  Text,
                  { style: { marginLeft: 16 } },
                  'Card Content'
                )
              )
            ),
            React.createElement(Card.Footer, { content: 'footer content', extra: 'footer extra content' })
          )
        ),
        React.createElement(WhiteSpace, { size: 'lg' }),
        React.createElement(
          Card,
          { full: true },
          React.createElement(Card.Header, { title: 'Full Column', thumbStyle: { width: 30, height: 30 }, thumb: 'http://gravatar.com/avatar/e9c13fb979736b16033acbce4c710ca1.png?size=32', extra: 'this is extra' }),
          React.createElement(
            Card.Body,
            null,
            React.createElement(
              View,
              { style: { height: 42 } },
              React.createElement(
                Text,
                { style: { marginLeft: 16 } },
                'Card Content'
              )
            )
          ),
          React.createElement(Card.Footer, { content: 'footer content', extra: 'footer extra content' })
        )
      );
    }
  }]);

  return BasicCardExample;
}(React.Component);

export default BasicCardExample;