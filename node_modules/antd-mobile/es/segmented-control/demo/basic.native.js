import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:no-console */
import React from 'react';
import { View, Text } from 'react-native';
import { SegmentedControl, WhiteSpace } from 'antd-mobile';

var BasicTagExample = function (_React$Component) {
    _inherits(BasicTagExample, _React$Component);

    function BasicTagExample() {
        _classCallCheck(this, BasicTagExample);

        var _this = _possibleConstructorReturn(this, (BasicTagExample.__proto__ || Object.getPrototypeOf(BasicTagExample)).apply(this, arguments));

        _this.onChange = function (e) {
            console.log('selectedIndex:' + e.nativeEvent.selectedSegmentIndex);
        };
        _this.onValueChange = function (value) {
            console.log(value);
        };
        return _this;
    }

    _createClass(BasicTagExample, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                View,
                { style: { paddingTop: 60, paddingHorizontal: 20 } },
                React.createElement(
                    Text,
                    null,
                    'Disabled'
                ),
                React.createElement(SegmentedControl, { values: ['Segment1', 'Segment2'], disabled: true }),
                React.createElement(WhiteSpace, { size: 'lg' }),
                React.createElement(
                    Text,
                    null,
                    'TintColor and Style'
                ),
                React.createElement(SegmentedControl, { values: ['Segment1', 'Segment2', 'Segment3'], tintColor: '#ff0000', style: { height: 40, width: 280 } }),
                React.createElement(WhiteSpace, { size: 'lg' }),
                React.createElement(
                    Text,
                    null,
                    'SelectedIndex'
                ),
                React.createElement(SegmentedControl, { selectedIndex: 1, values: ['Segment1', 'Segment2', 'Segment3'] }),
                React.createElement(WhiteSpace, { size: 'lg' }),
                React.createElement(
                    Text,
                    null,
                    'onChange/onValueChange'
                ),
                React.createElement(SegmentedControl, { values: ['Segment1', 'Segment2', 'Segment3'], onChange: this.onChange, onValueChange: this.onValueChange })
            );
        }
    }]);

    return BasicTagExample;
}(React.Component);

export default BasicTagExample;