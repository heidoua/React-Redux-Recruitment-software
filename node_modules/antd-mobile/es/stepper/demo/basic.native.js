import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:no-console */
import React from 'react';
import { View } from 'react-native';
import { Stepper, List } from 'antd-mobile';
function onChange(value) {
  console.log('changed', value);
}

var StepperExample = function (_React$Component) {
  _inherits(StepperExample, _React$Component);

  function StepperExample() {
    _classCallCheck(this, StepperExample);

    return _possibleConstructorReturn(this, (StepperExample.__proto__ || Object.getPrototypeOf(StepperExample)).apply(this, arguments));
  }

  _createClass(StepperExample, [{
    key: 'render',
    value: function render() {
      var readOnly = React.createElement(Stepper, { size: 'small', key: '1', max: 10, min: 1, readOnly: false, defaultValue: 1, onChange: onChange });
      return React.createElement(
        View,
        { style: { marginTop: 20 } },
        React.createElement(
          List,
          null,
          React.createElement(
            List.Item,
            { extra: React.createElement(Stepper, { key: '0', max: 10, min: 1, defaultValue: 3, onChange: onChange }) },
            'readOnly: true'
          ),
          React.createElement(
            List.Item,
            { extra: readOnly },
            'readOnly: false'
          ),
          React.createElement(
            List.Item,
            { extra: React.createElement(Stepper, { key: '2', disabled: true, max: 10, min: 1, defaultValue: 3, onChange: onChange }) },
            'Disabled'
          )
        )
      );
    }
  }]);

  return StepperExample;
}(React.Component);

export default StepperExample;