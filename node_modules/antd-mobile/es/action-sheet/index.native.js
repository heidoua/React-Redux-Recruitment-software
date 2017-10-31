import React from 'react';
import { Share, Platform, ActionSheetIOS } from 'react-native';
import topView from 'rn-topview';
import ActionSheetAndroidContainer from './AndroidContainer.native';
var instance = void 0;
var saveInstance = function saveInstance(i) {
    instance = i;
};
var onAnimationEnd = function onAnimationEnd(visible) {
    if (!visible) {
        topView.remove();
    }
};
export default {
    showActionSheetWithOptions: function showActionSheetWithOptions(config, callback) {
        if (Platform.OS === 'ios') {
            ActionSheetIOS.showActionSheetWithOptions(config, callback);
        } else {
            topView.set(React.createElement(ActionSheetAndroidContainer, { visible: true, ref: saveInstance, onAnimationEnd: onAnimationEnd, config: config, callback: callback }));
        }
    },
    showShareActionSheetWithOptions: function showShareActionSheetWithOptions(config, failureCallback, successCallback) {
        var content = {};
        var options = {};
        content.message = config.message;
        if (config.title) {
            content.title = config.title;
            options.dialogTitle = config.title;
        }
        if (config.url) {
            content.url = config.url;
        }
        if (config.excludedActivityTypes) {
            options.excludedActivityTypes = config.excludedActivityTypes;
        }
        if (config.tintColor) {
            options.tintColor = config.tintColor;
        }
        // promise is not called in Android
        // https://github.com/facebook/react-native/blob/master/Libraries/Share/Share.js#L80
        Share.share(content, options).then(function (result) {
            if (result.action === Share.sharedAction) {
                if (successCallback) {
                    successCallback(true, result.activityType);
                }
            } else if (result.action === Share.dismissedAction) {
                if (successCallback) {
                    successCallback(false);
                }
            }
        })['catch'](function (error) {
            if (failureCallback) {
                failureCallback(error);
            }
        });
    },
    close: function close() {
        if (instance) {
            instance.close();
        }
    }
};