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

var _reactNative = require('react-native');

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var BasicSwipeActionExample = function (_React$Component) {
    (0, _inherits3['default'])(BasicSwipeActionExample, _React$Component);

    function BasicSwipeActionExample() {
        (0, _classCallCheck3['default'])(this, BasicSwipeActionExample);
        return (0, _possibleConstructorReturn3['default'])(this, (BasicSwipeActionExample.__proto__ || Object.getPrototypeOf(BasicSwipeActionExample)).apply(this, arguments));
    }

    (0, _createClass3['default'])(BasicSwipeActionExample, [{
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
            return _react2['default'].createElement(
                _reactNative.View,
                { style: { paddingTop: 30 } },
                _react2['default'].createElement(
                    _antdMobile.List,
                    null,
                    _react2['default'].createElement(
                        _antdMobile.SwipeAction,
                        { autoClose: true, style: { backgroundColor: 'transparent' }, right: right, left: left, onOpen: function onOpen() {
                                return console.log('open');
                            }, onClose: function onClose() {
                                return console.log('close');
                            } },
                        _react2['default'].createElement(
                            _antdMobile.List.Item,
                            { extra: 'extra content' },
                            'Simple example: left and right buttons'
                        )
                    )
                )
            );
        }
    }]);
    return BasicSwipeActionExample;
}(_react2['default'].Component); /* tslint:disable:no-console */


exports['default'] = BasicSwipeActionExample;
module.exports = exports['default'];