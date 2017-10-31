'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rnTopview = require('rn-topview');

var _rnTopview2 = _interopRequireDefault(_rnTopview);

var _ToastContainer = require('./ToastContainer.native');

var _ToastContainer2 = _interopRequireDefault(_ToastContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function notice(content, type) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    var onClose = arguments[3];
    var mask = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    _rnTopview2['default'].remove();
    function animationEnd() {
        _rnTopview2['default'].remove();
    }
    _rnTopview2['default'].set(_react2['default'].createElement(_ToastContainer2['default'], { content: content, duration: duration, onClose: onClose, type: type, mask: mask, onAnimationEnd: animationEnd }));
}
exports['default'] = {
    SHORT: 3,
    LONG: 8,
    show: function show(content, duration, mask) {
        return notice(content, 'info', duration, function () {}, mask);
    },
    info: function info(content, duration, onClose, mask) {
        return notice(content, 'info', duration, onClose, mask);
    },
    success: function success(content, duration, onClose, mask) {
        return notice(content, 'success', duration, onClose, mask);
    },
    fail: function fail(content, duration, onClose, mask) {
        return notice(content, 'fail', duration, onClose, mask);
    },
    offline: function offline(content, duration, onClose, mask) {
        return notice(content, 'offline', duration, onClose, mask);
    },
    loading: function loading(content, duration, onClose, mask) {
        return notice(content, 'loading', duration, onClose, mask);
    },
    hide: function hide() {
        _rnTopview2['default'].remove();
    }
};
module.exports = exports['default'];