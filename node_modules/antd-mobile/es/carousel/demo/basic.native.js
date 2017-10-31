import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Carousel } from 'antd-mobile';

var BasicCarouselExample = function (_React$Component) {
  _inherits(BasicCarouselExample, _React$Component);

  function BasicCarouselExample() {
    _classCallCheck(this, BasicCarouselExample);

    return _possibleConstructorReturn(this, (BasicCarouselExample.__proto__ || Object.getPrototypeOf(BasicCarouselExample)).apply(this, arguments));
  }

  _createClass(BasicCarouselExample, [{
    key: 'onselectedIndexChange',
    value: function onselectedIndexChange(index) {
      /* tslint:disable: no-console */
      console.log('change to', index);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        View,
        { style: { marginTop: 30 } },
        React.createElement(
          View,
          { style: { paddingHorizontal: 15 } },
          React.createElement(
            Carousel,
            { style: styles.wrapper, autoplayTimeout: 2, selectedIndex: 2, autoplay: true, infinite: true, afterChange: this.onselectedIndexChange },
            React.createElement(
              View,
              { style: [styles.container, { backgroundColor: 'red' }] },
              React.createElement(
                Text,
                null,
                'Carousel 1'
              )
            ),
            React.createElement(
              View,
              { style: [styles.container,, { backgroundColor: 'blue' }] },
              React.createElement(
                Text,
                null,
                'Carousel 2'
              )
            ),
            React.createElement(
              View,
              { style: [styles.container, { backgroundColor: 'yellow' }] },
              React.createElement(
                Text,
                null,
                'Carousel 3'
              )
            ),
            React.createElement(
              View,
              { style: [styles.container, { backgroundColor: 'black' }] },
              React.createElement(
                Text,
                null,
                'Carousel 4'
              )
            ),
            React.createElement(
              View,
              { style: [styles.container, { backgroundColor: '#ccc' }] },
              React.createElement(
                Text,
                null,
                'Carousel 5'
              )
            )
          ),
          React.createElement(
            Text,
            null,
            'Carousel will adjust height based on content'
          )
        )
      );
    }
  }]);

  return BasicCarouselExample;
}(React.Component);

export default BasicCarouselExample;

var styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff'
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150
  },
  text: {
    color: '#fff',
    fontSize: 36
  }
});