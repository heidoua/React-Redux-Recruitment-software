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

var _reactNativeMenu = require('react-native-menu');

var _reactNativeMenu2 = _interopRequireDefault(_reactNativeMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Popover = function (_React$Component) {
  (0, _inherits3['default'])(Popover, _React$Component);

  function Popover() {
    (0, _classCallCheck3['default'])(this, Popover);
    return (0, _possibleConstructorReturn3['default'])(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Popover, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          onSelect = _props.onSelect,
          overlay = _props.overlay,
          disabled = _props.disabled,
          contextStyle = _props.contextStyle,
          name = _props.name,
          style = _props.style,
          triggerStyle = _props.triggerStyle,
          overlayStyle = _props.overlayStyle,
          renderOverlayComponent = _props.renderOverlayComponent;

      var menuOptionsProp = {
        optionsContainerStyle: overlayStyle,
        renderOptionsContainer: renderOverlayComponent
      };
      return _react2['default'].createElement(
        _reactNativeMenu.MenuContext,
        { ref: function ref(el) {
            return _this2.menuContextRef = el;
          }, style: contextStyle },
        _react2['default'].createElement(
          _reactNativeMenu2['default'],
          { name: name, onSelect: onSelect, style: style },
          _react2['default'].createElement(
            _reactNativeMenu.MenuTrigger,
            { disabled: disabled, style: triggerStyle },
            children
          ),
          _react2['default'].createElement(
            _reactNativeMenu.MenuOptions,
            menuOptionsProp,
            overlay
          )
        )
      );
    }
  }]);
  return Popover;
}(_react2['default'].Component);

exports['default'] = Popover;

Popover.defaultProps = {
  onSelect: function onSelect() {}
};
Popover.Item = _reactNativeMenu.MenuOption;
module.exports = exports['default'];