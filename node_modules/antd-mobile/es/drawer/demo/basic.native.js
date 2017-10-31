import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Drawer, List, Button, WhiteSpace } from 'antd-mobile';
var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

var DrawerExample = function (_React$Component) {
  _inherits(DrawerExample, _React$Component);

  function DrawerExample() {
    _classCallCheck(this, DrawerExample);

    var _this = _possibleConstructorReturn(this, (DrawerExample.__proto__ || Object.getPrototypeOf(DrawerExample)).apply(this, arguments));

    _this.onOpenChange = function (isOpen) {
      /* tslint:disable: no-console */
      console.log('是否打开了 Drawer', isOpen.toString());
    };
    return _this;
  }

  _createClass(DrawerExample, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var itemArr = Array.apply(null, Array(20)).map(function (_, i) {
        return i;
      }).map(function (_i, index) {
        if (index === 0) {
          return React.createElement(
            List.Item,
            { key: index, thumb: 'https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png', multipleLine: true },
            React.createElement(
              View,
              { style: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } },
              React.createElement(
                Text,
                null,
                'Categories - ',
                index
              ),
              React.createElement(
                Button,
                { type: 'primary', size: 'small', onClick: function onClick() {
                    return _this2.drawer.closeDrawer();
                  } },
                'close drawer'
              )
            )
          );
        }
        return React.createElement(
          List.Item,
          { key: index, thumb: 'https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png' },
          React.createElement(
            Text,
            null,
            'Categories - ',
            index
          )
        );
      });
      // Todo: https://github.com/DefinitelyTyped/DefinitelyTyped
      var sidebar = React.createElement(
        ScrollView,
        { style: [styles.container] },
        React.createElement(
          List,
          null,
          itemArr
        )
      );
      return React.createElement(
        Drawer,
        { sidebar: sidebar, position: 'left', open: false, drawerRef: function drawerRef(el) {
            return _this2.drawer = el;
          }, onOpenChange: this.onOpenChange, drawerBackgroundColor: '#ccc' },
        React.createElement(
          View,
          { style: { flex: 1, marginTop: 114, padding: 8 } },
          React.createElement(
            Button,
            { onClick: function onClick() {
                return _this2.drawer && _this2.drawer.openDrawer();
              } },
            'Open drawer'
          ),
          React.createElement(WhiteSpace, null)
        )
      );
    }
  }]);

  return DrawerExample;
}(React.Component);

export default DrawerExample;