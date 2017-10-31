'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports['default'] = function (ComposedComponent) {
    return _a = function (_React$Component) {
        (0, _inherits3['default'])(_a, _React$Component);

        function _a() {
            (0, _classCallCheck3['default'])(this, _a);

            var _this = (0, _possibleConstructorReturn3['default'])(this, (_a.__proto__ || Object.getPrototypeOf(_a)).apply(this, arguments));

            _this.getValue = function () {
                var _this$props = _this.props,
                    children = _this$props.children,
                    selectedValue = _this$props.selectedValue;

                if (selectedValue && selectedValue.length) {
                    return selectedValue;
                } else {
                    if (!children) {
                        return [];
                    }
                    return _react2['default'].Children.map(children, function (c) {
                        var cc = _react2['default'].Children.toArray(c.children || c.props.children);
                        return cc && cc[0] && cc[0].props.value;
                    });
                }
            };
            _this.onChange = function (i, v, cb) {
                var value = _this.getValue().concat();
                value[i] = v;
                if (cb) {
                    cb(value, i);
                }
            };
            _this.onValueChange = function (i, v) {
                _this.onChange(i, v, _this.props.onValueChange);
            };
            _this.onScrollChange = function (i, v) {
                _this.onChange(i, v, _this.props.onScrollChange);
            };
            return _this;
        }

        (0, _createClass3['default'])(_a, [{
            key: 'render',
            value: function render() {
                return _react2['default'].createElement(ComposedComponent, (0, _extends3['default'])({}, this.props, { getValue: this.getValue, onValueChange: this.onValueChange, onScrollChange: this.props.onScrollChange && this.onScrollChange }));
            }
        }]);
        return _a;
    }(_react2['default'].Component), _a.defaultProps = {
        prefixCls: 'rmc-multi-picker',
        onValueChange: function onValueChange() {}
    }, _a;
    var _a;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

;
module.exports = exports['default'];