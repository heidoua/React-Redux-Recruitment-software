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

var _index = require('./style/index.native');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var indicatorStyles = _reactNative.StyleSheet.create(_index2['default']);

var RNActivityIndicator = function (_React$Component) {
    (0, _inherits3['default'])(RNActivityIndicator, _React$Component);

    function RNActivityIndicator() {
        (0, _classCallCheck3['default'])(this, RNActivityIndicator);
        return (0, _possibleConstructorReturn3['default'])(this, (RNActivityIndicator.__proto__ || Object.getPrototypeOf(RNActivityIndicator)).apply(this, arguments));
    }

    (0, _createClass3['default'])(RNActivityIndicator, [{
        key: '_renderToast',
        value: function _renderToast() {
            var styles = this.props.styles;
            return _react2['default'].createElement(
                _reactNative.View,
                { style: [styles.container] },
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: [styles.innerContainer, { height: 89 }] },
                    _react2['default'].createElement(
                        _reactNative.View,
                        { style: [styles.wrapper] },
                        _react2['default'].createElement(_reactNative.ActivityIndicator, { color: 'white', size: 'large' }),
                        this.props.text && _react2['default'].createElement(
                            _reactNative.Text,
                            { style: [styles.toast] },
                            this.props.text
                        )
                    )
                )
            );
        }
    }, {
        key: '_renderSpinner',
        value: function _renderSpinner() {
            var _props = this.props,
                styles = _props.styles,
                color = _props.color,
                size = _props.size,
                text = _props.text;
            var spinner = styles.spinner,
                tip = styles.tip;

            return _react2['default'].createElement(
                _reactNative.View,
                { style: spinner },
                _react2['default'].createElement(_reactNative.ActivityIndicator, { color: color, size: size }),
                text && _react2['default'].createElement(
                    _reactNative.Text,
                    { style: [tip] },
                    text
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.animating) {
                return this.props.toast ? this._renderToast() : this._renderSpinner();
            }
            return null;
        }
    }]);
    return RNActivityIndicator;
}(_react2['default'].Component);

exports['default'] = RNActivityIndicator;

RNActivityIndicator.defaultProps = {
    animating: true,
    color: 'gray',
    size: 'small',
    toast: false,
    styles: indicatorStyles
};
module.exports = exports['default'];