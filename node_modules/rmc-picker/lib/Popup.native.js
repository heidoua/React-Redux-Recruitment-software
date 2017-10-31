'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _PopupMixin = require('./PopupMixin');

var _PopupMixin2 = _interopRequireDefault(_PopupMixin);

var _Modal = require('rmc-dialog/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var getModal = function getModal(props, visible, _ref) {
    var getContent = _ref.getContent,
        hide = _ref.hide,
        onDismiss = _ref.onDismiss,
        onOk = _ref.onOk;
    var styles = props.styles,
        title = props.title,
        okText = props.okText,
        dismissText = props.dismissText;

    var titleEl = typeof title === 'string' ? _react2['default'].createElement(
        _reactNative.Text,
        { style: [styles.title] },
        title
    ) : title;
    var okEl = typeof okText === 'string' ? _react2['default'].createElement(
        _reactNative.Text,
        { style: [styles.actionText, styles.okText] },
        okText
    ) : okText;
    var dismissEl = typeof dismissText === 'string' ? _react2['default'].createElement(
        _reactNative.Text,
        { style: [styles.actionText, styles.dismissText] },
        dismissText
    ) : dismissText;
    return _react2['default'].createElement(
        _Modal2['default'],
        { animationType: 'slide-up', wrapStyle: styles.modal, visible: visible, onClose: hide },
        _react2['default'].createElement(
            _reactNative.View,
            { style: [styles.header] },
            _react2['default'].createElement(
                _reactNative.TouchableHighlight,
                { onPress: onDismiss, style: [styles.headerItem], activeOpacity: props.actionTextActiveOpacity, underlayColor: props.actionTextUnderlayColor },
                dismissEl
            ),
            _react2['default'].createElement(
                _reactNative.View,
                { style: [styles.headerItem] },
                titleEl
            ),
            _react2['default'].createElement(
                _reactNative.TouchableHighlight,
                { onPress: onOk, style: [styles.headerItem], activeOpacity: props.actionTextActiveOpacity, underlayColor: props.actionTextUnderlayColor },
                okEl
            )
        ),
        getContent()
    );
};
exports['default'] = (0, _PopupMixin2['default'])(getModal, {
    actionTextUnderlayColor: '#ddd',
    actionTextActiveOpacity: 1,
    triggerType: 'onPress',
    styles: {},
    WrapComponent: _reactNative.View
});
module.exports = exports['default'];