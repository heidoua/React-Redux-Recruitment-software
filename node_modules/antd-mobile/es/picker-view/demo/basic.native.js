import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import { PickerView } from 'antd-mobile';
import React from 'react';
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

var PickerViewExample = function (_React$Component) {
    _inherits(PickerViewExample, _React$Component);

    function PickerViewExample() {
        _classCallCheck(this, PickerViewExample);

        var _this = _possibleConstructorReturn(this, (PickerViewExample.__proto__ || Object.getPrototypeOf(PickerViewExample)).apply(this, arguments));

        _this.state = {
            value: null
        };
        _this.onChange = function (value) {
            _this.setState({
                value: value
            });
        };
        return _this;
    }

    _createClass(PickerViewExample, [{
        key: 'render',
        value: function render() {
            return React.createElement(PickerView, { onChange: this.onChange, value: this.state.value, data: seasons, cascade: false });
        }
    }]);

    return PickerViewExample;
}(React.Component);

export default PickerViewExample;