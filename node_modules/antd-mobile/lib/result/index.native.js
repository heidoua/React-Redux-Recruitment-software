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

var _index3 = require('../button/index.native');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* tslint:disable:jsx-no-multiline-js */
var ResultStyles = _reactNative.StyleSheet.create(_index2['default']);

var Result = function (_React$Component) {
    (0, _inherits3['default'])(Result, _React$Component);

    function Result() {
        (0, _classCallCheck3['default'])(this, Result);
        return (0, _possibleConstructorReturn3['default'])(this, (Result.__proto__ || Object.getPrototypeOf(Result)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Result, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                img = _props.img,
                imgUrl = _props.imgUrl,
                title = _props.title,
                message = _props.message,
                buttonText = _props.buttonText,
                onButtonClick = _props.onButtonClick,
                buttonType = _props.buttonType;

            var styles = this.props.styles;
            var imgContent = null;
            if (img) {
                imgContent = _react2['default'].createElement(
                    _reactNative.View,
                    { style: styles.imgWrap },
                    img
                );
            } else if (imgUrl) {
                imgContent = _react2['default'].createElement(
                    _reactNative.View,
                    { style: styles.imgWrap },
                    _react2['default'].createElement(_reactNative.Image, { source: imgUrl, style: styles.img })
                );
            }
            return _react2['default'].createElement(
                _reactNative.View,
                { style: [styles.result, style] },
                imgContent,
                title ? _react2['default'].createElement(
                    _reactNative.View,
                    { style: styles.title },
                    typeof title === 'string' ? _react2['default'].createElement(
                        _reactNative.Text,
                        { style: styles.titleText },
                        title
                    ) : title
                ) : null,
                message ? _react2['default'].createElement(
                    _reactNative.View,
                    { style: styles.message },
                    typeof message === 'string' ? _react2['default'].createElement(
                        _reactNative.Text,
                        { style: styles.messageText },
                        message
                    ) : message
                ) : null,
                buttonText ? _react2['default'].createElement(
                    _reactNative.View,
                    { style: styles.buttonWrap },
                    _react2['default'].createElement(
                        _index4['default'],
                        { style: styles.button, type: buttonType, onClick: onButtonClick },
                        buttonText
                    )
                ) : null
            );
        }
    }]);
    return Result;
}(_react2['default'].Component);

exports['default'] = Result;

Result.defaultProps = {
    styles: ResultStyles,
    buttonType: '',
    buttonClick: function buttonClick() {}
};
module.exports = exports['default'];