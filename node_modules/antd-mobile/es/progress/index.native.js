import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, Animated, Dimensions, StyleSheet } from 'react-native';
import ProgressStyle from './style/index.native';
var ProgressStyles = StyleSheet.create(ProgressStyle);

var Progress = function (_React$Component) {
    _inherits(Progress, _React$Component);

    function Progress(props) {
        _classCallCheck(this, Progress);

        var _this = _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, props));

        _this.onLayout = function (e) {
            _this.setState({
                wrapWidth: e.nativeEvent.layout.width
            });
        };
        _this.normalPercent = function (percent) {
            var widthPercent = 0;
            if (percent > 0) {
                widthPercent = percent > 100 ? 100 : percent;
            }
            return widthPercent;
        };
        _this.getWidth = function () {
            var percent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.percent;

            return _this.state.wrapWidth * (_this.normalPercent(percent) / 100);
        };
        _this.state = {
            wrapWidth: props.wrapWidth || Dimensions.get('window').width,
            percentage: new Animated.Value(0)
        };
        return _this;
    }

    _createClass(Progress, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.wrapWidth !== this.props.wrapWidth) {
                this.setState({ wrapWidth: nextProps.wrapWidth });
            }
            if (this.props.appearTransition && nextProps.percent !== this.props.percent) {
                this.setState({ percentage: new Animated.Value(this.getWidth(nextProps.percent)) });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.appearTransition) {
                this.state.percentage.setValue(0);
                Animated.timing(this.state.percentage, {
                    toValue: this.getWidth(),
                    duration: 1000
                }).start();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                position = _props.position,
                unfilled = _props.unfilled,
                style = _props.style,
                styles = _props.styles,
                barStyle = _props.barStyle;

            var percentStyle = {
                width: this.getWidth(),
                height: 0
            };
            var child = React.createElement(View, { style: [styles.progressBar, percentStyle, barStyle] });
            if (this.props.appearTransition) {
                percentStyle.width = this.state.percentage;
                child = React.createElement(Animated.View, { style: [styles.progressBar, percentStyle, barStyle] });
            }
            var outerStyle = [styles.progressOuter, position === 'fixed' ? { position: 'absolute', top: 0 } : null, !unfilled ? { backgroundColor: 'transparent' } : null, style];
            return React.createElement(
                View,
                { onLayout: this.onLayout, style: outerStyle },
                child
            );
        }
    }]);

    return Progress;
}(React.Component);

export default Progress;

Progress.defaultProps = {
    percent: 0,
    position: 'normal',
    unfilled: true,
    appearTransition: false,
    styles: ProgressStyles
};