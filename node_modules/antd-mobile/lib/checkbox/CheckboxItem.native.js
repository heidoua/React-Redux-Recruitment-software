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

var _reactNative = require('react-native');

var _Checkbox = require('./Checkbox.native');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _index = require('../list/index.native');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./style/index.native');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ListItem = _index2['default'].Item;
var refCheckbox = 'checkbox';
var CheckboxItemStyles = _reactNative.StyleSheet.create(_index4['default']);

var CheckboxItem = function (_React$Component) {
    (0, _inherits3['default'])(CheckboxItem, _React$Component);

    function CheckboxItem() {
        (0, _classCallCheck3['default'])(this, CheckboxItem);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (CheckboxItem.__proto__ || Object.getPrototypeOf(CheckboxItem)).apply(this, arguments));

        _this.handleClick = function () {
            var checkBox = _this.refs[refCheckbox];
            checkBox.handleClick();
            if (_this.props.onClick) {
                _this.props.onClick();
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(CheckboxItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                checkboxStyle = _props.checkboxStyle,
                defaultChecked = _props.defaultChecked,
                checked = _props.checked,
                disabled = _props.disabled,
                children = _props.children,
                extra = _props.extra,
                onChange = _props.onChange;

            var styles = this.props.styles;
            var thumbEl = _react2['default'].createElement(_Checkbox2['default'], { ref: refCheckbox, style: [styles.checkboxItemCheckbox, checkboxStyle], defaultChecked: defaultChecked, checked: checked, onChange: onChange, disabled: disabled });
            return _react2['default'].createElement(
                ListItem,
                { style: style, onClick: disabled ? undefined : this.handleClick, extra: extra, thumb: thumbEl },
                children
            );
        }
    }]);
    return CheckboxItem;
}(_react2['default'].Component);

exports['default'] = CheckboxItem;

CheckboxItem.defaultProps = {
    styles: CheckboxItemStyles
};
module.exports = exports['default'];