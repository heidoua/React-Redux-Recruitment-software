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

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var locale = {
    prevText: '上一步',
    nextText: '下一步'
};

var BasicPaginationExample = function (_React$Component) {
    (0, _inherits3['default'])(BasicPaginationExample, _React$Component);

    function BasicPaginationExample() {
        (0, _classCallCheck3['default'])(this, BasicPaginationExample);
        return (0, _possibleConstructorReturn3['default'])(this, (BasicPaginationExample.__proto__ || Object.getPrototypeOf(BasicPaginationExample)).apply(this, arguments));
    }

    (0, _createClass3['default'])(BasicPaginationExample, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _antdMobile.WingBlank,
                { size: 'lg' },
                _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
                _react2['default'].createElement(_antdMobile.Pagination, { total: 5, current: 1, locale: locale }),
                _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
                _react2['default'].createElement(_antdMobile.Pagination, { simple: true, total: 5, current: 1, locale: locale }),
                _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
                _react2['default'].createElement(_antdMobile.Pagination, { mode: 'number', total: 5, current: 3 }),
                _react2['default'].createElement(_antdMobile.WhiteSpace, { size: 'lg' }),
                _react2['default'].createElement(_antdMobile.Pagination, { mode: 'pointer', total: 5, current: 2 })
            );
        }
    }]);
    return BasicPaginationExample;
}(_react2['default'].Component);

exports['default'] = BasicPaginationExample;
module.exports = exports['default'];