import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

var Popover = function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    _classCallCheck(this, Popover);

    return _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).apply(this, arguments));
  }

  _createClass(Popover, [{
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
      return React.createElement(
        MenuContext,
        { ref: function ref(el) {
            return _this2.menuContextRef = el;
          }, style: contextStyle },
        React.createElement(
          Menu,
          { name: name, onSelect: onSelect, style: style },
          React.createElement(
            MenuTrigger,
            { disabled: disabled, style: triggerStyle },
            children
          ),
          React.createElement(
            MenuOptions,
            menuOptionsProp,
            overlay
          )
        )
      );
    }
  }]);

  return Popover;
}(React.Component);

export default Popover;

Popover.defaultProps = {
  onSelect: function onSelect() {}
};
Popover.Item = MenuOption;