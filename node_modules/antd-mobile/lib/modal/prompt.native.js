'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = prompt;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rnTopview = require('rn-topview');

var _rnTopview2 = _interopRequireDefault(_rnTopview);

var _PromptContainer = require('./PromptContainer.native');

var _PromptContainer2 = _interopRequireDefault(_PromptContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function prompt(title, message, callbackOrActions) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'default';
    var defaultValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var placeholders = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : ['', ''];

    if (!callbackOrActions) {
        console.error('Must specify callbackOrActions');
        return;
    }
    var onAnimationEnd = function onAnimationEnd(visible) {
        if (!visible) {
            _rnTopview2['default'].remove();
        }
    };
    _rnTopview2['default'].set(_react2['default'].createElement(_PromptContainer2['default'], { title: title, message: message, actions: callbackOrActions, type: type, defaultValue: defaultValue, onAnimationEnd: onAnimationEnd, placeholders: placeholders }));
}
module.exports = exports['default'];