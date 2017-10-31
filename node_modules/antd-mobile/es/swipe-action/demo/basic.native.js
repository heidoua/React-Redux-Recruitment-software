import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:no-console */
import React from 'react';
import { View } from 'react-native';
import { SwipeAction, List } from 'antd-mobile';

var BasicSwipeActionExample = function (_React$Component) {
    _inherits(BasicSwipeActionExample, _React$Component);

    function BasicSwipeActionExample() {
        _classCallCheck(this, BasicSwipeActionExample);

        return _possibleConstructorReturn(this, (BasicSwipeActionExample.__proto__ || Object.getPrototypeOf(BasicSwipeActionExample)).apply(this, arguments));
    }

    _createClass(BasicSwipeActionExample, [{
        key: 'render',
        value: function render() {
            var right = [{
                text: 'More',
                onPress: function onPress() {
                    return console.log('more');
                },
                style: { backgroundColor: 'orange', color: 'white' }
            }, {
                text: 'Delete',
                onPress: function onPress() {
                    return console.log('delete');
                },
                style: { backgroundColor: 'red', color: 'white' }
            }];
            var left = [{
                text: 'Read',
                onPress: function onPress() {
                    return console.log('read');
                },
                style: { backgroundColor: 'blue', color: 'white' }
            }, {
                text: 'Reply',
                onPress: function onPress() {
                    return console.log('reply');
                },
                style: { backgroundColor: 'green', color: 'white' }
            }];
            return React.createElement(
                View,
                { style: { paddingTop: 30 } },
                React.createElement(
                    List,
                    null,
                    React.createElement(
                        SwipeAction,
                        { autoClose: true, style: { backgroundColor: 'transparent' }, right: right, left: left, onOpen: function onOpen() {
                                return console.log('open');
                            }, onClose: function onClose() {
                                return console.log('close');
                            } },
                        React.createElement(
                            List.Item,
                            { extra: 'extra content' },
                            'Simple example: left and right buttons'
                        )
                    )
                )
            );
        }
    }]);

    return BasicSwipeActionExample;
}(React.Component);

export default BasicSwipeActionExample;