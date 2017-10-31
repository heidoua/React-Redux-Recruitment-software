import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import indicatorStyle from './style/index.native';
var indicatorStyles = StyleSheet.create(indicatorStyle);

var RNActivityIndicator = function (_React$Component) {
    _inherits(RNActivityIndicator, _React$Component);

    function RNActivityIndicator() {
        _classCallCheck(this, RNActivityIndicator);

        return _possibleConstructorReturn(this, (RNActivityIndicator.__proto__ || Object.getPrototypeOf(RNActivityIndicator)).apply(this, arguments));
    }

    _createClass(RNActivityIndicator, [{
        key: '_renderToast',
        value: function _renderToast() {
            var styles = this.props.styles;
            return React.createElement(
                View,
                { style: [styles.container] },
                React.createElement(
                    View,
                    { style: [styles.innerContainer, { height: 89 }] },
                    React.createElement(
                        View,
                        { style: [styles.wrapper] },
                        React.createElement(ActivityIndicator, { color: 'white', size: 'large' }),
                        this.props.text && React.createElement(
                            Text,
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

            return React.createElement(
                View,
                { style: spinner },
                React.createElement(ActivityIndicator, { color: color, size: size }),
                text && React.createElement(
                    Text,
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
}(React.Component);

export default RNActivityIndicator;

RNActivityIndicator.defaultProps = {
    animating: true,
    color: 'gray',
    size: 'small',
    toast: false,
    styles: indicatorStyles
};