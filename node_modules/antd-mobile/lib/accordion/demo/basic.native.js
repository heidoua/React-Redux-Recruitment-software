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

var AccordionExmple = function (_React$Component) {
  (0, _inherits3['default'])(AccordionExmple, _React$Component);

  function AccordionExmple() {
    (0, _classCallCheck3['default'])(this, AccordionExmple);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (AccordionExmple.__proto__ || Object.getPrototypeOf(AccordionExmple)).apply(this, arguments));

    _this.onChange = function (key) {
      console.log(key);
    };
    return _this;
  }

  (0, _createClass3['default'])(AccordionExmple, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactNative.View,
        { style: { marginTop: 80, marginBottom: 10 } },
        _react2['default'].createElement(
          _antdMobile.Accordion,
          { onChange: this.onChange, defaultActiveKey: '2' },
          _react2['default'].createElement(
            _antdMobile.Accordion.Panel,
            { header: 'Title 1' },
            _react2['default'].createElement(
              _antdMobile.List,
              null,
              _react2['default'].createElement(
                _antdMobile.List.Item,
                null,
                'Content 1'
              ),
              _react2['default'].createElement(
                _antdMobile.List.Item,
                null,
                'Content 2'
              ),
              _react2['default'].createElement(
                _antdMobile.List.Item,
                null,
                'Content 3'
              )
            )
          ),
          _react2['default'].createElement(
            _antdMobile.Accordion.Panel,
            { header: 'Title 2' },
            'this is panel content2 or other'
          ),
          _react2['default'].createElement(
            _antdMobile.Accordion.Panel,
            { header: 'Title 3' },
            'Text text text text text text text text text text text text text text text'
          )
        )
      );
    }
  }]);
  return AccordionExmple;
}(_react2['default'].Component); /* tslint:disable:no-console */


exports['default'] = AccordionExmple;
module.exports = exports['default'];