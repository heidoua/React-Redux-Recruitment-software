import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, Text } from 'react-native';
import { WhiteSpace, Checkbox, List } from 'antd-mobile';
var AgreeItem = Checkbox.AgreeItem;
var CheckboxItem = Checkbox.CheckboxItem;

var BasicCheckboxExample = function (_React$Component) {
  _inherits(BasicCheckboxExample, _React$Component);

  function BasicCheckboxExample(props, context) {
    _classCallCheck(this, BasicCheckboxExample);

    var _this = _possibleConstructorReturn(this, (BasicCheckboxExample.__proto__ || Object.getPrototypeOf(BasicCheckboxExample)).call(this, props, context));

    _this.state = {
      checkBox1: true,
      agreeItem1: true,
      checkboxItem1: true
    };
    return _this;
  }

  _createClass(BasicCheckboxExample, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        View,
        null,
        React.createElement(
          View,
          { style: { padding: 10 } },
          React.createElement(Checkbox, { checked: this.state.checkBox1, style: { tintColor: '#f00' }, onChange: function onChange(event) {
              _this2.setState({ checkBox1: event.target.checked });
            } }),
          React.createElement(WhiteSpace, null),
          React.createElement(
            Checkbox,
            null,
            'Checkbox'
          ),
          React.createElement(WhiteSpace, null),
          React.createElement(Checkbox, { checked: true, disabled: true }),
          React.createElement(WhiteSpace, null),
          React.createElement(Checkbox, { disabled: true })
        ),
        React.createElement(WhiteSpace, null),
        React.createElement(
          AgreeItem,
          null,
          'Agree agreement agreement agreement agreement agreement agreement agreement'
        ),
        React.createElement(WhiteSpace, null),
        React.createElement(
          AgreeItem,
          { checked: this.state.agreeItem1, checkboxStyle: { tintColor: '#f00' }, onChange: function onChange(event) {
              _this2.setState({ agreeItem1: event.target.checked });
            } },
          'Agree agreement'
        ),
        React.createElement(WhiteSpace, null),
        React.createElement(
          AgreeItem,
          { disabled: true },
          'Not selected. Not editable'
        ),
        React.createElement(WhiteSpace, null),
        React.createElement(
          AgreeItem,
          { checked: true, disabled: true },
          'Force selected. Not editable'
        ),
        React.createElement(
          List,
          { style: { marginTop: 12 } },
          React.createElement(
            Text,
            { style: { marginTop: 12 } },
            'Multiple options'
          ),
          React.createElement(
            CheckboxItem,
            { checked: this.state.checkboxItem1, onChange: function onChange(event) {
                _this2.setState({ checkboxItem1: event.target.checked });
              } },
            'Option 1'
          ),
          React.createElement(
            CheckboxItem,
            null,
            'Option 2'
          ),
          React.createElement(
            CheckboxItem,
            { disabled: true },
            'Option 3'
          ),
          React.createElement(
            CheckboxItem,
            { disabled: true, checked: true },
            'Option 4'
          )
        )
      );
    }
  }]);

  return BasicCheckboxExample;
}(React.Component);

export default BasicCheckboxExample;