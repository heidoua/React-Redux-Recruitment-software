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

var ResultExample = function (_React$Component) {
    (0, _inherits3['default'])(ResultExample, _React$Component);

    function ResultExample() {
        (0, _classCallCheck3['default'])(this, ResultExample);
        return (0, _possibleConstructorReturn3['default'])(this, (ResultExample.__proto__ || Object.getPrototypeOf(ResultExample)).apply(this, arguments));
    }

    (0, _createClass3['default'])(ResultExample, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _reactNative.ScrollView,
                { style: { backgroundColor: '#F5F5F9', flex: 1 } },
                _react2['default'].createElement(
                    _reactNative.Text,
                    { style: { margin: 10, color: '#999' } },
                    'URI \u56FE\u7247'
                ),
                _react2['default'].createElement(_antdMobile.Result, { imgUrl: { uri: 'https://zos.alipayobjects.com/rmsportal/GcBguhrOdlYvGfnsXgrE.png' }, title: '\u9A8C\u8BC1\u6210\u529F', message: '\u6240\u63D0\u4EA4\u5185\u5BB9\u5DF2\u6210\u529F\u5B8C\u6210\u9A8C\u8BC1' }),
                _react2['default'].createElement(
                    _reactNative.Text,
                    { style: { margin: 10, color: '#999' } },
                    'Image source'
                ),
                _react2['default'].createElement(_antdMobile.Result, { imgUrl: require('./alipay.png'), title: '\u9A8C\u8BC1\u6210\u529F', message: '\u6240\u63D0\u4EA4\u5185\u5BB9\u5DF2\u6210\u529F\u5B8C\u6210\u9A8C\u8BC1' }),
                _react2['default'].createElement(
                    _reactNative.Text,
                    { style: { margin: 10, color: '#999' } },
                    'Image element'
                ),
                _react2['default'].createElement(_antdMobile.Result, { img: _react2['default'].createElement(_reactNative.Image, { source: require('./alipay.png'), style: { width: 60, height: 60 } }), title: '\u9A8C\u8BC1\u6210\u529F', message: _react2['default'].createElement(
                        _reactNative.Text,
                        null,
                        '\u6240\u63D0\u4EA4\u5185\u5BB9\u5DF2\u6210\u529F\u5B8C\u6210\u9A8C\u8BC1'
                    ) }),
                _react2['default'].createElement(
                    _reactNative.Text,
                    { style: { margin: 10, color: '#999' } },
                    '\u542B button \u64CD\u4F5C'
                ),
                _react2['default'].createElement(_antdMobile.Result, { img: _react2['default'].createElement(_reactNative.Image, { source: require('./alipay.png'), style: { width: 60, height: 60 } }), title: '\u9A8C\u8BC1\u6210\u529F', message: '\u6240\u63D0\u4EA4\u5185\u5BB9\u5DF2\u6210\u529F\u5B8C\u6210\u9A8C\u8BC1', buttonText: '\u5B8C\u6210', buttonType: 'primary', buttonClick: function buttonClick(e) {
                        return alert(e.toString());
                    } })
            );
        }
    }]);
    return ResultExample;
}(_react2['default'].Component);

exports['default'] = ResultExample;
module.exports = exports['default'];