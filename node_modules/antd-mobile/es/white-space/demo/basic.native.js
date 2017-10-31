import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _extends from 'babel-runtime/helpers/extends';
import { WhiteSpace } from 'antd-mobile';
import React from 'react';
import { View, Text } from 'react-native';
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

var WhiteSpaceExample = function (_React$Component) {
    _inherits(WhiteSpaceExample, _React$Component);

    function WhiteSpaceExample() {
        _classCallCheck(this, WhiteSpaceExample);

        return _possibleConstructorReturn(this, (WhiteSpaceExample.__proto__ || Object.getPrototypeOf(WhiteSpaceExample)).apply(this, arguments));
    }

    _createClass(WhiteSpaceExample, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                View,
                null,
                React.createElement(WhiteSpace, { size: 'xs' }),
                React.createElement(PlaceHolder, null),
                React.createElement(WhiteSpace, { size: 'sm' }),
                React.createElement(PlaceHolder, null),
                React.createElement(WhiteSpace, null),
                React.createElement(PlaceHolder, null),
                React.createElement(WhiteSpace, { size: 'lg' }),
                React.createElement(PlaceHolder, null),
                React.createElement(WhiteSpace, { size: 'xl' }),
                React.createElement(PlaceHolder, null)
            );
        }
    }]);

    return WhiteSpaceExample;
}(React.Component);

export default WhiteSpaceExample;