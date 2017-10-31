import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { List } from 'antd-mobile';
var Item = List.Item;
var Brief = Item.Brief;

var BasicListExample = function (_React$Component) {
  _inherits(BasicListExample, _React$Component);

  function BasicListExample() {
    _classCallCheck(this, BasicListExample);

    return _possibleConstructorReturn(this, (BasicListExample.__proto__ || Object.getPrototypeOf(BasicListExample)).apply(this, arguments));
  }

  _createClass(BasicListExample, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        ScrollView,
        { style: { flex: 1, backgroundColor: '#f5f5f9' }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false },
        React.createElement(
          List,
          { renderHeader: function renderHeader() {
              return 'basic';
            } },
          React.createElement(
            Item,
            { 'data-seed': 'logId' },
            '\u6807\u9898\u6587\u5B57\u70B9\u51FB\u65E0\u53CD\u9988\uFF0C\u6587\u5B57\u8D85\u957F\u5219\u9690\u85CF\uFF0C\u6587\u5B57\u8D85\u957F\u5219\u9690\u85CF'
          ),
          React.createElement(
            Item,
            { wrap: true },
            '\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C'
          ),
          React.createElement(
            Item,
            { disabled: true, extra: '\u7BAD\u5934\u5411\u53F3', arrow: 'horizontal', onClick: function onClick() {} },
            '\u6807\u9898\u6587\u5B57'
          ),
          React.createElement(
            Item,
            { extra: '\u7BAD\u5934\u5411\u4E0B', arrow: 'down', onClick: function onClick() {} },
            '\u6807\u9898\u6587\u5B57'
          ),
          React.createElement(
            Item,
            { extra: '\u7BAD\u5934\u5411\u4E0A', arrow: 'up', onClick: function onClick() {} },
            '\u6807\u9898\u6587\u5B57'
          ),
          React.createElement(
            Item,
            { extra: '\u6CA1\u6709\u7BAD\u5934', arrow: 'empty' },
            '\u6807\u9898\u6587\u5B57'
          ),
          React.createElement(
            Item,
            { extra: React.createElement(
                View,
                null,
                '\u5185\u5BB9\u5185\u5BB9',
                React.createElement(
                  Brief,
                  { style: { textAlign: 'right' } },
                  '\u8F85\u52A9\u6587\u5B57\u5185\u5BB9'
                )
              ), multipleLine: true },
            '\u5782\u76F4\u5C45\u4E2D\u5BF9\u9F50'
          ),
          React.createElement(
            Item,
            { extra: '\u5185\u5BB9\u5185\u5BB9', multipleLine: true },
            '\u5782\u76F4\u5C45\u4E2D\u5BF9\u9F50',
            React.createElement(
              Brief,
              null,
              '\u8F85\u52A9\u6587\u5B57\u5185\u5BB9'
            )
          ),
          React.createElement(
            Item,
            { wrap: true, extra: '\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C', multipleLine: true, align: 'top', arrow: 'horizontal' },
            '\u9876\u90E8\u5BF9\u9F50',
            React.createElement(
              Brief,
              null,
              '\u8F85\u52A9\u6587\u5B57\u5185\u5BB9\u8F85\u52A9\u6587\u5B57\u5185\u5BB9\u8F85\u52A9\u6587\u5B57\u5185\u5BB9\u8F85\u52A9\u6587\u5B57\u5185\u5BB9'
            ),
            React.createElement(
              Brief,
              null,
              '\u8F85\u52A9\u6587\u5B57\u5185\u5BB9'
            )
          ),
          React.createElement(
            Item,
            { extra: React.createElement(
                View,
                null,
                '\u5185\u5BB9\u5185\u5BB9',
                React.createElement(
                  Brief,
                  { style: { textAlign: 'right' } },
                  '\u8F85\u52A9\u6587\u5B57\u5185\u5BB9'
                )
              ), multipleLine: true, align: 'bottom' },
            '\u5E95\u90E8\u5BF9\u9F50'
          )
        ),
        React.createElement(
          List,
          { renderHeader: function renderHeader() {
              return '带缩略图';
            } },
          React.createElement(
            Item,
            { thumb: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png' },
            'thumb'
          ),
          React.createElement(
            Item,
            { thumb: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png', arrow: 'horizontal' },
            'thumb'
          ),
          React.createElement(
            Item,
            { extra: React.createElement(Image, { source: { uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png' }, style: { width: 29, height: 29 } }), arrow: 'horizontal' },
            'extra\u4E3AImage'
          )
        )
      );
    }
  }]);

  return BasicListExample;
}(React.Component);

export default BasicListExample;

export var title = 'List';
export var description = 'List Example';