'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = a;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rnTopview = require('rn-topview');

var _rnTopview2 = _interopRequireDefault(_rnTopview);

var _OperationContainer = require('./OperationContainer.native');

var _OperationContainer2 = _interopRequireDefault(_OperationContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function a() {
    var actions = (arguments.length <= 0 ? undefined : arguments[0]) || [{ text: '确定' }];
    var onAnimationEnd = function onAnimationEnd(visible) {
        if (!visible) {
            _rnTopview2['default'].remove();
        }
    };
    _rnTopview2['default'].set(_react2['default'].createElement(_OperationContainer2['default'], { actions: actions, onAnimationEnd: onAnimationEnd }));
}
module.exports = exports['default'];