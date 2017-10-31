import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _extends from 'babel-runtime/helpers/extends';
import React from 'react';
import { View, Text } from 'react-native';
import { WhiteSpace, WingBlank } from 'antd-mobile';
var PlaceHolder = function PlaceHolder(props) {
    return React.createElement(
        View,
        _extends({ style: { backgroundColor: '#fff', height: 30, alignItems: 'center', justifyContent: 'center' } }, props),
        React.createElement(
            Text,
            { style: { color: '#bbb' } },
            'Block'
        )
    );
};

var WingBlankExample = function (_React$Component) {
    _inherits(WingBlankExample, _React$Component);

    function WingBlankExample() {
        _classCallCheck(this, WingBlankExample);

        return _possibleConstructorReturn(this, (WingBlankExample.__proto__ || Object.getPrototypeOf(WingBlankExample)).apply(this, arguments));
    }

    _createClass(WingBlankExample, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                View,
                null,
                React.createElement(WhiteSpace, null),
                React.createElement(
                    WingBlank,
                    null,
                    React.createElement(PlaceHolder, null)
                ),
                React.createElement(WhiteSpace, { size: 'lg' }),
                React.createElement(
                    WingBlank,
                    { size: 'md' },
                    React.createElement(PlaceHolder, null)
                ),
                React.createElement(WhiteSpace, { size: 'lg' }),
                React.createElement(
                    WingBlank,
                    { size: 'sm' },
                    React.createElement(PlaceHolder, null)
                )
            );
        }
    }]);

    return WingBlankExample;
}(React.Component);

export default WingBlankExample;