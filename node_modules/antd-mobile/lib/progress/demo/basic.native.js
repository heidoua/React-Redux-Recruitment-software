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

var BasicProgressExample = function (_React$Component) {
    (0, _inherits3['default'])(BasicProgressExample, _React$Component);

    function BasicProgressExample(props) {
        (0, _classCallCheck3['default'])(this, BasicProgressExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (BasicProgressExample.__proto__ || Object.getPrototypeOf(BasicProgressExample)).call(this, props));

        _this.onAdd = function () {
            var p = _this.state.percent + 10;
            if (_this.state.percent >= 100) {
                p = 0;
            }
            _this.setState({ percent: p });
        };
        _this.state = {
            percent: 40
        };
        return _this;
    }

    (0, _createClass3['default'])(BasicProgressExample, [{
        key: 'render',
        value: function render() {
            var style = {
                marginTop: 80,
                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
            };
            return _react2['default'].createElement(
                _reactNative.View,
                null,
                _react2['default'].createElement(_antdMobile.Progress, { percent: 90, position: 'fixed' }),
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: [style] },
                    _react2['default'].createElement(
                        _reactNative.View,
                        { style: { marginRight: 10, height: 4, flex: 1 } },
                        _react2['default'].createElement(_antdMobile.Progress, { percent: this.state.percent })
                    ),
                    _react2['default'].createElement(
                        _reactNative.Text,
                        null,
                        this.state.percent,
                        '%'
                    )
                ),
                _react2['default'].createElement(
                    _antdMobile.Button,
                    { style: { width: 50, marginLeft: 10 }, type: 'ghost', size: 'small', onClick: this.onAdd },
                    '(+-)10'
                ),
                _react2['default'].createElement(_antdMobile.WhiteSpace, null),
                _react2['default'].createElement(_antdMobile.Progress, { percent: 5 })
            );
        }
    }]);
    return BasicProgressExample;
}(_react2['default'].Component);

exports['default'] = BasicProgressExample;
module.exports = exports['default'];