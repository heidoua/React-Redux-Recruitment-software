import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ResultStyle from './style/index.native';
import Button from '../button/index.native';
var ResultStyles = StyleSheet.create(ResultStyle);

var Result = function (_React$Component) {
    _inherits(Result, _React$Component);

    function Result() {
        _classCallCheck(this, Result);

        return _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).apply(this, arguments));
    }

    _createClass(Result, [{
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
                imgContent = React.createElement(
                    View,
                    { style: styles.imgWrap },
                    img
                );
            } else if (imgUrl) {
                imgContent = React.createElement(
                    View,
                    { style: styles.imgWrap },
                    React.createElement(Image, { source: imgUrl, style: styles.img })
                );
            }
            return React.createElement(
                View,
                { style: [styles.result, style] },
                imgContent,
                title ? React.createElement(
                    View,
                    { style: styles.title },
                    typeof title === 'string' ? React.createElement(
                        Text,
                        { style: styles.titleText },
                        title
                    ) : title
                ) : null,
                message ? React.createElement(
                    View,
                    { style: styles.message },
                    typeof message === 'string' ? React.createElement(
                        Text,
                        { style: styles.messageText },
                        message
                    ) : message
                ) : null,
                buttonText ? React.createElement(
                    View,
                    { style: styles.buttonWrap },
                    React.createElement(
                        Button,
                        { style: styles.button, type: buttonType, onClick: onButtonClick },
                        buttonText
                    )
                ) : null
            );
        }
    }]);

    return Result;
}(React.Component);

export default Result;

Result.defaultProps = {
    styles: ResultStyles,
    buttonType: '',
    buttonClick: function buttonClick() {}
};