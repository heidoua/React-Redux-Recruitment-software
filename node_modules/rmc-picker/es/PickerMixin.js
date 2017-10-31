import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:no-console */
import React from 'react';
var Item = function Item(_props) {
    return null;
};
export default function (ComposedComponent) {
    return _a = function (_React$Component) {
        _inherits(_a, _React$Component);

        function _a() {
            _classCallCheck(this, _a);

            var _this = _possibleConstructorReturn(this, (_a.__proto__ || Object.getPrototypeOf(_a)).apply(this, arguments));

            _this.select = function (value, itemHeight, scrollTo) {
                var children = React.Children.toArray(_this.props.children);
                for (var i = 0, len = children.length; i < len; i++) {
                    if (children[i].props.value === value) {
                        _this.selectByIndex(i, itemHeight, scrollTo);
                        return;
                    }
                }
                _this.selectByIndex(0, itemHeight, scrollTo);
            };
            _this.doScrollingComplete = function (top, itemHeight, fireValueChange) {
                var children = React.Children.toArray(_this.props.children);
                var index = _this.coumputeChildIndex(top, itemHeight, children.length);
                var child = children[index];
                if (child) {
                    fireValueChange(child.props.value);
                } else if (console.warn) {
                    console.warn('child not found', children, index);
                }
            };
            return _this;
        }

        _createClass(_a, [{
            key: 'selectByIndex',
            value: function selectByIndex(index, itemHeight, zscrollTo) {
                if (index < 0 || index >= React.Children.count(this.props.children) || !itemHeight) {
                    return;
                }
                zscrollTo(index * itemHeight);
            }
        }, {
            key: 'coumputeChildIndex',
            value: function coumputeChildIndex(top, itemHeight, childrenLength) {
                var index = top / itemHeight;
                var floor = Math.floor(index);
                if (index - floor > 0.5) {
                    index = floor + 1;
                } else {
                    index = floor;
                }
                return Math.min(index, childrenLength - 1);
            }
        }, {
            key: 'render',
            value: function render() {
                return React.createElement(ComposedComponent, _extends({}, this.props, { doScrollingComplete: this.doScrollingComplete, coumputeChildIndex: this.coumputeChildIndex, select: this.select }));
            }
        }]);

        return _a;
    }(React.Component), _a.Item = Item, _a;
    var _a;
}