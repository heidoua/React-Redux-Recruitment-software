import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { View, Text, ScrollView, Platform, StyleSheet } from 'react-native';
import CarouselStyle from './style';
var CarouselStyles = StyleSheet.create(CarouselStyle);
var defaultPagination = function defaultPagination(props) {
    var styles = props.styles,
        current = props.current,
        vertical = props.vertical,
        count = props.count,
        dotStyle = props.dotStyle,
        dotActiveStyle = props.dotActiveStyle;

    var positionStyle = vertical ? 'paginationY' : 'paginationX';
    var flexDirection = vertical ? 'column' : 'row';
    var arr = [];
    for (var i = 0; i < count; i++) {
        arr.push(React.createElement(View, { key: 'dot-' + i, style: [styles.pointStyle, styles.spaceStyle, dotStyle, i === current && styles.pointActiveStyle, i === current && dotActiveStyle] }));
    }
    return React.createElement(
        View,
        { style: [styles.pagination, styles[positionStyle]] },
        React.createElement(
            View,
            { style: { flexDirection: flexDirection } },
            arr
        )
    );
};

var Carousel = function (_React$Component) {
    _inherits(Carousel, _React$Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _this.loopJump = function () {
            // iOS 通过 contentOffet 可以平滑过度，不需要做处理
            if (_this.state.loopJump && Platform.OS === 'android') {
                var _index = _this.state.selectedIndex + (_this.props.infinite ? 1 : 0);
                setTimeout(function () {
                    var x = _this.state.width * _index;
                    _this.scrollviewRef.scrollTo({ x: x, y: 0 }, false);
                }, 10);
            }
        };
        _this.autoplay = function () {
            var _this$props = _this.props,
                children = _this$props.children,
                autoplay = _this$props.autoplay,
                infinite = _this$props.infinite,
                autoplayInterval = _this$props.autoplayInterval;
            var _this$state = _this.state,
                isScrolling = _this$state.isScrolling,
                autoplayEnd = _this$state.autoplayEnd,
                selectedIndex = _this$state.selectedIndex;

            var count = children ? children.length || 1 : 0;
            if (!Array.isArray(children) || !autoplay || isScrolling || autoplayEnd) {
                return;
            }
            clearTimeout(_this.autoplayTimer);
            _this.autoplayTimer = setTimeout(function () {
                if (!infinite && selectedIndex === count - 1) {
                    // !infinite && last one, autoplay end
                    return _this.setState({ autoplayEnd: true });
                }
                _this.scrollNextPage();
            }, autoplayInterval);
        };
        _this.onScrollBegin = function (e) {
            _this.setState({
                isScrolling: true
            }, function () {
                if (_this.props.onScrollBeginDrag) {
                    _this.props.onScrollBeginDrag(e, _this.state, _this);
                }
            });
        };
        _this.onScrollEnd = function (e) {
            _this.setState({ isScrolling: false });
            // android incompatible
            if (!e.nativeEvent.contentOffset) {
                var position = e.nativeEvent.position;
                e.nativeEvent.contentOffset = {
                    x: position * _this.state.width
                };
            }
            _this.updateIndex(e.nativeEvent.contentOffset);
            _this.scrollEndTimter = setTimeout(function () {
                _this.autoplay();
                _this.loopJump();
                if (_this.props.onMomentumScrollEnd) {
                    _this.props.onMomentumScrollEnd(e, _this.state, _this);
                }
            });
        };
        _this.onScrollEndDrag = function (e) {
            var _this$state2 = _this.state,
                offset = _this$state2.offset,
                selectedIndex = _this$state2.selectedIndex;

            var previousOffset = offset.x;
            var newOffset = e.nativeEvent.x;
            var count = _this.props.children ? _this.props.children.length || 1 : 0;
            if (previousOffset === newOffset && (selectedIndex === 0 || selectedIndex === count - 1)) {
                _this.setState({
                    isScrolling: false
                });
            }
        };
        _this.updateIndex = function (offset) {
            var state = _this.state;
            var selectedIndex = state.selectedIndex;
            var diff = offset.x - state.offset.x;
            var step = state.width;
            var loopJump = false;
            var count = _this.props.children ? _this.props.children.length || 1 : 0;
            // Do nothing if offset no change.
            if (!diff) {
                return;
            }
            selectedIndex = parseInt(selectedIndex + Math.round(diff / step), 10);
            if (_this.props.infinite) {
                if (selectedIndex <= -1) {
                    selectedIndex = count - 1;
                    offset.x = step * count;
                    loopJump = true;
                } else if (selectedIndex >= count) {
                    selectedIndex = 0;
                    offset.x = step;
                    loopJump = true;
                }
            }
            _this.setState({
                selectedIndex: selectedIndex,
                offset: offset,
                loopJump: loopJump
            });
            var afterChange = _this.props.afterChange;

            if (afterChange) {
                afterChange(selectedIndex);
            }
        };
        _this.scrollNextPage = function () {
            var _this$props2 = _this.props,
                children = _this$props2.children,
                infinite = _this$props2.infinite;

            var count = children ? children.length || 1 : 0;
            if (_this.state.isScrolling || count < 2) {
                return;
            }
            var state = _this.state;
            var diff = (infinite ? 1 : 0) + _this.state.selectedIndex + 1;
            var x = diff * state.width;
            var y = 0;
            _this.scrollviewRef.scrollTo({ x: x, y: y });
            _this.setState({
                isScrolling: true,
                autoplayEnd: false
            });
            // trigger onScrollEnd manually in android
            if (Platform.OS === 'android') {
                _this.androidScrollEndTimer = setTimeout(function () {
                    _this.onScrollEnd({
                        nativeEvent: {
                            position: diff
                        }
                    });
                }, 0);
            }
        };
        _this.renderContent = function (pages) {
            var others = {
                onScrollBeginDrag: _this.onScrollBegin,
                onMomentumScrollEnd: _this.onScrollEnd,
                onScrollEndDrag: _this.onScrollEndDrag
            };
            return React.createElement(
                ScrollView,
                _extends({ ref: function ref(el) {
                        return _this.scrollviewRef = el;
                    } }, _this.props, { horizontal: true, pagingEnabled: true, bounces: !!_this.props.bounces, scrollEventThrottle: 100, removeClippedSubviews: false, automaticallyAdjustContentInsets: false, directionalLockEnabled: true, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, contentContainerStyle: _this.props.style, contentOffset: _this.state.offset }, others),
                pages
            );
        };
        _this.renderDots = function (index) {
            var _this$props3 = _this.props,
                children = _this$props3.children,
                vertical = _this$props3.vertical,
                styles = _this$props3.styles,
                pagination = _this$props3.pagination,
                dotStyle = _this$props3.dotStyle,
                dotActiveStyle = _this$props3.dotActiveStyle;

            var count = children ? children.length || 1 : 0;
            return pagination ? pagination({
                styles: styles,
                vertical: vertical,
                current: index,
                count: count,
                dotStyle: dotStyle,
                dotActiveStyle: dotActiveStyle
            }) : null;
        };
        _this.onLayout = function (e) {
            // for horizontal, get width, scollTo
            var props = _this.props;
            var count = props.children ? props.children.length || 1 : 0;
            var selectedIndex = count > 1 ? Math.min(props.selectedIndex, count - 1) : 0;
            var width = e.nativeEvent.layout.width;
            var offsetX = width * (selectedIndex + (props.infinite ? 1 : 0));
            _this.setState({
                width: width,
                offset: { x: offsetX, y: 0 }
            }, function () {
                if (Platform.OS === 'android') {
                    _this.scrollviewRef.scrollTo({ y: 0, x: offsetX }, false);
                }
            });
        };
        var _this$props4 = _this.props,
            children = _this$props4.children,
            selectedIndex = _this$props4.selectedIndex;

        var count = children ? children.length || 1 : 0;
        var index = count > 1 ? Math.min(selectedIndex, count - 1) : 0;
        _this.state = {
            width: 0,
            isScrolling: false,
            autoplayEnd: false,
            loopJump: false,
            selectedIndex: index,
            offset: { x: 0, y: 0 }
        };
        return _this;
    }

    _createClass(Carousel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.autoplay();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.autoplayTimer);
            clearTimeout(this.androidScrollEndTimer);
            clearTimeout(this.scrollEndTimter);
        }
    }, {
        key: 'render',
        value: function render() {
            var state = this.state;
            var _props = this.props,
                dots = _props.dots,
                infinite = _props.infinite,
                children = _props.children;

            var pages = [];
            if (!children) {
                return React.createElement(
                    Text,
                    { style: { backgroundColor: 'white' } },
                    'You are supposed to add children inside Carousel'
                );
            }
            var pageStyle = { width: state.width };
            var count = children ? children.length || 1 : 0;
            // For make infinite at least count > 1
            if (count > 1) {
                pages = Object.keys(children);
                if (infinite) {
                    pages.unshift(count - 1 + '');
                    pages.push('0');
                }
                pages = pages.map(function (page, i) {
                    return React.createElement(
                        View,
                        { style: pageStyle, key: i },
                        children[page]
                    );
                });
            } else {
                pages = React.createElement(
                    View,
                    { style: pageStyle },
                    children
                );
            }
            return React.createElement(
                View,
                { onLayout: this.onLayout },
                this.renderContent(pages),
                dots && this.renderDots(this.state.selectedIndex)
            );
        }
    }]);

    return Carousel;
}(React.Component);

Carousel.defaultProps = {
    bounces: true,
    infinite: false,
    dots: true,
    autoplay: false,
    autoplayInterval: 3000,
    selectedIndex: 0,
    // vertical 目前只实现 pagination，内容 vertical 由于自动高度拿不到，暂时无法实现
    vertical: false,
    styles: CarouselStyles,
    pagination: defaultPagination,
    dotStyle: {},
    dotActiveStyle: {}
};
export default Carousel;