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

var ToastContainerStyles = _reactNative.StyleSheet.create(_index2['default']);

var ToastContainer = function (_React$Component) {
    (0, _inherits3['default'])(ToastContainer, _React$Component);

    function ToastContainer(props) {
        (0, _classCallCheck3['default'])(this, ToastContainer);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (ToastContainer.__proto__ || Object.getPrototypeOf(ToastContainer)).call(this, props));

        _this.state = {
            fadeAnim: new _reactNative.Animated.Value(0)
        };
        return _this;
    }

    (0, _createClass3['default'])(ToastContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _props = this.props,
                onClose = _props.onClose,
                onAnimationEnd = _props.onAnimationEnd;

            var duration = this.props.duration;
            var timing = _reactNative.Animated.timing;
            if (this.anim) {
                this.anim = null;
            }
            var animArr = [timing(this.state.fadeAnim, { toValue: 1, duration: 200 }), _reactNative.Animated.delay(duration * 1000)];
            if (duration > 0) {
                animArr.push(timing(this.state.fadeAnim, { toValue: 0, duration: 200 }));
            }
            this.anim = _reactNative.Animated.sequence(animArr);
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
                iconDom = _react2['default'].createElement(_reactNative.ActivityIndicator, { animating: true, style: [styles.centering], color: 'white', size: 'large' });
            } else if (type === 'info') {
                iconDom = null;
            } else {
                iconDom = _react2['default'].createElement(_reactNative.Image, { source: iconType[type], style: styles.image });
            }
            return _react2['default'].createElement(
                _reactNative.View,
                { style: [styles.container], pointerEvents: mask ? undefined : 'box-none' },
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: [styles.innerContainer] },
                    _react2['default'].createElement(
                        _reactNative.Animated.View,
                        { style: { opacity: this.state.fadeAnim } },
                        _react2['default'].createElement(
                            _reactNative.View,
                            { style: [styles.innerWrap, iconDom ? styles.iconToast : styles.textToast] },
                            iconDom,
                            _react2['default'].createElement(
                                _reactNative.Text,
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
}(_react2['default'].Component);

exports['default'] = ToastContainer;

ToastContainer.defaultProps = {
    duration: 3,
    mask: true,
    onClose: function onClose() {},

    styles: ToastContainerStyles
};
module.exports = exports['default'];