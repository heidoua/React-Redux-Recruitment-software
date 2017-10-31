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

var _en_US = require('../en_US');

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var maxDate = new Date(2018, 11, 3, 22, 0);
var minDate = new Date(2015, 7, 6, 8, 30);
var seasons = [[{
    label: '2013',
    value: '2013'
}, {
    label: '2014',
    value: '2014'
}], [{
    label: '春',
    value: '春'
}, {
    label: '夏',
    value: '夏'
}]];
var Page = function Page() {
    return _react2['default'].createElement(
        _reactNative.View,
        null,
        _react2['default'].createElement(_antdMobile.Pagination, { total: 5, current: 1 }),
        _react2['default'].createElement(_antdMobile.WhiteSpace, null),
        _react2['default'].createElement(
            _antdMobile.List,
            { style: { backgroundColor: 'white' } },
            _react2['default'].createElement(
                _antdMobile.DatePicker,
                { mode: 'date', title: '\u9009\u62E9\u65E5\u671F', minDate: minDate, maxDate: maxDate },
                _react2['default'].createElement(
                    _antdMobile.List.Item,
                    { arrow: 'horizontal' },
                    '\u65E5\u671F'
                )
            ),
            _react2['default'].createElement(
                _antdMobile.Picker,
                { data: seasons, cascade: false },
                _react2['default'].createElement(
                    _antdMobile.List.Item,
                    { arrow: 'horizontal' },
                    'picker'
                )
            ),
            _react2['default'].createElement(_antdMobile.WhiteSpace, null),
            _react2['default'].createElement(_antdMobile.SearchBar, { placeholder: 'Search', showCancelButton: true })
        )
    );
};

var LocaleProviderExample = function (_React$Component) {
    (0, _inherits3['default'])(LocaleProviderExample, _React$Component);

    function LocaleProviderExample(props) {
        (0, _classCallCheck3['default'])(this, LocaleProviderExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (LocaleProviderExample.__proto__ || Object.getPrototypeOf(LocaleProviderExample)).call(this, props));

        _this.handleClick = function () {
            _this.setState({
                isEnglish: !_this.state.isEnglish
            });
        };
        _this.state = {
            isEnglish: true
        };
        return _this;
    }

    (0, _createClass3['default'])(LocaleProviderExample, [{
        key: 'render',
        value: function render() {
            var locale = this.state.isEnglish ? _en_US2['default'] : undefined;
            return _react2['default'].createElement(
                _reactNative.View,
                { style: { marginTop: 30 } },
                _react2['default'].createElement(
                    _antdMobile.Button,
                    { type: 'primary', onClick: this.handleClick },
                    this.state.isEnglish ? 'change to chinese' : '切换到英文'
                ),
                _react2['default'].createElement(_antdMobile.WhiteSpace, null),
                _react2['default'].createElement(
                    _antdMobile.LocaleProvider,
                    { locale: locale },
                    _react2['default'].createElement(Page, null)
                )
            );
        }
    }]);
    return LocaleProviderExample;
}(_react2['default'].Component);

exports['default'] = LocaleProviderExample;
module.exports = exports['default'];