import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:no-console */
import React from 'react';
import { View, ScrollView } from 'react-native';
import { Badge, WhiteSpace } from 'antd-mobile';

var BasicTagExample = function (_React$Component) {
  _inherits(BasicTagExample, _React$Component);

  function BasicTagExample() {
    _classCallCheck(this, BasicTagExample);

    return _possibleConstructorReturn(this, (BasicTagExample.__proto__ || Object.getPrototypeOf(BasicTagExample)).apply(this, arguments));
  }

  _createClass(BasicTagExample, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        ScrollView,
        { style: { flex: 1 }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false },
        React.createElement(
          View,
          { style: { padding: 20 } },
          React.createElement(
            Badge,
            { text: 9 },
            React.createElement(View, { style: { width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' } })
          ),
          React.createElement(WhiteSpace, { size: 'lg' }),
          React.createElement(
            Badge,
            { text: 109, overflowCount: 100 },
            React.createElement(View, { style: { width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' } })
          ),
          React.createElement(WhiteSpace, { size: 'lg' }),
          React.createElement(
            Badge,
            { text: 109 },
            React.createElement(View, { style: { width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' } })
          ),
          React.createElement(WhiteSpace, { size: 'lg' }),
          React.createElement(
            Badge,
            { text: 'new' },
            React.createElement(View, { style: { width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' } })
          ),
          React.createElement(WhiteSpace, { size: 'lg' }),
          React.createElement(
            Badge,
            { text: 109, dot: true },
            React.createElement(View, { style: { width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' } })
          ),
          React.createElement(WhiteSpace, { size: 'lg' }),
          React.createElement(
            Badge,
            { text: 33, corner: true },
            React.createElement(View, { style: { width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' } })
          )
        )
      );
    }
  }]);

  return BasicTagExample;
}(React.Component);

export default BasicTagExample;