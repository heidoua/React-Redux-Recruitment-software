import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { List, Switch } from 'antd-mobile';

var SwitchExample = function (_React$Component) {
    _inherits(SwitchExample, _React$Component);

    function SwitchExample(props) {
        _classCallCheck(this, SwitchExample);

        var _this = _possibleConstructorReturn(this, (SwitchExample.__proto__ || Object.getPrototypeOf(SwitchExample)).call(this, props));

        _this.onSwitchChange = function (value) {
            _this.setState({
                checked: value
            });
        };
        _this.state = {
            checked: false
        };
        return _this;
    }

    _createClass(SwitchExample, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                List,
                { style: { marginTop: 20 } },
                React.createElement(
                    List.Item,
                    { extra: React.createElement(Switch, { checked: true }) },
                    'On(controlled)'
                ),
                React.createElement(
                    List.Item,
                    { extra: React.createElement(Switch, null) },
                    'Off(controlled)'
                ),
                React.createElement(
                    List.Item,
                    { extra: React.createElement(Switch, { checked: this.state.checked, onChange: this.onSwitchChange }) },
                    'onChange event, switch status: ',
                    this.state.checked ? 'open' : 'close'
                ),
                React.createElement(
                    List.Item,
                    { extra: React.createElement(Switch, { disabled: true }) },
                    'disabled'
                ),
                React.createElement(
                    List.Item,
                    { extra: React.createElement(Switch, { color: 'red', checked: true }) },
                    'color'
                )
            );
        }
    }]);

    return SwitchExample;
}(React.Component);

export default SwitchExample;