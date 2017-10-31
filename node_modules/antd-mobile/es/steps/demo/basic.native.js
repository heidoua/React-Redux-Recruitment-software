import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:jsx-no-multiline-js */
import { Steps, WingBlank, Icon } from 'antd-mobile';
var Step = Steps.Step;
import React from 'react';
import { View, ScrollView, Text } from 'react-native';

var BasicTimelineExample = function (_React$Component) {
  _inherits(BasicTimelineExample, _React$Component);

  function BasicTimelineExample(props) {
    _classCallCheck(this, BasicTimelineExample);

    var _this = _possibleConstructorReturn(this, (BasicTimelineExample.__proto__ || Object.getPrototypeOf(BasicTimelineExample)).call(this, props));

    _this.state = {
      steps1: [{ title: 'Finished', description: 'This is description' }, { title: 'In Progress', description: 'This is description' }, { title: 'Waiting', description: 'This is description' }],
      steps2: [{ title: 'Finished', description: 'This is description', status: 'finish' }, { title: 'In Progress', description: 'This is description', status: 'process' }, { title: 'Waiting', description: 'This is description', status: 'error' }, { title: 'Waiting', description: 'This is description', status: 'wait' }]
    };
    return _this;
  }

  _createClass(BasicTimelineExample, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        ScrollView,
        { style: { flex: 1 }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false },
        React.createElement(
          View,
          { style: { marginTop: 60 } },
          React.createElement(
            WingBlank,
            { size: 'lg' },
            React.createElement(
              Steps,
              { size: 'small', current: 1 },
              this.state.steps1.map(function (item, index) {
                return React.createElement(Step, { key: index, title: React.createElement(
                    View,
                    null,
                    React.createElement(
                      Text,
                      null,
                      'title:',
                      item.title
                    )
                  ), description: React.createElement(
                    View,
                    null,
                    React.createElement(
                      Text,
                      null,
                      'desc:',
                      item.description
                    )
                  ), status: item.status });
              })
            )
          )
        ),
        React.createElement(
          View,
          null,
          React.createElement(
            WingBlank,
            { size: 'lg' },
            React.createElement(
              Steps,
              { size: 'small' },
              this.state.steps2.map(function (item, index) {
                return React.createElement(Step, { key: index, title: item.title, description: item.description, status: item.status });
              })
            )
          )
        ),
        React.createElement(
          View,
          null,
          React.createElement(
            WingBlank,
            { size: 'lg' },
            React.createElement(
              Steps,
              { current: 1 },
              this.state.steps1.map(function (item, index) {
                return React.createElement(Step, { key: index, title: item.title, description: item.description, status: item.status });
              })
            )
          )
        ),
        React.createElement(
          View,
          null,
          React.createElement(
            WingBlank,
            { size: 'lg' },
            React.createElement(
              Steps,
              null,
              this.state.steps2.map(function (item, index) {
                return React.createElement(Step, { key: index, title: item.title, description: item.description, status: item.status });
              })
            )
          )
        ),
        React.createElement(
          View,
          null,
          React.createElement(
            WingBlank,
            { size: 'lg' },
            React.createElement(
              Steps,
              { current: 1 },
              React.createElement(Step, { key: 0, title: 'Finished', description: 'This is description', status: 'finish' }),
              React.createElement(Step, { key: 1, title: 'Progress', description: 'This is description', status: 'progress' }),
              React.createElement(Step, { key: 2, title: 'Wait', description: 'This is description', status: 'wait', icon: React.createElement(Icon, { type: 'down', size: 20, color: 'white' }) })
            )
          )
        )
      );
    }
  }]);

  return BasicTimelineExample;
}(React.Component);

export default BasicTimelineExample;