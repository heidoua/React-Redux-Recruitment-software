import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View } from 'react-native';
import { Pagination, LocaleProvider, List, DatePicker, WhiteSpace, Button, Picker, SearchBar } from 'antd-mobile';
import enUS from '../en_US';
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
    return React.createElement(
        View,
        null,
        React.createElement(Pagination, { total: 5, current: 1 }),
        React.createElement(WhiteSpace, null),
        React.createElement(
            List,
            { style: { backgroundColor: 'white' } },
            React.createElement(
                DatePicker,
                { mode: 'date', title: '\u9009\u62E9\u65E5\u671F', minDate: minDate, maxDate: maxDate },
                React.createElement(
                    List.Item,
                    { arrow: 'horizontal' },
                    '\u65E5\u671F'
                )
            ),
            React.createElement(
                Picker,
                { data: seasons, cascade: false },
                React.createElement(
                    List.Item,
                    { arrow: 'horizontal' },
                    'picker'
                )
            ),
            React.createElement(WhiteSpace, null),
            React.createElement(SearchBar, { placeholder: 'Search', showCancelButton: true })
        )
    );
};

var LocaleProviderExample = function (_React$Component) {
    _inherits(LocaleProviderExample, _React$Component);

    function LocaleProviderExample(props) {
        _classCallCheck(this, LocaleProviderExample);

        var _this = _possibleConstructorReturn(this, (LocaleProviderExample.__proto__ || Object.getPrototypeOf(LocaleProviderExample)).call(this, props));

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

    _createClass(LocaleProviderExample, [{
        key: 'render',
        value: function render() {
            var locale = this.state.isEnglish ? enUS : undefined;
            return React.createElement(
                View,
                { style: { marginTop: 30 } },
                React.createElement(
                    Button,
                    { type: 'primary', onClick: this.handleClick },
                    this.state.isEnglish ? 'change to chinese' : '切换到英文'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    LocaleProvider,
                    { locale: locale },
                    React.createElement(Page, null)
                )
            );
        }
    }]);

    return LocaleProviderExample;
}(React.Component);

export default LocaleProviderExample;