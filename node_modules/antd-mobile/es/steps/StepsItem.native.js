import _typeof from 'babel-runtime/helpers/typeof';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable: jsx-no-multiline-js */
import React from 'react';
import { View, Text, Image } from 'react-native';

var StepsItem = function (_React$Component) {
    _inherits(StepsItem, _React$Component);

    function StepsItem() {
        _classCallCheck(this, StepsItem);

        return _possibleConstructorReturn(this, (StepsItem.__proto__ || Object.getPrototypeOf(StepsItem)).apply(this, arguments));
    }

    _createClass(StepsItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                size = _props.size,
                last = _props.last,
                title = _props.title,
                description = _props.description,
                status = _props.status,
                icon = _props.icon,
                styles = _props.styles;

            var index = this.props.index;
            var current = this.props.current;
            var errorTail = this.props.errorTail;
            var headCls = '';
            var tailTopCls = '';
            var tailBottomCls = '';
            var sizeCls = size === 'small' ? '_s' : '_l';
            if (index < current || status === 'finish') {
                headCls = 'head_blue' + sizeCls;
                tailTopCls = 'tail_blue';
                tailBottomCls = 'tail_blue';
            } else if (index === current || status === 'process') {
                headCls = 'head_blue' + sizeCls;
                tailTopCls = 'tail_blue';
                tailBottomCls = 'tail_gray';
            } else if (index > current || status === 'wait') {
                headCls = 'head_gray' + sizeCls;
                tailTopCls = 'tail_gray';
                tailBottomCls = 'tail_gray';
            } else if (status === 'error') {
                headCls = 'head_red' + sizeCls;
                tailTopCls = 'tail_gray';
                tailBottomCls = 'tail_gray';
            }
            if (last) {
                tailTopCls = 'tail_last';
                tailBottomCls = 'tail_last';
            }
            if (errorTail > -1) {
                tailBottomCls = 'tail_error';
            }
            var iconSource = void 0;
            if (size === 'small') {
                if (index < current || status === 'finish' || index === current || status === 'process') {
                    iconSource = require('../style/images/check.png');
                } else if (index > current || status === 'wait') {
                    iconSource = require('../style/images/more.png');
                } else if (status === 'error') {
                    iconSource = require('../style/images/cross.png');
                }
            } else {
                if (index < current || status === 'finish' || index === current || status === 'process') {
                    iconSource = require('../style/images/check_w.png');
                } else if (index > current || status === 'wait') {
                    iconSource = require('../style/images/more_w.png');
                    if (!!icon) {
                        iconSource = icon;
                    }
                } else if (status === 'error') {
                    iconSource = require('../style/images/cross_w.png');
                }
            }
            return React.createElement(
                View,
                { style: { flexDirection: 'row' } },
                React.createElement(
                    View,
                    { style: { flexDirection: 'column' } },
                    React.createElement(
                        View,
                        { style: [styles['head_default' + sizeCls], styles[headCls]] },
                        React.isValidElement(iconSource) ? iconSource : React.createElement(Image, { source: iconSource, style: styles['icon' + sizeCls] })
                    ),
                    React.createElement(View, { style: [styles['tail_default' + sizeCls], styles[tailTopCls]] }),
                    React.createElement(View, { style: [styles['tail_default' + sizeCls], styles[tailBottomCls]] })
                ),
                React.createElement(
                    View,
                    { style: styles['content' + sizeCls] },
                    (typeof title === 'undefined' ? 'undefined' : _typeof(title)) !== 'object' ? React.createElement(
                        Text,
                        { style: [styles['title' + sizeCls]] },
                        title
                    ) : React.createElement(
                        View,
                        null,
                        title
                    ),
                    (typeof description === 'undefined' ? 'undefined' : _typeof(description)) !== 'object' ? React.createElement(
                        Text,
                        { style: [styles['description' + sizeCls]] },
                        description
                    ) : React.createElement(
                        View,
                        null,
                        description
                    )
                )
            );
        }
    }]);

    return StepsItem;
}(React.Component);

export default StepsItem;