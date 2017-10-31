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

var NoticeBarExample = function (_React$Component) {
  (0, _inherits3['default'])(NoticeBarExample, _React$Component);

  function NoticeBarExample() {
    (0, _classCallCheck3['default'])(this, NoticeBarExample);
    return (0, _possibleConstructorReturn3['default'])(this, (NoticeBarExample.__proto__ || Object.getPrototypeOf(NoticeBarExample)).apply(this, arguments));
  }

  (0, _createClass3['default'])(NoticeBarExample, [{
    key: 'render',
    value: function render() {
      var customIcon = _react2['default'].createElement(_reactNative.Image, { source: { uri: 'https://zos.alipayobjects.com/rmsportal/bRnouywfdRsCcLU.png' }, style: { width: 12, height: 12 } });
      return _react2['default'].createElement(
        _reactNative.View,
        { style: { marginTop: 10 } },
        _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
        _react2['default'].createElement(
          _antdMobile.NoticeBar,
          { onClick: function onClick() {
              return alert('click');
            }, marqueeProps: { loop: true, style: { fontSize: 12, color: 'red' } } },
          'Notice: The arrival time of incomes and transfers of Yu \'E Bao will be delayed during National Day.'
        ),
        _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
        _react2['default'].createElement(
          _antdMobile.NoticeBar,
          { mode: 'closable', onClick: function onClick() {
              return alert('will close');
            } },
          'Notice: The arrival time of incomes and transfers of Yu \'E Bao will be delayed during National Day.'
        ),
        _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
        _react2['default'].createElement(
          _antdMobile.NoticeBar,
          { mode: 'closable', icon: customIcon },
          'Customized icon.'
        ),
        _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
        _react2['default'].createElement(
          _antdMobile.NoticeBar,
          { mode: 'link', onClick: function onClick() {
              return alert('link');
            } },
          'Notice: The arrival time of incomes and transfers of Yu \'E Bao will be delayed during National Day.'
        ),
        _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
        _react2['default'].createElement(
          _antdMobile.NoticeBar,
          { mode: 'link' },
          'Notice: The arrival time of incomes and transfers of Yu \'E Bao will be delayed during National Day.'
        ),
        _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
        _react2['default'].createElement(
          _antdMobile.NoticeBar,
          { mode: 'closable', icon: null },
          'Remove the default icon.'
        ),
        _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
        _react2['default'].createElement(
          _antdMobile.NoticeBar,
          { mode: 'closable', action: _react2['default'].createElement(
              _reactNative.Text,
              { style: { color: '#a1a1a1' } },
              '\u4E0D\u518D\u63D0\u793A'
            ) },
          'Closable demo for `actionText`.'
        ),
        _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
        _react2['default'].createElement(
          _antdMobile.NoticeBar,
          { mode: 'link', action: _react2['default'].createElement(
              _reactNative.Text,
              null,
              '\u53BB\u770B\u770B'
            ) },
          'Link demo for `actionText`.'
        )
      );
    }
  }]);
  return NoticeBarExample;
}(_react2['default'].Component); /* tslint:disable:no-console */


exports['default'] = NoticeBarExample;
module.exports = exports['default'];