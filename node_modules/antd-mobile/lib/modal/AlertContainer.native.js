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

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var AlertContainer = function (_React$Component) {
    (0, _inherits3['default'])(AlertContainer, _React$Component);

    function AlertContainer(props) {
        (0, _classCallCheck3['default'])(this, AlertContainer);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (AlertContainer.__proto__ || Object.getPrototypeOf(AlertContainer)).call(this, props));

        _this.onClose = function () {
            _this.setState({
                visible: false
            });
        };
        _this.state = {
            visible: true
        };
        return _this;
    }

    (0, _createClass3['default'])(AlertContainer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                title = _props.title,
                actions = _props.actions,
                content = _props.content,
                onAnimationEnd = _props.onAnimationEnd;

            var footer = actions.map(function (button) {
                var orginPress = button.onPress || function () {};
                button.onPress = function () {
                    var res = orginPress();
                    if (res && res.then) {
                        res.then(function () {
                            _this2.onClose();
                        });
                    } else {
                        _this2.onClose();
                    }
                };
                return button;
            });
            return _react2['default'].createElement(
                _Modal2['default'],
                { transparent: true, title: title, visible: this.state.visible, footer: footer, onAnimationEnd: onAnimationEnd },
                _react2['default'].createElement(
                    _reactNative.ScrollView,
                    null,
                    _react2['default'].createElement(
                        _reactNative.Text,
                        null,
                        content
                    )
                )
            );
        }
    }]);
    return AlertContainer;
}(_react2['default'].Component);

exports['default'] = AlertContainer;
module.exports = exports['default'];