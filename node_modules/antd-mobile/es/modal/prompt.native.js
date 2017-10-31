import React from 'react';
import topView from 'rn-topview';
import PromptContainer from './PromptContainer.native';
export default function prompt(title, message, callbackOrActions) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'default';
    var defaultValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var placeholders = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : ['', ''];

    if (!callbackOrActions) {
        console.error('Must specify callbackOrActions');
        return;
    }
    var onAnimationEnd = function onAnimationEnd(visible) {
        if (!visible) {
            topView.remove();
        }
    };
    topView.set(React.createElement(PromptContainer, { title: title, message: message, actions: callbackOrActions, type: type, defaultValue: defaultValue, onAnimationEnd: onAnimationEnd, placeholders: placeholders }));
}