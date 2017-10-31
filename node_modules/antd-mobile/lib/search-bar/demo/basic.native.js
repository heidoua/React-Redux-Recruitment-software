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

var SearchBarDemo = function (_React$Component) {
    (0, _inherits3['default'])(SearchBarDemo, _React$Component);

    function SearchBarDemo() {
        (0, _classCallCheck3['default'])(this, SearchBarDemo);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (SearchBarDemo.__proto__ || Object.getPrototypeOf(SearchBarDemo)).apply(this, arguments));

        _this.state = {
            value: '美食'
        };
        _this.onChange = function (value) {
            _this.setState({ value: value });
        };
        _this.clear = function () {
            _this.setState({ value: '' });
        };
        return _this;
    }

    (0, _createClass3['default'])(SearchBarDemo, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _reactNative.View,
                { style: { marginTop: 30 } },
                _react2['default'].createElement(_antdMobile.SearchBar, { defaultValue: '\u521D\u59CB\u503C', placeholder: '\u641C\u7D22' }),
                _react2['default'].createElement(_antdMobile.SearchBar, { value: this.state.value, placeholder: '\u641C\u7D22', onSubmit: function onSubmit(value) {
                        return _reactNative.Alert.alert(value);
                    }, onCancel: this.clear, onChange: this.onChange, showCancelButton: true })
            );
        }
    }]);
    return SearchBarDemo;
}(_react2['default'].Component);

exports['default'] = SearchBarDemo;
module.exports = exports['default'];