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

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var RadioItem = _antdMobile.Radio.RadioItem; /* tslint:disable:jsx-no-multiline-js */

var BasicRadioExample = function (_React$Component) {
    (0, _inherits3['default'])(BasicRadioExample, _React$Component);

    function BasicRadioExample() {
        (0, _classCallCheck3['default'])(this, BasicRadioExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (BasicRadioExample.__proto__ || Object.getPrototypeOf(BasicRadioExample)).apply(this, arguments));

        _this.state = {
            part1Value: 1,
            part2Value: 1
        };
        return _this;
    }

    (0, _createClass3['default'])(BasicRadioExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2['default'].createElement(
                _reactNative.View,
                null,
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: { padding: 10 } },
                    _react2['default'].createElement(
                        _antdMobile.Radio,
                        { checked: this.state.part1Value === 1, onChange: function onChange(event) {
                                if (event.target.checked) {
                                    _this2.setState({ part1Value: 1 });
                                }
                            }, style: { borderWidth: 1, borderColor: '#999', margin: 10 } },
                        'Support'
                    ),
                    _react2['default'].createElement(_antdMobile.WhiteSpace, null),
                    _react2['default'].createElement(_antdMobile.Radio, { checked: this.state.part1Value === 2, onChange: function onChange(event) {
                            if (event.target.checked) {
                                _this2.setState({ part1Value: 2 });
                            }
                        }, style: { borderWidth: 1, borderColor: '#999', margin: 10 } }),
                    _react2['default'].createElement(_antdMobile.WhiteSpace, null)
                ),
                _react2['default'].createElement(
                    _antdMobile.List,
                    { style: { marginTop: 12 } },
                    _react2['default'].createElement(
                        _reactNative.Text,
                        { style: { marginTop: 12 } },
                        'Form radio, radio in general list.'
                    ),
                    _react2['default'].createElement(
                        RadioItem,
                        { checked: this.state.part2Value === 1, onChange: function onChange(event) {
                                if (event.target.checked) {
                                    _this2.setState({ part2Value: 1 });
                                }
                            } },
                        'Use Ant Desgin Component'
                    ),
                    _react2['default'].createElement(
                        RadioItem,
                        { checked: this.state.part2Value === 2, onChange: function onChange(event) {
                                if (event.target.checked) {
                                    _this2.setState({ part2Value: 2 });
                                }
                            } },
                        'Use Ant Desgin Component'
                    ),
                    _react2['default'].createElement(
                        RadioItem,
                        { disabled: true },
                        'Set disabled'
                    ),
                    _react2['default'].createElement(
                        RadioItem,
                        { disabled: true, checked: true },
                        'Set disabled'
                    )
                )
            );
        }
    }]);
    return BasicRadioExample;
}(_react2['default'].Component);

exports['default'] = BasicRadioExample;
module.exports = exports['default'];