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

var BasicTextAreaItemExample = function (_React$Component) {
    (0, _inherits3['default'])(BasicTextAreaItemExample, _React$Component);

    function BasicTextAreaItemExample(props) {
        (0, _classCallCheck3['default'])(this, BasicTextAreaItemExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (BasicTextAreaItemExample.__proto__ || Object.getPrototypeOf(BasicTextAreaItemExample)).call(this, props));

        _this.onChange = function (val) {
            // console.log(val);
            _this.setState({ val: val });
        };
        _this.state = {
            val: '默认带value'
        };
        return _this;
    }

    (0, _createClass3['default'])(BasicTextAreaItemExample, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _reactNative.ScrollView,
                { style: { flex: 1 }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false },
                _react2['default'].createElement(
                    _antdMobile.List,
                    { renderHeader: function renderHeader() {
                            return '基本';
                        } },
                    _react2['default'].createElement(_antdMobile.TextareaItem, { rows: 4, placeholder: '\u56FA\u5B9A\u884C\u6570' }),
                    _react2['default'].createElement(_antdMobile.TextareaItem, { rows: 4, placeholder: '\u591A\u884C\u5E26\u8BA1\u6570', count: 100 }),
                    _react2['default'].createElement(_antdMobile.TextareaItem, { rows: 4, placeholder: '\u9AD8\u5EA6\u81EA\u9002\u5E94', autoHeight: true }),
                    _react2['default'].createElement(_antdMobile.TextareaItem, { value: this.state.val, onChange: this.onChange }),
                    _react2['default'].createElement(_antdMobile.TextareaItem, { value: '\u4E0D\u53EF\u7F16\u8F91 editable = {false}', editable: false }),
                    _react2['default'].createElement(_antdMobile.TextareaItem, { clear: false, placeholder: '\u4E0D\u663E\u793A\u6E05\u9664\u6309\u94AE' }),
                    _react2['default'].createElement(_antdMobile.TextareaItem, { error: true, defaultValue: '\u62A5\u9519\u6837\u5F0F error={true}', onErrorClick: function onErrorClick() {
                            return console.log('err');
                        } })
                )
            );
        }
    }]);
    return BasicTextAreaItemExample;
}(_react2['default'].Component); /* tslint:disable:no-console */


exports['default'] = BasicTextAreaItemExample;
module.exports = exports['default'];