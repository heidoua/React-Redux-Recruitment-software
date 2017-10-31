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

var _Swipeout = require('rc-swipeout/lib/Swipeout');

var _Swipeout2 = _interopRequireDefault(_Swipeout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SwipeAction = function (_React$Component) {
    (0, _inherits3['default'])(SwipeAction, _React$Component);

    function SwipeAction() {
        (0, _classCallCheck3['default'])(this, SwipeAction);
        return (0, _possibleConstructorReturn3['default'])(this, (SwipeAction.__proto__ || Object.getPrototypeOf(SwipeAction)).apply(this, arguments));
    }

    (0, _createClass3['default'])(SwipeAction, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(_Swipeout2['default'], this.props);
        }
    }]);
    return SwipeAction;
}(_react2['default'].Component);

exports['default'] = SwipeAction;
module.exports = exports['default'];