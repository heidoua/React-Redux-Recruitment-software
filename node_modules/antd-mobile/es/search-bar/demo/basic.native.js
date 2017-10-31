import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, Alert } from 'react-native';
import { SearchBar } from 'antd-mobile';

var SearchBarDemo = function (_React$Component) {
    _inherits(SearchBarDemo, _React$Component);

    function SearchBarDemo() {
        _classCallCheck(this, SearchBarDemo);

        var _this = _possibleConstructorReturn(this, (SearchBarDemo.__proto__ || Object.getPrototypeOf(SearchBarDemo)).apply(this, arguments));

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

    _createClass(SearchBarDemo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                View,
                { style: { marginTop: 30 } },
                React.createElement(SearchBar, { defaultValue: '\u521D\u59CB\u503C', placeholder: '\u641C\u7D22' }),
                React.createElement(SearchBar, { value: this.state.value, placeholder: '\u641C\u7D22', onSubmit: function onSubmit(value) {
                        return Alert.alert(value);
                    }, onCancel: this.clear, onChange: this.onChange, showCancelButton: true })
            );
        }
    }]);

    return SearchBarDemo;
}(React.Component);

export default SearchBarDemo;