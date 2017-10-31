import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles, { vars as variables } from './style/index.native';
import Modal from 'rmc-dialog/es/Modal';

var ActionSheetAndroid = function (_React$Component) {
    _inherits(ActionSheetAndroid, _React$Component);

    function ActionSheetAndroid(props) {
        _classCallCheck(this, ActionSheetAndroid);

        var _this = _possibleConstructorReturn(this, (ActionSheetAndroid.__proto__ || Object.getPrototypeOf(ActionSheetAndroid)).call(this, props));

        _this.state = {
            visible: _this.props.visible || false
        };
        return _this;
    }

    _createClass(ActionSheetAndroid, [{
        key: 'confirm',
        value: function confirm(index) {
            var callback = this.props.callback;

            if (callback) {
                callback(index);
            }
            this.setState({
                visible: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                config = _props.config,
                onAnimationEnd = _props.onAnimationEnd;
            var title = config.title,
                message = config.message,
                options = config.options,
                destructiveButtonIndex = config.destructiveButtonIndex,
                cancelButtonIndex = config.cancelButtonIndex;

            var titleMsg = !!title && React.createElement(
                View,
                { style: styles.title, key: '0' },
                React.createElement(
                    Text,
                    { style: styles.titleText },
                    title
                )
            );
            var content = options.map(function (item, index) {
                return React.createElement(
                    View,
                    { key: index, style: [cancelButtonIndex === index ? styles.cancelBtn : undefined] },
                    React.createElement(
                        TouchableHighlight,
                        { style: [styles.btn], underlayColor: variables.fill_tap, onPress: function onPress() {
                                return _this2.confirm(index);
                            } },
                        React.createElement(
                            Text,
                            { style: [destructiveButtonIndex === index ? styles.destructiveBtn : undefined] },
                            item
                        )
                    ),
                    cancelButtonIndex === index ? React.createElement(View, { style: styles.cancelBtnMask }) : null
                );
            });
            return React.createElement(
                View,
                { style: styles.container },
                React.createElement(
                    Modal,
                    { animationDuration: 200, animateAppear: true, visible: this.state.visible, onAnimationEnd: onAnimationEnd, style: styles.content, animationType: 'slide-up', maskClosable: true, onClose: function onClose() {
                            return _this2.confirm(cancelButtonIndex || -1);
                        } },
                    React.createElement(
                        View,
                        null,
                        titleMsg,
                        !!message && React.createElement(
                            View,
                            { style: styles.message, key: '1' },
                            React.createElement(
                                Text,
                                null,
                                message
                            )
                        ),
                        React.createElement(
                            View,
                            null,
                            content
                        )
                    )
                )
            );
        }
    }]);

    return ActionSheetAndroid;
}(React.Component);

export default ActionSheetAndroid;