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

var _antdMobile = require('antd-mobile');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
    (0, _inherits3['default'])(PickerViewExample, _React$Component);

    function PickerViewExample() {
        (0, _classCallCheck3['default'])(this, PickerViewExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (PickerViewExample.__proto__ || Object.getPrototypeOf(PickerViewExample)).apply(this, arguments));

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

    (0, _createClass3['default'])(PickerViewExample, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(_antdMobile.PickerView, { onChange: this.onChange, value: this.state.value, data: seasons, cascade: false });
        }
    }]);
    return PickerViewExample;
}(_react2['default'].Component);

exports['default'] = PickerViewExample;
module.exports = exports['default'];