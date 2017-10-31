import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import { Button, Flex, WingBlank, WhiteSpace } from 'antd-mobile';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
var Circle = function Circle(props) {
  var size = props.size || 20;
  var style = {
    borderRadius: size / 2,
    backgroundColor: '#527fe4',
    width: size,
    height: size,
    margin: 1
  };
  return React.createElement(View, { style: style });
};

var FlexExample = function (_React$Component) {
  _inherits(FlexExample, _React$Component);

  function FlexExample() {
    _classCallCheck(this, FlexExample);

    return _possibleConstructorReturn(this, (FlexExample.__proto__ || Object.getPrototypeOf(FlexExample)).apply(this, arguments));
  }

  _createClass(FlexExample, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        ScrollView,
        { style: { flex: 1 }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false },
        React.createElement(
          WingBlank,
          { style: { marginTop: 20, marginBottom: 5 } },
          React.createElement(
            Text,
            { style: { marginBottom: 10 } },
            '\u9879\u76EE\u7684\u6392\u5217\u65B9\u5411'
          ),
          React.createElement(
            Text,
            null,
            'direction="row":\u4E3B\u8F74\u4E3A\u6C34\u5E73\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u5DE6\u7AEF'
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginBottom: 5 } },
          React.createElement(
            Flex,
            null,
            React.createElement(
              Flex.Item,
              { style: { paddingLeft: 4, paddingRight: 4 } },
              React.createElement(
                Button,
                { size: 'small' },
                '\u6309\u94AE1'
              )
            ),
            React.createElement(
              Flex.Item,
              { style: { paddingLeft: 4, paddingRight: 4 } },
              React.createElement(
                Button,
                { size: 'small' },
                '\u6309\u94AE2'
              )
            ),
            React.createElement(
              Flex.Item,
              { style: { paddingLeft: 4, paddingRight: 4 } },
              React.createElement(
                Button,
                { size: 'small' },
                '\u6309\u94AE3'
              )
            )
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          React.createElement(
            Text,
            null,
            'direction="column":\u4E3B\u8F74\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u4E0A\u6CBF'
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginBottom: 5 } },
          React.createElement(
            Flex,
            { direction: 'column' },
            React.createElement(
              Flex.Item,
              { style: { paddingBottom: 4 } },
              React.createElement(
                Button,
                { size: 'small' },
                '\u6309\u94AE1'
              )
            ),
            React.createElement(
              Flex.Item,
              { style: { paddingBottom: 4 } },
              React.createElement(
                Button,
                { size: 'small' },
                '\u6309\u94AE2'
              )
            ),
            React.createElement(
              Flex.Item,
              { style: { paddingBottom: 4 } },
              React.createElement(
                Button,
                { size: 'small' },
                '\u6309\u94AE3'
              )
            )
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          React.createElement(
            Text,
            { style: { marginTop: 20, marginBottom: 20 } },
            '\u9879\u76EE\u5728\u4E3B\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F'
          ),
          React.createElement(
            Text,
            null,
            'justify="start":\u5DE6\u5BF9\u9F50'
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginBottom: 5 } },
          React.createElement(
            Flex,
            { justify: 'start' },
            React.createElement(Circle, null),
            React.createElement(Circle, null),
            React.createElement(Circle, null),
            React.createElement(Circle, null),
            React.createElement(Circle, null)
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          React.createElement(
            Text,
            null,
            'justify="center":\u5C45\u4E2D'
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginBottom: 5 } },
          React.createElement(
            Flex,
            { justify: 'center' },
            React.createElement(Circle, null),
            React.createElement(Circle, null),
            React.createElement(Circle, null),
            React.createElement(Circle, null),
            React.createElement(Circle, null)
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          React.createElement(
            Text,
            null,
            'justify="end":\u53F3\u5BF9\u9F50'
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginBottom: 5 } },
          React.createElement(
            Flex,
            { justify: 'end' },
            React.createElement(Circle, null),
            React.createElement(Circle, null),
            React.createElement(Circle, null),
            React.createElement(Circle, null),
            React.createElement(Circle, null)
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          React.createElement(
            Text,
            null,
            'justify="between":\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u9879\u76EE\u4E4B\u95F4\u7684\u95F4\u9694\u90FD\u76F8\u7B49'
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginBottom: 5 } },
          React.createElement(
            Flex,
            { justify: 'between' },
            React.createElement(Circle, null),
            React.createElement(Circle, null),
            React.createElement(Circle, null),
            React.createElement(Circle, null),
            React.createElement(Circle, null)
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          React.createElement(
            Text,
            null,
            'justify="around":\u6BCF\u4E2A\u9879\u76EE\u4E24\u4FA7\u7684\u95F4\u9694\u76F8\u7B49'
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginBottom: 5 } },
          React.createElement(
            Flex,
            { justify: 'around' },
            React.createElement(Circle, null),
            React.createElement(Circle, null),
            React.createElement(Circle, null),
            React.createElement(Circle, null),
            React.createElement(Circle, null)
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          React.createElement(
            Text,
            { style: { marginTop: 20, marginBottom: 20 } },
            '\u9879\u76EE\u5728\u4EA4\u53C9\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F'
          ),
          React.createElement(
            Text,
            null,
            'align="start":\u4EA4\u53C9\u8F74\u7684\u8D77\u70B9\u5BF9\u9F50'
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginBottom: 5 } },
          React.createElement(
            Flex,
            { align: 'start', style: { height: 30 } },
            React.createElement(
              Text,
              { style: { fontSize: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            React.createElement(
              Text,
              { style: { fontSize: 18, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            React.createElement(
              Text,
              { style: { fontSize: 16, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            React.createElement(
              Text,
              { style: { fontSize: 14, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            )
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          React.createElement(
            Text,
            null,
            'align="center":\u4EA4\u53C9\u8F74\u7684\u4E2D\u70B9\u5BF9\u9F50'
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginBottom: 5 } },
          React.createElement(
            Flex,
            { align: 'center', style: { height: 30 } },
            React.createElement(
              Text,
              { style: { fontSize: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            React.createElement(
              Text,
              { style: { fontSize: 18, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            React.createElement(
              Text,
              { style: { fontSize: 16, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            React.createElement(
              Text,
              { style: { fontSize: 14, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            )
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          React.createElement(
            Text,
            null,
            'align="end":\u4EA4\u53C9\u8F74\u7684\u7EC8\u70B9\u5BF9\u9F50'
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginBottom: 5 } },
          React.createElement(
            Flex,
            { align: 'end', style: { height: 30 } },
            React.createElement(
              Text,
              { style: { fontSize: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            React.createElement(
              Text,
              { style: { fontSize: 18, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            React.createElement(
              Text,
              { style: { fontSize: 16, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            React.createElement(
              Text,
              { style: { fontSize: 14, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            )
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          React.createElement(
            Text,
            null,
            'align="stretch":\u5982\u679C\u9879\u76EE\u672A\u8BBE\u7F6E\u9AD8\u5EA6\u6216\u8BBE\u4E3Aauto\uFF0C\u5C06\u5360\u6EE1\u6574\u4E2A\u5BB9\u5668\u7684\u9AD8\u5EA6'
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginBottom: 5 } },
          React.createElement(
            WingBlank,
            null,
            React.createElement(
              Flex,
              { align: 'stretch', style: { height: 70 } },
              React.createElement(
                Text,
                { style: { fontSize: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
                '\u515C\u515C'
              ),
              React.createElement(
                Text,
                { style: { fontSize: 18, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
                '\u515C\u515C'
              ),
              React.createElement(
                Text,
                { style: { fontSize: 16, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
                '\u515C\u515C'
              ),
              React.createElement(
                Text,
                { style: { fontSize: 14, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
                '\u515C\u515C'
              )
            )
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          React.createElement(
            Text,
            { style: { marginBottom: 10 } },
            '\u662F\u5426\u6298\u884C'
          ),
          React.createElement(
            Text,
            null,
            'wrap="wrap":\u6362\u884C'
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginBottom: 5 } },
          React.createElement(
            Flex,
            { wrap: 'wrap' },
            'ooooooooooooooooooooooooooooo'.split('').map(function (char, i) {
              return React.createElement(Circle, { key: i + '-' + char });
            })
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          React.createElement(
            Text,
            null,
            'wrap="nowrap":\u4E0D\u6362\u884C'
          )
        ),
        React.createElement(
          WingBlank,
          { style: { marginBottom: 5 } },
          React.createElement(
            Flex,
            { wrap: 'nowrap' },
            'ooooooooooooooooooooooooooooo'.split('').map(function (char, i) {
              return React.createElement(Circle, { key: i + '-' + char });
            })
          )
        ),
        React.createElement(WhiteSpace, null)
      );
    }
  }]);

  return FlexExample;
}(React.Component);

export default FlexExample;