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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TabBarItem = function (_React$Component) {
  (0, _inherits3['default'])(TabBarItem, _React$Component);

  function TabBarItem() {
    (0, _classCallCheck3['default'])(this, TabBarItem);
    return (0, _possibleConstructorReturn3['default'])(this, (TabBarItem.__proto__ || Object.getPrototypeOf(TabBarItem)).apply(this, arguments));
  }

  (0, _createClass3['default'])(TabBarItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          selected = _props.selected,
          tintColor = _props.tintColor,
          unselectedTintColor = _props.unselectedTintColor,
          icon = _props.icon,
          selectedIcon = _props.selectedIcon,
          onPress = _props.onPress,
          badge = _props.badge,
          styles = _props.styles,
          iconStyle = _props.iconStyle;

      var itemSelectedStyle = selected ? styles.barItemSelected : null;
      var badgeDom = badge ? _react2['default'].createElement(
        _reactNative.View,
        { style: [styles.badge] },
        _react2['default'].createElement(
          _reactNative.Text,
          { style: [styles.badgeText] },
          badge
        )
      ) : null;
      return _react2['default'].createElement(
        _reactNative.TouchableWithoutFeedback,
        { onPress: onPress },
        _react2['default'].createElement(
          _reactNative.View,
          { style: [styles.barItem, itemSelectedStyle] },
          _react2['default'].createElement(
            _reactNative.View,
            null,
            _react2['default'].createElement(_reactNative.Image, { source: selected ? selectedIcon : icon, style: [styles.barIcon, iconStyle] }),
            badgeDom
          ),
          _react2['default'].createElement(
            _reactNative.Text,
            { style: [styles.barItemTitle, { color: selected ? tintColor : unselectedTintColor }] },
            title
          )
        )
      );
    }
  }]);
  return TabBarItem;
}(_react2['default'].Component);

exports['default'] = TabBarItem;

TabBarItem.defaultProps = {
  onPress: function onPress() {}
};
module.exports = exports['default'];