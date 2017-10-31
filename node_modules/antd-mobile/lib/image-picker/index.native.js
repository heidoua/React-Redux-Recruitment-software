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

var _ImageRoll = require('./ImageRoll.native');

var _ImageRoll2 = _interopRequireDefault(_ImageRoll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* tslint:disable:jsx-no-multiline-js */
var imagePickerStyles = _reactNative.StyleSheet.create(_index2['default']);

var ImagePicker = function (_React$Component) {
    (0, _inherits3['default'])(ImagePicker, _React$Component);

    function ImagePicker(props) {
        (0, _classCallCheck3['default'])(this, ImagePicker);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (ImagePicker.__proto__ || Object.getPrototypeOf(ImagePicker)).call(this, props));

        _this.onPressIn = function () {
            var styles = _this.props.styles;
            _this.plusWrap.setNativeProps({
                style: [styles.item, styles.size, styles.plusWrapHighlight]
            });
        };
        _this.onPressOut = function () {
            var styles = _this.props.styles;
            _this.plusWrap.setNativeProps({
                style: [styles.item, styles.size, styles.plusWrapNormal]
            });
        };
        _this.showPicker = function () {
            if (_this.props.onAddImageClick) {
                _this.props.onAddImageClick();
                return;
            }
            _this.setState({
                visible: true
            });
        };
        _this.hideImageRoll = function () {
            _this.setState({
                visible: false
            });
            if (_this.props.onFail) {
                _this.props.onFail('cancel image selection');
            }
        };
        _this.state = {
            visible: false
        };
        return _this;
    }

    (0, _createClass3['default'])(ImagePicker, [{
        key: 'addImage',
        value: function addImage(imageObj) {
            if (!imageObj.url) {
                imageObj.url = imageObj.uri;
                delete imageObj.uri;
            }
            var _props$files = this.props.files,
                files = _props$files === undefined ? [] : _props$files;

            var newImages = files.concat(imageObj);
            if (this.props.onChange) {
                this.props.onChange(newImages, 'add');
            }
        }
    }, {
        key: 'removeImage',
        value: function removeImage(idx) {
            var newImages = [];
            var _props$files2 = this.props.files,
                files = _props$files2 === undefined ? [] : _props$files2;

            files.forEach(function (image, index) {
                if (index !== idx) {
                    newImages.push(image);
                }
            });
            if (this.props.onChange) {
                this.props.onChange(newImages, 'remove', idx);
            }
        }
    }, {
        key: 'onImageClick',
        value: function onImageClick(index) {
            if (this.props.onImageClick) {
                this.props.onImageClick(index, this.props.files);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                _props$files3 = _props.files,
                files = _props$files3 === undefined ? [] : _props$files3,
                selectable = _props.selectable;

            var styles = this.props.styles;
            var filesView = files.map(function (item, index) {
                return _react2['default'].createElement(
                    _reactNative.View,
                    { key: index, style: [styles.item, styles.size] },
                    _react2['default'].createElement(
                        _reactNative.TouchableOpacity,
                        { onPress: function onPress() {
                                return _this2.onImageClick(index);
                            }, activeOpacity: 0.6 },
                        _react2['default'].createElement(_reactNative.Image, { source: { uri: item.url }, style: [styles.size, styles.image] })
                    ),
                    _react2['default'].createElement(
                        _reactNative.TouchableOpacity,
                        { onPress: function onPress() {
                                return _this2.removeImage(index);
                            }, style: styles.closeWrap, activeOpacity: 0.6 },
                        _react2['default'].createElement(
                            _reactNative.Text,
                            { style: styles.closeText },
                            '\xD7'
                        )
                    )
                );
            });
            var imageRollEl = _react2['default'].createElement(_ImageRoll2['default'], { onCancel: this.hideImageRoll, onSelected: function onSelected(imgObj) {
                    return _this2.addImage(imgObj);
                } });
            return _react2['default'].createElement(
                _reactNative.View,
                { style: styles.container },
                filesView,
                selectable && _react2['default'].createElement(
                    _reactNative.TouchableWithoutFeedback,
                    { onPress: this.showPicker, onPressIn: this.onPressIn, onPressOut: this.onPressOut },
                    _react2['default'].createElement(
                        _reactNative.View,
                        { ref: function ref(conponent) {
                                return _this2.plusWrap = conponent;
                            }, style: [styles.item, styles.size, styles.plusWrap, styles.plusWrapNormal] },
                        _react2['default'].createElement(
                            _reactNative.Text,
                            { style: [styles.plusText] },
                            '+'
                        )
                    )
                ),
                this.state.visible ? imageRollEl : null
            );
        }
    }]);
    return ImagePicker;
}(_react2['default'].Component);

exports['default'] = ImagePicker;

ImagePicker.defaultProps = {
    styles: imagePickerStyles,
    onChange: function onChange() {},
    onFail: function onFail() {},

    files: [],
    selectable: true
};
module.exports = exports['default'];