'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = a;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rnTopview = require('rn-topview');

var _rnTopview2 = _interopRequireDefault(_rnTopview);

var _AlertContainer = require('./AlertContainer.native');

var _AlertContainer2 = _interopRequireDefault(_AlertContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function a(title, content) {
    var actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [{ text: '确定' }];

    var onAnimationEnd = function onAnimationEnd(visible) {
        if (!visible) {
            _rnTopview2['default'].remove();
        }
    };
    _rnTopview2['default'].set(_react2['default'].createElement(_AlertContainer2['default'], { title: title, content: content, actions: actions, onAnimationEnd: onAnimationEnd }));
}
module.exports = exports['default'];