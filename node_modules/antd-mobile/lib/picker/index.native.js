'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactNative = require('react-native');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AbstractPicker2 = require('./AbstractPicker');

var _AbstractPicker3 = _interopRequireDefault(_AbstractPicker2);

var _index = require('./style/index.native');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var pickerStyles = _reactNative.StyleSheet.create(_index2['default']);

var Picker = function (_AbstractPicker) {
    (0, _inherits3['default'])(Picker, _AbstractPicker);

    function Picker() {
        (0, _classCallCheck3['default'])(this, Picker);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));

        _this.popupProps = {};
        return _this;
    }

    return Picker;
}(_AbstractPicker3['default']);

exports['default'] = Picker;

Picker.defaultProps = (0, _extends3['default'])({}, (0, _AbstractPicker2.getDefaultProps)(), { styles: pickerStyles });
Picker.contextTypes = {
    antLocale: _propTypes2['default'].object
};
module.exports = exports['default'];