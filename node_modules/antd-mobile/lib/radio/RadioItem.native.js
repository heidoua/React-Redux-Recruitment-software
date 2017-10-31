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

var _Radio = require('./Radio.native');

var _Radio2 = _interopRequireDefault(_Radio);

var _index = require('../list/index.native');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./style/index.native');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ListItem = _index2['default'].Item;
var refRadio = 'radio';
var RadioItemStyles = _reactNative.StyleSheet.create(_index4['default']);

var RadioItem = function (_React$Component) {
    (0, _inherits3['default'])(RadioItem, _React$Component);

    function RadioItem() {
        (0, _classCallCheck3['default'])(this, RadioItem);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (RadioItem.__proto__ || Object.getPrototypeOf(RadioItem)).apply(this, arguments));

        _this.handleClick = function () {
            var radio = _this.refs[refRadio];
            radio.handleClick();
        };
        return _this;
    }

    (0, _createClass3['default'])(RadioItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                radioStyle = _props.radioStyle,
                defaultChecked = _props.defaultChecked,
                checked = _props.checked,
                disabled = _props.disabled,
                children = _props.children,
                onChange = _props.onChange;

            var styles = this.props.styles;
            var contentDom = null;
            if (children && _react2['default'].isValidElement(children)) {
                contentDom = _react2['default'].createElement(
                    _reactNative.View,
                    { style: { flex: 1 } },
                    children
                );
            } else {
                var contentStyle = [styles.radioItemContent, disabled ? styles.radioItemContentDisable : {}];
                contentDom = _react2['default'].createElement(
                    _reactNative.Text,
                    { style: contentStyle, numberOfLines: 1 },
                    this.props.children
                );
            }
            var radioEl = _react2['default'].createElement(_Radio2['default'], { ref: refRadio, style: radioStyle, defaultChecked: defaultChecked, checked: checked, onChange: onChange, disabled: disabled });
            return _react2['default'].createElement(
                ListItem,
                { style: style, onClick: disabled ? undefined : this.handleClick, extra: radioEl },
                contentDom
            );
        }
    }]);
    return RadioItem;
}(_react2['default'].Component);

exports['default'] = RadioItem;

RadioItem.defaultProps = {
    styles: RadioItemStyles
};
module.exports = exports['default'];