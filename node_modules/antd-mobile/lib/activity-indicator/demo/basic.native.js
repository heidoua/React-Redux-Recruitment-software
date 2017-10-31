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

var ActivityIndicatorExample = function (_React$Component) {
  (0, _inherits3['default'])(ActivityIndicatorExample, _React$Component);

  function ActivityIndicatorExample(props) {
    (0, _classCallCheck3['default'])(this, ActivityIndicatorExample);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (ActivityIndicatorExample.__proto__ || Object.getPrototypeOf(ActivityIndicatorExample)).call(this, props));

    _this.state = {
      animating: false
    };
    _this.loadingToast = _this.loadingToast.bind(_this);
    return _this;
  }

  (0, _createClass3['default'])(ActivityIndicatorExample, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.closeTimer);
    }
  }, {
    key: 'loadingToast',
    value: function loadingToast() {
      var _this2 = this;

      this.setState({ animating: !this.state.animating });
      this.closeTimer = setTimeout(function () {
        _this2.setState({ animating: !_this2.state.animating });
      }, 2000);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactNative.View,
        { style: [styles.demo] },
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          null,
          _react2['default'].createElement(
            _antdMobile.Flex,
            null,
            _react2['default'].createElement(
              _antdMobile.Flex.Item,
              null,
              _react2['default'].createElement(
                _reactNative.Text,
                null,
                'Icon without text'
              )
            ),
            _react2['default'].createElement(
              _antdMobile.Flex.Item,
              null,
              _react2['default'].createElement(_antdMobile.ActivityIndicator, null)
            )
          )
        ),
        _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'xl', style: { backgroundColor: '#fff' } }),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          null,
          _react2['default'].createElement(
            _antdMobile.Flex,
            null,
            _react2['default'].createElement(
              _antdMobile.Flex.Item,
              null,
              _react2['default'].createElement(
                _reactNative.Text,
                null,
                'Icon with text'
              )
            ),
            _react2['default'].createElement(
              _antdMobile.Flex.Item,
              null,
              _react2['default'].createElement(_antdMobile.ActivityIndicator, { text: 'Loading...' })
            )
          )
        ),
        _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'xl', style: { backgroundColor: '#fff' } }),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          null,
          _react2['default'].createElement(
            _antdMobile.Flex,
            null,
            _react2['default'].createElement(
              _antdMobile.Flex.Item,
              null,
              _react2['default'].createElement(
                _reactNative.Text,
                null,
                'Dark Background'
              )
            ),
            _react2['default'].createElement(
              _antdMobile.Flex.Item,
              null,
              _react2['default'].createElement(
                _reactNative.View,
                { style: [styles.darkBg] },
                _react2['default'].createElement(_antdMobile.ActivityIndicator, { color: '#fff' })
              )
            )
          )
        ),
        _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'xl', style: { backgroundColor: '#fff' } }),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          null,
          _react2['default'].createElement(
            _antdMobile.Flex,
            null,
            _react2['default'].createElement(
              _antdMobile.Flex.Item,
              null,
              _react2['default'].createElement(
                _reactNative.Text,
                null,
                'Large Size'
              )
            ),
            _react2['default'].createElement(
              _antdMobile.Flex.Item,
              null,
              _react2['default'].createElement(_antdMobile.ActivityIndicator, { size: 'large' })
            )
          )
        ),
        _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'xl', style: { backgroundColor: '#fff' } }),
        _react2['default'].createElement(
          _antdMobile.WingBlank,
          null,
          _react2['default'].createElement(
            _antdMobile.Button,
            { onClick: this.loadingToast },
            'Click to show Toast'
          )
        ),
        _react2['default'].createElement(_antdMobile.ActivityIndicator, { animating: this.state.animating, toast: true, size: 'large', text: 'Loading...' })
      );
    }
  }]);
  return ActivityIndicatorExample;
}(_react2['default'].Component);

exports['default'] = ActivityIndicatorExample;

var styles = _reactNative.StyleSheet.create({
  demo: {
    marginTop: 20
  },
  darkBg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 89,
    height: 89,
    backgroundColor: '#2B2F42'
  },
  gray: {
    backgroundColor: '#CCC'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8
  }
});
module.exports = exports['default'];