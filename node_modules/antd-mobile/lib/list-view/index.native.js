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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ListView = function (_React$Component) {
    (0, _inherits3['default'])(ListView, _React$Component);

    function ListView() {
        (0, _classCallCheck3['default'])(this, ListView);
        return (0, _possibleConstructorReturn3['default'])(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).apply(this, arguments));
    }

    (0, _createClass3['default'])(ListView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.warn('React Native ListView has been officially marked as `DEPRECATED`,' + ' see https://facebook.github.io/react-native/docs/listview.html for details.');
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);
    return ListView;
}(_react2['default'].Component);

exports['default'] = ListView;
module.exports = exports['default'];