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

var _antdMobile = require('antd-mobile');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Circle = function Circle(props) {
  var size = props.size || 20;
  var style = {
    borderRadius: size / 2,
    backgroundColor: '#527fe4',
    width: size,
    height: size,
    margin: 1
  };
  return _react2['default'].createElement(_reactNative.View, { style: style });
};

var FlexExample = function (_React$Component) {
  (0, _inherits3['default'])(FlexExample, _React$Component);

  function FlexExample() {
    (0, _classCallCheck3['default'])(this, FlexExample);
    return (0, _possibleConstructorReturn3['default'])(this, (FlexExample.__proto__ || Object.getPrototypeOf(FlexExample)).apply(this, arguments));
  }

  (0, _createClass3['default'])(FlexExample, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactNative.ScrollView,
        { style: { flex: 1 }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false },
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginTop: 20, marginBottom: 5 } },
          _react2['default'].createElement(
            _reactNative.Text,
            { style: { marginBottom: 10 } },
            '\u9879\u76EE\u7684\u6392\u5217\u65B9\u5411'
          ),
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            'direction="row":\u4E3B\u8F74\u4E3A\u6C34\u5E73\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u5DE6\u7AEF'
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginBottom: 5 } },
          _react2['default'].createElement(
            _antdMobile.Flex,
            null,
            _react2['default'].createElement(
              _antdMobile.Flex.Item,
              { style: { paddingLeft: 4, paddingRight: 4 } },
              _react2['default'].createElement(
                _antdMobile.Button,
                { size: 'small' },
                '\u6309\u94AE1'
              )
            ),
            _react2['default'].createElement(
              _antdMobile.Flex.Item,
              { style: { paddingLeft: 4, paddingRight: 4 } },
              _react2['default'].createElement(
                _antdMobile.Button,
                { size: 'small' },
                '\u6309\u94AE2'
              )
            ),
            _react2['default'].createElement(
              _antdMobile.Flex.Item,
              { style: { paddingLeft: 4, paddingRight: 4 } },
              _react2['default'].createElement(
                _antdMobile.Button,
                { size: 'small' },
                '\u6309\u94AE3'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            'direction="column":\u4E3B\u8F74\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u4E0A\u6CBF'
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginBottom: 5 } },
          _react2['default'].createElement(
            _antdMobile.Flex,
            { direction: 'column' },
            _react2['default'].createElement(
              _antdMobile.Flex.Item,
              { style: { paddingBottom: 4 } },
              _react2['default'].createElement(
                _antdMobile.Button,
                { size: 'small' },
                '\u6309\u94AE1'
              )
            ),
            _react2['default'].createElement(
              _antdMobile.Flex.Item,
              { style: { paddingBottom: 4 } },
              _react2['default'].createElement(
                _antdMobile.Button,
                { size: 'small' },
                '\u6309\u94AE2'
              )
            ),
            _react2['default'].createElement(
              _antdMobile.Flex.Item,
              { style: { paddingBottom: 4 } },
              _react2['default'].createElement(
                _antdMobile.Button,
                { size: 'small' },
                '\u6309\u94AE3'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          _react2['default'].createElement(
            _reactNative.Text,
            { style: { marginTop: 20, marginBottom: 20 } },
            '\u9879\u76EE\u5728\u4E3B\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F'
          ),
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            'justify="start":\u5DE6\u5BF9\u9F50'
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginBottom: 5 } },
          _react2['default'].createElement(
            _antdMobile.Flex,
            { justify: 'start' },
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null)
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            'justify="center":\u5C45\u4E2D'
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginBottom: 5 } },
          _react2['default'].createElement(
            _antdMobile.Flex,
            { justify: 'center' },
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null)
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            'justify="end":\u53F3\u5BF9\u9F50'
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginBottom: 5 } },
          _react2['default'].createElement(
            _antdMobile.Flex,
            { justify: 'end' },
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null)
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            'justify="between":\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u9879\u76EE\u4E4B\u95F4\u7684\u95F4\u9694\u90FD\u76F8\u7B49'
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginBottom: 5 } },
          _react2['default'].createElement(
            _antdMobile.Flex,
            { justify: 'between' },
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null)
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            'justify="around":\u6BCF\u4E2A\u9879\u76EE\u4E24\u4FA7\u7684\u95F4\u9694\u76F8\u7B49'
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginBottom: 5 } },
          _react2['default'].createElement(
            _antdMobile.Flex,
            { justify: 'around' },
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null),
            _react2['default'].createElement(Circle, null)
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          _react2['default'].createElement(
            _reactNative.Text,
            { style: { marginTop: 20, marginBottom: 20 } },
            '\u9879\u76EE\u5728\u4EA4\u53C9\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F'
          ),
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            'align="start":\u4EA4\u53C9\u8F74\u7684\u8D77\u70B9\u5BF9\u9F50'
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginBottom: 5 } },
          _react2['default'].createElement(
            _antdMobile.Flex,
            { align: 'start', style: { height: 30 } },
            _react2['default'].createElement(
              _reactNative.Text,
              { style: { fontSize: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            _react2['default'].createElement(
              _reactNative.Text,
              { style: { fontSize: 18, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            _react2['default'].createElement(
              _reactNative.Text,
              { style: { fontSize: 16, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            _react2['default'].createElement(
              _reactNative.Text,
              { style: { fontSize: 14, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            )
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            'align="center":\u4EA4\u53C9\u8F74\u7684\u4E2D\u70B9\u5BF9\u9F50'
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginBottom: 5 } },
          _react2['default'].createElement(
            _antdMobile.Flex,
            { align: 'center', style: { height: 30 } },
            _react2['default'].createElement(
              _reactNative.Text,
              { style: { fontSize: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            _react2['default'].createElement(
              _reactNative.Text,
              { style: { fontSize: 18, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            _react2['default'].createElement(
              _reactNative.Text,
              { style: { fontSize: 16, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            _react2['default'].createElement(
              _reactNative.Text,
              { style: { fontSize: 14, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            )
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            'align="end":\u4EA4\u53C9\u8F74\u7684\u7EC8\u70B9\u5BF9\u9F50'
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginBottom: 5 } },
          _react2['default'].createElement(
            _antdMobile.Flex,
            { align: 'end', style: { height: 30 } },
            _react2['default'].createElement(
              _reactNative.Text,
              { style: { fontSize: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            _react2['default'].createElement(
              _reactNative.Text,
              { style: { fontSize: 18, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            _react2['default'].createElement(
              _reactNative.Text,
              { style: { fontSize: 16, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            ),
            _react2['default'].createElement(
              _reactNative.Text,
              { style: { fontSize: 14, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
              '\u515C\u515C'
            )
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            'align="stretch":\u5982\u679C\u9879\u76EE\u672A\u8BBE\u7F6E\u9AD8\u5EA6\u6216\u8BBE\u4E3Aauto\uFF0C\u5C06\u5360\u6EE1\u6574\u4E2A\u5BB9\u5668\u7684\u9AD8\u5EA6'
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginBottom: 5 } },
          _react2['default'].createElement(
            _antdMobile.WingBlank,
            null,
            _react2['default'].createElement(
              _antdMobile.Flex,
              { align: 'stretch', style: { height: 70 } },
              _react2['default'].createElement(
                _reactNative.Text,
                { style: { fontSize: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
                '\u515C\u515C'
              ),
              _react2['default'].createElement(
                _reactNative.Text,
                { style: { fontSize: 18, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
                '\u515C\u515C'
              ),
              _react2['default'].createElement(
                _reactNative.Text,
                { style: { fontSize: 16, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
                '\u515C\u515C'
              ),
              _react2['default'].createElement(
                _reactNative.Text,
                { style: { fontSize: 14, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' } },
                '\u515C\u515C'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          _react2['default'].createElement(
            _reactNative.Text,
            { style: { marginBottom: 10 } },
            '\u662F\u5426\u6298\u884C'
          ),
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            'wrap="wrap":\u6362\u884C'
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginBottom: 5 } },
          _react2['default'].createElement(
            _antdMobile.Flex,
            { wrap: 'wrap' },
            'ooooooooooooooooooooooooooooo'.split('').map(function (char, i) {
              return _react2['default'].createElement(Circle, { key: i + '-' + char });
            })
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginTop: 5, marginBottom: 5 } },
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            'wrap="nowrap":\u4E0D\u6362\u884C'
          )
        ),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          { style: { marginBottom: 5 } },
          _react2['default'].createElement(
            _antdMobile.Flex,
            { wrap: 'nowrap' },
            'ooooooooooooooooooooooooooooo'.split('').map(function (char, i) {
              return _react2['default'].createElement(Circle, { key: i + '-' + char });
            })
          )
        ),
        _react2['default'].createElement(_antdMobile.WhiteSpace, null)
      );
    }
  }]);
  return FlexExample;
}(_react2['default'].Component);

exports['default'] = FlexExample;
module.exports = exports['default'];