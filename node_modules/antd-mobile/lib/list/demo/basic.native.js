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

var Item = _antdMobile.List.Item; /* tslint:disable:jsx-no-multiline-js */

var Brief = Item.Brief;

var BasicListExample = function (_React$Component) {
  (0, _inherits3['default'])(BasicListExample, _React$Component);

  function BasicListExample() {
    (0, _classCallCheck3['default'])(this, BasicListExample);
    return (0, _possibleConstructorReturn3['default'])(this, (BasicListExample.__proto__ || Object.getPrototypeOf(BasicListExample)).apply(this, arguments));
  }

  (0, _createClass3['default'])(BasicListExample, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactNative.ScrollView,
        { style: { flex: 1, backgroundColor: '#f5f5f9' }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false },
        _react2['default'].createElement(
          _antdMobile.List,
          { renderHeader: function renderHeader() {
              return 'basic';
            } },
          _react2['default'].createElement(
            Item,
            { 'data-seed': 'logId' },
            '\u6807\u9898\u6587\u5B57\u70B9\u51FB\u65E0\u53CD\u9988\uFF0C\u6587\u5B57\u8D85\u957F\u5219\u9690\u85CF\uFF0C\u6587\u5B57\u8D85\u957F\u5219\u9690\u85CF'
          ),
          _react2['default'].createElement(
            Item,
            { wrap: true },
            '\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C'
          ),
          _react2['default'].createElement(
            Item,
            { disabled: true, extra: '\u7BAD\u5934\u5411\u53F3', arrow: 'horizontal', onClick: function onClick() {} },
            '\u6807\u9898\u6587\u5B57'
          ),
          _react2['default'].createElement(
            Item,
            { extra: '\u7BAD\u5934\u5411\u4E0B', arrow: 'down', onClick: function onClick() {} },
            '\u6807\u9898\u6587\u5B57'
          ),
          _react2['default'].createElement(
            Item,
            { extra: '\u7BAD\u5934\u5411\u4E0A', arrow: 'up', onClick: function onClick() {} },
            '\u6807\u9898\u6587\u5B57'
          ),
          _react2['default'].createElement(
            Item,
            { extra: '\u6CA1\u6709\u7BAD\u5934', arrow: 'empty' },
            '\u6807\u9898\u6587\u5B57'
          ),
          _react2['default'].createElement(
            Item,
            { extra: _react2['default'].createElement(
                _reactNative.View,
                null,
                '\u5185\u5BB9\u5185\u5BB9',
                _react2['default'].createElement(
                  Brief,
                  { style: { textAlign: 'right' } },
                  '\u8F85\u52A9\u6587\u5B57\u5185\u5BB9'
                )
              ), multipleLine: true },
            '\u5782\u76F4\u5C45\u4E2D\u5BF9\u9F50'
          ),
          _react2['default'].createElement(
            Item,
            { extra: '\u5185\u5BB9\u5185\u5BB9', multipleLine: true },
            '\u5782\u76F4\u5C45\u4E2D\u5BF9\u9F50',
            _react2['default'].createElement(
              Brief,
              null,
              '\u8F85\u52A9\u6587\u5B57\u5185\u5BB9'
            )
          ),
          _react2['default'].createElement(
            Item,
            { wrap: true, extra: '\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C', multipleLine: true, align: 'top', arrow: 'horizontal' },
            '\u9876\u90E8\u5BF9\u9F50',
            _react2['default'].createElement(
              Brief,
              null,
              '\u8F85\u52A9\u6587\u5B57\u5185\u5BB9\u8F85\u52A9\u6587\u5B57\u5185\u5BB9\u8F85\u52A9\u6587\u5B57\u5185\u5BB9\u8F85\u52A9\u6587\u5B57\u5185\u5BB9'
            ),
            _react2['default'].createElement(
              Brief,
              null,
              '\u8F85\u52A9\u6587\u5B57\u5185\u5BB9'
            )
          ),
          _react2['default'].createElement(
            Item,
            { extra: _react2['default'].createElement(
                _reactNative.View,
                null,
                '\u5185\u5BB9\u5185\u5BB9',
                _react2['default'].createElement(
                  Brief,
                  { style: { textAlign: 'right' } },
                  '\u8F85\u52A9\u6587\u5B57\u5185\u5BB9'
                )
              ), multipleLine: true, align: 'bottom' },
            '\u5E95\u90E8\u5BF9\u9F50'
          )
        ),
        _react2['default'].createElement(
          _antdMobile.List,
          { renderHeader: function renderHeader() {
              return '带缩略图';
            } },
          _react2['default'].createElement(
            Item,
            { thumb: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png' },
            'thumb'
          ),
          _react2['default'].createElement(
            Item,
            { thumb: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png', arrow: 'horizontal' },
            'thumb'
          ),
          _react2['default'].createElement(
            Item,
            { extra: _react2['default'].createElement(_reactNative.Image, { source: { uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png' }, style: { width: 29, height: 29 } }), arrow: 'horizontal' },
            'extra\u4E3AImage'
          )
        )
      );
    }
  }]);
  return BasicListExample;
}(_react2['default'].Component);

exports['default'] = BasicListExample;
var title = exports.title = 'List';
var description = exports.description = 'List Example';