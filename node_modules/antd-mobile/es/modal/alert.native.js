import React from 'react';
import topView from 'rn-topview';
import AlertContainer from './AlertContainer.native';
export default function a(title, content) {
    var actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [{ text: '确定' }];

    var onAnimationEnd = function onAnimationEnd(visible) {
        if (!visible) {
            topView.remove();
        }
    };
    topView.set(React.createElement(AlertContainer, { title: title, content: content, actions: actions, onAnimationEnd: onAnimationEnd }));
}