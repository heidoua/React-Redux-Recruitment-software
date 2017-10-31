'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _MultiPickerMixin = require('./MultiPickerMixin');

var _MultiPickerMixin2 = _interopRequireDefault(_MultiPickerMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MultiPicker = function MultiPicker(props) {
    var children = props.children,
        style = props.style;

    var selectedValue = props.getValue();
    var colElements = _react2['default'].Children.map(children, function (col, i) {
        return _react2['default'].cloneElement(col, {
            selectedValue: selectedValue[i],
            onValueChange: function onValueChange() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return props.onValueChange.apply(props, [i].concat(args));
            }
        });
    });
    return _react2['default'].createElement(
        _reactNative.View,
        { style: style },
        colElements
    );
};
exports['default'] = (0, _MultiPickerMixin2['default'])(MultiPicker);
module.exports = exports['default'];