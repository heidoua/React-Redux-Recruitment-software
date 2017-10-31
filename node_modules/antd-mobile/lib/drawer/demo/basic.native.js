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

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});

var DrawerExample = function (_React$Component) {
  (0, _inherits3['default'])(DrawerExample, _React$Component);

  function DrawerExample() {
    (0, _classCallCheck3['default'])(this, DrawerExample);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (DrawerExample.__proto__ || Object.getPrototypeOf(DrawerExample)).apply(this, arguments));

    _this.onOpenChange = function (isOpen) {
      /* tslint:disable: no-console */
      console.log('是否打开了 Drawer', isOpen.toString());
    };
    return _this;
  }

  (0, _createClass3['default'])(DrawerExample, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var itemArr = Array.apply(null, Array(20)).map(function (_, i) {
        return i;
      }).map(function (_i, index) {
        if (index === 0) {
          return _react2['default'].createElement(
            _antdMobile.List.Item,
            { key: index, thumb: 'https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png', multipleLine: true },
            _react2['default'].createElement(
              _reactNative.View,
              { style: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } },
              _react2['default'].createElement(
                _reactNative.Text,
                null,
                'Categories - ',
                index
              ),
              _react2['default'].createElement(
                _antdMobile.Button,
                { type: 'primary', size: 'small', onClick: function onClick() {
                    return _this2.drawer.closeDrawer();
                  } },
                'close drawer'
              )
            )
          );
        }
        return _react2['default'].createElement(
          _antdMobile.List.Item,
          { key: index, thumb: 'https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png' },
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            'Categories - ',
            index
          )
        );
      });
      // Todo: https://github.com/DefinitelyTyped/DefinitelyTyped
      var sidebar = _react2['default'].createElement(
        _reactNative.ScrollView,
        { style: [styles.container] },
        _react2['default'].createElement(
          _antdMobile.List,
          null,
          itemArr
        )
      );
      return _react2['default'].createElement(
        _antdMobile.Drawer,
        { sidebar: sidebar, position: 'left', open: false, drawerRef: function drawerRef(el) {
            return _this2.drawer = el;
          }, onOpenChange: this.onOpenChange, drawerBackgroundColor: '#ccc' },
        _react2['default'].createElement(
          _reactNative.View,
          { style: { flex: 1, marginTop: 114, padding: 8 } },
          _react2['default'].createElement(
            _antdMobile.Button,
            { onClick: function onClick() {
                return _this2.drawer && _this2.drawer.openDrawer();
              } },
            'Open drawer'
          ),
          _react2['default'].createElement(_antdMobile.WhiteSpace, null)
        )
      );
    }
  }]);
  return DrawerExample;
}(_react2['default'].Component);

exports['default'] = DrawerExample;
module.exports = exports['default'];