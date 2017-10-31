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

var BasicTagExample = function (_React$Component) {
  (0, _inherits3['default'])(BasicTagExample, _React$Component);

  function BasicTagExample() {
    (0, _classCallCheck3['default'])(this, BasicTagExample);
    return (0, _possibleConstructorReturn3['default'])(this, (BasicTagExample.__proto__ || Object.getPrototypeOf(BasicTagExample)).apply(this, arguments));
  }

  (0, _createClass3['default'])(BasicTagExample, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactNative.ScrollView,
        { style: { flex: 1 }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false },
        _react2['default'].createElement(
          _reactNative.View,
          { style: { padding: 20 } },
          _react2['default'].createElement(
            _antdMobile.Badge,
            { text: 9 },
            _react2['default'].createElement(_reactNative.View, { style: { width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' } })
          ),
          _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
          _react2['default'].createElement(
            _antdMobile.Badge,
            { text: 109, overflowCount: 100 },
            _react2['default'].createElement(_reactNative.View, { style: { width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' } })
          ),
          _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
          _react2['default'].createElement(
            _antdMobile.Badge,
            { text: 109 },
            _react2['default'].createElement(_reactNative.View, { style: { width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' } })
          ),
          _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
          _react2['default'].createElement(
            _antdMobile.Badge,
            { text: 'new' },
            _react2['default'].createElement(_reactNative.View, { style: { width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' } })
          ),
          _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
          _react2['default'].createElement(
            _antdMobile.Badge,
            { text: 109, dot: true },
            _react2['default'].createElement(_reactNative.View, { style: { width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' } })
          ),
          _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
          _react2['default'].createElement(
            _antdMobile.Badge,
            { text: 33, corner: true },
            _react2['default'].createElement(_reactNative.View, { style: { width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' } })
          )
        )
      );
    }
  }]);
  return BasicTagExample;
}(_react2['default'].Component); /* tslint:disable:no-console */


exports['default'] = BasicTagExample;
module.exports = exports['default'];