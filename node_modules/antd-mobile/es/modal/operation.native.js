import React from 'react';
import topView from 'rn-topview';
import OperationContainer from './OperationContainer.native';
export default function a() {
    var actions = (arguments.length <= 0 ? undefined : arguments[0]) || [{ text: '确定' }];
    var onAnimationEnd = function onAnimationEnd(visible) {
        if (!visible) {
            topView.remove();
        }
    };
    topView.set(React.createElement(OperationContainer, { actions: actions, onAnimationEnd: onAnimationEnd }));
}