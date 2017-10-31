import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import RPullToRefresh from 'rmc-pull-to-refresh';
import Icon from '../icon';

var PullToRefresh = function (_React$Component) {
    _inherits(PullToRefresh, _React$Component);

    function PullToRefresh() {
        _classCallCheck(this, PullToRefresh);

        return _possibleConstructorReturn(this, (PullToRefresh.__proto__ || Object.getPrototypeOf(PullToRefresh)).apply(this, arguments));
    }

    _createClass(PullToRefresh, [{
        key: 'render',
        value: function render() {
            var ind = _extends({ activate: '松开立即刷新', deactivate: '下拉可以刷新', release: React.createElement(Icon, { type: 'loading' }), finish: '完成刷新' }, this.props.indicator);
            return React.createElement(RPullToRefresh, _extends({}, this.props, { indicator: ind }));
        }
    }]);

    return PullToRefresh;
}(React.Component);

export default PullToRefresh;

PullToRefresh.defaultProps = {
    prefixCls: 'am-pull-to-refresh'
};