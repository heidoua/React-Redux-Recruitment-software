import React from 'react';
import topView from 'rn-topview';
import ToastContainer from './ToastContainer.native';
function notice(content, type) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    var onClose = arguments[3];
    var mask = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    topView.remove();
    function animationEnd() {
        topView.remove();
    }
    topView.set(React.createElement(ToastContainer, { content: content, duration: duration, onClose: onClose, type: type, mask: mask, onAnimationEnd: animationEnd }));
}
export default {
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
        topView.remove();
    }
};