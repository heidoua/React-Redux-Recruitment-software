"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = closest;
function closest(el, selector) {
    var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        } else {
            el = el.parentElement;
        }
    }
    return null;
}
module.exports = exports["default"];