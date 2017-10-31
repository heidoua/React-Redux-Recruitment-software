import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { WhiteSpace, WingBlank, Button, Flex, ActivityIndicator } from 'antd-mobile';

var ActivityIndicatorExample = function (_React$Component) {
  _inherits(ActivityIndicatorExample, _React$Component);

  function ActivityIndicatorExample(props) {
    _classCallCheck(this, ActivityIndicatorExample);

    var _this = _possibleConstructorReturn(this, (ActivityIndicatorExample.__proto__ || Object.getPrototypeOf(ActivityIndicatorExample)).call(this, props));

    _this.state = {
      animating: false
    };
    _this.loadingToast = _this.loadingToast.bind(_this);
    return _this;
  }

  _createClass(ActivityIndicatorExample, [{
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
      return React.createElement(
        View,
        { style: [styles.demo] },
        React.createElement(
          WingBlank,
          null,
          React.createElement(
            Flex,
            null,
            React.createElement(
              Flex.Item,
              null,
              React.createElement(
                Text,
                null,
                'Icon without text'
              )
            ),
            React.createElement(
              Flex.Item,
              null,
              React.createElement(ActivityIndicator, null)
            )
          )
        ),
        React.createElement(WhiteSpace, { size: 'xl', style: { backgroundColor: '#fff' } }),
        React.createElement(
          WingBlank,
          null,
          React.createElement(
            Flex,
            null,
            React.createElement(
              Flex.Item,
              null,
              React.createElement(
                Text,
                null,
                'Icon with text'
              )
            ),
            React.createElement(
              Flex.Item,
              null,
              React.createElement(ActivityIndicator, { text: 'Loading...' })
            )
          )
        ),
        React.createElement(WhiteSpace, { size: 'xl', style: { backgroundColor: '#fff' } }),
        React.createElement(
          WingBlank,
          null,
          React.createElement(
            Flex,
            null,
            React.createElement(
              Flex.Item,
              null,
              React.createElement(
                Text,
                null,
                'Dark Background'
              )
            ),
            React.createElement(
              Flex.Item,
              null,
              React.createElement(
                View,
                { style: [styles.darkBg] },
                React.createElement(ActivityIndicator, { color: '#fff' })
              )
            )
          )
        ),
        React.createElement(WhiteSpace, { size: 'xl', style: { backgroundColor: '#fff' } }),
        React.createElement(
          WingBlank,
          null,
          React.createElement(
            Flex,
            null,
            React.createElement(
              Flex.Item,
              null,
              React.createElement(
                Text,
                null,
                'Large Size'
              )
            ),
            React.createElement(
              Flex.Item,
              null,
              React.createElement(ActivityIndicator, { size: 'large' })
            )
          )
        ),
        React.createElement(WhiteSpace, { size: 'xl', style: { backgroundColor: '#fff' } }),
        React.createElement(
          WingBlank,
          null,
          React.createElement(
            Button,
            { onClick: this.loadingToast },
            'Click to show Toast'
          )
        ),
        React.createElement(ActivityIndicator, { animating: this.state.animating, toast: true, size: 'large', text: 'Loading...' })
      );
    }
  }]);

  return ActivityIndicatorExample;
}(React.Component);

export default ActivityIndicatorExample;

var styles = StyleSheet.create({
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