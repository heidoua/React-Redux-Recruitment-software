import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Text, ScrollView } from 'react-native';
import Modal from './Modal';

var AlertContainer = function (_React$Component) {
    _inherits(AlertContainer, _React$Component);

    function AlertContainer(props) {
        _classCallCheck(this, AlertContainer);

        var _this = _possibleConstructorReturn(this, (AlertContainer.__proto__ || Object.getPrototypeOf(AlertContainer)).call(this, props));

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

    _createClass(AlertContainer, [{
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
            return React.createElement(
                Modal,
                { transparent: true, title: title, visible: this.state.visible, footer: footer, onAnimationEnd: onAnimationEnd },
                React.createElement(
                    ScrollView,
                    null,
                    React.createElement(
                        Text,
                        null,
                        content
                    )
                )
            );
        }
    }]);

    return AlertContainer;
}(React.Component);

export default AlertContainer;