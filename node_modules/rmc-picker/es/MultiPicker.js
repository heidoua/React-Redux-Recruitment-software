import _extends from 'babel-runtime/helpers/extends';
import React from 'react';
import classnames from 'classnames';
import MultiPickerMixin from './MultiPickerMixin';
var MultiPicker = function MultiPicker(props) {
    var prefixCls = props.prefixCls,
        className = props.className,
        rootNativeProps = props.rootNativeProps,
        children = props.children,
        style = props.style;

    var selectedValue = props.getValue();
    var colElements = React.Children.map(children, function (col, i) {
        return React.cloneElement(col, {
            selectedValue: selectedValue[i],
            onValueChange: function onValueChange() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return props.onValueChange.apply(props, [i].concat(args));
            },
            onScrollChange: props.onScrollChange && function () {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                return props.onScrollChange.apply(props, [i].concat(args));
            }
        });
    });
    return React.createElement(
        'div',
        _extends({}, rootNativeProps, { style: style, className: classnames(className, prefixCls) }),
        colElements
    );
};
export default MultiPickerMixin(MultiPicker);