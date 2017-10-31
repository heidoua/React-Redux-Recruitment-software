import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Text, View, Animated, Easing } from 'react-native';

var Marquee = function (_React$PureComponent) {
    _inherits(Marquee, _React$PureComponent);

    function Marquee(props) {
        _classCallCheck(this, Marquee);

        var _this = _possibleConstructorReturn(this, (Marquee.__proto__ || Object.getPrototypeOf(Marquee)).call(this, props));

        _this.twidth = 0;
        _this.width = 0;
        _this.onLayout = function (e) {
            if (_this.twidth) {
                return;
            }
            _this.twidth = e.nativeEvent.layout.width;
            // onLayout may be earlier than onLayoutContainer on android, can not be sure width < twidth at that time.
            _this.tryStart();
        };
        _this.onLayoutContainer = function (e) {
            if (!_this.width) {
                _this.width = e.nativeEvent.layout.width;
                _this.setState({
                    left: new Animated.Value(0)
                }, function () {
                    _this.tryStart();
                });
            }
        };
        _this.startMove = function () {
            var _this$props = _this.props,
                _this$props$fps = _this$props.fps,
                fps = _this$props$fps === undefined ? 40 : _this$props$fps,
                loop = _this$props.loop;

            var SPPED = 1 / fps * 1000;
            var width = _this.width,
                twidth = _this.twidth,
                props = _this.props;

            Animated.timing(_this.state.left, {
                toValue: -twidth + width,
                duration: twidth * SPPED,
                easing: Easing.linear,
                delay: props.leading
            }).start(function () {
                if (loop) {
                    _this.moveToHeader();
                }
            });
        };
        _this.moveToHeader = function () {
            Animated.timing(_this.state.left, {
                toValue: 0,
                duration: 0,
                delay: _this.props.trailing
            }).start(function () {
                _this.startMove();
            });
        };
        _this.texts = {};
        _this.state = {
            left: new Animated.Value(0)
        };
        return _this;
    }

    _createClass(Marquee, [{
        key: 'tryStart',
        value: function tryStart() {
            if (this.twidth > this.width && this.width) {
                this.startMove();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                text = _props.text,
                maxWidth = _props.maxWidth;

            var textChildren = React.createElement(
                Text,
                { onLayout: this.onLayout, numberOfLines: 1, ellipsizeMode: 'tail', style: style },
                text
            );
            return React.createElement(
                View,
                { style: { flex: 1, flexDirection: 'row', alignItems: 'center' }, onLayout: this.onLayoutContainer },
                React.createElement(
                    Animated.View,
                    { style: { flexDirection: 'row', left: this.state.left, width: maxWidth } },
                    textChildren
                )
            );
        }
    }]);

    return Marquee;
}(React.PureComponent);

Marquee.defaultProps = {
    text: '',
    loop: false,
    leading: 500,
    trailing: 800,
    fps: 40,
    maxWidth: 1000
};
export default Marquee;