'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SwitchExample = function (_React$Component) {
    (0, _inherits3['default'])(SwitchExample, _React$Component);

    function SwitchExample(props) {
        (0, _classCallCheck3['default'])(this, SwitchExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (SwitchExample.__proto__ || Object.getPrototypeOf(SwitchExample)).call(this, props));

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

    (0, _createClass3['default'])(SwitchExample, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _antdMobile.List,
                { style: { marginTop: 20 } },
                _react2['default'].createElement(
                    _antdMobile.List.Item,
                    { extra: _react2['default'].createElement(_antdMobile.Switch, { checked: true }) },
                    'On(controlled)'
                ),
                _react2['default'].createElement(
                    _antdMobile.List.Item,
                    { extra: _react2['default'].createElement(_antdMobile.Switch, null) },
                    'Off(controlled)'
                ),
                _react2['default'].createElement(
                    _antdMobile.List.Item,
                    { extra: _react2['default'].createElement(_antdMobile.Switch, { checked: this.state.checked, onChange: this.onSwitchChange }) },
                    'onChange event, switch status: ',
                    this.state.checked ? 'open' : 'close'
                ),
                _react2['default'].createElement(
                    _antdMobile.List.Item,
                    { extra: _react2['default'].createElement(_antdMobile.Switch, { disabled: true }) },
                    'disabled'
                ),
                _react2['default'].createElement(
                    _antdMobile.List.Item,
                    { extra: _react2['default'].createElement(_antdMobile.Switch, { color: 'red', checked: true }) },
                    'color'
                )
            );
        }
    }]);
    return SwitchExample;
}(_react2['default'].Component);

exports['default'] = SwitchExample;
module.exports = exports['default'];