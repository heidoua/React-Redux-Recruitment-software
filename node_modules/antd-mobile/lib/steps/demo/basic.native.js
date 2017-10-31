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

var Step = _antdMobile.Steps.Step; /* tslint:disable:jsx-no-multiline-js */

var BasicTimelineExample = function (_React$Component) {
  (0, _inherits3['default'])(BasicTimelineExample, _React$Component);

  function BasicTimelineExample(props) {
    (0, _classCallCheck3['default'])(this, BasicTimelineExample);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (BasicTimelineExample.__proto__ || Object.getPrototypeOf(BasicTimelineExample)).call(this, props));

    _this.state = {
      steps1: [{ title: 'Finished', description: 'This is description' }, { title: 'In Progress', description: 'This is description' }, { title: 'Waiting', description: 'This is description' }],
      steps2: [{ title: 'Finished', description: 'This is description', status: 'finish' }, { title: 'In Progress', description: 'This is description', status: 'process' }, { title: 'Waiting', description: 'This is description', status: 'error' }, { title: 'Waiting', description: 'This is description', status: 'wait' }]
    };
    return _this;
  }

  (0, _createClass3['default'])(BasicTimelineExample, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactNative.ScrollView,
        { style: { flex: 1 }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false },
        _react2['default'].createElement(
          _reactNative.View,
          { style: { marginTop: 60 } },
          _react2['default'].createElement(
            _antdMobile.WingBlank,
            { size: 'lg' },
            _react2['default'].createElement(
              _antdMobile.Steps,
              { size: 'small', current: 1 },
              this.state.steps1.map(function (item, index) {
                return _react2['default'].createElement(Step, { key: index, title: _react2['default'].createElement(
                    _reactNative.View,
                    null,
                    _react2['default'].createElement(
                      _reactNative.Text,
                      null,
                      'title:',
                      item.title
                    )
                  ), description: _react2['default'].createElement(
                    _reactNative.View,
                    null,
                    _react2['default'].createElement(
                      _reactNative.Text,
                      null,
                      'desc:',
                      item.description
                    )
                  ), status: item.status });
              })
            )
          )
        ),
        _react2['default'].createElement(
          _reactNative.View,
          null,
          _react2['default'].createElement(
            _antdMobile.WingBlank,
            { size: 'lg' },
            _react2['default'].createElement(
              _antdMobile.Steps,
              { size: 'small' },
              this.state.steps2.map(function (item, index) {
                return _react2['default'].createElement(Step, { key: index, title: item.title, description: item.description, status: item.status });
              })
            )
          )
        ),
        _react2['default'].createElement(
          _reactNative.View,
          null,
          _react2['default'].createElement(
            _antdMobile.WingBlank,
            { size: 'lg' },
            _react2['default'].createElement(
              _antdMobile.Steps,
              { current: 1 },
              this.state.steps1.map(function (item, index) {
                return _react2['default'].createElement(Step, { key: index, title: item.title, description: item.description, status: item.status });
              })
            )
          )
        ),
        _react2['default'].createElement(
          _reactNative.View,
          null,
          _react2['default'].createElement(
            _antdMobile.WingBlank,
            { size: 'lg' },
            _react2['default'].createElement(
              _antdMobile.Steps,
              null,
              this.state.steps2.map(function (item, index) {
                return _react2['default'].createElement(Step, { key: index, title: item.title, description: item.description, status: item.status });
              })
            )
          )
        ),
        _react2['default'].createElement(
          _reactNative.View,
          null,
          _react2['default'].createElement(
            _antdMobile.WingBlank,
            { size: 'lg' },
            _react2['default'].createElement(
              _antdMobile.Steps,
              { current: 1 },
              _react2['default'].createElement(Step, { key: 0, title: 'Finished', description: 'This is description', status: 'finish' }),
              _react2['default'].createElement(Step, { key: 1, title: 'Progress', description: 'This is description', status: 'progress' }),
              _react2['default'].createElement(Step, { key: 2, title: 'Wait', description: 'This is description', status: 'wait', icon: _react2['default'].createElement(_antdMobile.Icon, { type: 'down', size: 20, color: 'white' }) })
            )
          )
        )
      );
    }
  }]);
  return BasicTimelineExample;
}(_react2['default'].Component);

exports['default'] = BasicTimelineExample;
module.exports = exports['default'];