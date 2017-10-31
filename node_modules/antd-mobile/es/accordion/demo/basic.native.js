import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:no-console */
import React from 'react';
import { View } from 'react-native';
import { Accordion, List } from 'antd-mobile';

var AccordionExmple = function (_React$Component) {
  _inherits(AccordionExmple, _React$Component);

  function AccordionExmple() {
    _classCallCheck(this, AccordionExmple);

    var _this = _possibleConstructorReturn(this, (AccordionExmple.__proto__ || Object.getPrototypeOf(AccordionExmple)).apply(this, arguments));

    _this.onChange = function (key) {
      console.log(key);
    };
    return _this;
  }

  _createClass(AccordionExmple, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        View,
        { style: { marginTop: 80, marginBottom: 10 } },
        React.createElement(
          Accordion,
          { onChange: this.onChange, defaultActiveKey: '2' },
          React.createElement(
            Accordion.Panel,
            { header: 'Title 1' },
            React.createElement(
              List,
              null,
              React.createElement(
                List.Item,
                null,
                'Content 1'
              ),
              React.createElement(
                List.Item,
                null,
                'Content 2'
              ),
              React.createElement(
                List.Item,
                null,
                'Content 3'
              )
            )
          ),
          React.createElement(
            Accordion.Panel,
            { header: 'Title 2' },
            'this is panel content2 or other'
          ),
          React.createElement(
            Accordion.Panel,
            { header: 'Title 3' },
            'Text text text text text text text text text text text text text text text'
          )
        )
      );
    }
  }]);

  return AccordionExmple;
}(React.Component);

export default AccordionExmple;