import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:no-console */
import React from 'react';
import { View } from 'react-native';
import { Tag, WhiteSpace } from 'antd-mobile';
function onChange(selected) {
    console.log('tag selected: ' + selected);
}

var BasicTagExample = function (_React$Component) {
    _inherits(BasicTagExample, _React$Component);

    function BasicTagExample() {
        _classCallCheck(this, BasicTagExample);

        return _possibleConstructorReturn(this, (BasicTagExample.__proto__ || Object.getPrototypeOf(BasicTagExample)).apply(this, arguments));
    }

    _createClass(BasicTagExample, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                View,
                { style: { padding: 10 } },
                React.createElement(
                    Tag,
                    null,
                    'Basic'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Tag,
                    { selected: true },
                    'Selected'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Tag,
                    { disabled: true },
                    'Disabled'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Tag,
                    { onChange: onChange },
                    'Callback'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Tag,
                    { closable: true, onClose: function onClose() {
                            console.log('onClose');
                        }, afterClose: function afterClose() {
                            console.log('afterClose');
                        } },
                    'Closable'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Tag,
                    { small: true },
                    'Small and Readonly'
                )
            );
        }
    }]);

    return BasicTagExample;
}(React.Component);

export default BasicTagExample;