import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import NativePicker from './NativePicker';
var Item = NativePicker.Item;

var Picker = function (_React$Component) {
    _inherits(Picker, _React$Component);

    function Picker() {
        _classCallCheck(this, Picker);

        return _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));
    }

    _createClass(Picker, [{
        key: 'getValue',
        value: function getValue() {
            if ('selectedValue' in this.props) {
                return this.props.selectedValue;
            }
            var children = React.Children.toArray(this.props.children);
            return children && children[0] && children[0].props.value;
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return this.props.selectedValue !== nextProps.selectedValue || this.props.children !== nextProps.children;
        }
    }, {
        key: 'render',
        value: function render() {
            var children = React.Children.map(this.props.children, function (c) {
                return React.createElement(Item, { label: c.props.children + '', value: c.props.value + '', key: c.key });
            });
            return React.createElement(
                NativePicker,
                this.props,
                children
            );
        }
    }], [{
        key: 'Item',
        value: function Item() {}
    }]);

    return Picker;
}(React.Component);

Picker.defaultProps = {
    children: []
};
export default Picker;