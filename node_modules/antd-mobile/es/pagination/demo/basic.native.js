import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { WhiteSpace, Pagination, WingBlank } from 'antd-mobile';
var locale = {
    prevText: '上一步',
    nextText: '下一步'
};

var BasicPaginationExample = function (_React$Component) {
    _inherits(BasicPaginationExample, _React$Component);

    function BasicPaginationExample() {
        _classCallCheck(this, BasicPaginationExample);

        return _possibleConstructorReturn(this, (BasicPaginationExample.__proto__ || Object.getPrototypeOf(BasicPaginationExample)).apply(this, arguments));
    }

    _createClass(BasicPaginationExample, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                WingBlank,
                { size: 'lg' },
                React.createElement(WhiteSpace, { size: 'lg' }),
                React.createElement(Pagination, { total: 5, current: 1, locale: locale }),
                React.createElement(WhiteSpace, { size: 'lg' }),
                React.createElement(Pagination, { simple: true, total: 5, current: 1, locale: locale }),
                React.createElement(WhiteSpace, { size: 'lg' }),
                React.createElement(Pagination, { mode: 'number', total: 5, current: 3 }),
                React.createElement(WhiteSpace, { size: 'lg' }),
                React.createElement(Pagination, { mode: 'pointer', total: 5, current: 2 })
            );
        }
    }]);

    return BasicPaginationExample;
}(React.Component);

export default BasicPaginationExample;