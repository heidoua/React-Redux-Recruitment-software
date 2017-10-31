import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, Text, Image, ActivityIndicator, Animated, StyleSheet } from 'react-native';
import ToastContainerStyle from './style/index.native';
var ToastContainerStyles = StyleSheet.create(ToastContainerStyle);

var ToastContainer = function (_React$Component) {
    _inherits(ToastContainer, _React$Component);

    function ToastContainer(props) {
        _classCallCheck(this, ToastContainer);

        var _this = _possibleConstructorReturn(this, (ToastContainer.__proto__ || Object.getPrototypeOf(ToastContainer)).call(this, props));

        _this.state = {
            fadeAnim: new Animated.Value(0)
        };
        return _this;
    }

    _createClass(ToastContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _props = this.props,
                onClose = _props.onClose,
                onAnimationEnd = _props.onAnimationEnd;

            var duration = this.props.duration;
            var timing = Animated.timing;
            if (this.anim) {
                this.anim = null;
            }
            var animArr = [timing(this.state.fadeAnim, { toValue: 1, duration: 200 }), Animated.delay(duration * 1000)];
            if (duration > 0) {
                animArr.push(timing(this.state.fadeAnim, { toValue: 0, duration: 200 }));
            }
            this.anim = Animated.sequence(animArr);
            this.anim.start(function () {
                if (duration > 0) {
                    _this2.anim = null;
                    if (onClose) {
                        onClose();
                    }
                    if (onAnimationEnd) {
                        onAnimationEnd();
                    }
                }
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.anim) {
                this.anim.stop();
                this.anim = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                _props2$type = _props2.type,
                type = _props2$type === undefined ? '' : _props2$type,
                content = _props2.content,
                mask = _props2.mask;

            var styles = this.props.styles;
            var iconType = {
                success: require('./images/success.png'),
                fail: require('./images/fail.png'),
                offline: require('./images/offline.png')
            };
            var iconDom = null;
            if (type === 'loading') {
                iconDom = React.createElement(ActivityIndicator, { animating: true, style: [styles.centering], color: 'white', size: 'large' });
            } else if (type === 'info') {
                iconDom = null;
            } else {
                iconDom = React.createElement(Image, { source: iconType[type], style: styles.image });
            }
            return React.createElement(
                View,
                { style: [styles.container], pointerEvents: mask ? undefined : 'box-none' },
                React.createElement(
                    View,
                    { style: [styles.innerContainer] },
                    React.createElement(
                        Animated.View,
                        { style: { opacity: this.state.fadeAnim } },
                        React.createElement(
                            View,
                            { style: [styles.innerWrap, iconDom ? styles.iconToast : styles.textToast] },
                            iconDom,
                            React.createElement(
                                Text,
                                { style: styles.content },
                                content
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ToastContainer;
}(React.Component);

export default ToastContainer;

ToastContainer.defaultProps = {
    duration: 3,
    mask: true,
    onClose: function onClose() {},

    styles: ToastContainerStyles
};